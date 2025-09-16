import { Model } from 'objection';
import connection from '../lib/Databases/Connection';
import { PermissionModel } from './PermissionModel';


Model.knex(connection);

export class RoleModel extends Model {
    static get tableName() {
        return 'Role';
    }

    static get idColumn() {
        return 'id';
    }

    id!: number;
    name!: string;
    permissions?: PermissionModel[]; // Add this line to define the permissions property

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

    static get relationMappings() {

        return {
            permissions: {
                relation: Model.ManyToManyRelation,
                modelClass: PermissionModel,
                join: {
                    from: 'Role.id',
                    through: {
                        from: 'RolePermission.roleId',
                        to: 'RolePermission.permissionId'
                    },
                    to: 'Permission.id'
                }
            }
        };
    }
}


