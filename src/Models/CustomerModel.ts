import { create } from 'lodash';
import { Model } from 'objection';
import { OrderDetail } from './OrderDetailModel';
import { OrderStatusHistory } from './OrderStatusHistoryModel';
import { Payment } from './PaymentModel';

export class Customer extends Model {

    id!: number;
    email!: string;
    name!: string;
    password!: string;
    createdAt!: Date;
    updatedAt!: Date;
    phoneNumber!: string;

    static get tableName() {
        return 'Customer';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'name', 'password'],
            properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                name: { type: 'string' },
                password: { type: 'string' },
                phoneNumber: { type: 'string' },
                address: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
            }
        };
    }
}