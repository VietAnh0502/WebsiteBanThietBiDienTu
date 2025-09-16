import e, { Request, Response } from 'express';
import ProductModel from '../Models/ProductModel';
import { saveFile } from '../service/uploadService';
import ProductCategoryModel from '../Models/ProductCategoryModel';
import { parseNestedData } from '../utils/parseNestedData';
import BrandModel from '../Models/BrandModel';
import _ from 'lodash';
import crypto from 'crypto';
import { version } from 'os';

function generateRandomSuffix(length: number = 3): string {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}

export const createProduct = async (req: Request, res: Response) => {
    const transaction = await ProductModel.startTransaction();
    try {
        const dataAfterParse = parseNestedData(req.body);
        console.log(dataAfterParse);

        // Kiểm tra sản phẩm đã tồn tại (theo mã sản phẩm - productID)
        const existingProduct = await ProductModel.query(transaction).findOne({ productId: dataAfterParse.productID });
        if (existingProduct) {
            await transaction.rollback();
            return res.status(400).json({ message: "Sản phẩm đã tồn tại" });
        }

        // Xử lý ảnh
        let productImage = ''; // Ảnh chính
        let imageUrls: { [key: string]: string } = {}; // Ảnh mô tả

        if (req.files) {
            console.log('Files:', req.files);
            let descCounter = 0;

            for (const fileKey in req.files) {
                console.log('Processing file:', fileKey);
                const img = req.files[fileKey] as any;
                let ID: string;
                const action = "product";
                const randomSuffix = generateRandomSuffix()

                // Phân biệt giữa ảnh chính và ảnh mô tả
                if (fileKey.startsWith('mainImage')) {
                    ID = `${dataAfterParse.productID}-main`;
                    productImage = await saveFile(img, ID, action);
                } else if (fileKey.startsWith('descriptionImages')) {
                    ID = `${dataAfterParse.productName}-desc-${randomSuffix}`;
                    imageUrls[`img${descCounter}`] = await saveFile(img, ID, action);
                    descCounter++;
                }
            }
        }


        const newProduct = {
            name: dataAfterParse.productName,
            productId: dataAfterParse.productID,
            brandId: parseInt(dataAfterParse.brand, 10),
            variants: dataAfterParse.variants,
            specifications: dataAfterParse.specifications,
            tagName: dataAfterParse.tagName,
            productImage: productImage, // Ảnh chính sản phẩm
            imageUrl: imageUrls, // Ảnh mô tả sản phẩm
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            description: dataAfterParse.description || null,
        };

        console.log('New product:', newProduct);

        // Chèn sản phẩm và lấy ID tự động từ cơ sở dữ liệu
        const insertedProduct = await ProductModel.query(transaction).insert(newProduct);

        // Thêm vào bảng ProductCategoryModel
        if (Array.isArray(dataAfterParse.category)) {
            for (const categoryId of dataAfterParse.category) {
                await ProductCategoryModel.query(transaction).insert({
                    productId: insertedProduct.id, // ID tự động tạo từ cơ sở dữ liệu
                    categoryId: parseInt(categoryId, 10),
                });
            }
        }

        // Commit transaction
        await transaction.commit();
        res.status(201).json({ message: "Tạo sản phẩm thành công", product: insertedProduct });
    } catch (error: any) {
        console.error("Error inserting product:", error);
        await transaction.rollback();
        res.status(500).json({ message: "Lỗi 500 - Tạo sản phẩm thất bại", error: error.message });
    }
};

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.query()
            .withGraphFetched('categories')
            .withGraphFetched('brand');


        res.status(200).json(products);
    } catch (error: any) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm thất bại", error: error.message });
    }
};


export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        const product = await ProductModel.query()
            .findById(id)
            .withGraphFetched('categories')
            .withGraphFetched('brand');

        res.status(200).json(product);
    } catch (error: any) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm thất bại", error: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        // Lấy token từ cookie
        const token = req.cookies.token;
        if (!token) {
            // Báo lỗi khi không có token (người dùng chưa đăng nhập)
            return res.status(401).json({ message: 'Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.' });
        }
        console.log('Received data:', req.body);
        // Lấy danh sách userIds từ body
        const { ids: productIds } = req.body;
        console.log('User IDs to delete:', productIds);
        if (!Array.isArray(productIds) || productIds.length === 0) {
            return res.status(400).json({ message: 'Danh sách ID snr phẩm không hợp lệ.' });
        }

        // Bắt đầu transaction
        const trx = await ProductModel.startTransaction();

        try {
            // Tìm các user cần xóa
            const productsToDelete = await ProductModel.query(trx).findByIds(productIds);

            if (productsToDelete.length !== productIds.length) {
                await trx.rollback();
                return res.status(404).json({ message: 'Không tìm thấy một hoặc nhiều người dùng.' });
            }

            // Xóa dữ liệu từ các bảng liên quan
            await ProductCategoryModel.query(trx).delete().whereIn('productId', productIds);

            // Xóa users từ bảng chính
            const deletedCount = await ProductModel.query(trx).delete().whereIn('id', productIds);

            // Commit transaction
            await trx.commit();

            // Trả về kết quả thành công
            res.status(200).json({
                status: 'success',
                message: 'Xóa người dùng và dữ liệu liên quan thành công.',
                data: {
                    deletedCount,
                    deletedUserIds: productIds,
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

export const updateProduct = async (req: Request, res: Response) => {
    const transaction = await ProductModel.startTransaction();
    try {
        const dataAfterParse = parseNestedData(req.body);
        console.log('Data after parse:', dataAfterParse);

        // Kiểm tra sản phẩm tồn tại
        const existingProduct = await ProductModel.query(transaction).findOne({ id: dataAfterParse.id });
        if (!existingProduct) {
            await transaction.rollback();
            return res.status(404).json({ message: "Không tìm thấy sản phẩm với ID đã cung cấp" });
        }

        // Xử lý ảnh chính
        let productImage = existingProduct.productImage
        if (dataAfterParse.productImage && dataAfterParse.productImage.length > 0) {
            const productImageData = dataAfterParse.productImage[0];
            if (productImageData.url) {
                productImage = productImageData.url.replace('http://localhost:4000/', '');
            }
        }

        // Xử lý ảnh mô tả
        let imageUrls: { [key: string]: string } = {};
        if (dataAfterParse.descriptionImages && dataAfterParse.descriptionImages.length > 0) {
            dataAfterParse.descriptionImages.forEach((img: any, index: number) => {
                if (img.url) {
                    imageUrls[`img${index}`] = img.url.replace('http://localhost:4000/', '');
                }
            });
        }

        // Xử lý file mới được upload (nếu có)
        if (req.files) {
            let descCounter = Object.keys(imageUrls).length;

            for (const fileKey in req.files) {
                const img = req.files[fileKey] as any;
                const action = "product";
                const randomSuffix = generateRandomSuffix()

                if (fileKey.startsWith('productImage')) {
                    const ID = `${dataAfterParse.productID}-main`;
                    productImage = await saveFile(img, ID, action);
                } else if (fileKey.startsWith('descriptionImages')) {
                    const ID = `${dataAfterParse.productName}-desc-${randomSuffix}`;
                    imageUrls[`img${descCounter}`] = await saveFile(img, ID, action);
                    descCounter++;
                }
            }
        }

        // Cập nhật sản phẩm
        const updatedProduct = {
            name: dataAfterParse.productName || existingProduct.name,
            productId: dataAfterParse.productID || existingProduct.productId,
            brandId: dataAfterParse.brand ? parseInt(dataAfterParse.brand, 10) : existingProduct.brandId,
            variants: dataAfterParse.variants || existingProduct.variants,
            specifications: dataAfterParse.configurations || existingProduct.specifications,
            tagName: dataAfterParse.tagName || existingProduct.tagName,
            productImage: productImage,
            imageUrl: imageUrls,
            updatedAt: new Date().toISOString(),
            description: dataAfterParse.description || existingProduct.description,
        };

        console.log('Updated product:', updatedProduct);

        // Thực hiện cập nhật trong bảng ProductModel
        const result = await ProductModel.query(transaction).patchAndFetchById(dataAfterParse.id, updatedProduct);

        // Cập nhật danh mục sản phẩm
        if (Array.isArray(dataAfterParse.category)) {
            // Xóa các danh mục cũ
            if (existingProduct.id !== undefined) {
                await ProductCategoryModel.query(transaction).delete().where('productId', existingProduct.id);
            }

            // Thêm danh mục mới
            for (const categoryId of dataAfterParse.category) {
                await ProductCategoryModel.query(transaction).insert({
                    productId: existingProduct.id,
                    categoryId: parseInt(categoryId, 10),
                });
            }
        }

        // Commit transaction
        await transaction.commit();
        res.status(200).json({ message: "Cập nhật sản phẩm thành công", product: result });
    } catch (error: any) {
        console.error("Error updating product:", error);
        await transaction.rollback();
        res.status(500).json({ message: "Lỗi 500 - Cập nhật sản phẩm thất bại", error: error.message });
    }
};


export const getProductByCategory = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    console.log('Category ID:', categoryId);
    try {
        const products = await ProductModel.query()
            .withGraphFetched('[categories, brand]')
            .joinRelated('categories')
            .where('categories.id', categoryId);

        res.status(200).json(products);
    } catch (error: any) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm theo danh mục thất bại", error: error.message });
    }
};

export const getProductByBrand = async (req: Request, res: Response) => {
    const brandId = req.params.id;
    console.log('Category ID:', brandId);
    try {
        const products = await ProductModel.query()
            .where('brandId', brandId)
            .withGraphFetched('brand')

        res.status(200).json(products);
    } catch (error: any) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm theo danh mục thất bại", error: error.message });
    }
};

export const getSearchProduct = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        console.log('Keyword:', search);

        const products = await ProductModel.query()
            .where('productId', 'ILIKE', `%${search}%`)
            .orWhere('name', 'ILIKE', `%${search}%`)
            .orWhere('tagName', 'ILIKE', `%${search}%`)


        res.status(200).json(products);
    } catch (error: any) {
        console.error("Error fetching products by category:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy dữ liệu sản phẩm theo danh mục thất bại", error: error.message });
    }
}

export const getRecommendProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params; // Lấy productId từ params
        if (!productId) {
            return res.status(400).json({ message: "productId is required" }); // Báo lỗi nếu productId không tồn tại
        }

        console.log('Product ID:', productId);

        const recommendedProducts = await ProductModel.query()
            .join('ProductCategory', 'Product.id', 'ProductCategory.productId') // Join với bảng ProductCategory
            .whereIn(
                'ProductCategory.categoryId',
                ProductCategoryModel.query()
                    .select('categoryId')
                    .where('ProductCategory.productId', productId) // Lấy các categoryId liên quan đến sản phẩm gốc
                    .skipUndefined() // Bỏ qua điều kiện nếu productId không tồn tại
            )
            .andWhere('Product.brandId', ProductModel.query()
                .select('brandId')
                .where('Product.id', productId) // Lấy brandId của sản phẩm gốc
                .skipUndefined() // Bỏ qua điều kiện nếu productId không tồn tại
            )
            .andWhereNot('Product.id', productId) // Loại bỏ chính sản phẩm gốc
            .distinctOn('Product.id') // Loại bỏ trùng lặp sản phẩm
            .limit(10); // Giới hạn kết quả trả về

        // Trả kết quả
        res.status(200).json(recommendedProducts);
    } catch (error: any) {
        console.error("Error fetching recommended products:", error);
        res.status(500).json({ message: "Lỗi 500 - Lấy sản phẩm gợi ý thất bại", error: error.message });
    }
};
