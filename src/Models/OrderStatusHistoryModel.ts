import { Model } from 'objection';
import { Order } from './OrderModel';
import { UserModel } from './UserModel';

export class OrderStatusHistory extends Model {

    id?: number;
    orderId?: string;
    updatedBy?: number;
    note?: string;
    createdAt?: string;

    static get tableName() {
        return 'OrderStatusHistory';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['orderId'],
            properties: {
                id: { type: 'integer' },
                orderId: { type: 'string' },
                updatedBy: { type: 'integer' },
                note: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings() {
        return {
            order: {
                relation: Model.BelongsToOneRelation,
                modelClass: Order,
                join: {
                    from: 'OrderStatusHistory.orderId',
                    to: 'Order.id'
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: UserModel,
                join: {
                    from: 'OrderStatusHistory.updatedBy',
                    to: 'User.id'
                }
            }
        };
    }
}