import { Request, Response } from 'express';
import { saveFile } from '../service/uploadService';
import Category from '../Models/CategoryModel';
import ProductCategory from '../Models/ProductCategoryModel';
import Brand from '../Models/BrandModel';
import Product from '../Models/ProductModel';


export const createCategory = async (req: any, res: any) => {
    console.log(req.body);
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Chưa đăng nhập" });

        const { categoryName, description } = req.body;

        const category = await Category.query().findOne({ name: categoryName });

        if (category) return res.status(400).json({ message: "Thể loại đã tồn tại" });


        let avatarUrl = '';
        if (req.files && req.files.image) {
            const img = req.files.image as any;
            const ID: any = categoryName;
            const action = "Category";
            avatarUrl = await saveFile(img, ID, action);
        }

        console.log("avatarUrl", avatarUrl);

        const newData = {
            name: categoryName,
            description: description,
            imageUrl: avatarUrl,
            createdAt: new Date().toISOString(),
        }

        console.log(newData);

        const newCategory = await Category.query().insert(newData);

        return res.status(200).json(newCategory);

    } catch (error) {
        console.log(error);
    }
}

export const getAllCategory = async (req: Request, res: Response) => {
    try {
        const categories = await Category.query();
        return res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
}

export const get1Category = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        console.log("id", id);
        const category = await Category.query().findById(id);
        return res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { id, categoryName, description } = req.body;

        console.log("req.files.image", req.files);

        let avatarUrl = '';
        if (req.files && req.files.image) {
            const img = req.files.image as any;
            const ID: any = categoryName;
            const action = "Category";
            avatarUrl = await saveFile(img, ID, action);
        }

        // Chỉ thêm trường `imageUrl` khi có avatarUrl
        const newData: any = {
            name: categoryName,
            description: description,
            updatedAt: new Date().toISOString(),
        };

        if (avatarUrl) {
            newData.imageUrl = avatarUrl;
        }

        await Category.query().findById(id).patch(newData);

        return res.status(200).json({ message: "Cập nhật danh mục thành công" });
    } catch (error) {
        console.error(error); // Thêm log lỗi để dễ debug
        res.status(500).json({ message: "Lỗi 500 - Lấy danh mục thất bại" });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { ids: categoryIds } = req.body;

        if (!categoryIds || categoryIds.length === 0) {
            return res.status(400).json({ message: "Danh sách ID không hợp lệ" });
        }

        // Kiểm tra Product liên quan
        const relatedProducts = await ProductCategory.query()
            .whereIn("categoryId", categoryIds);

        if (relatedProducts.length > 0) {
            return res.status(400).json({
                message: "Không thể xóa Category vì có sản phẩm liên quan",
                categoryIds
            });
        }

        // Kiểm tra Brand liên quan

        await Category.query().delete().whereIn("id", categoryIds);
        return res.status(200).json({ message: "Xóa Category thành công" });
    } catch (error) {
        console.error("Lỗi xóa Category:", error);
        res.status(500).json({ message: "Lỗi 500 - Xóa Category thất bại" });
    }
};

