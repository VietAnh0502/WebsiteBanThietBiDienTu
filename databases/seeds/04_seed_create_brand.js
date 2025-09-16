/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Xóa dữ liệu cũ để tránh trùng lặp
  await knex('Brand').del();

  // Thêm dữ liệu mới
  await knex('Brand').insert([
    {
      id: 1,
      name: 'ASUS',
      description: 'ASUS luôn là thương hiệu được đánh giá cao về mọi mặt. Từng dòng sản phẩm của hãng đều sở hữu thiết kế phù hợp với người dùng mục tiêu, đi kèm với hiệu năng tốt, độ hoàn thiện xứng tầm tiền và nhiều tính năng dẫn đầu xu thế, thỏa mãn tính tò mò và ưa sự mới mẻ của người dùng hiện đại.',
      imageUrl: 'uploads/brand/ASUS.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Dell',
      description: 'Dell là thương hiệu nổi tiếng khi sở hữu nhiều sản phẩm laptop, phụ kiện, PC chất lượng cao với mức giá rất phải chăng. Các dòng laptop nổi bật và được ưa chuộng như Dell XPS, Dell Inspiron, Dell Vostro, Dell Latitude, Dell Alienware, Dell Gaming trải dài tới nhiều phân khúc khác nhau, dễ dàng lựa chọn và sử dụng',
      imageUrl: 'uploads/brand/Dell.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Lenovo',
      description: 'Sở hữu thiết kế thanh lịch, tối giản cùng kiểu dáng đơn giản mà hiện đại, laptop Lenovo luôn đảm bảo được sự cứng cáp, trau chuốt trên từng đường nét. Đi kèm với đó là tổ hợp cấu hình mạnh mẽ, trang bị bộ vi xử lý tân tiến, thời lượng pin ấn tượng mang đến cho người dùng sự linh hoạt về thiết kế và mượt mà về hiệu năng',
      imageUrl: 'uploads/brand/Lenovo.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      name: 'Microsoft',
      description: 'Sở hữu thiết kế thanh lịch, tối giản cùng kiểu dáng đơn giản mà hiện đại, laptop Lenovo luôn đảm bảo được sự cứng cáp, trau chuốt trên từng đường nét. Đi kèm với đó là tổ hợp cấu hình mạnh mẽ, trang bị bộ vi xử lý tân tiến, thời lượng pin ấn tượng mang đến cho người dùng sự linh hoạt về thiết kế và mượt mà về hiệu năng',
      imageUrl: 'uploads/brand/Microsoft.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 5,
      name: 'MSI',
      description: 'MSI (tên đầy đủ: Micro-Star International Co., Ltd) - Một trong những hãng sản xuất Laptop Gaming lớn nhất Đài Loan. Năm 2015, Laptop MSI nằm trong TOP 4 những thương hiệu laptop chất lượng tốt nhất thế giới, bao gồm cả chất lượng sản phẩm, thiết kế, dịch vụ,...',
      imageUrl: 'uploads/brand/MSI.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 6,
      name: 'Acer',
      description: 'Acer là thương hiệu công nghệ nổi tiếng của Đài Loan được nhiều người tin dùng bởi những công nghệ thông minh. Acer đã tiếp cận thị trường Việt Nam với sản phẩm máy tính cá nhân vào năm 1996. Bên cạnh sản phẩm máy tính xách tay, Acer còn sản xuất đồng hồ thông minh, máy tính bảng, màn hình và bàn phím,...',
      imageUrl: 'uploads/brand/Acer.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 7,
      name: 'Razer',
      description: 'Được biết tới như một "gã" khổng lồ trong ngành công nghiệp game và thể thao, Razer chú trọng đầu tư vào chất lượng phần cứng cũng như tích hợp hàng loạt công nghệ mới nhất cho các dòng sản phẩm của mình. Điển hình là các mẫu laptop Razer với danh xưng là "anh cả" đi đầu trong phân khúc laptop gaming.',
      imageUrl: 'uploads/brand/Razer.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 8,
      name: 'GIGABYTE',
      description: 'Gigabyte Technology Co., Ltd. là một tậo đoàn chuyên sản xuất các thiết bị phần cứng máy tính có trụ sở ở Đài Loan. Các sản phẩm chủ lực của GIGABYTE bao gồm bo mạch chủ, card đồ họa, tản nhiệt, case máy tính và laptop.',
      imageUrl: 'uploads/brand/GIGABYTE.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 9,
      name: 'VAIO',
      description: 'VAIO - Dòng máy tính VAIO của Sony được ra mắt từ khoảng những năm 2000',
      imageUrl: 'uploads/brand/VAIO.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },    
  ]);

  console.log('Seed data has been inserted successfully.');
};
