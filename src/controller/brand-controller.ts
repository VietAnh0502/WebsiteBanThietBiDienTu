import { Request, Response } from 'express';
import { saveFile } from '../service/uploadService';
import Brand from '../Models/BrandModel';
import Product from '../Models/ProductModel';

export const createBrand = async (req: any, res: any) => {
    console.log(req.body);
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Chưa đăng nhập" });

        const { brandName, description } = req.body;

        const brand = await Brand.query().findOne({ name: brandName });

        if (brand) return res.status(400).json({ message: "Thể loại đã tồn tại" });

        let avatarUrl = '';
        if (req.files && req.files.image) {
            const img = req.files.image as any;
            const ID: any = brandName;
            const action = "Brand";
            avatarUrl = await saveFile(img, ID, action);
        }

        console.log("avatarUrl", avatarUrl);

        const newData = {
            name: brandName,
            description: description,
            imageUrl: avatarUrl,
            createdAt: new Date().toISOString(),
        }

        console.log(newData);

        const newBrand = await Brand.query().insert(newData);

        return res.status(200).json(newBrand);

    } catch (error) {
        console.log(error);
    }
}

export const getAllBrand = async (req: Request, res: Response) => {
    try {
        const categories = await Brand.query();
        return res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
}

export const get1Brand = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        console.log("id", id);
        const brand = await Brand.query().findById(id);
        return res.status(200).json(brand);
    } catch (error) {
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
}

export const updateBrand = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { id, brandName, description } = req.body;

        console.log("req.files.image", req.files);

        let avatarUrl = '';
        if (req.files && req.files.image) {
            const img = req.files.image as any;
            const ID: any = brandName;
            const action = "Brand";
            avatarUrl = await saveFile(img, ID, action);
        }

        // Chỉ thêm trường `imageUrl` khi có avatarUrl
        const newData: any = {
            name: brandName,
            description: description,
            updatedAt: new Date().toISOString(),
        };

        if (avatarUrl) {
            newData.imageUrl = avatarUrl;
        }

        await Brand.query().findById(id).patch(newData);

        return res.status(200).json({ message: "Cập nhật danh mục thành công" });
    } catch (error) {
        console.error(error); // Thêm log lỗi để dễ debug
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
};

export const deleteBrand = async (req: any, res: any) => {
    try {
        const { ids: brandIds } = req.body;
        console.log(req.body);
        if (!brandIds || brandIds.length === 0) {
            return res.status(400).json({ message: "Danh sách ID không hợp lệ" });
        }

        // Kiểm tra nếu có sản phẩm nào thuộc các Brand trong danh sách
        const relatedProducts = await Product.query()
            .whereIn("brandId", brandIds)
            .select("brandId")
            .distinct();

        if (relatedProducts.length > 0) {
            const relatedBrandIds = relatedProducts.map(Product => Product.brandId);
            return res.status(400).json({
                message: "Không thể xóa Brand vì có sản phẩm liên quan",
                relatedBrandIds, // Gửi lại danh sách các Brand bị ảnh hưởng
            });
        }

        // Nếu không có sản phẩm liên quan, tiến hành xóa
        await Brand.query().delete().whereIn("id", brandIds);

        return res.status(200).json({ message: "Xóa Brand thành công" });
    } catch (error) {
        console.error(error); // Ghi log lỗi để dễ debug
        res.status(500).json({ message: "Lỗi 500 - Xóa Brand thất bại" });
    }
};

