// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// export const up = async function (knex) {
//   // Bảng User
//   await knex.schema.createTable('User', (table) => {
//     table.increments('id').primary();
//     table.string('name').notNullable();
//     table.string('email').unique().notNullable();
//     table.boolean('verified').defaultTo(false);
//     table.string('password').notNullable();
//     table.string('role').defaultTo('user');
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//     table.string('provider').defaultTo('local');
//     table.string('phoneNumber').nullable();
//     table.date('dateOfBirth').nullable();
//     table.json('addressProvince').nullable();
//     table.json('addressDistrict').nullable();
//     table.json('addressWard').nullable();
//     table.json('hometownProvince').nullable();
//     table.json('hometownDistrict').nullable();
//     table.json('hometownWard').nullable();
//     table.string('nationality').nullable();
//     table.string('img').nullable();
//     table.string('gender').nullable();
//     table.string('CCCD').nullable();
//   });

//   // Bảng Role
//   await knex.schema.createTable('Role', (table) => {
//     table.increments('id').primary();
//     table.string('name').unique().notNullable();
//   });

//   // Bảng Permission
//   await knex.schema.createTable('Permission', (table) => {
//     table.increments('id').primary();
//     table.string('name').unique().notNullable();
//   });

//   // Bảng UserRole
//   await knex.schema.createTable('UserRole', (table) => {
//     table.integer('userId').unsigned().references('id').inTable('User').onDelete('CASCADE');
//     table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
//     table.primary(['userId', 'roleId']);
//   });

//   // Bảng RolePermission
//   await knex.schema.createTable('RolePermission', (table) => {
//     table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
//     table.integer('permissionId').unsigned().references('id').inTable('Permission').onDelete('CASCADE');
//     table.integer('value').notNullable();
//     table.primary(['roleId', 'permissionId']);
//   });

//   // Bảng Brand
//   await knex.schema.createTable('Brand', (table) => {
//     table.increments('id').primary();
//     table.string('name').unique().notNullable();
//     table.text('description').nullable();
//     table.string('imageUrl').nullable();
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//   });

//   // Bảng Category
//   await knex.schema.createTable('Category', (table) => {
//     table.increments('id').primary();
//     table.string('name').unique().notNullable();
//     table.text('description').nullable();
//     table.string('imageUrl').nullable();
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//   });

//   // Bảng Product
//   await knex.schema.createTable('Product', (table) => {
//     table.increments('id').primary();
//     table.string('name').notNullable();
//     table.string('productId').notNullable();
//     table.integer('brandId').unsigned().notNullable().references('id').inTable('Brand').onDelete('CASCADE');
//     table.text('description').nullable();
//     table.string('tagName').nullable();
//     table.json('variants').nullable();
//     table.json('specifications').nullable();
//     table.json('productImage').nullable();
//     table.json('imageUrl').nullable();
//     table.decimal('price', 10, 2).notNullable().defaultTo(0);
//     table.integer('stock').notNullable().defaultTo(0);
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//   });

//   // Bảng ProductCategory
//   await knex.schema.createTable('ProductCategory', (table) => {
//     table.increments('id').primary();
//     table.integer('productId').unsigned().notNullable().references('id').inTable('Product').onDelete('CASCADE');
//     table.integer('categoryId').unsigned().notNullable().references('id').inTable('Category').onDelete('CASCADE');
//   });

//   await knex.schema.createTable('Customer', (table) => {
//     table.increments('id').primary();
//     table.string('name').notNullable();
//     table.string('email').unique().notNullable();
//     table.boolean('verified').defaultTo(false);
//     table.string('password').notNullable();
//     table.string('role').defaultTo('user');
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//     table.string('provider').defaultTo('local');
//     table.string('phoneNumber').nullable();
//     table.date('dateOfBirth').nullable();
//     table.json('addressProvince').nullable();
//     table.json('addressDistrict').nullable();
//     table.json('addressWard').nullable();
//     table.json('hometownProvince').nullable();
//     table.json('hometownDistrict').nullable();
//     table.json('hometownWard').nullable();
//     table.string('nationality').nullable();
//     table.string('img').nullable();
//     table.string('gender').nullable();
//     table.string('CCCD').nullable();
//   });

//   // Bảng Order
//   await knex.schema.createTable('Order', (table) => {
//     table.increments('id').primary();
//     table.string('orderNumber').unique().notNullable();
//     table.dateTime('orderDate').defaultTo(knex.fn.now());
//     table.string('status').defaultTo('pending');
//     table.decimal('totalAmount', 10, 2).notNullable();
//     table.text('shippingAddress').nullable();
//     table.string('paymentMethod').nullable();
//     table.string('name').notNullable();
//     table.string('phoneNumber').notNullable();
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//   });

//   // Bảng OrderDetail
//   await knex.schema.createTable('OrderDetail', (table) => {
//     table.increments('id').primary();
//     table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
//     table.integer('quantity').notNullable();
//     table.string('name').notNullable();
//     table.string('productId').notNullable();
//     table.text('description').nullable();
//     table.string('tagName').nullable();
//     table.json('variants').nullable();
//     table.json('specifications').nullable();
//     table.json('productImage').nullable();
//     table.json('imageUrl').nullable();
//     table.decimal('price', 10, 2).notNullable().defaultTo(0);
//     table.integer('stock').notNullable().defaultTo(0);
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//   });

//   // Bảng OrderStatusHistory
//   await knex.schema.createTable('OrderStatusHistory', (table) => {
//     table.increments('id').primary();
//     table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
//     table.string('fromStatus').notNullable();
//     table.string('toStatus').notNullable();
//     table.integer('updatedBy').unsigned().references('id').inTable('User');
//     table.text('note').nullable();
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//   });

//   // Bảng Payment
//   await knex.schema.createTable('Payment', (table) => {
//     table.increments('id').primary();
//     table.string('paymentNumber').unique().notNullable();
//     table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
//     table.decimal('amount', 10, 2).notNullable();
//     table.string('paymentMethod').notNullable();
//     table.string('status').defaultTo('pending');
//     table.string('transactionId').nullable();
//     table.dateTime('paymentDate').defaultTo(knex.fn.now());
//     table.text('note').nullable();
//     table.dateTime('createdAt').defaultTo(knex.fn.now());
//     table.dateTime('updatedAt').defaultTo(knex.fn.now());
//   });
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// export const down = async function (knex) {
//   await knex.schema.dropTableIfExists('Payment');
//   await knex.schema.dropTableIfExists('OrderStatusHistory');
//   await knex.schema.dropTableIfExists('OrderDetail');
//   await knex.schema.dropTableIfExists('Order');
//   await knex.schema.dropTableIfExists('Customer');
//   await knex.schema.dropTableIfExists('ProductCategory');
//   await knex.schema.dropTableIfExists('Product');
//   await knex.schema.dropTableIfExists('Category');
//   await knex.schema.dropTableIfExists('Brand');
//   await knex.schema.dropTableIfExists('RolePermission');
//   await knex.schema.dropTableIfExists('UserRole');
//   await knex.schema.dropTableIfExists('Permission');
//   await knex.schema.dropTableIfExists('Role');
//   await knex.schema.dropTableIfExists('User');
// };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  // Bảng User (cho Admin)
  await knex.schema.createTable('User', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.boolean('verified').defaultTo(false);
    table.string('password').notNullable();
    table.string('role').defaultTo('user');
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
    table.string('provider').defaultTo('local');
    table.string('phoneNumber').nullable();
    table.date('dateOfBirth').nullable();
    table.json('addressProvince').nullable();
    table.json('addressDistrict').nullable();
    table.json('addressWard').nullable();
    table.json('hometownProvince').nullable();
    table.json('hometownDistrict').nullable();
    table.json('hometownWard').nullable();
    table.string('nationality').nullable();
    table.string('img').nullable();
    table.string('gender').nullable();
    table.string('CCCD').nullable();
  });

  // Bảng Role
  await knex.schema.createTable('Role', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  });

  // Bảng Permission
  await knex.schema.createTable('Permission', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  });

  // Bảng UserRole
  await knex.schema.createTable('UserRole', (table) => {
    table.integer('userId').unsigned().references('id').inTable('User').onDelete('CASCADE');
    table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
    table.primary(['userId', 'roleId']);
  });

  // Bảng RolePermission
  await knex.schema.createTable('RolePermission', (table) => {
    table.integer('roleId').unsigned().references('id').inTable('Role').onDelete('CASCADE');
    table.integer('permissionId').unsigned().references('id').inTable('Permission').onDelete('CASCADE');
    table.integer('value').notNullable();
    table.primary(['roleId', 'permissionId']);
  });

  // Bảng Brand
  await knex.schema.createTable('Brand', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.text('description').nullable();
    table.string('imageUrl').nullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng Category
  await knex.schema.createTable('Category', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.text('description').nullable();
    table.string('imageUrl').nullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng Product
  await knex.schema.createTable('Product', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('productId').notNullable();
    table.integer('brandId').unsigned().notNullable().references('id').inTable('Brand').onDelete('CASCADE');
    table.text('description').nullable();
    table.string('tagName').nullable();
    table.json('variants').nullable();
    table.json('specifications').nullable();
    table.json('productImage').nullable();
    table.json('imageUrl').nullable();
    table.decimal('price', 10, 2).notNullable().defaultTo(0);
    table.integer('stock').notNullable().defaultTo(0);
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng ProductCategory
  await knex.schema.createTable('ProductCategory', (table) => {
    table.increments('id').primary();
    table.integer('productId').unsigned().notNullable().references('id').inTable('Product').onDelete('CASCADE');
    table.integer('categoryId').unsigned().notNullable().references('id').inTable('Category').onDelete('CASCADE');
  });
  // Bảng Customer (cho người mua hàng)
  await knex.schema.createTable('Customer', (table) => {
    table.increments('id').primary();
    table.string('email').unique().notNullable();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
    table.string('phoneNumber').nullable();
    table.string('address').nullable();
  });

  // Bảng Order
  await knex.schema.createTable('Order', (table) => {
    table.increments('id').primary();
    table.string('orderNumber').unique().notNullable();
    table.dateTime('orderDate').defaultTo(knex.fn.now());
    table.integer('customerId').unsigned().references('id').inTable('Customer').onDelete('SET NULL');
    table.string('status').defaultTo('pending');
    table.decimal('totalAmount', 30, 2).notNullable();
    table.text('shippingAddress').nullable();
    table.integer('paymentMethod').nullable();
    table.string('name').notNullable();
    table.string('phoneNumber').notNullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng OrderDetail
  await knex.schema.createTable('OrderDetail', (table) => {
    table.increments('id').primary();
    table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
    table.integer('quantity').notNullable();
    table.string('name').notNullable();
    table.string('productId').notNullable();
    table.text('description').nullable();
    table.string('tagName').nullable();
    table.json('variants').nullable();
    table.json('specifications').nullable();
    table.json('productImage').nullable();
    table.json('imageUrl').nullable();
    table.decimal('price', 10, 2).notNullable().defaultTo(0);
    table.integer('stock').notNullable().defaultTo(0);
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });

  // Bảng OrderStatusHistory
  await knex.schema.createTable('OrderStatusHistory', (table) => {
    table.increments('id').primary();
    table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
    table.integer('updatedBy').unsigned().references('id').inTable('User');
    table.text('note').nullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
  });

  // Bảng Payment
  await knex.schema.createTable('Payment', (table) => {
    table.increments('id').primary();
    table.string('paymentNumber').unique().notNullable();
    table.integer('orderId').unsigned().references('id').inTable('Order').onDelete('CASCADE');
    table.decimal('amount', 10, 2).notNullable();
    table.string('paymentMethod').notNullable();
    table.string('status').defaultTo('pending');
    table.string('transactionId').nullable();
    table.dateTime('paymentDate').defaultTo(knex.fn.now());
    table.text('note').nullable();
    table.dateTime('createdAt').defaultTo(knex.fn.now());
    table.dateTime('updatedAt').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTableIfExists('Payment');
  await knex.schema.dropTableIfExists('OrderStatusHistory');
  await knex.schema.dropTableIfExists('OrderDetail');
  await knex.schema.dropTableIfExists('Order');
  await knex.schema.dropTableIfExists('Customer');
  await knex.schema.dropTableIfExists('ProductCategory');
  await knex.schema.dropTableIfExists('Product');
  await knex.schema.dropTableIfExists('Category');
  await knex.schema.dropTableIfExists('Brand');
  await knex.schema.dropTableIfExists('RolePermission');
  await knex.schema.dropTableIfExists('UserRole');
  await knex.schema.dropTableIfExists('Permission');
  await knex.schema.dropTableIfExists('Role');
  await knex.schema.dropTableIfExists('User');
};