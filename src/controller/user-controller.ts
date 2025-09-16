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
import { saveFile } from '../service/uploadService';
import { getDecodedToken } from '../utils/decode-token';
import { Customer } from '../Models/CustomerModel';

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.query();
        res.status(200).json({
            status: 'success',
            data: {
                users,
            },
        }); // Gửi phản hồi JSON về client
    } catch (err: any) {
        console.error('Error during fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const createUserHandler = async (req: Request, res: Response) => {
    console.log('Received data:', req.body);
    try {
        const token = req.cookies.token;
        const decoded = getDecodedToken(token);

        const {
            name, email, password, CCCD, phoneNumber, gender, nationality,
            dateOfBirth, role,
            'addressProvince[id]': addressProvinceId,
            'addressProvince[name]': addressProvinceName,
            'addressDistrict[id]': addressDistrictId,
            'addressDistrict[name]': addressDistrictName,
            'addressWard[id]': addressWardId,
            'addressWard[name]': addressWardName,
            'hometownProvince[id]': hometownProvinceId,
            'hometownProvince[name]': hometownProvinceName,
            'hometownDistrict[id]': hometownDistrictId,
            'hometownDistrict[name]': hometownDistrictName,
            'hometownWard[id]': hometownWardId,
            'hometownWard[name]': hometownWardName
        } = req.body;

        const addressProvince = {
            id: addressProvinceId,
            name: addressProvinceName,
        };
        const addressDistrict = {
            id: addressDistrictId,
            name: addressDistrictName,
        };
        const addressWard = {
            id: addressWardId,
            name: addressWardName,
        };
        const hometownProvince = {
            id: hometownProvinceId,
            name: hometownProvinceName,
        };
        const hometownDistrict = {
            id: hometownDistrictId,
            name: hometownDistrictName,
        };
        const hometownWard = {
            id: hometownWardId,
            name: hometownWardName,
        };

        // Kiểm tra email đã tồn tại chưa
        const existingUser = await UserModel.query().findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email đã tồn tại' });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 12);

        // Xử lý upload ảnh (nếu có)
        let avatarUrl = '';
        if (req.files && req.files.img) {
            const img = req.files.img as any;
            const ID: any = email;
            const action = "User";
            avatarUrl = await saveFile(img, ID, action);
        }

        // Tạo đối tượng newUserData
        const newUserData: any = {
            name,
            email,
            password: hashedPassword,
            CCCD,
            role,
            phoneNumber,
            dateOfBirth,
            gender,
            nationality,
            img: avatarUrl,
            addressProvince,
            addressDistrict,
            addressWard,
            hometownProvince,
            hometownDistrict,
            hometownWard,
        };

        // Bắt đầu transaction
        const trx = await UserModel.startTransaction();
        try {
            // Thêm người dùng mới vào database
            const newUser = await UserModel.query(trx)
                .insert(newUserData)
                .returning('*');

            // Gán role cho user
            const dbRole = await RoleModel.query(trx).findOne({ name: role });
            if (!dbRole) {
                throw new Error(`Role '${role}' not found in the database`);
            }

            await UserRoleModel.query(trx).insert({
                userId: newUser.id,
                roleId: dbRole.id
            });

            await trx.commit();

            res.status(201).json({
                status: 'success',
                data: {
                    user: newUser,
                },
            });
        } catch (error) {
            await trx.rollback();
            res.status(500).json({ message: (error as Error).message });
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        // Lấy token từ cookie
        const token = req.cookies.token;
        if (!token) {
            // Báo lỗi khi không có token (người dùng chưa đăng nhập)
            return res.status(401).json({ message: 'Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.' });
        }
        console.log('Received data:', req.body);
        // Lấy danh sách userIds từ body
        const { ids: userIds } = req.body;
        console.log('User IDs to delete:', userIds);
        if (!Array.isArray(userIds) || userIds.length === 0) {
            return res.status(400).json({ message: 'Danh sách ID người dùng không hợp lệ.' });
        }

        // Bắt đầu transaction
        const trx = await UserModel.startTransaction();

        try {
            // Tìm các user cần xóa
            const usersToDelete = await UserModel.query(trx).findByIds(userIds);

            if (usersToDelete.length !== userIds.length) {
                await trx.rollback();
                return res.status(404).json({ message: 'Không tìm thấy một hoặc nhiều người dùng.' });
            }

            // Xóa dữ liệu từ các bảng liên quan
            await UserRoleModel.query(trx).delete().whereIn('userId', userIds);
            // Thêm các bảng liên quan khác vào đây nếu cần

            // Xóa users từ bảng chính
            const deletedCount = await UserModel.query(trx).delete().whereIn('id', userIds);

            // Commit transaction
            await trx.commit();

            // Trả về kết quả thành công
            res.status(200).json({
                status: 'success',
                message: 'Xóa người dùng và dữ liệu liên quan thành công.',
                data: {
                    deletedCount,
                    deletedUserIds: userIds,
                },
            });
        } catch (error: any) {
            await trx.rollback();
            console.error('Transaction failed:', error);
            res.status(500).json({ message: 'Xóa người dùng thất bại.', error: error.message });
        }
    } catch (err: any) {
        console.error('Error deleting users:', err);
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ.', error: err.message });
    }
};

export const getUserHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        console.log('Received data:', req.body);

        if (!id) {
            return res.status(400).json({ message: 'Không tìm thấy ID người dùng' });
        }

        // Truy vấn người dùng từ DB
        const user = await UserModel.query().findById(id);

        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }

        return res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

export const updateUserHandler = async (req: Request, res: Response) => {
    console.log("Received input for update:", req.body);

    try {
        const {
            id, name, email, CCCD, phoneNumber, gender, nationality,
            dateOfBirth, role,
            'addressProvince[id]': addressProvinceId,
            'addressProvince[name]': addressProvinceName,
            'addressDistrict[id]': addressDistrictId,
            'addressDistrict[name]': addressDistrictName,
            'addressWard[id]': addressWardId,
            'addressWard[name]': addressWardName,
            'hometownProvince[id]': hometownProvinceId,
            'hometownProvince[name]': hometownProvinceName,
            'hometownDistrict[id]': hometownDistrictId,
            'hometownDistrict[name]': hometownDistrictName,
            'hometownWard[id]': hometownWardId,
            'hometownWard[name]': hometownWardName
        } = req.body;

        const addressProvince = {
            id: addressProvinceId,
            name: addressProvinceName,
        };
        const addressDistrict = {
            id: addressDistrictId,
            name: addressDistrictName,
        };
        const addressWard = {
            id: addressWardId,
            name: addressWardName,
        };
        const hometownProvince = {
            id: hometownProvinceId,
            name: hometownProvinceName,
        };
        const hometownDistrict = {
            id: hometownDistrictId,
            name: hometownDistrictName,
        };
        const hometownWard = {
            id: hometownWardId,
            name: hometownWardName,
        };

        // Xử lý upload ảnh (nếu có)
        let avatarUrl = '';
        if (req.files && req.files.img) {
            const img = req.files.img as any;
            const ID: any = email;
            const action = "User";
            avatarUrl = await saveFile(img, ID, action);
        }

        // Kiểm tra người dùng tồn tại
        const existingUser = await UserModel.query().findById(id);
        console.log("existingUser", existingUser);

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updateUserData: any = {
            name,
            email,
            CCCD,
            role,
            phoneNumber,
            dateOfBirth,
            gender,
            nationality,
            img: avatarUrl,
            addressProvince,
            addressDistrict,
            addressWard,
            hometownProvince,
            hometownDistrict,
            hometownWard,
        };

        // Kiểm tra trùng email
        if (email && email !== existingUser.email) {
            const emailExists = await UserModel.query()
                .where('email', email)
                .whereNot('id', id)
                .first();
            if (emailExists) {
                return res.status(400).json({ message: 'Email đã được sử dụng bởi tài khoản khác' });
            }
        }

        // Bắt đầu transaction
        const trx = await UserModel.startTransaction();

        try {
            // Cập nhật thông tin người dùng
            const updatedUser = await UserModel.query(trx)
                .patchAndFetchById(id, updateUserData);

            // Cập nhật vai trò nếu có thay đổi
            if (role && role !== existingUser.role) {
                const dbRole = await RoleModel.query(trx).findOne({ name: role });
                if (!dbRole) {
                    throw new Error(`Vai trò '${role}' không tồn tại trong cơ sở dữ liệu`);
                }

                console.log("dbRole", dbRole);

                await UserRoleModel.query(trx)
                    .patch({ roleId: dbRole.id })
                    .where({ userId: id });

                await UserModel.query(trx)
                    .patchAndFetchById(id, { role });
            }

            await trx.commit();

            return res.status(200).json({
                status: 'success',
                data: { user: updatedUser },
            });
        } catch (error: any) {
            await trx.rollback();
            console.error("Transaction failed:", error);
            return res.status(500).json({ message: 'Lỗi khi cập nhật thông tin người dùng', error: error.message });
        }
    } catch (err: any) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ message: 'Đã xảy ra lỗi', error: err.message });
    }
};

export const getCustomerHandler = async (req: Request, res: Response) => {
    try {
        const customerId = req.params.id;
        console.log('Received data:', req.body);

        if (!customerId) {
            return res.status(400).json({ message: 'Không tìm thấy ID người dùng' });
        }

        // Truy vấn người dùng từ DB
        const user = await Customer.query().findById(customerId);

        if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }

        return res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};