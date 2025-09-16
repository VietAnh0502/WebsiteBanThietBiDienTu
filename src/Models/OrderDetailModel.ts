import { Model } from 'objection';
import { Order } from './OrderModel';

export class OrderDetail extends Model {

  id?: number;
  orderId?: number;
  quantity?: number;
  name?: string;
  productId?: string;
  description?: string;
  tagName?: string;
  variants?: object;
  specifications?: object;
  productImage?: string;
  imageUrl?: string;
  price?: number;
  stock?: number;
  createdAt?: string;
  updatedAt?: string;


  static get tableName() {
    return 'OrderDetail';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['orderId', 'quantity'],
      properties: {
        id: { type: 'integer' },
        orderId: { type: 'integer' },
        quantity: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        productId: { type: 'string', maxLength: 255 },
        description: { type: ['string', 'null'] },
        tagName: { type: ['string', 'null'] },
        variants: { type: ['object', 'array', 'null'] },
        specifications: { type: ['object', 'array', 'null'] },
        productImage: { type: ['object', "string", 'null'] },
        imageUrl: { type: ['object', 'null'] },
        price: { type: 'number' },
        stock: { type: 'integer' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      }
    };
  }

  static get relationMappings() {
    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: 'OrderDetail.orderId',
          to: 'Order.id'
        }
      }
    };
  }
}