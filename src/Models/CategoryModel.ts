import { Model } from 'objection';
import Product from './ProductModel';

class Category extends Model {
  static get tableName() {
    return 'Category';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        description: { type: ['string', 'null'] },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    };
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: Product,
        join: {
          from: 'Category.id',
          through: {
            from: 'ProductCategory.categoryId',
            to: 'ProductCategory.productId'
          },
          to: 'Product.id'
        }
      }
    };
  }
}

export default Category;
