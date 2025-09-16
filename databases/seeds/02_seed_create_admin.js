/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {

  // Insert admin users
  const adminUsers = await knex('User')
    .insert([
      {
        name: 'Admin User 1',
        email: 'admin1@gmail.com',
        verified: true,
        password: '$2a$12$.rgoAVMd6EPe5VlKw.BSRO3QOz4ZCtI.p7NsGyflp1nB0x0hREIz6', //MK:123456@
        role: 'admin',
        provider: 'local',
      },
      {
        name: 'Admin User 2',
        email: 'admin2@gmail.com',
        verified: true,
        password: '$2a$12$.rgoAVMd6EPe5VlKw.BSRO3QOz4ZCtI.p7NsGyflp1nB0x0hREIz6', //MK:123456@
        role: 'admin',
        provider: 'local',
      },
      {
        name: 'Admin User 3',
        email: 'admin3@gmail.com',
        verified: true,
        password: '$2a$12$.rgoAVMd6EPe5VlKw.BSRO3QOz4ZCtI.p7NsGyflp1nB0x0hREIz6', //MK:123456@
        role: 'admin',
        provider: 'local',
      }
    ])
    .returning('id');

  // Map admin users to admin role
  for (const adminUser of adminUsers) {
    await knex('UserRole').insert({
      userId: adminUser.id,
      roleId: 1,  // Assuming roleId 1 is for admin
    });
  }

  console.log('Admin seed data has been inserted successfully.');
};
