import { Model } from 'objection';
import connection from '../lib/Databases/Connection';
import { RoleModel } from './RoleModel';
import { UserRoleModel } from './UserRoleModel';


Model.knex(connection);

export class UserModel extends Model {
    static get tableName() {
        return 'User';
    }

    static get idColumn() {
        return 'id';
    }

    id!: number;
    email!: string;
    name!: string;
    password!: string;
    // Other attributes
    verified!: boolean;
    role!: string;
    createdAt!: Date;
    updatedAt!: Date;
    provider!: string;
    phoneNumber!: string;
    dateOfBirth!: Date;
    addressProvince!: object;
    addressDistrict!: object;
    addressWard!: object;
    hometownProvince!: object;
    hometownDistrict!: object;
    hometownWard!: object;
    nationality!: string;
    img!: string;
    gender!: string;
    CCCD!: string;

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'name', 'password'],
            properties: {
                id: { type: 'integer' },
                email: { type: 'string', minLength: 1, maxLength: 255 },
                name: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string', minLength: 1, maxLength: 255 },
                verified: { type: 'boolean' },
                role: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
                provider: { type: 'string' },
                phoneNumber: { type: 'string' },
                dateOfBirth: { type: 'string', format: 'date-time' },
                addressProvince: { type: 'object' },
                addressDistrict: { type: 'object' },
                addressWard: { type: 'object' },
                hometownProvince: { type: 'object' },
                hometownDistrict: { type: 'object' },
                hometownWard: { type: 'object' },
                nationality: { type: 'string' },
                img: { type: 'string' },
                gender: { type: 'string' },
                CCCD: { type: 'string' },

            },
        };
    }

    static get relationMappings() {
        

        return {
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: RoleModel,
                join: {
                    from: 'User.id',
                    through: {
                        from: 'UserRole.userId',
                        to: 'UserRole.roleId'
                    },
                    to: 'Role.id'
                }
            },
        };
    }
}
