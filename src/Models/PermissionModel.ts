import { Model } from 'objection';
import connection from '../lib/Databases/Connection';

Model.knex(connection);

export class PermissionModel extends Model {
    static get tableName() {
        return 'Permission';
    }

    static get idColumn() {
        return 'id';
    }

    id!: number;
    name!: string;

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 255 },
            },
        };
    }
}


