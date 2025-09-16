import { Model } from 'objection';
import connection from '../lib/Databases/Connection';

Model.knex(connection);

export class ProductCategoryModel extends Model {
    static get tableName() {
        return 'ProductCategory';
    }

    static get idColumn() {
        return ['productId', 'categoryId'];
    }

    productId!: number;
    categoryId!: number;

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['productId', 'categoryId'],
            properties: {
                productId: { type: 'integer' },
                categoryId: { type: 'integer' },
            },
        };
    }
}

export default ProductCategoryModel;

