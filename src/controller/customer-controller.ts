import { Customer } from '@/src/Models/CustomerModel';
import { Request, Response } from 'express';

export const updateCustomer = async (req: Request, res: Response) => {
    const { name, phoneNumber, address } = req.body; // Lấy dữ liệu từ req.body
    const { id } = req.params; // Lấy id từ tham số URL

    console.log(req.body.values); // Log đầu vào để kiểm tra dữ liệu

    try {
        // Kiểm tra nếu id hoặc các trường cần thiết không tồn tại
        if (!id) {
            return res.status(400).json({ message: "Thiếu id khách hàng" });
        }

        // Tạo đối tượng cập nhật với các giá trị mới
        const updatedData: any = {
            name: name,
            phoneNumber: phoneNumber,
            address: address,
            updatedAt: new Date().toISOString(), // Cập nhật thời gian sửa đổi
        };

        console.log(updatedData); // Log dữ liệu cập nhật để kiểm tra
        console.log(id); // Log id để kiểm tra

        // Thực hiện cập nhật trong bảng Customer thông qua model
        const updatedCustomer = await Customer.query()
            .findById(id)
            .patch(updatedData);

        if (updatedCustomer === 0) {
            return res.status(404).json({ message: "Khách hàng không tìm thấy" });
        }

        // Trả về kết quả thành công
        return res.status(200).json({ message: "Cập nhật thông tin khách hàng thành công" });
    } catch (error) {
        console.error(error); // Thêm log lỗi để dễ debug
        return res.status(500).json({ message: "Lỗi cập nhật thông tin khách hàng" });
    }
};
