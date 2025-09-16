import { Model } from 'objection';
import { OrderDetail } from './OrderDetailModel';
import { OrderStatusHistory } from './OrderStatusHistoryModel';
import { Payment } from './PaymentModel';
import { Customer } from './CustomerModel';

export class Order extends Model {

    id?: number;
    orderNumber?: string;
    orderDate?: string;
    status?: string;
    subtotal?: number;
    totalAmount?: number;
    shippingAddress?: string;
    paymentMethod?: number;
    createdAt?: string;
    updatedAt?: string;
    customerId?: number;


    static get tableName() {
        return 'Order';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['orderNumber', 'shippingAddress', 'totalAmount', 'customerId'],
            properties: {
                id: { type: 'integer' },
                orderNumber: { type: 'string' },
                orderDate: { type: 'string', format: 'date-time' },
                status: { type: 'string', default: 'pending' },
                subtotal: { type: 'number' },
                customerId: { type: 'integer' },
                totalAmount: { type: 'number' },
                shippingAddress: { type: 'string' },
                paymentMethod: { type: 'integer' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' }
            }
        };
    }

    static get relationMappings() {
        return {
            orderDetails: {
                relation: Model.HasManyRelation,
                modelClass: OrderDetail,
                join: {
                    from: 'Order.id',
                    to: 'OrderDetail.orderId'
                }
            },
            statusHistory: {
                relation: Model.HasManyRelation,
                modelClass: OrderStatusHistory,
                join: {
                    from: 'Order.id',
                    to: 'OrderStatusHistory.orderId'
                }
            },
            payment: {
                relation: Model.HasOneRelation,
                modelClass: Payment,
                join: {
                    from: 'Order.id',
                    to: 'Payment.orderId'
                }
            },
            customer: {
                relation: Model.BelongsToOneRelation,
                modelClass: Customer,
                join: {
                    from: 'Order.customerId',
                    to: 'Customer.id'
                }
            }
        };
    }
}