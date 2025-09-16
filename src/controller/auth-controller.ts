import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { createToken } from '../utils/create-token';

// Import các models Objection
import { UserModel } from '../Models/UserModel';
import { RoleModel } from '../Models/RoleModel';
import { UserRoleModel } from '../Models/UserRoleModel';
import { PermissionModel } from '../Models/PermissionModel';
import { otpService } from '../service/otpService';
import jwt from 'jsonwebtoken';
import { Customer } from '../Models/CustomerModel';


// Hàm để chuyển đổi tên quyền từ tiếng Việt có dấu sang dạng không dấu
const removeVietnameseTones = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/\s+/g, '');
};

export const registerHandler = async (req: any, res: any) => {
  console.log('Received data from FE:', req.body);
  try {
    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    // Check email exists in both tables
    const existingCustomer = await Customer.query().findOne({ email });
    const existingAdmin = await UserModel.query().findOne({ email });

    if (existingCustomer || existingAdmin) {
      return res.status(409).json({
        error: existingAdmin && existingCustomer
          ? 'Email này đã tồn tại ở cả tài khoản admin và customer'
          : existingAdmin
            ? 'Email này đã tồn tại'
            : 'Email này đã tồn tại'
      });
    }

    // Insert new user
    const user = await Customer.query().insert({
      email,
      name,
      password: hashedPassword,
    });

    res.status(201).json({
      status: 'success',
      data: {
        user
      },
    });
  } catch (err) {
    console.error('Error during user registration:', err);
    if ((err as any).code === '23505') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Internal server error', details: (err as any).message || err });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  console.log('Received data from FE:', req.body);
  try {
    const { email, password } = req.body;

    // Check in both User and Customer tables
    const adminUser = await UserModel.query().findOne({ email });
    const customerUser = await Customer.query().findOne({ email });

    // If no user found in either table
    if (!adminUser && !customerUser) {
      return res.status(400).json({ error: 'Mật khẩu hoặc tài khoản không chính xác' });
    }

    // Handle Admin login
    if (adminUser) {
      const isValidPassword = await bcrypt.compare(password, adminUser.password);
      if (!isValidPassword) {
        return res.status(400).json({ error: 'Mật khẩu hoặc tài khoản không chính xác' });
      }

      // Get user roles
      const userRoles = await UserRoleModel.query().where({ userId: adminUser.id });
      if (!userRoles.length) {
        return res.status(400).json({ error: 'User role not found' });
      }

      // Get permissions
      const permissions = await PermissionModel.query()
        .join('RolePermission', 'Permission.id', 'RolePermission.permissionId')
        .whereIn('RolePermission.roleId', userRoles.map(ur => ur.roleId))
        .select('Permission.name', 'RolePermission.value');

      const permissionsWithValues = permissions.reduce((acc: any, p: any) => {
        acc[removeVietnameseTones(p.name)] = p.value;
        return acc;
      }, {});

      const tokenPayload = {
        sub: adminUser.id,
        role: 'admin',
        permissions: permissionsWithValues,
        userType: 'admin'
      };

      const token = createToken(tokenPayload);

      res.cookie('token', token, {
        httpOnly: false,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 2147483647,
      });

      return res.json({ status: 'success', token });
    }

    // Handle Customer login
    if (customerUser) {
      const isValidPassword = await bcrypt.compare(password, customerUser.password);
      if (!isValidPassword) {
        return res.status(400).json({ error: 'Mật khẩu hoặc tài khoản không chính xác' });
      }

      const tokenPayload = {
        sub: customerUser.id,
        role: 'customer',
        permissions: {}, // Customers have no special permissions
        userType: 'customer'
      };

      console.log('Token payload:', tokenPayload);

      const token = createToken(tokenPayload);

      res.cookie('token', token, {
        httpOnly: false,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 2147483647,
      });

      return res.json({ status: 'success', token });
    }

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Logout handler
export const logoutHandler = async (req: Request, res: Response) => {
  try {
    res.clearCookie('token');
    res.json({ status: 'success' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const sendOTPController = async (req: Request, res: Response) => {
  console.log("Dữ liệu nhận vào controller:", req.body);

  try {
    const { email } = req.body;

    // Kiểm tra sự tồn tại của email trong database
    const user = await UserModel.query().findOne({ email: email });
    const customer = await Customer.query().findOne({ email: email });
    console.log("user:", user);

    if (user || customer) {
      try {
        const sent = await otpService.sendResetPasswordLink(email);
        if (!sent) {
          // Trả lỗi khi gửi email thất bại
          return res.status(500).json({ error: 'Gửi link đổi mật khẩu thất bại' });
        }
      } catch (error) {
        // Trả lỗi cụ thể từ quá trình gửi email
        return res.status(500).json({ error: 'Lỗi trong quá trình gửi link đổi mật khẩu', details: (error as any).message });
      }
    } else {
      // Trả lỗi khi không tìm thấy email
      return res.status(404).json({ error: 'Không tìm thấy email trong CSDL' });
    }

    // Trả phản hồi thành công
    return res.status(200).json({ message: 'Reset password link sent successfully' });

  } catch (error) {
    // Xử lý lỗi chung và trả lỗi cho server
    console.error('Error sending reset password link:', error);
    return res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xử lý', details: (error as any).message });
  }
};

export const resetPasswordController = async (req: Request, res: Response) => {
  console.log("Dữ liệu nhận vào controller resetPasswordController:", req.body);

  try {
    const { token, newPassword } = req.body;
    const { newPassword: password, confirmNewPassword } = newPassword;

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmNewPassword) {
      return res.status(400).json({ error: 'Mật khẩu không khớp' });
    }

    const secret = process.env.JWT_SECRET || 'c7c5f8d1a7b84e6a6c8b0f95c4b3e9a0f57e9d4a3c8a4b3d7e1f9b2c5d6e4f1';
    const decoded = jwt.verify(token, secret);

    console.log("Decoded token:", decoded);

    if (typeof decoded === 'object' && 'email' in decoded) {
      const email = decoded.email;

      console.log("Email giải mã:", email);

      // Hash mật khẩu
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Mật khẩu đã hash:", hashedPassword);

      // Cập nhật mật khẩu trong cơ sở dữ liệu
      await UserModel.query()
        .where('email', email)
        .patch({ password: hashedPassword });

      await Customer.query()
        .where('email', email)
        .patch({ password: hashedPassword });

      return res.status(200).json({ message: 'Đặt lại mật khẩu thành công' });
    } else {
      return res.status(401).json({ error: 'Token không hợp lệ' });
    }
  } catch (error) {
    console.error('Lỗi trong resetPasswordController:', error);
    return res.status(500).json({ error: 'Đặt lại mật khẩu thất bại' });
  }
};
