/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Xóa dữ liệu cũ để tránh trùng lặp
  await knex('Category').del();

  // Thêm dữ liệu mới
  await knex('Category').insert([
    {
      id: 1,
      name: 'Laptop',
      description: 'Laptop là một thiết bị máy tính có kích thước nhỏ gọn và di động. Nó được thiết kế để sử dụng trong các hoạt động làm việc, giải trí hoặc học tập khi di chuyển mà không cần phải sử dụng những chiếc máy tính để bàn cồng kềnh.',
      imageUrl: 'uploads/category/Laptop.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Ghế',
      description: 'Ghế công thái học là mẫu ghế được thiết kế với hình dáng và các tính năng đặc biệt, giúp giảm thiểu áp lực lên cơ thể, giảm đau lưng và cổ và giúp người sử dụng giữ được tư thế ngồi đúng để tránh những tổn thương do ngồi lâu.',
      imageUrl: 'uploads/category/Ghế.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: 'Bàn phím',
      description: 'Bàn phím là một thiết bị đầu vào cho máy tính, được sử dụng để nhập dữ liệu và điều khiển các chức năng của máy tính. Bàn phím bao gồm một loạt các phím nhấn, các phím chữ, số, các ký tự đặc biệt và các phím chức năng để thực hiện các tác vụ.',
      imageUrl: 'uploads/category/Bàn phím.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      name: 'Âm thanh',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Âm thanh.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 5,
      name: 'Màn hình',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Màn hình.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 6,
      name: 'Balo, túi',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Balo, túi.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 7,
      name: 'Bàn nâng hạ',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Bàn nâng hạ.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 8,
      name: 'Phụ kiện',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Phụ kiện.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 9,
      name: 'Thực tế ảo',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Thực tế ảo.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 10,
      name: 'Phần mềm',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Phần mềm.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 11,
      name: 'Chuột',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Chuột.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 12,
      name: 'Máy chơi game',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Máy chơi game.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 13,
      name: 'Máy chiếu',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Máy chiếu.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 14,
      name: 'Hộc tủ',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Hộc tủ.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 15,
      name: 'Kính VR',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Kính Thực Tế Ảo.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 16,
      name: 'Giá Đỡ',
      description: 'Âm thanh hay loa là một thiết bị điện tử được sử dụng để phát ra âm thanh. Nó bao gồm các thành phần khác như màng lọc tần số, bộ khuếch đại, điều khiển âm lượng,.. Loa có thể kết nối được với các thiết bị phát âm thanh thông qua dây cáp/kết nối không dây',
      imageUrl: 'uploads/category/Giá Đỡ Laptop.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
};
