/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    // Xóa tất cả các mục hiện có
    await knex('RolePermission').del();
    await knex('Permission').del();
    await knex('Role').del();

    // Chèn các vai trò
    const roles = [
        { id: 1, name: 'admin' },
        { id: 2, name: 'manager' },
        { id: 3, name: 'user' }
    ];

    await knex('Role').insert(roles);

    // // Chèn các quyền
    // const permissions = [
    //     { id: 1, name: 'Thông tin cá nhân' },
    //     { id: 2, name: 'Chấm công' },
    //     { id: 3, name: 'Đơn từ' },
    //     { id: 4, name: 'Quên chấm công' },
    //     { id: 5, name: 'Đơn xin nghỉ' },
    //     { id: 6, name: 'Đơn thôi việc' },
    //     { id: 7, name: 'Đơn OT' },
    //     { id: 8, name: 'Cài đặt' },
    //     { id: 9, name: 'Quản lý người dùng' },
    //     { id: 10, name: 'Phân quyền' },
    //     { id: 11, name: 'Tạo Quên chấm công' },
    //     { id: 12, name: 'Sửa Quên chấm công' },
    //     { id: 13, name: 'Tạo Đơn xin nghỉ' },
    //     { id: 14, name: 'Sửa Đơn xin nghỉ' },
    //     { id: 15, name: 'Tạo Đơn thôi việc' },
    //     { id: 16, name: 'Sửa Đơn thôi việc' },
    //     { id: 17, name: 'Tạo Đơn OT' },
    //     { id: 18, name: 'Sửa Đơn OT' },
    //     { id: 19, name: 'Sửa Quản lý người dùng' },
    //     { id: 20, name: 'Tạo Quản lý người dùng' },
    //     { id: 21, name: 'Cài đặt Phân quyền' },
    //     { id: 22, name: 'Lương' },
    //     { id: 23, name: 'Duyệt lương' },
    //     { id: 24, name: 'Dự án' },
    //     { id: 25, name: 'Tạo dự án' },
    //     { id: 26, name: 'Cập nhật dự án' },        
    // ];

    // await knex('Permission').insert(permissions);

    // // Chèn RolePermissions
    // const rolePermissions = [
    //     // Admin có quyền đầy đủ
    //     { roleId: 1, permissionId: 1, value: 31 }, // create:1, read:2, update:4, delete:8, approve:16 = 31
    //     { roleId: 1, permissionId: 2, value: 31 },
    //     { roleId: 1, permissionId: 3, value: 31 },
    //     { roleId: 1, permissionId: 4, value: 31 },
    //     { roleId: 1, permissionId: 5, value: 31 },
    //     { roleId: 1, permissionId: 6, value: 31 },
    //     { roleId: 1, permissionId: 7, value: 31 },
    //     { roleId: 1, permissionId: 8, value: 31 },
    //     { roleId: 1, permissionId: 9, value: 31 },
    //     { roleId: 1, permissionId: 10, value: 31 },
    //     { roleId: 1, permissionId: 11, value: 31 },
    //     { roleId: 1, permissionId: 12, value: 31 },
    //     { roleId: 1, permissionId: 13, value: 31 },
    //     { roleId: 1, permissionId: 14, value: 31 },
    //     { roleId: 1, permissionId: 15, value: 31 },
    //     { roleId: 1, permissionId: 16, value: 31 },
    //     { roleId: 1, permissionId: 17, value: 31 },
    //     { roleId: 1, permissionId: 18, value: 31 },
    //     { roleId: 1, permissionId: 19, value: 31 },
    //     { roleId: 1, permissionId: 20, value: 31 },
    //     { roleId: 1, permissionId: 21, value: 31 },
    //     { roleId: 1, permissionId: 22, value: 31 },
    //     { roleId: 1, permissionId: 23, value: 31 },
    //     { roleId: 1, permissionId: 24, value: 31 }, // full permissions for 'Dự án'
    //     { roleId: 1, permissionId: 25, value: 31 }, // full permissions for 'Tạo dự án'
    //     { roleId: 1, permissionId: 26, value: 31 }, // full permissions for 'Cập nhật dự án'

    //     // Manager permissions
    //     { roleId: 2, permissionId: 1, value: 2 }, // read
    //     { roleId: 2, permissionId: 2, value: 2 }, // read
    //     { roleId: 2, permissionId: 3, value: 18 }, // read + approve
    //     { roleId: 2, permissionId: 8, value: 6 }, // read + update
    //     { roleId: 2, permissionId: 9, value: 31 }, // full permissions
    //     { roleId: 2, permissionId: 10, value: 31 }, // full permissions
    //     { roleId: 2, permissionId: 11, value: 0 }, // no permissions
    //     { roleId: 2, permissionId: 12, value: 18 }, // no permissions
    //     { roleId: 2, permissionId: 13, value: 0 }, // no permissions
    //     { roleId: 2, permissionId: 14, value: 18 }, // no permissions
    //     { roleId: 2, permissionId: 15, value: 0 }, // no permissions
    //     { roleId: 2, permissionId: 16, value: 18 }, // no permissions
    //     { roleId: 2, permissionId: 17, value: 0 }, // no permissions
    //     { roleId: 2, permissionId: 18, value: 18 }, // no permissions
    //     { roleId: 2, permissionId: 19, value: 6 }, // read + update
    //     { roleId: 2, permissionId: 20, value: 3 }, // read + create
    //     { roleId: 2, permissionId: 21, value: 31 }, // full permissions
    //     { roleId: 2, permissionId: 22, value: 2 }, // read for 'Lương'
    //     { roleId: 2, permissionId: 23, value: 18 }, // read for 'Lương'
    //     { roleId: 2, permissionId: 24, value: 2 }, // read for 'Dự án'
    //     { roleId: 2, permissionId: 25, value: 3 }, // read + create for 'Tạo dự án'
    //     { roleId: 2, permissionId: 26, value: 6 }, // read + update for 'Cập nhật dự án'

    //     // User permissions
    //     { roleId: 3, permissionId: 1, value: 2 }, // read
    //     { roleId: 3, permissionId: 2, value: 2 }, // read
    //     { roleId: 3, permissionId: 3, value: 15 }, // create + read + update + delete
    //     { roleId: 3, permissionId: 4, value: 15 }, // create + read + update + delete
    //     { roleId: 3, permissionId: 5, value: 15 }, // create + read + update + delete
    //     { roleId: 3, permissionId: 6, value: 15 }, // create + read + update + delete
    //     { roleId: 3, permissionId: 7, value: 15 }, // create + read + update + delete
    //     { roleId: 3, permissionId: 11, value: 3 }, // create + read
    //     { roleId: 3, permissionId: 12, value: 6 }, // read + update
    //     { roleId: 3, permissionId: 13, value: 3 }, // create + read
    //     { roleId: 3, permissionId: 14, value: 6 }, // read + update
    //     { roleId: 3, permissionId: 15, value: 3 }, // create + read
    //     { roleId: 3, permissionId: 16, value: 6 }, // read + update
    //     { roleId: 3, permissionId: 17, value: 3 }, // create + read
    //     { roleId: 3, permissionId: 18, value: 6 }, // read + update
    //     { roleId: 3, permissionId: 22, value: 2 }, // read for 'Lương'
    //     { roleId: 3, permissionId: 24, value: 2 }, // read for 'Dự án'
    //     { roleId: 3, permissionId: 25, value: 3 }, // read + create for 'Tạo dự án'
    //     { roleId: 3, permissionId: 26, value: 6 }, // read + update for 'Cập nhật dự án'
    // ];

    // await knex('RolePermission').insert(rolePermissions);
};
