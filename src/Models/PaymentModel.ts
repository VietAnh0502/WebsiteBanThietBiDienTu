import { Model } from 'objection';
import { Order } from './OrderModel';

export class Payment extends Model {
    static get tableName() {
        return 'Payment';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['paymentNumber', 'orderId', 'amount', 'paymentMethod'],
            properties: {
                id: { type: 'integer' },
                paymentNumber: { type: 'string' },
                orderId: { type: 'integer' },
                amount: { type: 'number' },
                paymentMethod: { type: 'string' },
                status: { type: 'string', default: 'pending' },
                transactionId: { type: 'string' },
                paymentDate: { type: 'string', format: 'date-time' },
                note: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings() {
        return {
            order: {
                relation: Model.BelongsToOneRelation,
                modelClass: Order,
                join: {
                    from: 'Payment.orderId',
                    to: 'Order.id'
                }
            }
        };
    }
}