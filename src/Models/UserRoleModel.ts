import { Model } from 'objection';
import connection from '../lib/Databases/Connection';

Model.knex(connection);

export class UserRoleModel extends Model {
    static get tableName() {
        return 'UserRole';
    }

    static get idColumn() {
        return ['userId', 'roleId'];
    }

    userId!: number;
    roleId!: number;

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userId', 'roleId'],
            properties: {
                userId: { type: 'integer' },
                roleId: { type: 'integer' },
            },
        };
    }
}


