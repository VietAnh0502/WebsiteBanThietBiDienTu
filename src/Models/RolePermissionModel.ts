// RolePermissionModel.ts

import { Model } from 'objection';
import connection from '../lib/Databases/Connection';

Model.knex(connection);

export class RolePermissionModel extends Model {
    static get tableName() {
        return 'RolePermission';
    }

    static get idColumn() {
        return ['roleId', 'permissionId'];
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['roleId', 'permissionId', 'value'],
            properties: {
                roleId: { type: 'integer' },
                permissionId: { type: 'integer' },
                value: { type: 'integer' }
            },
        };
    }

    static get relationMappings() {
        const RoleModel = require('./RoleModel');
        const PermissionModel = require('./PermissionModel');

        return {
            role: {
                relation: Model.BelongsToOneRelation,
                modelClass: RoleModel,
                join: {
                    from: 'RolePermission.roleId',
                    to: 'Role.id',
                },
            },
            permission: {
                relation: Model.BelongsToOneRelation,
                modelClass: PermissionModel,
                join: {
                    from: 'RolePermission.permissionId',
                    to: 'Permission.id',
                },
            },
        };
    }
}
