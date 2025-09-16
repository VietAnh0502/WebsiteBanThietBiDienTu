/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  try {
    // Xóa dữ liệu cũ nếu cần (Chỉ nên làm khi chắc chắn không ảnh hưởng đến dữ liệu quan trọng)
    await knex('ProductCategory').del();
    await knex('Product').del();

    // Thêm dữ liệu vào bảng Product
    await knex('Product').insert([
      {
        id: 1,
        name: 'Lenovo ThinkPad T14s Gen 2 (Intel)',
        productId: 'T14sG2i09NU',
        brandId: 3, 
        description: '',
        tagName: 'THINKPAD BỀN BỈ - ỔN ĐỊNH',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '13290000', quantity: '56' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 1185G7, 4C/8T' },
          { title: 'Tốc độ', info: '1.2GHz , Lên tới' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '32GB LPDDR4 4266MHz' },
          { title: 'Hỗ trợ tối đa', info: '32GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '256 GB (M.2 NVMe)' },
        ]),
        productImage: JSON.stringify("uploads/product/T14sG2i09NU-main.png"),
        imageUrl: JSON.stringify({
          img0: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-ab5.png',
          img1: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-619.png',
          img2: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-aec.png',
          img3: 'uploads/product/Lenovo ThinkPad T14s Gen 2 (Intel)-desc-094.png',
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: "ASUS ROG Zephyrus G14",
        productId: "ROGG142024",
        brandId: 1,
        description: "",
        tagName: "HIỆU NĂNG CAO CHO GAME THỦ",
        variants: JSON.stringify([
          { color: "trắng", version: "2024", type: "Chính hãng", price: "42000000", quantity: "30" }
        ]),
        specifications: JSON.stringify([
          { title: "CPU", info: "AMD Ryzen 9 5900HS, 8C/16T" },
          { title: "Tốc độ", info: "3.0GHz , Lên tới 4.6GHz" },
          { title: "Bộ nhớ đệm", info: "16MB" },
          { title: "Card onboard", info: "AMD Radeon Graphics" },
          { title: "Card rời", info: "NVIDIA GeForce RTX 3060" },
          { title: "Dung lượng", info: "16GB DDR4 3200MHz" },
          { title: "Hỗ trợ tối đa", info: "32GB" },
          { title: "Dung lượng SSD", info: "1TB (M.2 NVMe)" }
        ]),
        productImage: JSON.stringify("uploads/product/ROGG142024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads/product/ASUS ROG Zephyrus G14-desc-2bf.webp",
          img1: "uploads/product/ASUS ROG Zephyrus G14-desc-1af.webp",
          img2: "uploads/product/ASUS ROG Zephyrus G14-desc-274.webp",
          img3: "uploads/product/ASUS ROG Zephyrus G14-desc-3d4.webp",
          img4: "uploads/product/ASUS ROG Zephyrus G14-desc-8cc.webp"

        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 3,
        name: "Dell XPS 15 9520",
        productId: "XPS159520",
        brandId: 2,
        description: "",
        tagName: "THIẾT KẾ CAO CẤP - HIỆU SUẤT MẠNH MẼ",
        variants: JSON.stringify([
          { color: "bạc", version: "2024", type: "Chính hãng", price: "52000000", quantity: "20" }
        ]),
        specifications: JSON.stringify([
          { title: "CPU", info: "Intel Core i9 12900H, 14C/20T" },
          { title: "Tốc độ", info: "2.5GHz , Lên tới 5.0GHz" },
          { title: "Bộ nhớ đệm", info: "24MB" },
          { title: "Card onboard", info: "Intel UHD Graphics" },
          { title: "Card rời", info: "NVIDIA GeForce RTX 3050 Ti" },
          { title: "Dung lượng", info: "32GB DDR5 4800MHz" },
          { title: "Hỗ trợ tối đa", info: "64GB" },
          { title: "Dung lượng SSD", info: "2TB (M.2 NVMe)" }
        ]),
        productImage: JSON.stringify("uploads\\product\\XPS159520-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell XPS 15 9520-desc-bb4.webp",
          img1: "uploads\\product\\Dell XPS 15 9520-desc-901.webp",
          img2: "uploads\\product\\Dell XPS 15 9520-desc-4ac.webp",
          img3: "uploads\\product\\Dell XPS 15 9520-desc-23f.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 4,
        name: "Microsoft Surface Laptop Studio",
        productId: "SurfaceLS2024",
        brandId: 4,
        description: "",
        tagName: "LINH HOẠT VÀ SÁNG TẠO",
        variants: JSON.stringify([
          { color: "bạc", version: "2024", type: "Chính hãng", price: "48000000", quantity: "15" }
        ]),
        specifications: JSON.stringify([
          { title: "CPU", info: "Intel Core i7 11370H, 4C/8T" },
          { title: "Tốc độ", info: "3.3GHz , Lên tới 4.8GHz" },
          { title: "Bộ nhớ đệm", info: "12MB" },
          { title: "Card onboard", info: "Intel Iris Xe Graphics" },
          { title: "Card rời", info: "NVIDIA GeForce RTX 3050 Ti" },
          { title: "Dung lượng", info: "16GB LPDDR4x" },
          { title: "Hỗ trợ tối đa", info: "16GB" },
          { title: "Dung lượng SSD", info: "512GB (M.2 NVMe)" }
        ]),
        productImage: JSON.stringify("uploads\\product\\SurfaceLS2024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Microsoft Surface Laptop Studio-desc-a5a.webp",
          img1: "uploads\\product\\Microsoft Surface Laptop Studio-desc-5fa.webp",
          img2: "uploads\\product\\Microsoft Surface Laptop Studio-desc-c85.webp",
          img3: "uploads\\product\\Microsoft Surface Laptop Studio-desc-7df.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 5,
        name: 'MSI Prestige 14',
        productId: 'Prestige142024',
        brandId: 5,
        description: '',
        tagName: 'HIỆU NĂNG CAO - THIẾT KẾ ĐẸP',
        variants: JSON.stringify([
          { color: 'trắng', version: '2024', type: 'Chính hãng', price: '17490000', quantity: '30' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i5 1235U, 10C/12T' },
          { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.4GHz' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '16GB LPDDR4X 4266MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '512 GB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Prestige142024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\MSI Prestige 14-desc-a66.webp",
          img1: "uploads\\product\\MSI Prestige 14-desc-1d7.webp",
          img2: "uploads\\product\\MSI Prestige 14-desc-253.webp",
          img3: "uploads\\product\\MSI Prestige 14-desc-947.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 6,
        name: 'Acer Aspire 7',
        productId: 'Aspire72024',
        brandId: 6,
        description: '',
        tagName: 'HIỆU SUẤT CAO - GIÁ HỢP LÝ',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '15990000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'AMD Ryzen 5 5600H, 6C/12T' },
          { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.2GHz' },
          { title: 'Bộ nhớ đệm', info: '19MB' },
          { title: 'Card onboard', info: 'AMD Radeon Graphics' },
          { title: 'Card rời', info: 'NVIDIA GTX 1650' },
          { title: 'Dung lượng', info: '8GB DDR4 3200MHz' },
          { title: 'Hỗ trợ tối đa', info: '32GB' },
          { title: 'Dung lượng SSD', info: '512 GB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Aspire72024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Acer Aspire 7-desc-95f.webp",
          img1: "uploads\\product\\Acer Aspire 7-desc-5ea.webp",
          img2: "uploads\\product\\Acer Aspire 7-desc-647.webp",
          img3: "uploads\\product\\Acer Aspire 7-desc-97e.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 7,
        name: 'Razer Blade 14',
        productId: 'Blade142024',
        brandId: 7,
        description: '',
        tagName: 'CÔNG NGHỆ TIÊN PHONG',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '41990000', quantity: '20' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'AMD Ryzen 9 5900HX, 8C/16T' },
          { title: 'Tốc độ', info: '3.3GHz, Lên tới 4.6GHz' },
          { title: 'Bộ nhớ đệm', info: '20MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA RTX 3080' },
          { title: 'Dung lượng', info: '16GB DDR4 3200MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB' },
          { title: 'Dung lượng SSD', info: '1 TB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Blade142024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Razer Blade 14-desc-514.webp",
          img1: "uploads\\product\\Razer Blade 14-desc-5bb.webp",
          img2: "uploads\\product\\Razer Blade 14-desc-d2d.webp",
          img3: "uploads\\product\\Razer Blade 14-desc-ca4.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 8,
        name: 'GIGABYTE Aero 15',
        productId: 'Aero152024',
        brandId: 8,
        description: '',
        tagName: 'ĐA PHƯƠNG TIỆN - SÁNG TẠO',
        variants: JSON.stringify([
          { color: 'bạc', version: '2024', type: 'Chính hãng', price: '32990000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i9 12900HK, 14C/20T' },
          { title: 'Tốc độ', info: '3.8GHz, Lên tới 5.0GHz' },
          { title: 'Bộ nhớ đệm', info: '30MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA RTX 3070 Ti' },
          { title: 'Dung lượng', info: '32GB DDR5 4800MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB' },
          { title: 'Dung lượng SSD', info: '1 TB (M.2 NVMe)' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Aero152024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\GIGABYTE Aero 15-desc-8c4.webp",
          img1: "uploads\\product\\GIGABYTE Aero 15-desc-e83.webp",
          img2: "uploads\\product\\GIGABYTE Aero 15-desc-832.webp",
          img3: "uploads\\product\\GIGABYTE Aero 15-desc-c27.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 9,
        name: 'Dell XPS 13 Plus (2024)',
        productId: 'XPS13Plus2024',
        brandId: 2, 
        description: '',
        tagName: 'HIỆU SUẤT CAO - SÁNG TẠO TỐT',
        variants: JSON.stringify([
          { color: 'bạc', version: '2024', type: 'Chính hãng', price: '29990000', quantity: '34' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 1360P, 12C/16T' },
          { title: 'Tốc độ', info: '1.8GHz, Lên tới 5.0GHz' },
          { title: 'Bộ nhớ đệm', info: '18MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '16GB LPDDR5 5200MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '1TB (M.2 NVMe)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\XPS13Plus2024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-d8b.webp",
          img1: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-718.webp",
          img2: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-1ca.webp",
          img3: "uploads\\product\\Dell XPS 13 Plus (2024)-desc-4d2.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 10,
        name: 'MSI Stealth 16 Studio A13V',
        productId: 'Stealth16A13V',
        brandId: 5, 
        description: '',
        tagName: 'GAMING ĐỈNH CAO - ĐẲNG CẤP',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '45990000', quantity: '20' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i9 13900H, 14C/20T' },
          { title: 'Tốc độ', info: '2.6GHz, Lên tới 5.4GHz' },
          { title: 'Bộ nhớ đệm', info: '24MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA GeForce RTX 4070 8GB' },
          { title: 'Dung lượng', info: '32GB DDR5 5600MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB (2 khe nâng cấp)' },
          { title: 'Dung lượng SSD', info: '2TB (M.2 NVMe PCIe Gen 4)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\Stealth16A13V-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-3ea.webp",
          img1: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-b84.webp",
          img2: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-dd5.webp",
          img3: "uploads\\product\\MSI Stealth 16 Studio A13V-desc-1d6.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 11,
        name: 'Acer Swift 5 (2024)',
        productId: 'Swift52024',
        brandId: 6,
        description: '',
        tagName: 'NHẸ NHÀNG - MẠNH MẼ',
        variants: JSON.stringify([
          { color: 'xám', version: '2024', type: 'Chính hãng', price: '18990000', quantity: '40' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 1365U, 10C/12T' },
          { title: 'Tốc độ', info: '2.0GHz, Lên tới 4.9GHz' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '16GB LPDDR5 5200MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '512GB (M.2 NVMe PCIe Gen 4)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\Swift52024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Acer Swift 5 (2024)-desc-0e3.webp",
          img1: "uploads\\product\\Acer Swift 5 (2024)-desc-cbf.webp",
          img2: "uploads\\product\\Acer Swift 5 (2024)-desc-d46.webp",
          img3: "uploads\\product\\Acer Swift 5 (2024)-desc-431.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 12,
        name: 'VAIO SX12 (2024)',
        productId: 'SX122024',
        brandId: 9, 
        description: '',
        tagName: 'MỎNG NHẸ - HIỆU SUẤT CAO',
        variants: JSON.stringify([
          { color: 'bạc', version: '2024', type: 'Chính hãng', price: '23990000', quantity: '27' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i5 1235U, 10C/12T' },
          { title: 'Tốc độ', info: '1.8GHz, Lên tới 4.4GHz' },
          { title: 'Bộ nhớ đệm', info: '12MB' },
          { title: 'Card onboard', info: 'Intel Iris Xe Graphics' },
          { title: 'Card rời', info: 'Không' },
          { title: 'Dung lượng', info: '8GB LPDDR4x 4266MHz' },
          { title: 'Hỗ trợ tối đa', info: '16GB (Không thể nâng cấp)' },
          { title: 'Dung lượng SSD', info: '512GB (M.2 NVMe PCIe Gen 3)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\SX122024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\VAIO SX12 (2024)-desc-4b9.webp",
          img1: "uploads\\product\\VAIO SX12 (2024)-desc-53f.webp",
          img2: "uploads\\product\\VAIO SX12 (2024)-desc-b14.webp",
          img3: "uploads\\product\\VAIO SX12 (2024)-desc-282.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 13,
        name: 'Razer Blade 15 (2024)',
        productId: 'Blade152024',
        brandId: 7, 
        description: '',
        tagName: 'GAMING CAO CẤP - ĐỘ BỀN CAO',
        variants: JSON.stringify([
          { color: 'đen', version: '2024', type: 'Chính hãng', price: '43990000', quantity: '15' },
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: 'Intel Core i7 13700H, 14C/20T' },
          { title: 'Tốc độ', info: '2.2GHz, Lên tới 5.0GHz' },
          { title: 'Bộ nhớ đệm', info: '24MB' },
          { title: 'Card onboard', info: 'Không' },
          { title: 'Card rời', info: 'NVIDIA GeForce RTX 4080 12GB' },
          { title: 'Dung lượng', info: '32GB DDR5 5600MHz' },
          { title: 'Hỗ trợ tối đa', info: '64GB (2 khe nâng cấp)' },
          { title: 'Dung lượng SSD', info: '1TB (M.2 NVMe PCIe Gen 4)' },
        ]),
        productImage: JSON.stringify("uploads\\product\\Blade152024-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Razer Blade 15 (2024)-desc-2c8.webp",
          img1: "uploads\\product\\Razer Blade 15 (2024)-desc-23c.webp",
          img2: "uploads\\product\\Razer Blade 15 (2024)-desc-6fc.webp",
          img3: "uploads\\product\\Razer Blade 15 (2024)-desc-28a.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 14,
        name: 'Ghế Công Thái Học GAMI Crom',
        productId: 'GMCROM01CF',
        brandId: 5, 
        description: '',
        tagName: 'VỮNG TƯ THẾ VỮNG TƯƠNG LAI',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '43990000', quantity: '15' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '43990000', quantity: '10' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Khung lưng', info: 'Lưng trên có thể chỉnh lên xuống 5cm Phần cụm đỡ lưng dưới thiết kế 2 mảnh cánh bướm Butterfit 2D + cụm 4 lò xo ôm trọn phần thắt lưng' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm bền bỉ chống rỉ' },
          { title: 'Tựa đầu', info: 'HeadFlex 8D thông minh' },
          { title: 'Bệ tỳ tay', info: 'Xoay360 độ giúp đỡ khủy tay tốt nhất' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Cơ chế kháng lực Tension Control linh hoạt + Trụ thủy lực WITHUS Class 4. Multi Button bằng nút, Ngả lưng lên tới 4 cấp, giữ khóa ngả ở mỗi cấp' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GMCROM01CF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-61a.webp",
          img1: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-017.webp",
          img2: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-f0b.webp",
          img3: "uploads\\product\\Ghế Công Thái Học GAMI Crom-desc-6f2.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 15,
        name: 'Ghế Ergonomic ASUS',
        productId: 'GASER01',
        brandId: 1,
        description: '',
        tagName: 'Thiết Kế Tinh Tế, Tối Ưu Công Năng',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '69900000', quantity: '10' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '69900000', quantity: '8' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Khung lưng', info: 'Khung kim loại chắc chắn, có thể điều chỉnh độ cao' },
          { title: 'Chân ghế', info: 'Chân nhôm bền bỉ chống rỉ sét' },
          { title: 'Tựa đầu', info: 'Tựa đầu Ergonomic điều chỉnh theo nhiều hướng' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh linh hoạt' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Khả năng điều chỉnh thắng lực Tension Control' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GASER01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Ergonomic ASUS-desc-594.webp",
          img1: "uploads\\product\\Ghế Ergonomic ASUS-desc-c8e.webp",
          img2: "uploads\\product\\Ghế Ergonomic ASUS-desc-1e8.webp",
          img3: "uploads\\product\\Ghế Ergonomic ASUS-desc-b37.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 16,
        name: 'Ghế Gaming Dell',
        productId: 'GDEL01',
        brandId: 2,
        description: '',
        tagName: 'Ghế Gaming Siêu Bền, Cực Êm Ái',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '79900000', quantity: '12' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '79900000', quantity: '6' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu bền, chống bám bụi' },
          { title: 'Khung lưng', info: 'Khung kim loại cao cấp, có thể điều chỉnh độ ngả' },
          { title: 'Chân ghế', info: 'Chân nhôm chắc chắn, chịu lực tốt' },
          { title: 'Tựa đầu', info: 'Tựa đầu thông minh có thể điều chỉnh độ cao' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay 3D, điều chỉnh được cả chiều cao và góc nghiêng' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control, thích hợp cho mọi tư thế ngồi' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GDEL01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Gaming Dell-desc-9fd.webp",
          img1: "uploads\\product\\Ghế Gaming Dell-desc-260.webp",
          img2: "uploads\\product\\Ghế Gaming Dell-desc-a63.webp",
          img3: "uploads\\product\\Ghế Gaming Dell-desc-a61.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 17,
        name: 'Ghế Văn Phòng Lenovo',
        productId: 'GLEN01',
        brandId: 3,
        description: '',
        tagName: 'Tinh Tế, Đảm Bảo Sự Thoải Mái',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '54900000', quantity: '20' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '54900000', quantity: '15' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu cao cấp, không bám bụi' },
          { title: 'Khung lưng', info: 'Khung kim loại chống oxy hóa, điều chỉnh độ cao lưng' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm siêu bền' },
          { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh linh hoạt theo góc ngồi' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh lên xuống, xoay 360 độ' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control với nhiều cấp độ' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GLEN01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-c7d.webp",
          img1: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-455.webp",
          img2: "uploads\\product\\Ghế Văn Phòng Lenovo-desc-dd6.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 18,
        name: 'Ghế Văn Phòng Microsoft',
        productId: 'GMIC01',
        brandId: 4,
        description: '',
        tagName: 'Tiện Lợi, Hỗ Trợ Tốt Cho Mọi Tư Thế',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '59900000', quantity: '13' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '59900000', quantity: '10' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu cao cấp, không bám bụi' },
          { title: 'Khung lưng', info: 'Khung kim loại cao cấp, có thể điều chỉnh độ ngả' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm siêu bền' },
          { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh theo chiều cao và độ nghiêng' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh linh hoạt' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Khả năng điều chỉnh Tension Control' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GMIC01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-e64.webp",
          img1: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-0c4.webp",
          img2: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-bbd.webp",
          img3: "uploads\\product\\Ghế Văn Phòng Microsoft-desc-c80.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 19,
        name: 'Ghế Công Thái Học MSI',
        productId: 'GMSI01',
        brandId: 5,
        description: '',
        tagName: 'Ghế Công Thái Học Cao Cấp',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Không kèm kê chân', type: 'Chính hãng', price: '68900000', quantity: '10' },
          { color: 'Xám', version: 'Kèm kê chân', type: 'Chính hãng', price: '68900000', quantity: '8' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu lưng ghế', info: 'Lưới Solidmesh USA (chứng chỉ OEKO-TEX® STANDARD 100)' },
          { title: 'Chất liệu mâm ghế', info: 'Chất liệu bền, dễ vệ sinh' },
          { title: 'Khung lưng', info: 'Khung kim loại bền chắc, điều chỉnh độ cao' },
          { title: 'Chân ghế', info: 'Chân hợp kim nhôm chống rỉ sét' },
          { title: 'Tựa đầu', info: 'Tựa đầu điều chỉnh linh hoạt' },
          { title: 'Bệ tỳ tay', info: 'Bệ tỳ tay có thể điều chỉnh theo chiều cao và góc nghiêng' },
          { title: 'Piston', info: 'Samhongsa Class 4' },
          { title: 'Điều chỉnh thắng lực', info: 'Điều chỉnh Tension Control đa cấp độ' },
        ]),
        productImage: JSON.stringify("uploads\\product\\GMSI01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Ghế Công Thái Học MSI-desc-883.webp",
          img1: "uploads\\product\\Ghế Công Thái Học MSI-desc-dd7.webp",
          img2: "uploads\\product\\Ghế Công Thái Học MSI-desc-cfa.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 20,
        name: 'Bàn phím Cơ Monsgeek M1W SP Aluminium CNC',
        productId: 'FullMonsgeekM1w05NF',
        brandId: 3,
        description: '',
        tagName: 'PHÍM CƠ GIẢM SỐC - TĂNG TỐC CÔNG VIỆC',
        variants: JSON.stringify([
          { color: 'Trắng', version: 'M1W V3 SP - AKKO Piano V3 Pro Switch', type: 'Chính hãng', price: '1790000', quantity: '32' },
          { color: 'Hồng', version: 'M1W V5 SP - AKKO Piano V3 Pro Switch', type: 'Chính hãng', price: '1790000', quantity: '29' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'AKKO Piano V3 Pro - Hotswap' },
          { title: 'Kết nối qua:', info: 'Bluetooth/Wireless/USB C' },
          { title: 'Loại kết nối', info: 'Không Dây/Có dây, Bluetooth/Wireless/USB C' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '82Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ Custom' },
          { title: 'Layout', info: '75%' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullMonsgeekM1w05NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-de8.webp",
          img1: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-705.webp",
          img2: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-8f3.webp",
          img3: "uploads\\product\\Bàn phím Cơ Monsgeek M1W SP Aluminium CNC-desc-1d6.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 21,
        name: 'Bàn phím Cơ Razer BlackWidow V3',
        productId: 'FullRazerBWV3A01',
        brandId: 7,
        description: '',
        tagName: 'PHÍM CƠ CHẤT LƯỢNG CAO - DÀNH CHO GAME',
        variants: JSON.stringify([
          { color: 'Xanh', version: 'V3 SP - Razer Green Switch', type: 'Chính hãng', price: '2490000', quantity: '50' },
          { color: 'Đen', version: 'V3 SP - Razer Yellow Switch', type: 'Chính hãng', price: '2490000', quantity: '40' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Razer Green/Razer Yellow' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullRazerBWV3A01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-238.webp",
          img1: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-0ee.webp",
          img2: "uploads\\product\\Bàn phím Cơ Razer BlackWidow V3-desc-784.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 22,
        name: 'Bàn phím Cơ Logitech G Pro X',
        productId: 'FullLogitechGProX03',
        brandId: 6,
        description: '',
        tagName: 'PHÍM CƠ DÀNH CHO GAME THỦ - CHUYÊN NGHIỆP',
        variants: JSON.stringify([
          { color: 'Đen', version: 'G Pro X - Logitech GX Blue Switch', type: 'Chính hãng', price: '2790000', quantity: '35' },
          { color: 'Đen', version: 'G Pro X - Logitech GX Red Switch', type: 'Chính hãng', price: '2790000', quantity: '25' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Logitech GX Blue/GX Red' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '87 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Tenkeyless' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullLogitechGProX03-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-95e.webp",
          img1: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-b21.webp",
          img2: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-63d.webp",
          img3: "uploads\\product\\Bàn phím Cơ Logitech G Pro X-desc-157.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 23,
        name: 'Bàn phím Cơ SteelSeries Apex Pro',
        productId: 'FullSteelSeriesApexPro07',
        brandId: 8,
        description: '',
        tagName: 'PHÍM CƠ CAO CẤP - DÀNH CHO GAME VÀ CÔNG VIỆC',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Apex Pro - OmniPoint Switch', type: 'Chính hãng', price: '4990000', quantity: '12' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'OmniPoint Switch' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullSteelSeriesApexPro07-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-178.webp",
          img1: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-2bc.webp",
          img2: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-893.webp",
          img3: "uploads\\product\\Bàn phím Cơ SteelSeries Apex Pro-desc-1ec.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 24,
        name: 'Bàn phím Cơ Corsair K95 RGB Platinum',
        productId: 'FullCorsairK95RGBPlatinum04',
        brandId: 9,
        description: '',
        tagName: 'PHÍM CƠ RGB - ĐỘ BỀN CAO',
        variants: JSON.stringify([
          { color: 'Đen', version: 'K95 RGB - Cherry MX Speed Switch', type: 'Chính hãng', price: '3990000', quantity: '15' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Cherry MX Speed' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullCorsairK95RGBPlatinum04-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-949.webp",
          img1: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-bff.webp",
          img2: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-0ae.webp",
          img3: "uploads\\product\\Bàn phím Cơ Corsair K95 RGB Platinum-desc-c4c.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 25,
        name: 'Bàn phím Cơ AKKO 3068B Plus',
        productId: 'FullAKKO3068BPlus01',
        brandId: 5,
        description: '',
        tagName: 'PHÍM CƠ NHỎ GỌN - MÀU SẮC SÁNG BÓNG',
        variants: JSON.stringify([
          { color: 'Trắng', version: '3068B Plus - AKKO Switch', type: 'Chính hãng', price: '1690000', quantity: '60' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'AKKO Switch' },
          { title: 'Kết nối qua:', info: 'Bluetooth/Wireless/USB C' },
          { title: 'Loại kết nối', info: 'Không Dây/Có dây, Bluetooth/Wireless/USB C' },
          { title: 'Chất liệu khung', info: 'Nhựa ABS' },
          { title: 'Số nút bấm', info: '68 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: '65%' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullAKKO3068BPlus01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-af4.webp",
          img1: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-3e6.webp",
          img2: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-d72.webp",
          img3: "uploads\\product\\Bàn phím Cơ AKKO 3068B Plus-desc-e21.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 26,
        name: 'Bàn phím Cơ ASUS TUF K7',
        productId: 'FullASUSTUFK702',
        brandId: 1,
        description: '',
        tagName: 'PHÍM CƠ CHỐNG CHƠI GAME - GIẢM MỆT MỎI',
        variants: JSON.stringify([
          { color: 'Đen', version: 'TUF K7 - ROG RX Optical Switch', type: 'Chính hãng', price: '2890000', quantity: '45' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'ROG RX Optical' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullASUSTUFK702-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-e95.webp",
          img1: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-9b7.webp",
          img2: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-472.webp",
          img3: "uploads\\product\\Bàn phím Cơ ASUS TUF K7-desc-3ca.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 27,
        name: 'Bàn phím Cơ Dell Alienware AW510K',
        productId: 'FullDellAW510K04',
        brandId: 2,
        description: '',
        tagName: 'PHÍM CƠ CHỐNG LỖI NHẤN',
        variants: JSON.stringify([
          { color: 'Đen', version: 'AW510K - Cherry MX Brown', type: 'Chính hãng', price: '3590000', quantity: '20' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Cherry MX Brown' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullDellAW510K04-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-416.webp",
          img1: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-17f.webp",
          img2: "uploads\\product\\Bàn phím Cơ Dell Alienware AW510K-desc-dbd.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 28,
        name: 'Bàn phím Cơ Microsoft Modern',
        productId: 'FullMicrosoftModern05',
        brandId: 4,
        description: '',
        tagName: 'PHÍM CƠ NHỎ GỌN DÀNH CHO MÁY TÍNH BÀN',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Modern - Microsoft Custom Switch', type: 'Chính hãng', price: '1990000', quantity: '38' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Microsoft Custom Switch' },
          { title: 'Kết nối qua:', info: 'Bluetooth/USB C' },
          { title: 'Loại kết nối', info: 'Không dây/Có dây' },
          { title: 'Chất liệu khung', info: 'Nhựa ABS' },
          { title: 'Số nút bấm', info: '80 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: '75%' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullMicrosoftModern05-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-fea.webp",
          img1: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-857.webp",
          img2: "uploads\\product\\Bàn phím Cơ Microsoft Modern-desc-fd5.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 29,
        name: 'Bàn phím Cơ MSI Vigor GK30',
        productId: 'FullMSIVigorGK3009',
        brandId: 5,
        description: '',
        tagName: 'PHÍM CƠ BỀN BỈ - ĐẶC BIỆT DÀNH CHO GAME',
        variants: JSON.stringify([
          { color: 'Đen', version: 'GK30 - Blue Switch', type: 'Chính hãng', price: '1590000', quantity: '60' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Blue Switch' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhựa ABS' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullMSIVigorGK3009-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-d77.webp",
          img1: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-e43.webp",
          img2: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-c0d.webp",
          img3: "uploads\\product\\Bàn phím Cơ MSI Vigor GK30-desc-706.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 30,
        name: 'bàn phím Cơ GIGABYTE AORUS K9',
        productId: 'FullGigabyteAORUSK904',
        brandId: 8,
        description: '',
        tagName: 'PHÍM CƠ RGB - TỐC ĐỘ CAO',
        variants: JSON.stringify([
          { color: 'Đen', version: 'K9 - Cherry MX Red', type: 'Chính hãng', price: '3190000', quantity: '30' },
        ]),
        specifications: JSON.stringify([
          { title: 'Loại switch', info: 'Cherry MX Red' },
          { title: 'Kết nối qua:', info: 'USB C' },
          { title: 'Loại kết nối', info: 'Có dây' },
          { title: 'Chất liệu khung', info: 'Nhôm CNC' },
          { title: 'Số nút bấm', info: '104 Nút' },
          { title: 'Loại bàn phím', info: 'Phím cơ RGB' },
          { title: 'Layout', info: 'Full-size' },
          { title: 'Tương thích', info: 'Windows/MacOS' },
        ]),
        productImage: JSON.stringify("uploads\\product\\FullGigabyteAORUSK904-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-a69.webp",
          img1: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-6b6.webp",
          img2: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-650.webp",
          img3: "uploads\\product\\Bàn phím Cơ GIGABYTE AORUS K9-desc-e8c.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 31,
        name: 'Loa Razer Willen',
        productId: 'MarshallWillen01NF',
        brandId: 7,
        description: '',
        tagName: 'MARSHALL SALE TO - LO CHI VỀ GIÁ',
        variants: JSON.stringify([
          { color: 'Đen', version: 'A2 - MX Black', type: 'Chính hãng', price: '2390000', quantity: '21' },
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '10,05cm' },
          { title: 'Chiều rộng:', info: '4,04cm' },
          { title: 'Chiều cao', info: '10,16cm' },
          { title: 'Trọng lượng', info: '0.8kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: 'Wireless Dual (kết nối 2 loa)' },
          { title: 'Tổng công suất', info: '10W' },
        ]),
        productImage: JSON.stringify("uploads\\product\\MarshallWillen01NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Razer Willen-desc-d29.webp",
          img1: "uploads\\product\\Loa Razer Willen-desc-9ba.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 32,
        name: 'Loa JBL Flip 5',
        productId: 'JBLFlip5NF',
        brandId: 1,
        description: '',
        tagName: 'SALE JBL LOA BLUETOOTH',
        variants: JSON.stringify([
          { color: 'Xanh dương', version: 'JBL Flip 5', type: 'Chính hãng', price: '2990000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '18,4cm' },
          { title: 'Chiều rộng:', info: '6,9cm' },
          { title: 'Chiều cao', info: '5,3cm' },
          { title: 'Trọng lượng', info: '0.96kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: 'Bass Radiator' },
          { title: 'Tổng công suất', info: '20W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\JBLFlip5NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa JBL Flip 5-desc-dc1.webp",
          img1: "uploads\\product\\Loa JBL Flip 5-desc-02f.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 33,
        name: 'Loa Sony SRS-XB12',
        productId: 'SonySRSXB12NF',
        brandId: 2,
        description: '',
        tagName: 'SALE LOA SONY',
        variants: JSON.stringify([
          { color: 'Đỏ', version: 'SRS-XB12', type: 'Chính hãng', price: '1690000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '9,5cm' },
          { title: 'Chiều rộng:', info: '9,5cm' },
          { title: 'Chiều cao', info: '9,5cm' },
          { title: 'Trọng lượng', info: '0.25kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: 'Extra Bass' },
          { title: 'Tổng công suất', info: '5W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\SonySRSXB12NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Sony SRS-XB12-desc-c6e.webp",
          img1: "uploads\\product\\Loa Sony SRS-XB12-desc-440.webp",
          img2: "uploads\\product\\Loa Sony SRS-XB12-desc-1cf.webp",
          img3: "uploads\\product\\Loa Sony SRS-XB12-desc-872.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 34,
        name: 'Loa Bose SoundLink Revolve+',
        productId: 'BoseSoundLinkRevolve+01NF',
        brandId: 4,
        description: '',
        tagName: 'SALE LOA BOSE',
        variants: JSON.stringify([
          { color: 'Đen', version: 'SoundLink Revolve+', type: 'Chính hãng', price: '7490000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '18,4cm' },
          { title: 'Chiều rộng:', info: '10,5cm' },
          { title: 'Chiều cao', info: '18,4cm' },
          { title: 'Trọng lượng', info: '1.5kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: '360° Sound' },
          { title: 'Tổng công suất', info: '30W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\BoseSoundLinkRevolve+01NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Bose SoundLink Revolve+-desc-cd8.webp",
          img1: "uploads\\product\\Loa Bose SoundLink Revolve+-desc-d3d.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 35,
        name: 'Loa Ultimate Ears Wonderboom 2',
        productId: 'UEWonderboom2NF',
        brandId: 5,
        description: '',
        tagName: 'SALE LOA UE',
        variants: JSON.stringify([
          { color: 'Xanh dương', version: 'Wonderboom 2', type: 'Chính hãng', price: '2890000', quantity: '18' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều dài', info: '10cm' },
          { title: 'Chiều rộng:', info: '10cm' },
          { title: 'Chiều cao', info: '10cm' },
          { title: 'Trọng lượng', info: '0.5kg' },
          { title: 'Loại kết nối', info: 'Không dây' },
          { title: 'Kết nối qua', info: 'Bluetooth' },
          { title: 'Công nghệ âm thanh', info: '360° Sound' },
          { title: 'Tổng công suất', info: '20W' }
        ]),
        productImage: JSON.stringify("uploads\\product\\UEWonderboom2NF-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-861.webp",
          img1: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-a2b.webp",
          img2: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-5c5.webp",
          img3: "uploads\\product\\Loa Ultimate Ears Wonderboom 2-desc-9db.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 36,
        name: 'LG Gram +View 2023',
        productId: 'GramView2301CO',
        brandId: 9,
        description: '',
        tagName: 'SALE LOA UE',
        variants: JSON.stringify([
          { color: 'Bạc', version: 'Wo2 simple', type: 'Chính hãng', price: '9890000', quantity: '5' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước có chân đế', info: '36cm 24.55cm 0.83cm' },
          { title: 'Trọng lượng:', info: '0.66kg' },
          { title: 'Kích thước màn hình', info: '16' },
          { title: 'Độ phân giải', info: '2560 x 1600' },
          { title: 'Tỷ lệ màn hình', info: '16:10' },
          { title: 'Lớp phủ bề mặt', info: 'Chống chói' },
          { title: 'Tấm nền', info: 'IPS' },
          { title: 'Tần số quét', info: '60Hz' }
        ]),
        productImage: JSON.stringify("uploads\\product\\GramView2301CO-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\VAIO Gram +View 2023-desc-37e.webp",
          img1: "uploads\\product\\VAIO Gram +View 2023-desc-2c9.webp",
          img2: "uploads\\product\\VAIO Gram +View 2023-desc-33e.webp",
          img3: "uploads\\product\\VAIO Gram +View 2023-desc-3a7.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 37,
        name: 'Balo ASUS Rog Strix',
        productId: 'RogBag2302BL',
        brandId: 1,
        description: '',
        tagName: 'SALE BALO GAMING',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Pro Gaming', type: 'Chính hãng', price: '1990000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu', info: 'Vải chống nước' },
          { title: 'Kích thước', info: '50cm x 32cm x 18cm' },
          { title: 'Trọng lượng', info: '1.2kg' },
          { title: 'Dung tích', info: '25L' }
        ]),
        productImage: JSON.stringify("uploads\\product\\RogBag2302BL-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Balo ASUS Rog Strix-desc-20e.webp",
          img1: "uploads\\product\\Balo ASUS Rog Strix-desc-de0.webp",
          img2: "uploads\\product\\Balo ASUS Rog Strix-desc-1bf.webp",
          img3: "uploads\\product\\Balo ASUS Rog Strix-desc-83a.webp" 
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 38,
        name: 'Túi Lenovo ThinkPad X1',
        productId: 'ThinkPadX1Case01',
        brandId: 3,
        description: '',
        tagName: 'SALE TÚI LAPTOP',
        variants: JSON.stringify([
          { color: 'Xám', version: 'Classic', type: 'Chính hãng', price: '1390000', quantity: '20' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu', info: 'Polyester' },
          { title: 'Kích thước', info: '40cm x 30cm x 8cm' },
          { title: 'Trọng lượng', info: '0.9kg' },
          { title: 'Dung tích', info: '15L' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ThinkPadX1Case01-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-c0a.webp",
          img1: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-bed.webp",
          img2: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-2a1.webp",
          img3: "uploads\\product\\Túi Lenovo ThinkPad X1-desc-3c3.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 39,
        name: 'Balo Dell XPS Travel',
        productId: 'XPSBagTravel2023',
        brandId: 2,
        description: '',
        tagName: 'GIẢM GIÁ PHỤ KIỆN',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Business', type: 'Chính hãng', price: '1590000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chất liệu', info: 'Canvas chống nước' },
          { title: 'Kích thước', info: '45cm x 28cm x 15cm' },
          { title: 'Trọng lượng', info: '1kg' },
          { title: 'Dung tích', info: '20L' }
        ]),
        productImage: JSON.stringify("uploads\\product\\XPSBagTravel2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Balo Dell XPS Travel-desc-25f.webp",
          img1: "uploads\\product\\Balo Dell XPS Travel-desc-479.webp",
          img2: "uploads\\product\\Balo Dell XPS Travel-desc-1df.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 40,
        name: 'Bàn nâng hạ ASUS ProDesk',
        productId: 'ASUSDeskLift2023',
        brandId: 1, // ASUS
        description: 'Bàn nâng hạ chuyên dụng cho làm việc và học tập.',
        tagName: 'GIẢM GIÁ THIẾT BỊ',
        variants: JSON.stringify([
          { color: 'Trắng', version: 'Standard', type: 'Chính hãng', price: '5290000', quantity: '10' },
          { color: 'Đen', version: 'Premium', type: 'Chính hãng', price: '6290000', quantity: '8' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước mặt bàn', info: '120cm x 60cm' },
          { title: 'Tải trọng tối đa', info: '80kg' },
          { title: 'Chất liệu', info: 'Gỗ MDF và khung thép' },
          { title: 'Điều chỉnh độ cao', info: '70cm - 120cm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ASUSDeskLift2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-b0e.webp",
          img1: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-da4.webp",
          img2: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-4cc.webp",
          img3: "uploads\\product\\Bàn nâng hạ ASUS ProDesk-desc-784.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 41,
        name: 'Bàn nâng hạ Dell ProLift',
        productId: 'DellDeskLift2023',
        brandId: 2, // Dell
        description: 'Bàn nâng hạ bền bỉ, phù hợp với mọi không gian.',
        tagName: 'GIẢM GIÁ THIẾT BỊ',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Basic', type: 'Chính hãng', price: '4990000', quantity: '12' },
          { color: 'Xám', version: 'Advanced', type: 'Chính hãng', price: '5990000', quantity: '9' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước mặt bàn', info: '140cm x 70cm' },
          { title: 'Tải trọng tối đa', info: '100kg' },
          { title: 'Chất liệu', info: 'Gỗ công nghiệp phủ Melamine' },
          { title: 'Điều chỉnh độ cao', info: '65cm - 115cm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DellDeskLift2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-82b.webp",
          img1: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-5e0.webp",
          img2: "uploads\\product\\Bàn nâng hạ Dell ProLift-desc-e04.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 42,
        name: 'Bàn nâng hạ Lenovo FlexLift',
        productId: 'LenovoDeskLift2023',
        brandId: 3, // Lenovo
        description: 'Thiết kế hiện đại, đa năng, giúp tối ưu không gian làm việc.',
        tagName: 'GIẢM GIÁ THIẾT BỊ',
        variants: JSON.stringify([
          { color: 'Trắng', version: 'Standard', type: 'Chính hãng', price: '5490000', quantity: '10' },
          { color: 'Đen', version: 'Deluxe', type: 'Chính hãng', price: '6490000', quantity: '7' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước mặt bàn', info: '160cm x 80cm' },
          { title: 'Tải trọng tối đa', info: '120kg' },
          { title: 'Chất liệu', info: 'Gỗ Plywood và khung hợp kim nhôm' },
          { title: 'Điều chỉnh độ cao', info: '60cm - 125cm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\LenovoDeskLift2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-aad.webp",
          img1: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-8c7.webp",
          img2: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-ed1.webp",
          img3: "uploads\\product\\Bàn nâng hạ Lenovo FlexLift-desc-eeb.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 43,
        name: 'Sạc nhanh Dell PowerCharge',
        productId: 'DellCharger2023',
        brandId: 2, // Dell
        description: 'Sạc nhanh và an toàn cho các thiết bị của bạn.',
        tagName: 'PHỤ KIỆN SẠC',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Type-C', type: 'Chính hãng', price: '990000', quantity: '25' },
          { color: 'Trắng', version: 'USB-A', type: 'Chính hãng', price: '890000', quantity: '20' }
        ]),
        specifications: JSON.stringify([
          { title: 'Công suất', info: '65W' },
          { title: 'Loại cổng', info: 'Type-C, USB-A' },
          { title: 'Bảo hành', info: '12 tháng' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DellCharger2023-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 44,
        name: 'Kệ màn hình ASUS MonitorStand Pro',
        productId: 'ASUSMonitorStand2023',
        brandId: 1, // ASUS
        description: 'Kệ màn hình chắc chắn, hỗ trợ công thái học tối ưu.',
        tagName: 'PHỤ KIỆN VĂN PHÒNG',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Standard', type: 'Chính hãng', price: '1290000', quantity: '15' },
          { color: 'Xám', version: 'Premium', type: 'Chính hãng', price: '1590000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '60cm x 20cm x 10cm' },
          { title: 'Tải trọng', info: '20kg' },
          { title: 'Chất liệu', info: 'Hợp kim nhôm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ASUSMonitorStand2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-174.webp",
          img1: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-f5e.webp",
          img2: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-216.webp",
          img3: "uploads\\product\\Kệ màn hình ASUS MonitorStand Pro-desc-5fa.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 45,
        name: 'Giá đỡ tai nghe MSI SoundStand',
        productId: 'MSISoundStand2023',
        brandId: 5, // MSI
        description: 'Giá đỡ tai nghe tiện dụng, phong cách.',
        tagName: 'PHỤ KIỆN ÂM THANH',
        variants: JSON.stringify([
          { color: 'Đen', version: 'Standard', type: 'Chính hãng', price: '590000', quantity: '30' },
          { color: 'Đỏ', version: 'Gaming', type: 'Chính hãng', price: '690000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'Chiều cao', info: '25cm' },
          { title: 'Chất liệu', info: 'Nhựa ABS cao cấp' },
          { title: 'Khối lượng', info: '0.5kg' }
        ]),
        productImage: JSON.stringify("uploads\\product\\MSISoundStand2023-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-91c.webp",
          img1: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-d36.webp",
          img2: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-233.webp",
          img3: "uploads\\product\\Giá đỡ tai nghe MSI SoundStand-desc-1be.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 46,
        name: 'Kính thực tế ảo Oculus Quest 2',
        productId: 'OculusQuest2',
        brandId: 7, // Razer
        description: 'Kính thực tế ảo thế hệ mới với hiệu suất mạnh mẽ và chất lượng hình ảnh đỉnh cao.',
        tagName: 'THỰC TẾ ẢO',
        variants: JSON.stringify([
          { color: "Đen", storage: '128GB', version: 'Standard', type: 'Chính hãng', price: '8500000', quantity: '20' },
          { color: "Trắng", storage: '256GB', version: 'Pro', type: 'Chính hãng', price: '10500000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Trọng lượng', info: '503g' },
          { title: 'Thời lượng pin', info: '2-3 giờ' },
          { title: 'Độ phân giải', info: '1832x1920 mỗi mắt' }
        ]),
        productImage: JSON.stringify("uploads\\product\\OculusQuest2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-a89.webp",
          img1: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-9ad.webp",
          img2: "uploads\\product\\Kính thực tế ảo Oculus Quest 2-desc-b60.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 47,
        name: 'Kính thực tế ảo HTC Vive Pro 2',
        productId: 'HTCVivePro2',
        brandId: 6, // Acer
        description: 'HTC Vive Pro 2 mang đến trải nghiệm VR chất lượng cao với thiết kế thoải mái và hiệu năng mạnh mẽ.',
        tagName: 'THỰC TẾ ẢO',
        variants: JSON.stringify([
          { color: "Đen", version: 'Standard', type: 'Chính hãng', price: '24000000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '4896x2448' },
          { title: 'Tần số quét', info: '120Hz' },
          { title: 'Hệ điều hành hỗ trợ', info: 'Windows 10' }
        ]),
        productImage: JSON.stringify("uploads\\product\\HTCVivePro2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-458.webp",
          img1: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-060.webp",
          img2: "uploads\\product\\Kính thực tế ảo HTC Vive Pro 2-desc-1cc.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 48,
        name: 'Kính thực tế ảo PlayStation VR2',
        productId: 'PSVR2',
        brandId: 4, // Microsoft
        description: 'Trải nghiệm thực tế ảo đỉnh cao với PlayStation VR2 dành riêng cho hệ máy PS5.',
        tagName: 'THỰC TẾ ẢO',
        variants: JSON.stringify([
          { color: "Đen", version: 'Bundle', type: 'Chính hãng', price: '14990000', quantity: '12' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '2000x2040 mỗi mắt' },
          { title: 'Góc nhìn', info: '110 độ' },
          { title: 'Hỗ trợ âm thanh', info: '3D Audio' }
        ]),
        productImage: JSON.stringify("uploads\\product\\PSVR2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-f0c.webp",
          img1: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-9c5.webp",
          img2: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-34d.webp",
          img3: "uploads\\product\\Kính thực tế ảo PlayStation VR2-desc-82b.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 49,
        name: 'Phần mềm thiết kế đồ họa CorelDRAW 2024',
        productId: 'Corel2024',
        brandId: 2, // Dell
        description: 'Công cụ thiết kế đồ họa mạnh mẽ, phù hợp cho nhà thiết kế chuyên nghiệp.',
        tagName: 'PHẦN MỀM',
        variants: JSON.stringify([
          { version: 'Standard', type: 'Digital', price: '6990000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS' },
          { title: 'Phiên bản', info: '2024' },
          { title: 'Ngôn ngữ', info: 'Tiếng Anh' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Corel2024-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 50,
        name: 'Phần mềm văn phòng Microsoft Office 2024',
        productId: 'Office2024',
        brandId: 4, // Microsoft
        description: 'Bộ phần mềm văn phòng phổ biến nhất với tính năng cải tiến.',
        tagName: 'PHẦN MỀM',
        variants: JSON.stringify([
          { version: 'Home & Student', type: 'Digital', price: '2590000', quantity: '100' }
        ]),
        specifications: JSON.stringify([
          { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS' },
          { title: 'Phiên bản', info: '2024' },
          { title: 'Ngôn ngữ', info: 'Đa ngôn ngữ' }
        ]),
        productImage: JSON.stringify("uploads\\product\\Office2024-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 51,
        name: 'Phần mềm bảo mật Kaspersky Total Security',
        productId: 'KTS2024',
        brandId: 8, // GIGABYTE
        description: 'Giải pháp bảo mật toàn diện dành cho cá nhân và doanh nghiệp.',
        tagName: 'PHẦN MỀM',
        variants: JSON.stringify([
          { version: '1 Device', type: 'Digital', price: '890000', quantity: '150' }
        ]),
        specifications: JSON.stringify([
          { title: 'Hỗ trợ nền tảng', info: 'Windows, macOS, Android, iOS' },
          { title: 'Phiên bản', info: '2024' },
          { title: 'Ngôn ngữ', info: 'Đa ngôn ngữ' }
        ]),
        productImage: JSON.stringify("uploads\\product\\KTS2024-main.jpg"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 52,
        name: 'Chuột gaming Logitech G502 Hero',
        productId: 'G502HERO',
        brandId: 1, // ASUS
        description: 'Chuột gaming hiệu suất cao với cảm biến Hero và độ chính xác tối ưu.',
        tagName: 'CHUỘT',
        variants: JSON.stringify([
          { color:"Đen", version: 'Standard', type: 'Wired', price: '1490000', quantity: '100' }
        ]),
        specifications: JSON.stringify([
          { title: 'Cảm biến', info: 'Hero 25K' },
          { title: 'Đèn LED', info: 'RGB 16.8 triệu màu' },
          { title: 'Kết nối', info: 'Có dây USB' }
        ]),
        productImage: JSON.stringify("uploads\\product\\G502HERO-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-578.webp",
          img1: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-a16.webp",
          img2: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-fd7.webp",
          img3: "uploads\\product\\Chuột gaming Logitech G502 Hero-desc-240.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 53,
        name: 'Chuột không dây Microsoft Surface Mouse',
        productId: 'SURFACEMOUSE',
        brandId: 4, // Microsoft
        description: 'Thiết kế thanh lịch, tối ưu cho trải nghiệm làm việc và giải trí.',
        tagName: 'CHUỘT',
        variants: JSON.stringify([
          { color: "Đen", version: 'Bluetooth', type: 'Wireless', price: '890000', quantity: '75' }
        ]),
        specifications: JSON.stringify([
          { title: 'Công nghệ', info: 'Bluetooth 4.0' },
          { title: 'Trọng lượng', info: '90g' },
          { title: 'Pin', info: '2 x AAA, tuổi thọ lên tới 12 tháng' }
        ]),
        productImage: JSON.stringify("uploads\\product\\SURFACEMOUSE-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 54,
        name: 'Chuột gaming Razer DeathAdder V2',
        productId: 'DEATHADDERV2',
        brandId: 7, // Razer
        description: 'Dòng chuột gaming huyền thoại với hiệu suất và thiết kế tối ưu.',
        tagName: 'CHUỘT',
        variants: JSON.stringify([
          { color: "Đen", version: 'Standard', type: 'Wired', price: '1590000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'Cảm biến', info: 'Focus+ Optical' },
          { title: 'DPI tối đa', info: '20000' },
          { title: 'Trọng lượng', info: '82g' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DEATHADDERV2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-477.webp",
          img1: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-d1e.webp",
          img2: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-15f.webp",
          img3: "uploads\\product\\Chuột gaming Razer DeathAdder V2-desc-59a.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 55,
        name: 'PlayStation 5',
        productId: 'PS5',
        brandId: 8, // GIGABYTE
        description: 'Máy chơi game thế hệ mới với hiệu suất cao và đồ họa vượt trội.',
        tagName: 'CONSOLE',
        variants: JSON.stringify([
          { color: "Đen", version: 'Standard', type: 'Disk Edition', price: '14990000', quantity: '30' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: '8x Zen 2 Cores at 3.5GHz' },
          { title: 'GPU', info: '10.28 TFLOPs, RDNA 2 Architecture' },
          { title: 'Storage', info: '825GB SSD' }
        ]),
        productImage: JSON.stringify("uploads\\product\\PS5-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\PlayStation 5-desc-ef0.webp",
          img1: "uploads\\product\\PlayStation 5-desc-05d.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 56,
        name: 'Xbox Series X',
        productId: 'XBOXSERIESX',
        brandId: 4, // Microsoft
        description: 'Cỗ máy chơi game mạnh mẽ nhất từ trước đến nay, trải nghiệm chơi game 4K tuyệt hảo.',
        tagName: 'CONSOLE',
        variants: JSON.stringify([
          { color: "Đen", version: 'Standard', type: 'Disk Edition', price: '13990000', quantity: '40' }
        ]),
        specifications: JSON.stringify([
          { title: 'CPU', info: '8x Zen 2 Cores at 3.8GHz' },
          { title: 'GPU', info: '12 TFLOPs, RDNA 2 Architecture' },
          { title: 'Storage', info: '1TB SSD' }
        ]),
        productImage: JSON.stringify("uploads\\product\\XBOXSERIESX-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Xbox Series X-desc-10c.webp",
          img1: "uploads\\product\\Xbox Series X-desc-e11.webp",
          img2: "uploads\\product\\Xbox Series X-desc-de8.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 57,
        name: 'Nintendo Switch OLED',
        productId: 'SWITCHOLED',
        brandId: 9, // VAIO
        description: 'Phiên bản nâng cấp của Nintendo Switch với màn hình OLED rực rỡ.',
        tagName: 'CONSOLE',
        variants: JSON.stringify([
          { color: "Đen", version: 'Standard', type: 'Handheld & Docked', price: '9500000', quantity: '60' }
        ]),
        specifications: JSON.stringify([
          { title: 'Màn hình', info: '7-inch OLED' },
          { title: 'Dung lượng pin', info: '4.5 - 9 giờ' },
          { title: 'Bộ nhớ trong', info: '64GB' }
        ]),
        productImage: JSON.stringify("uploads\\product\\SWITCHOLED-main.webp"),
        imageUrl: JSON.stringify({
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 58,
        name: 'VAIO VisionBeam X2',
        productId: 'VBEAMX2',
        brandId: 9, // VAIO
        description: 'Máy chiếu cao cấp với độ phân giải 4K và công nghệ HDR.',
        tagName: 'PROJECTOR',
        variants: JSON.stringify([
          { color: "Trắng", version: 'Deluxe', type: 'Home Cinema', price: '25000000', quantity: '30' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '4K UHD' },
          { title: 'Độ sáng', info: '3000 Lumens' },
          { title: 'Kết nối', info: 'HDMI, WiFi, Bluetooth' }
        ]),
        productImage: JSON.stringify("uploads\\product\\VBEAMX2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\VAIO VisionBeam X2-desc-de7.webp",
          img1: "uploads\\product\\VAIO VisionBeam X2-desc-f0d.webp",
          img2: "uploads\\product\\VAIO VisionBeam X2-desc-0a4.webp",
          img3: "uploads\\product\\VAIO VisionBeam X2-desc-6fe.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 59,
        name: 'ASUS ProBeam Lite',
        productId: 'APBLITE',
        brandId: 1, // ASUS
        description: 'Máy chiếu nhỏ gọn với khả năng trình chiếu sắc nét và dễ di chuyển.',
        tagName: 'PROJECTOR',
        variants: JSON.stringify([
          { color: "Trắng", version: 'Compact', type: 'Portable', price: '12000000', quantity: '50' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: '1080p Full HD' },
          { title: 'Độ sáng', info: '2500 Lumens' },
          { title: 'Kết nối', info: 'HDMI, USB-C' }
        ]),
        productImage: JSON.stringify("uploads\\product\\APBLITE-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\ASUS ProBeam Lite-desc-08a.webp",
          img1: "uploads\\product\\ASUS ProBeam Lite-desc-4d0.webp",
          img2: "uploads\\product\\ASUS ProBeam Lite-desc-7db.webp",
          img3: "uploads\\product\\ASUS ProBeam Lite-desc-aa6.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 60,
        name: 'Lenovo BrightCast P7',
        productId: 'LBCP7',
        brandId: 3, // Lenovo
        description: 'Máy chiếu văn phòng với độ sáng cao và tuổi thọ bóng đèn lâu dài.',
        tagName: 'PROJECTOR',
        variants: JSON.stringify([
          { color: "Xám", version: 'Professional', type: 'Office', price: '17000000', quantity: '40' }
        ]),
        specifications: JSON.stringify([
          { title: 'Độ phân giải', info: 'WUXGA (1920x1200)' },
          { title: 'Độ sáng', info: '4000 Lumens' },
          { title: 'Kết nối', info: 'HDMI, VGA, LAN' }
        ]),
        productImage: JSON.stringify("uploads\\product\\LBCP7-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Lenovo BrightCast P7-desc-380.webp",
          img1: "uploads\\product\\Lenovo BrightCast P7-desc-878.webp",
          img2: "uploads\\product\\Lenovo BrightCast P7-desc-bd7.webp",
          img3: "uploads\\product\\Lenovo BrightCast P7-desc-151.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 61,
        name: 'ASUS LockerPro A3',
        productId: 'ALPA3',
        brandId: 1, // ASUS
        description: 'Hộc tủ bảo mật cao dành cho văn phòng hiện đại.',
        tagName: 'FILING_CABINET',
        variants: JSON.stringify([
          { color: "Đen", version: 'Standard', type: 'Office', price: '9000000', quantity: '25' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '600x800x450mm' },
          { title: 'Chất liệu', info: 'Thép không gỉ' },
          { title: 'Tính năng', info: 'Khóa điện tử, chống nước' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ALPA3-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\ASUS LockerPro A3-desc-bb0.webp",
          img1: "uploads\\product\\ASUS LockerPro A3-desc-c92.webp",
          img2: "uploads\\product\\ASUS LockerPro A3-desc-255.webp",
          img3: "uploads\\product\\ASUS LockerPro A3-desc-cfa.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 62,
        name: 'Dell SafeBox D9',
        productId: 'DSBD9',
        brandId: 2, // Dell
        description: 'Hộc tủ văn phòng bền bỉ với không gian lưu trữ rộng.',
        tagName: 'FILING_CABINET',
        variants: JSON.stringify([
          { color: "Đen", version: 'Premium', type: 'Office', price: '12000000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '700x900x500mm' },
          { title: 'Chất liệu', info: 'Gỗ ép cao cấp' },
          { title: 'Tính năng', info: 'Khóa từ, ngăn chống trộm' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DSBD9-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell SafeBox D9-desc-d65.webp",
          img1: "uploads\\product\\Dell SafeBox D9-desc-ffd.webp",
          img2: "uploads\\product\\Dell SafeBox D9-desc-b6d.webp",
          img3: "uploads\\product\\Dell SafeBox D9-desc-e20.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 63,
        name: 'Acer SecureVault S2',
        productId: 'ACSVS2',
        brandId: 6, // Acer
        description: 'Hộc tủ thông minh với thiết kế hiện đại và công nghệ tiên tiến.',
        tagName: 'FILING_CABINET',
        variants: JSON.stringify([
          { color: "Đen", version: 'Advanced', type: 'Office', price: '14000000', quantity: '10' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '800x1000x600mm' },
          { title: 'Chất liệu', info: 'Nhôm hợp kim' },
          { title: 'Tính năng', info: 'Cảm biến vân tay, bảo vệ RFID' }
        ]),
        productImage: JSON.stringify("uploads\\product\\ACSVS2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Acer SecureVault S2-desc-174.webp",
          img1: "uploads\\product\\Acer SecureVault S2-desc-662.webp",
          img2: "uploads\\product\\Acer SecureVault S2-desc-220.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 64,
        name: 'Dell LaptopStand Flex',
        productId: 'DLFS1',
        brandId: 2, // Dell
        description: 'Giá đỡ laptop với thiết kế gọn nhẹ, dễ dàng điều chỉnh để phù hợp với nhiều góc nhìn.',
        tagName: 'LAPTOP_STAND',
        variants: JSON.stringify([
          { color: "Trắng", version: 'Basic', type: 'Home', price: '6000000', quantity: '15' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '350x250x50mm' },
          { title: 'Chất liệu', info: 'Hợp kim nhôm' },
          { title: 'Tính năng', info: 'Điều chỉnh góc độ, chống trượt' }
        ]),
        productImage: JSON.stringify("uploads\\product\\DLFS1-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Dell LaptopStand Flex-desc-d0d.webp",
          img1: "uploads\\product\\Dell LaptopStand Flex-desc-ea0.webp",
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 65,
        name: 'Lenovo TabletStand Pro',
        productId: 'LTS1',
        brandId: 3, // Lenovo
        description: 'Giá đỡ tablet chuyên nghiệp với thiết kế chắc chắn, hỗ trợ đa thiết bị.',
        tagName: 'TABLET_STAND',
        variants: JSON.stringify([
          { color: "Xám", version: 'Premium', type: 'Office', price: '8000000', quantity: '12' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '200x150x40mm' },
          { title: 'Chất liệu', info: 'Hợp kim thép' },
          { title: 'Tính năng', info: 'Chống rung, xoay 360 độ' }
        ]),
        productImage: JSON.stringify("uploads\\product\\LTS1-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Lenovo TabletStand Pro-desc-69f.webp",
          img1: "uploads\\product\\Lenovo TabletStand Pro-desc-6ed.webp",
          img2: "uploads\\product\\Lenovo TabletStand Pro-desc-dd6.webp",
          img3: "uploads\\product\\Lenovo TabletStand Pro-desc-22c.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 66,
        name: 'Razer BladeStand V2',
        productId: 'RZBS2',
        brandId: 7, // Razer
        description: 'Giá đỡ laptop tối ưu cho gaming, thiết kế mạnh mẽ, phù hợp với game thủ chuyên nghiệp.',
        tagName: 'LAPTOP_STAND',
        variants: JSON.stringify([
          { color: "Đen", version: 'Gaming', type: 'Pro', price: '9500000', quantity: '8' }
        ]),
        specifications: JSON.stringify([
          { title: 'Kích thước', info: '400x300x60mm' },
          { title: 'Chất liệu', info: 'Kim loại cao cấp' },
          { title: 'Tính năng', info: 'Hệ thống tản nhiệt, đèn LED RGB' }
        ]),
        productImage: JSON.stringify("uploads\\product\\RZBS2-main.webp"),
        imageUrl: JSON.stringify({
          img0: "uploads\\product\\Razer BladeStand V2-desc-25d.webp",
          img1: "uploads\\product\\Razer BladeStand V2-desc-07c.webp",
          img2: "uploads\\product\\Razer BladeStand V2-desc-c75.webp",
          img3: "uploads\\product\\Razer BladeStand V2-desc-9d6.webp"
        }),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
        {
          id: 67,
          name: "ASUS Gaming Chair Pro",
          productId: "AGC1",
          brandId: 1,
          description: "Ghế gaming cao cấp ASUS, thiết kế ergonomic, hỗ trợ tối đa cho game thủ.",
          tagName: "GAMING_CHAIR",
          variants: JSON.stringify([
            { color: "Đen", version: "Ergo", type: "Premium", price: 13500000, quantity: 15 },
            { color: "Đỏ", version: "Standard", type: "Basic", price: 9500000, quantity: 20 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Da PU, thép cao cấp" },
            { title: "Tính năng", info: "Điều chỉnh độ cao, tựa đầu, đệm lưng" },
            { title: "Tải trọng tối đa", info: "150kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\AGC1-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS Gaming Chair Pro-desc-e71.jpg",
            img1: "uploads\\product\\ASUS Gaming Chair Pro-desc-0cd.jpg",
            img2: "uploads\\product\\ASUS Gaming Chair Pro-desc-cae.jpg",
            img3: "uploads\\product\\ASUS Gaming Chair Pro-desc-5d9.png"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 68,
          name: "Dell Gamer Seat DX",
          productId: "DGS2",
          brandId: 2,
          description: "Ghế gaming chuyên dụng Dell, thiết kế hiện đại với khả năng điều chỉnh toàn diện.",
          tagName: "GAMING_CHAIR",
          variants: JSON.stringify([
            { color: "Đen", version: "Pro", type: "RGB", price: 12000000, quantity: 12 },
            { color: "Xám", version: "Lite", type: "Standard", price: 8500000, quantity: 18 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Lưới thoáng khí, kim loại" },
            { title: "Tính năng", info: "Tựa lưng đa cấp, chân xoay 360 độ" },
            { title: "Tải trọng tối đa", info: "120kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DGS2-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Gamer Seat DX-desc-24f.jpg",
            img1: "uploads\\product\\Dell Gamer Seat DX-desc-6ca.jpg",
            img2: "uploads\\product\\Dell Gamer Seat DX-desc-bc7.jpg",
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 69,
          name: "Lenovo Legion Throne",
          productId: "LLT3",
          brandId: 3,
          description: "Ghế gaming Lenovo Legion với thiết kế độc đáo, đệm mút êm ái và hỗ trợ lưng toàn diện.",
          tagName: "GAMING_CHAIR",
          variants: JSON.stringify([
            { color: "Đen", version: "Elite", type: "Ergo", price: 14000000, quantity: 10 },
            { color: "Xám", version: "Basic", type: "Standard", price: 9500000, quantity: 25 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Da tổng hợp, hợp kim nhôm" },
            { title: "Tính năng", info: "Đệm lưng, tựa cổ, chế độ nghiêng" },
            { title: "Tải trọng tối đa", info: "130kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LLT3-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo Legion Throne-desc-365.jpg",
            img1: "uploads\\product\\Lenovo Legion Throne-desc-c9f.jpg",
            img2: "uploads\\product\\Lenovo Legion Throne-desc-c36.jpg",
            img3: "uploads\\product\\Lenovo Legion Throne-desc-0aa.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 70,
          name: "Microsoft XChair",
          productId: "MXC4",
          brandId: 4,
          description: "Ghế gaming Microsoft tối ưu hoá năng suất và trải nghiệm chơi game với phong cách hiện đại.",
          tagName: "GAMING_CHAIR",
          variants: JSON.stringify([
            { color: "Đen Xám", version: "Pro", type: "RGB", price: 15000000, quantity: 8 },
            { color: "Trắng Xám", version: "Standard", type: "Lite", price: 10000000, quantity: 16 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Lưới thoáng khí, kim loại cao cấp" },
            { title: "Tính năng", info: "Điều chỉnh độ cao, đèn LED" },
            { title: "Tải trọng tối đa", info: "140kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MXC4-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft XChair-desc-a58.jpg",
            img1: "uploads\\product\\Microsoft XChair-desc-601.jpg",
            img2: "uploads\\product\\Microsoft XChair-desc-a3e.jpg",
            img3: "uploads\\product\\Microsoft XChair-desc-28f.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 71,
          name: "ASUS ErgoChair Pro",
          productId: "AEC1",
          brandId: 1,
          description: "Ghế công thái học ASUS hỗ trợ tối ưu công việc và thư giãn với thiết kế hiện đại.",
          tagName: "ERGONOMIC_CHAIR",
          variants: JSON.stringify([
            { color: "Đen", version: "Premium", type: "ErgoFlex", price: 12000000, quantity: 10 },
            { color: "Trắng", version: "Basic", type: "Lite", price: 9000000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Lưới thoáng khí, nhựa cứng cao cấp" },
            { title: "Tính năng", info: "Điều chỉnh tựa lưng, hỗ trợ thắt lưng" },
            { title: "Tải trọng tối đa", info: "130kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\AEC1-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS ErgoChair Pro-desc-9a6.jpg",
            img1: "uploads\\product\\ASUS ErgoChair Pro-desc-9c8.jpg",
            img2: "uploads\\product\\ASUS ErgoChair Pro-desc-c86.jpg",
            img3: "uploads\\product\\ASUS ErgoChair Pro-desc-a9d.jpg",
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 72,
          name: "Dell FlexChair Plus",
          productId: "DFC2",
          brandId: 2,
          description: "Ghế công thái học Dell thiết kế đẳng cấp, hỗ trợ sức khỏe và hiệu suất làm việc.",
          tagName: "ERGONOMIC_CHAIR",
          variants: JSON.stringify([
            { color: "Xám Đen", version: "Advanced", type: "FlexSupport", price: 11000000, quantity: 12 },
            { color: "Trắng", version: "Standard", type: "Lite", price: 8500000, quantity: 18 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải lưới cao cấp, kim loại chịu lực" },
            { title: "Tính năng", info: "Điều chỉnh tựa đầu, hỗ trợ cột sống" },
            { title: "Tải trọng tối đa", info: "135kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DFC2-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell FlexChair Plus-desc-567.jpg",
            img1: "uploads\\product\\Dell FlexChair Plus-desc-6c7.jpg",
            img2: "uploads\\product\\Dell FlexChair Plus-desc-64f.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 73,
          name: "Lenovo PostureCare X",
          productId: "LPC3",
          brandId: 3,
          description: "Ghế công thái học Lenovo hỗ trợ tối đa cho lưng và cổ, phù hợp với môi trường làm việc dài hạn.",
          tagName: "ERGONOMIC_CHAIR",
          variants: JSON.stringify([
            { color: "Đen", version: "Deluxe", type: "PostureGuard", price: 12500000, quantity: 8 },
            { color: "Xám", version: "Lite", type: "Standard", price: 9500000, quantity: 20 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải thoáng khí, khung thép cao cấp" },
            { title: "Tính năng", info: "Điều chỉnh tay vịn, xoay 360 độ" },
            { title: "Tải trọng tối đa", info: "140kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LPC3-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo PostureCare X-desc-84f.jpg",
            img1: "uploads\\product\\Lenovo PostureCare X-desc-03b.jpg",
            img2: "uploads\\product\\Lenovo PostureCare X-desc-6e5.jpg",
            img3: "uploads\\product\\Lenovo PostureCare X-desc-ce2.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 74,
          name: "MSI ComfortEdge Z",
          productId: "MCE4",
          brandId: 5,
          description: "Ghế công thái học MSI mang lại sự thoải mái tối đa và hỗ trợ tư thế ngồi chuẩn.",
          tagName: "ERGONOMIC_CHAIR",
          variants: JSON.stringify([
            { color: "Đỏ Đen", version: "Elite", type: "ComfortPro", price: 13000000, quantity: 6 },
            { color: "Trắng Xám", version: "Basic", type: "Lite", price: 8500000, quantity: 14 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải mềm mại, nhôm cao cấp" },
            { title: "Tính năng", info: "Ngả lưng 135 độ, điều chỉnh tựa đầu" },
            { title: "Tải trọng tối đa", info: "145kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MCE4-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI ComfortEdge Z-desc-309.jpg",
            img1: "uploads\\product\\MSI ComfortEdge Z-desc-c48.jpg",
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 75,
          name: "Acer ErgoFit Plus",
          productId: "AEP5",
          brandId: 6,
          description: "Ghế công thái học Acer, sự lựa chọn hoàn hảo cho dân văn phòng với phong cách hiện đại.",
          tagName: "ERGONOMIC_CHAIR",
          variants: JSON.stringify([
            { color: "Xám Đậm", version: "Professional", type: "ErgoFit", price: 11500000, quantity: 10 },
            { color: "Trắng Sữa", version: "Lite", type: "Standard", price: 8500000, quantity: 18 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Lưới thoáng khí, khung thép không gỉ" },
            { title: "Tính năng", info: "Điều chỉnh lưng, chống đau cổ" },
            { title: "Tải trọng tối đa", info: "135kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\AEP5-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer ErgoFit Plus-desc-f61.jpg",
            img1: "uploads\\product\\Acer ErgoFit Plus-desc-64a.jpg",
            img2: "uploads\\product\\Acer ErgoFit Plus-desc-c6f.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 76,
          name: "Harman Kardon Onyx Studio 6",
          productId: "HKOS6",
          brandId: 1,
          description: "Loa bluetooth Harman Kardon Onyx Studio 6, âm thanh tuyệt vời, thiết kế sang trọng.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Portable", price: 5500000, quantity: 20 },
            { color: "Trắng", version: "Limited", type: "Portable", price: 6500000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ kim loại, lưới vải chống bụi" },
            { title: "Tính năng", info: "Kết nối Bluetooth 5.0, chống nước IPX7" },
            { title: "Công suất", info: "50W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\HKOS6-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Harman Kardon Onyx Studio 6-desc-5da.jpg",
            img1: "uploads\\product\\Harman Kardon Onyx Studio 6-desc-ea8.jpg",            
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 77,
          name: "SONY SRS-XB43",
          productId: "SRSXB43",
          brandId: 2,
          description: "Loa Sony SRS-XB43, âm thanh mạnh mẽ, bass sâu, chống nước và chống bụi IP67.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Xanh dương", version: "Standard", type: "Portable", price: 4500000, quantity: 30 },
            { color: "Đen", version: "Pro", type: "Portable", price: 5000000, quantity: 25 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ chống bụi và nước, siêu bền" },
            { title: "Tính năng", info: "Kết nối Bluetooth, chế độ Extra Bass" },
            { title: "Công suất", info: "60W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\SRSXB43-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\SONY SRS-XB43-desc-022.jpg",
            img1: "uploads\\product\\SONY SRS-XB43-desc-7a1.jpg",
            img2: "uploads\\product\\SONY SRS-XB43-desc-a8d.jpg",
            img3: "uploads\\product\\SONY SRS-XB43-desc-674.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 78,
          name: "JBL Charge 5",
          productId: "JBLCH5",
          brandId: 3,
          description: "Loa JBL Charge 5, âm thanh mạnh mẽ với bass sâu, pin dài lâu, thiết kế chống nước.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Portable", price: 4300000, quantity: 40 },
            { color: "Xanh lá", version: "Limited Edition", type: "Portable", price: 4800000, quantity: 35 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ cao su chống va đập, chống nước" },
            { title: "Tính năng", info: "Kết nối Bluetooth, sạc thiết bị khác qua USB-C" },
            { title: "Công suất", info: "40W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\JBLCH5-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\JBL Charge 5-desc-202.jpg",
            img1: "uploads\\product\\JBL Charge 5-desc-725.jpg",
            img2: "uploads\\product\\JBL Charge 5-desc-9c9.jpg",
            img3: "uploads\\product\\JBL Charge 5-desc-3b9.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 79,
          name: "Harman Kardon SoundSticks 4",
          productId: "HKSST4",
          brandId: 1,
          description: "Loa Harman Kardon SoundSticks 4, thiết kế độc đáo, âm thanh sống động.",
          tagName: "DESKTOP_SPEAKER",
          variants: JSON.stringify([
            { color: "Trong suốt", version: "Classic", type: "Desktop", price: 8000000, quantity: 10 },
            { color: "Đen", version: "Limited Edition", type: "Desktop", price: 8500000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ nhựa trong suốt, cấu hình âm thanh mạnh mẽ" },
            { title: "Tính năng", info: "Kết nối Bluetooth, cổng aux" },
            { title: "Công suất", info: "100W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\HKSST4-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Harman Kardon SoundSticks 4-desc-ffc.jpg",
            img1: "uploads\\product\\Harman Kardon SoundSticks 4-desc-0fc.jpg",
            img2: "uploads\\product\\Harman Kardon SoundSticks 4-desc-3dc.jpg",
            img3: "uploads\\product\\Harman Kardon SoundSticks 4-desc-42e.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 80,
          name: "SONY SRS-XB33",
          productId: "SRSXB33",
          brandId: 2,
          description: "Loa Sony SRS-XB33, âm thanh sống động với Extra Bass, chống nước và bụi IP67.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đỏ", version: "Standard", type: "Portable", price: 4700000, quantity: 18 },
            { color: "Xanh biển", version: "Pro", type: "Portable", price: 5200000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ bền, chống va đập, chống bụi" },
            { title: "Tính năng", info: "Kết nối Bluetooth, Extra Bass" },
            { title: "Công suất", info: "50W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\SRSXB33-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\SONY SRS-XB33-desc-4a0.jpg",
            img1: "uploads\\product\\SONY SRS-XB33-desc-74d.jpg",
            img2: "uploads\\product\\SONY SRS-XB33-desc-52b.jpg",
            img3: "uploads\\product\\SONY SRS-XB33-desc-0a7.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 81,
          name: "JBL Flip 5",
          productId: "JBLF5",
          brandId: 3,
          description: "Loa JBL Flip 5, âm thanh mạnh mẽ, thiết kế nhỏ gọn và chống nước IPX7.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Xám", version: "Standard", type: "Portable", price: 3500000, quantity: 20 },
            { color: "Đỏ", version: "Limited", type: "Portable", price: 4000000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ cao su chống thấm nước, siêu bền" },
            { title: "Tính năng", info: "Kết nối Bluetooth, chế độ Stereo" },
            { title: "Công suất", info: "30W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\JBLF5-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\JBLF5-desc-1.jpg",
            img1: "uploads\\product\\JBLF5-desc-2.jpg",
            img2: "uploads\\product\\JBLF5-desc-3.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 82,
          name: "Xiaomi Mi Portable Bluetooth Speaker",
          productId: "XMPBS",
          brandId: 1,
          description: "Loa Bluetooth Xiaomi Mi Portable, âm thanh mạnh mẽ, pin lâu dài và chống nước IPX7.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Portable", price: 800000, quantity: 25 },
            { color: "Xanh Dương", version: "Special", type: "Portable", price: 950000, quantity: 18 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ nhựa ABS bền bỉ" },
            { title: "Tính năng", info: "Kết nối Bluetooth, chế độ Stereo" },
            { title: "Công suất", info: "16W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\XMPBS-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Xiaomi Mi Portable Bluetooth Speaker-desc-2df.jpg",
            img1: "uploads\\product\\Xiaomi Mi Portable Bluetooth Speaker-desc-3b0.jpg"            
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 83,
          name: "Bose SoundLink Revolve",
          productId: "BSLRV",
          brandId: 2,
          description: "Loa Bose SoundLink Revolve, âm thanh 360 độ, thiết kế sang trọng và kết nối Bluetooth ổn định.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Portable", price: 5700000, quantity: 12 },
            { color: "Trắng", version: "Premium", type: "Portable", price: 6500000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ kim loại, chống nước IPX4" },
            { title: "Tính năng", info: "Kết nối Bluetooth, Âm thanh 360 độ" },
            { title: "Công suất", info: "30W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\BSLRV-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Bose SoundLink Revolve-desc-7fc.jpg",
            img1: "uploads\\product\\Bose SoundLink Revolve-desc-1e4.jpg",
            img2: "uploads\\product\\Bose SoundLink Revolve-desc-eea.jpg",
            img3: "uploads\\product\\Bose SoundLink Revolve-desc-e5d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 84,
          name: "Marshall Stanmore II",
          productId: "MSIIS",
          brandId: 3,
          description: "Loa Marshall Stanmore II, âm thanh mạnh mẽ, thiết kế cổ điển và kết nối Bluetooth.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Classic", type: "Standmount", price: 9000000, quantity: 5 },
            { color: "Trắng", version: "Premium", type: "Standmount", price: 9500000, quantity: 3 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ gỗ với lớp vải bọc vải tổng hợp" },
            { title: "Tính năng", info: "Kết nối Bluetooth, điều chỉnh âm lượng qua núm vặn" },
            { title: "Công suất", info: "80W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSIIS-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Marshall Stanmore II-desc-2e0.jpg",
            img1: "uploads\\product\\Marshall Stanmore II-desc-b46.jpg"          
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 85,
          name: "Xiaomi Mi Outdoor Bluetooth Speaker",
          productId: "XMOBCS",
          brandId: 1,
          description: "Loa Bluetooth Xiaomi Mi Outdoor, thiết kế nhỏ gọn, âm thanh chất lượng cao và chống nước IPX6.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Outdoor", type: "Portable", price: 1200000, quantity: 18 },
            { color: "Xanh dương", version: "Adventure", type: "Portable", price: 1500000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ nhựa cao cấp, chống va đập" },
            { title: "Tính năng", info: "Kết nối Bluetooth, Microphone tích hợp" },
            { title: "Công suất", info: "10W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\XMOBCS-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Xiaomi Mi Outdoor Bluetooth Speaker-desc-b24.png",
            img1: "uploads\\product\\Xiaomi Mi Outdoor Bluetooth Speaker-desc-7c4.jpg",
            img2: "uploads\\product\\Xiaomi Mi Outdoor Bluetooth Speaker-desc-208.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 86,
          name: "Bose SoundLink Color II",
          productId: "BOSLCII",
          brandId: 2,
          description: "Loa Bose SoundLink Color II, thiết kế nhỏ gọn, âm thanh rõ ràng và kết nối Bluetooth nhanh chóng.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Xanh Dương", version: "Colorful", type: "Portable", price: 3500000, quantity: 15 },
            { color: "Đen", version: "Basic", type: "Portable", price: 3200000, quantity: 20 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ nhựa chống nước" },
            { title: "Tính năng", info: "Kết nối Bluetooth, âm thanh rõ ràng" },
            { title: "Công suất", info: "20W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\BOSLCII-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Bose SoundLink Color II-desc-581.jpg",
            img1: "uploads\\product\\Bose SoundLink Color II-desc-68c.jpg"           
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 87,
          name: "Marshall Acton II",
          productId: "MSACTII",
          brandId: 3,
          description: "Loa Marshall Acton II, âm thanh mạnh mẽ, thiết kế cổ điển và kết nối Bluetooth dễ dàng.",
          tagName: "BLUETOOTH_SPEAKER",
          variants: JSON.stringify([
            { color: "Đen", version: "Classic", type: "Standmount", price: 6500000, quantity: 10 },
            { color: "Nâu", version: "Limited", type: "Standmount", price: 7000000, quantity: 7 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ gỗ, bọc da tổng hợp" },
            { title: "Tính năng", info: "Kết nối Bluetooth, điều chỉnh âm thanh qua núm vặn" },
            { title: "Công suất", info: "60W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSACTII-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Marshall Acton II-desc-ca2.jpg",
            img1: "uploads\\product\\Marshall Acton II-desc-c64.jpg",
            img2: "uploads\\product\\Marshall Acton II-desc-be3.jpg",
            img3: "uploads\\product\\Marshall Acton II-desc-a6b.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 88,
          name: "Xiaomi Mi Soundbar",
          productId: "XMSB",
          brandId: 1,
          description: "Loa thanh Xiaomi Mi Soundbar, âm thanh sống động, hỗ trợ kết nối với TV và Bluetooth.",
          tagName: "SOUND_BAR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Soundbar", price: 2500000, quantity: 22 },
            { color: "Xám", version: "Premium", type: "Soundbar", price: 3000000, quantity: 14 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vỏ nhựa, hệ thống loa bảy âm thanh" },
            { title: "Tính năng", info: "Kết nối Bluetooth, hỗ trợ TV, âm thanh vòm" },
            { title: "Công suất", info: "60W" }
          ]),
          productImage: JSON.stringify("uploads\\product\\XMSB-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Xiaomi Mi Soundbar-desc-2da.jpg",
            img1: "uploads\\product\\Xiaomi Mi Soundbar-desc-600.jpg",
            img2: "uploads\\product\\Xiaomi Mi Soundbar-desc-a9b.jpg",
            img3: "uploads\\product\\Xiaomi Mi Soundbar-desc-e57.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 89,
          name: "ASUS TUF Gaming VG27AQ",
          productId: "ATGVGAQ",
          brandId: 1,
          description: "Màn hình ASUS TUF Gaming VG27AQ, màn hình cong 27 inch, độ phân giải 2K, tần số quét 165Hz.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 8000000, quantity: 10 },
            { color: "Xám", version: "Elite", type: "Gaming", price: 9500000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "2560x1440 (2K)" },
            { title: "Tần số quét", info: "165Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\ATGVGAQ-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS TUF Gaming VG27AQ-desc-0ea.jpg",
            img1: "uploads\\product\\ASUS TUF Gaming VG27AQ-desc-bbd.jpg",
            img2: "uploads\\product\\ASUS TUF Gaming VG27AQ-desc-2b3.jpg",
            img3: "uploads\\product\\ASUS TUF Gaming VG27AQ-desc-c94.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 90,
          name: "Dell UltraSharp U2720Q",
          productId: "DUU2720Q",
          brandId: 2,
          description: "Màn hình Dell UltraSharp U2720Q, 27 inch, độ phân giải 4K, chính xác màu sắc cao.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Professional", price: 11500000, quantity: 8 },
            { color: "Trắng", version: "Premium", type: "Professional", price: 12500000, quantity: 4 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "3840x2160 (4K)" },
            { title: "Màu sắc", info: "Chính xác, 95% DCI-P3" },
            { title: "Kết nối", info: "USB-C, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DUU2720Q-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell UltraSharp U2720Q-desc-464.jpg",
            img1: "uploads\\product\\Dell UltraSharp U2720Q-desc-30f.jpg",
            img2: "uploads\\product\\Dell UltraSharp U2720Q-desc-a19.jpg",
            img3: "uploads\\product\\Dell UltraSharp U2720Q-desc-557.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 91,
          name: "Lenovo ThinkVision P27h",
          productId: "LTVP27H",
          brandId: 3,
          description: "Màn hình Lenovo ThinkVision P27h, 27 inch, độ phân giải 1440p, khả năng kết nối USB-C.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Business", price: 9000000, quantity: 6 },
            { color: "Xám", version: "Premium", type: "Business", price: 9800000, quantity: 3 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "2560x1440 (QHD)" },
            { title: "Tần số quét", info: "75Hz" },
            { title: "Kết nối", info: "USB-C, HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LTVP27H-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo ThinkVision P27h-desc-138.jpg",
            img1: "uploads\\product\\Lenovo ThinkVision P27h-desc-eb4.jpg",
            img2: "uploads\\product\\Lenovo ThinkVision P27h-desc-0db.jpg",
            img3: "uploads\\product\\Lenovo ThinkVision P27h-desc-656.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 92,
          name: "Microsoft Surface Studio 2",
          productId: "MSSS2",
          brandId: 4,
          description: "Màn hình cảm ứng Microsoft Surface Studio 2, 28 inch, độ phân giải 4.5K, thiết kế sang trọng.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Premium", type: "Touchscreen", price: 35000000, quantity: 3 },
            { color: "Bạc", version: "Standard", type: "Touchscreen", price: 32000000, quantity: 2 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "4500x3000 (4.5K)" },
            { title: "Màn hình cảm ứng", info: "Hỗ trợ đa điểm" },
            { title: "Kết nối", info: "USB-C, HDMI" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSSS2-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Studio 2-desc-624.jpg",
            img1: "uploads\\product\\Microsoft Surface Studio 2-desc-fe7.jpg",
            img2: "uploads\\product\\Microsoft Surface Studio 2-desc-996.jpg",
            img3: "uploads\\product\\Microsoft Surface Studio 2-desc-496.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 93,
          name: "MSI Optix MAG272C",
          productId: "MSOMAG272C",
          brandId: 5,
          description: "Màn hình MSI Optix MAG272C, 27 inch, màn hình cong, độ phân giải 1080p, tần số quét 165Hz.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Gaming", type: "Curved", price: 7000000, quantity: 12 },
            { color: "Đỏ", version: "Limited", type: "Curved", price: 7500000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "1920x1080 (FHD)" },
            { title: "Tần số quét", info: "165Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSOMAG272C-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Studio 2-desc-624.jpg",
            img1: "uploads\\product\\Microsoft Surface Studio 2-desc-fe7.jpg",
            img2: "uploads\\product\\Microsoft Surface Studio 2-desc-996.jpg",
            img3: "uploads\\product\\Microsoft Surface Studio 2-desc-496.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 94,
          name: "Acer Predator X34",
          productId: "ACPX34",
          brandId: 6,
          description: "Màn hình Acer Predator X34, màn hình cong 34 inch, độ phân giải UWQHD, tần số quét 180Hz.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Gaming", type: "UltraWide", price: 14000000, quantity: 7 },
            { color: "Xám", version: "Premium", type: "UltraWide", price: 15000000, quantity: 4 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "3440x1440 (UWQHD)" },
            { title: "Tần số quét", info: "180Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\ACPX34-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer Predator X34-desc-576.jpg",
            img1: "uploads\\product\\Acer Predator X34-desc-3a6.jpg",
            img2: "uploads\\product\\Acer Predator X34-desc-0cd.jpg",
            img3: "uploads\\product\\Acer Predator X34-desc-e27.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 95,
          name: "Razer Raptor 27",
          productId: "RR27",
          brandId: 7,
          description: "Màn hình Razer Raptor 27, 27 inch, độ phân giải 1440p, tần số quét 165Hz, thiết kế sang trọng.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Elite", type: "Gaming", price: 16000000, quantity: 6 },
            { color: "Xanh Dương", version: "Limited", type: "Gaming", price: 17000000, quantity: 4 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "2560x1440 (QHD)" },
            { title: "Tần số quét", info: "165Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\RR27-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Razer Raptor 27-desc-271.jpg",
            img1: "uploads\\product\\Razer Raptor 27-desc-353.jpg",
            img2: "uploads\\product\\Razer Raptor 27-desc-6c6.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 96,
          name: "GIGABYTE AORUS FI27Q",
          productId: "GAFI27Q",
          brandId: 8,
          description: "Màn hình GIGABYTE AORUS FI27Q, 27 inch, độ phân giải 1440p, tần số quét 165Hz.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 8500000, quantity: 9 },
            { color: "Xám", version: "Premium", type: "Gaming", price: 9000000, quantity: 4 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "2560x1440 (QHD)" },
            { title: "Tần số quét", info: "165Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\GAFI27Q-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\GIGABYTE AORUS FI27Q-desc-119.jpg",
            img1: "uploads\\product\\GIGABYTE AORUS FI27Q-desc-fc4.jpeg",
            img2: "uploads\\product\\GIGABYTE AORUS FI27Q-desc-729.jpeg",
            img3: "uploads\\product\\GIGABYTE AORUS FI27Q-desc-88e.jpeg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 97,
          name: "ASUS ROG Swift PG259QN",
          productId: "ASPG259QN",
          brandId: 1,
          description: "Màn hình ASUS ROG Swift PG259QN, 24.5 inch, độ phân giải 1080p, tần số quét 360Hz, thiết kế cho game thủ chuyên nghiệp.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 18000000, quantity: 5 },
            { color: "Đen", version: "Elite", type: "Gaming", price: 19000000, quantity: 3 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "1920x1080 (FHD)" },
            { title: "Tần số quét", info: "360Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\ASPG259QN-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS ROG Swift PG259QN-desc-e99.jpg",
            img1: "uploads\\product\\ASUS ROG Swift PG259QN-desc-206.jpg",
            img2: "uploads\\product\\ASUS ROG Swift PG259QN-desc-1de.jpg",
            img3: "uploads\\product\\ASUS ROG Swift PG259QN-desc-bb8.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 98,
          name: "Dell Alienware AW3423DW",
          productId: "DWAW3423DW",
          brandId: 2,
          description: "Màn hình Dell Alienware AW3423DW, 34 inch, màn hình cong UWQHD, tần số quét 175Hz, dành cho game thủ.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Gaming", type: "Curved", price: 25000000, quantity: 4 },
            { color: "Đen", version: "Limited", type: "Curved", price: 26000000, quantity: 2 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "3440x1440 (UWQHD)" },
            { title: "Tần số quét", info: "175Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DWAW3423DW-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Alienware AW3423DW-desc-8bd.jpg",
            img1: "uploads\\product\\Dell Alienware AW3423DW-desc-32a.jpg",
            img2: "uploads\\product\\Dell Alienware AW3423DW-desc-f39.jpg",
            img3: "uploads\\product\\Dell Alienware AW3423DW-desc-52b.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 99,
          name: "Lenovo Legion Y25-25",
          productId: "LLY2525",
          brandId: 3,
          description: "Màn hình Lenovo Legion Y25-25, 24.5 inch, độ phân giải 1080p, tần số quét 240Hz, thiết kế cho game thủ.",
          tagName: "MONITOR",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 7500000, quantity: 10 },
            { color: "Trắng", version: "Elite", type: "Gaming", price: 8000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "1920x1080 (FHD)" },
            { title: "Tần số quét", info: "240Hz" },
            { title: "Kết nối", info: "HDMI, DisplayPort" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LLY2525-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo Legion Y25-25-desc-336.jpg",
            img1: "uploads\\product\\Lenovo Legion Y25-25-desc-767.jpg",
            img2: "uploads\\product\\Lenovo Legion Y25-25-desc-008.jpg",
            img3: "uploads\\product\\Lenovo Legion Y25-25-desc-4a8.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 100,
          name: "ASUS ROG Tech Backpack",
          productId: "ARTB100",
          brandId: 1,
          description: "Balo ASUS ROG thiết kế chuyên dụng cho game thủ và người dùng công nghệ, chất liệu cao cấp, chống nước.",
          tagName: "BACKPACK",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 2000000, quantity: 15 },
            { color: "Xám", version: "Pro", type: "Gaming", price: 2500000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Polyester chống nước" },
            { title: "Dung tích", info: "20L" },
            { title: "Tính năng", info: "Ngăn chứa laptop 17 inch, cổng sạc USB tích hợp" }
          ]),
          productImage: JSON.stringify("uploads\\product\\ARTB100-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS ROG Tech Backpack-desc-ca1.jpg",
            img1: "uploads\\product\\ASUS ROG Tech Backpack-desc-433.jpg",
            img2: "uploads\\product\\ASUS ROG Tech Backpack-desc-a4d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 101,
          name: "Dell Premium Laptop Bag",
          productId: "DPLB101",
          brandId: 2,
          description: "Túi xách Dell cao cấp dành cho laptop, thiết kế mỏng nhẹ, thanh lịch.",
          tagName: "LAPTOP_BAG",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Office", price: 1800000, quantity: 20 },
            { color: "Nâu", version: "Elite", type: "Office", price: 2200000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Kích thước laptop phù hợp", info: "15.6 inch" },
            { title: "Chất liệu", info: "Da PU cao cấp" },
            { title: "Tính năng", info: "Chống nước, ngăn chống sốc" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DPLB101-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Premium Laptop Bag-desc-651.jpg",
            img1: "uploads\\product\\Dell Premium Laptop Bag-desc-787.jpg",
            img2: "uploads\\product\\Dell Premium Laptop Bag-desc-297.jpg",
            img3: "uploads\\product\\Dell Premium Laptop Bag-desc-16c.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 102,
          name: "Lenovo ThinkPad Carrying Case",
          productId: "LTCC102",
          brandId: 3,
          description: "Túi đựng Lenovo ThinkPad tiện lợi, thiết kế tối ưu cho doanh nhân và người dùng văn phòng.",
          tagName: "CARRY_CASE",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Office", price: 1500000, quantity: 25 },
            { color: "Xám", version: "Professional", type: "Office", price: 2000000, quantity: 18 }
          ]),
          specifications: JSON.stringify([
            { title: "Kích thước laptop phù hợp", info: "14 inch" },
            { title: "Chất liệu", info: "Nylon chống nước" },
            { title: "Tính năng", info: "Ngăn tổ chức đồ dùng, quai đeo thoải mái" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LTCC102-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo ThinkPad Carrying Case-desc-538.jpg",
            img1: "uploads\\product\\Lenovo ThinkPad Carrying Case-desc-628.jpg",
            img2: "uploads\\product\\Lenovo ThinkPad Carrying Case-desc-56d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 103,
          name: "Microsoft Surface Backpack",
          productId: "MSBP103",
          brandId: 4,
          description: "Balo Microsoft Surface thiết kế tối ưu cho dòng sản phẩm Surface, phong cách thời thượng.",
          tagName: "BACKPACK",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Office", price: 2300000, quantity: 8 },
            { color: "Xanh", version: "Premium", type: "Office", price: 2800000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Dung tích", info: "18L" },
            { title: "Chất liệu", info: "Vải cao cấp chống thấm" },
            { title: "Tính năng", info: "Ngăn chống sốc, quai đeo êm ái" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSBP103-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Backpack-desc-75f.jpg",
            img1: "uploads\\product\\Microsoft Surface Backpack-desc-49d.jpg",
            img2: "uploads\\product\\Microsoft Surface Backpack-desc-676.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 104,
          name: "MSI Tech Gear Bag",
          productId: "MTGB104",
          brandId: 5,
          description: "Túi đựng đồ công nghệ MSI thiết kế đa năng, phù hợp cho game thủ và người yêu công nghệ.",
          tagName: "TECH_BAG",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 1200000, quantity: 20 },
            { color: "Đỏ", version: "Gaming Edition", type: "Gaming", price: 1500000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Polyester cao cấp" },
            { title: "Kích thước", info: "10 x 15 x 5 inch" },
            { title: "Tính năng", info: "Ngăn đa năng, chống thấm nước" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MTGB104-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI Tech Gear Bag-desc-d89.jpg",
            img1: "uploads\\product\\MSI Tech Gear Bag-desc-b65.jpg",
            img2: "uploads\\product\\MSI Tech Gear Bag-desc-9e9.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 105,
          name: "MSI Gaming Backpack",
          productId: "MGB105",
          brandId: 5,
          description: "Balo MSI Gaming với thiết kế đậm chất game thủ, có nhiều ngăn giúp tổ chức đồ đạc tiện lợi.",
          tagName: "GAMING_BACKPACK",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Gaming", price: 1500000, quantity: 25 },
            { color: "Đỏ", version: "Pro Edition", type: "Gaming", price: 1800000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải chống thấm" },
            { title: "Kích thước", info: "15 x 18 x 8 inch" },
            { title: "Tính năng", info: "Ngăn đựng laptop 17 inch, đệm vai êm ái" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MGB105-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI Gaming Backpack-desc-1.jpg"            
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 106,
          name: "Acer Predator Backpack",
          productId: "APB106",
          brandId: 6,
          description: "Balo Acer Predator thiết kế hiện đại với chất liệu bền bỉ và khả năng chống thấm nước.",
          tagName: "PREDATOR_BACKPACK",
          variants: JSON.stringify([
            { color: "Xám", version: "Standard", type: "Gaming", price: 1400000, quantity: 30 },
            { color: "Đen", version: "Elite Edition", type: "Gaming", price: 1700000, quantity: 20 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải polyester chống thấm" },
            { title: "Kích thước", info: "14 x 18 x 7 inch" },
            { title: "Tính năng", info: "Ngăn đựng laptop, thiết kế thoáng khí" }
          ]),
          productImage: JSON.stringify("uploads\\product\\APB106-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer Predator Backpack-desc-b5b.jpg",
            img1: "uploads\\product\\Acer Predator Backpack-desc-1b7.jpg",
            img2: "uploads\\product\\Acer Predator Backpack-desc-d4f.jpg",
            img3: "uploads\\product\\Acer Predator Backpack-desc-e9d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 107,
          name: "Razer Tactical Backpack",
          productId: "RTB107",
          brandId: 7,
          description: "Balo Razer Tactical được thiết kế chắc chắn và tối ưu cho việc bảo vệ thiết bị điện tử khi di chuyển.",
          tagName: "TACTICAL_BACKPACK",
          variants: JSON.stringify([
            { color: "Xanh lá", version: "Standard", type: "Tactical", price: 1600000, quantity: 25 },
            { color: "Đen", version: "Pro Edition", type: "Tactical", price: 1900000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải chống nước, chống sốc" },
            { title: "Kích thước", info: "16 x 20 x 8 inch" },
            { title: "Tính năng", info: "Khóa kéo chống thấm, đệm lưng thoáng khí" }
          ]),
          productImage: JSON.stringify("uploads\\product\\RTB107-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Razer Tactical Backpack-desc-853.jpg",
            img1: "uploads\\product\\Razer Tactical Backpack-desc-130.jpg",
            img2: "uploads\\product\\Razer Tactical Backpack-desc-040.jpg",
            img3: "uploads\\product\\Razer Tactical Backpack-desc-a0d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 108,
          name: "Acer Aspire Tech Bag",
          productId: "AATB108",
          brandId: 6,
          description: "Túi đựng đồ công nghệ Acer Aspire với thiết kế gọn nhẹ, dễ dàng mang theo cho người yêu công nghệ.",
          tagName: "TECH_BAG",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Tech", price: 1200000, quantity: 20 },
            { color: "Xám", version: "Deluxe Edition", type: "Tech", price: 1500000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Vải nylon chống thấm" },
            { title: "Kích thước", info: "12 x 15 x 5 inch" },
            { title: "Tính năng", info: "Khóa kéo chống nước, ngăn đựng laptop 15 inch" }
          ]),
          productImage: JSON.stringify("uploads\\product\\AATB108-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer Aspire Tech Bag-desc-f35.jpg",
            img1: "uploads\\product\\Acer Aspire Tech Bag-desc-120.jpg",
            img2: "uploads\\product\\Acer Aspire Tech Bag-desc-16a.jpg",
            img3: "uploads\\product\\Acer Aspire Tech Bag-desc-23a.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 109,
          name: "NiceDesign Adjustable Standing Desk",
          productId: "NDAD109",
          brandId: 5,
          description: "Bàn nâng hạ NiceDesign với thiết kế hiện đại, dễ dàng điều chỉnh chiều cao, phù hợp cho công việc văn phòng.",
          tagName: "ADJUSTABLE_DESK",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Office", price: 3000000, quantity: 10 },
            { color: "Gỗ", version: "Premium", type: "Office", price: 3500000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Khung thép, mặt gỗ công nghiệp" },
            { title: "Kích thước", info: "120 x 60 x 75 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao điện tử, chống rung" }
          ]),
          productImage: JSON.stringify("uploads\\product\\NDAD109-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\NiceDesign Adjustable Standing Desk-desc-218.jpg",
            img1: "uploads\\product\\NiceDesign Adjustable Standing Desk-desc-38f.jpg",
            img2: "uploads\\product\\NiceDesign Adjustable Standing Desk-desc-94f.jpg",
            img3: "uploads\\product\\NiceDesign Adjustable Standing Desk-desc-650.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 110,
          name: "HyperWork Electric Standing Desk",
          productId: "HWED110",
          brandId: 6,
          description: "Bàn nâng hạ HyperWork, thiết kế tiện dụng với khả năng điều chỉnh chiều cao bằng điện, phù hợp với mọi không gian làm việc.",
          tagName: "STANDING_DESK",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "Work", price: 2800000, quantity: 8 },
            { color: "Trắng", version: "Pro", type: "Work", price: 3200000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Thép không gỉ, mặt bàn MDF chống trầy" },
            { title: "Kích thước", info: "120 x 70 x 75 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao điện tử, thiết kế tiết kiệm không gian" }
          ]),
          productImage: JSON.stringify("uploads\\product\\HWED110-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\HyperWork Electric Standing Desk-desc-c6f.jpg",
            img1: "uploads\\product\\HyperWork Electric Standing Desk-desc-189.jpg",
            img2: "uploads\\product\\HyperWork Electric Standing Desk-desc-388.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 111,
          name: "Dandihome Adjustable Desk",
          productId: "DHAD111",
          brandId: 7,
          description: "Bàn nâng hạ Dandihome với thiết kế thông minh, dễ dàng điều chỉnh chiều cao phù hợp cho không gian làm việc tại nhà.",
          tagName: "HOME_DESK",
          variants: JSON.stringify([
            { color: "Gỗ", version: "Standard", type: "Home", price: 2700000, quantity: 15 },
            { color: "Đen", version: "Deluxe", type: "Home", price: 3000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Gỗ tự nhiên, khung thép sơn tĩnh điện" },
            { title: "Kích thước", info: "100 x 60 x 70 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao, thiết kế hiện đại" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DHAD111-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dandihome Adjustable Desk-desc-ac1.jpg",
            img1: "uploads\\product\\Dandihome Adjustable Desk-desc-1ff.jpg"           
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 112,
          name: "NiceDesign Electric Desk",
          productId: "NDED112",
          brandId: 5,
          description: "Bàn điện tử nâng hạ NiceDesign với khả năng điều chỉnh dễ dàng và thiết kế tiết kiệm không gian.",
          tagName: "ADJUSTABLE_DESK",
          variants: JSON.stringify([
            { color: "Trắng", version: "Standard", type: "Office", price: 3100000, quantity: 10 },
            { color: "Đen", version: "Luxury", type: "Office", price: 3800000, quantity: 7 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Khung thép cao cấp, mặt bàn gỗ laminate" },
            { title: "Kích thước", info: "140 x 70 x 80 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao điện tử, có chức năng ghi nhớ chiều cao yêu thích" }
          ]),
          productImage: JSON.stringify("uploads\\product\\NDED112-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\NiceDesign Electric Desk-desc-418.jpg",
            img1: "uploads\\product\\NiceDesign Electric Desk-desc-78d.jpg",
            img2: "uploads\\product\\NiceDesign Electric Desk-desc-ba5.jpg",
            img3: "uploads\\product\\NiceDesign Electric Desk-desc-0d4.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 113,
          name: "HyperWork Pro Desk",
          productId: "HWP113",
          brandId: 6,
          description: "Bàn nâng hạ HyperWork Pro với khả năng điều chỉnh linh hoạt, dễ dàng sử dụng trong mọi không gian làm việc.",
          tagName: "ADJUSTABLE_DESK",
          variants: JSON.stringify([
            { color: "Gỗ", version: "Premium", type: "Work", price: 3300000, quantity: 5 },
            { color: "Đen", version: "Basic", type: "Work", price: 2900000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Mặt bàn gỗ cao cấp, khung thép không gỉ" },
            { title: "Kích thước", info: "130 x 70 x 80 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao, dễ dàng lắp ráp" }
          ]),
          productImage: JSON.stringify("uploads\\product\\HWP113-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\HyperWork Pro Desk-desc-2c6.jpg",
            img1: "uploads\\product\\HyperWork Pro Desk-desc-47d.jpg",
            img2: "uploads\\product\\HyperWork Pro Desk-desc-f96.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 114,
          name: "Dandihome Electric Standing Desk",
          productId: "DHES114",
          brandId: 7,
          description: "Bàn điện tử nâng hạ Dandihome, thiết kế sang trọng và hiện đại, phù hợp cho không gian văn phòng.",
          tagName: "STANDING_DESK",
          variants: JSON.stringify([
            { color: "Trắng", version: "Standard", type: "Office", price: 3400000, quantity: 8 },
            { color: "Đen", version: "Premium", type: "Office", price: 4000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Khung thép sơn tĩnh điện, mặt bàn gỗ laminate" },
            { title: "Kích thước", info: "140 x 80 x 75 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao điện tử, khả năng nâng tối đa 100kg" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DHES114-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dandihome Electric Standing Desk-desc-8ed.jpg",
            img1: "uploads\\product\\Dandihome Electric Standing Desk-desc-b05.jpg",
            img2: "uploads\\product\\Dandihome Electric Standing Desk-desc-3d7.jpg",
            img3: "uploads\\product\\Dandihome Electric Standing Desk-desc-18e.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 115,
          name: "NiceDesign Standing Desk",
          productId: "NDSD115",
          brandId: 5,
          description: "Bàn đứng điều chỉnh chiều cao NiceDesign với thiết kế gọn gàng, dễ sử dụng cho môi trường văn phòng hiện đại.",
          tagName: "ADJUSTABLE_DESK",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "Office", price: 2900000, quantity: 12 },
            { color: "Gỗ", version: "Luxury", type: "Office", price: 3500000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Gỗ công nghiệp, khung thép sơn tĩnh điện" },
            { title: "Kích thước", info: "120 x 70 x 80 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao điện tử, dễ dàng di chuyển" }
          ]),
          productImage: JSON.stringify("uploads\\product\\NDSD115-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\NiceDesign Standing Desk-desc-ef0.jpg",
            img1: "uploads\\product\\NiceDesign Standing Desk-desc-7fa.jpg",
            img2: "uploads\\product\\NiceDesign Standing Desk-desc-beb.jpg",
            img3: "uploads\\product\\NiceDesign Standing Desk-desc-888.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 116,
          name: "HyperWork Electric Desk Pro",
          productId: "HWD116",
          brandId: 6,
          description: "Bàn nâng hạ HyperWork với tính năng điều chỉnh linh hoạt, phù hợp cho các không gian làm việc chuyên nghiệp.",
          tagName: "STANDING_DESK",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "Office", price: 3100000, quantity: 10 },
            { color: "Trắng", version: "Premium", type: "Office", price: 3700000, quantity: 7 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Khung thép, mặt bàn MDF chống trầy" },
            { title: "Kích thước", info: "140 x 75 x 80 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao điện tử, tính năng tiết kiệm năng lượng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\HWD116-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\HyperWork Electric Desk Pro-desc-87f.jpg"         
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 117,
          name: "Dandihome Standing Desk",
          productId: "DHSD117",
          brandId: 7,
          description: "Bàn đứng Dandihome với thiết kế hiện đại, dễ dàng điều chỉnh chiều cao cho môi trường làm việc tiện nghi.",
          tagName: "ADJUSTABLE_DESK",
          variants: JSON.stringify([
            { color: "Trắng", version: "Standard", type: "Work", price: 3200000, quantity: 9 },
            { color: "Gỗ", version: "Deluxe", type: "Work", price: 3800000, quantity: 4 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Khung thép, mặt bàn gỗ công nghiệp" },
            { title: "Kích thước", info: "130 x 80 x 75 cm" },
            { title: "Tính năng", info: "Điều chỉnh chiều cao, khả năng chống trượt" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DHSD117-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dandihome Standing Desk-desc-ad5.jpg",
            img1: "uploads\\product\\Dandihome Standing Desk-desc-eae.jpg",
            img2: "uploads\\product\\Dandihome Standing Desk-desc-3c5.jpg",
            img3: "uploads\\product\\Dandihome Standing Desk-desc-9ba.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 118,
          name: "ASUS Quick Charger",
          productId: "AQC118",
          brandId: 1,
          description: "Sạc nhanh ASUS với công nghệ tiên tiến, giúp sạc điện thoại và laptop nhanh chóng, an toàn.",
          tagName: "FAST_CHARGER",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Charger", price: 600000, quantity: 15 },
            { color: "Trắng", version: "Pro", type: "Charger", price: 800000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Công suất", info: "65W" },
            { title: "Tính năng", info: "Sạc nhanh, bảo vệ quá nhiệt, quá dòng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\AQC118-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS Quick Charger-desc-795.jpg",
            img1: "uploads\\product\\ASUS Quick Charger-desc-81a.jpg",
            img2: "uploads\\product\\ASUS Quick Charger-desc-c5f.jpg",
            img3: "uploads\\product\\ASUS Quick Charger-desc-d17.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 119,
          name: "Dell Wooden Handstand",
          productId: "DWH119",
          brandId: 2,
          description: "Kệ tay gỗ Dell thiết kế hiện đại, giúp tăng sự thoải mái khi làm việc và giữ cho không gian gọn gàng.",
          tagName: "WOODEN_HANDSTAND",
          variants: JSON.stringify([
            { color: "Gỗ tự nhiên", version: "Standard", type: "Accessory", price: 750000, quantity: 12 },
            { color: "Gỗ sẫm", version: "Premium", type: "Accessory", price: 900000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Gỗ tự nhiên, sơn bóng" },
            { title: "Kích thước", info: "30 x 20 x 15 cm" },
            { title: "Tính năng", info: "Giảm đau cổ tay, dễ dàng điều chỉnh chiều cao" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DWH119-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Wooden Handstand-desc-ef9.jpg",
            img1: "uploads\\product\\Dell Wooden Handstand-desc-8f6.jpg",
            img2: "uploads\\product\\Dell Wooden Handstand-desc-0ea.jpg",
            img3: "uploads\\product\\Dell Wooden Handstand-desc-a19.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 120,
          name: "Lenovo Monitor Stand",
          productId: "LMS120",
          brandId: 3,
          description: "Kệ màn hình Lenovo giúp bạn sắp xếp không gian làm việc gọn gàng và nâng cao hiệu suất công việc.",
          tagName: "MONITOR_STAND",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "Accessory", price: 500000, quantity: 10 },
            { color: "Gỗ", version: "Deluxe", type: "Accessory", price: 650000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Khung thép, mặt kệ gỗ" },
            { title: "Kích thước", info: "40 x 25 x 12 cm" },
            { title: "Tính năng", info: "Chống trượt, tăng độ bền" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LMS120-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo Monitor Stand-desc-2ad.jpg",
            img1: "uploads\\product\\Lenovo Monitor Stand-desc-e8f.jpg",
            img2: "uploads\\product\\Lenovo Monitor Stand-desc-9a6.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 121,
          name: "Microsoft Desk Lamp",
          productId: "MDL121",
          brandId: 4,
          description: "Đèn bàn Microsoft cung cấp ánh sáng LED chất lượng, tiết kiệm điện và bảo vệ mắt khi làm việc lâu dài.",
          tagName: "DESK_LAMP",
          variants: JSON.stringify([
            { color: "Trắng", version: "Standard", type: "Lamp", price: 450000, quantity: 20 },
            { color: "Đen", version: "Pro", type: "Lamp", price: 550000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Công suất", info: "12W" },
            { title: "Tính năng", info: "Điều chỉnh độ sáng, bảo vệ mắt" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MDL121-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Desk Lamp-desc-44f.jpg",
            img1: "uploads\\product\\Microsoft Desk Lamp-desc-602.jpg",
            img2: "uploads\\product\\Microsoft Desk Lamp-desc-d12.jpg",
            img3: "uploads\\product\\Microsoft Desk Lamp-desc-81a.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 122,
          name: "Power Strip ASUS",
          productId: "PSA123",
          brandId: 1,
          description: "Ổ điện ASUS với nhiều cổng USB và ổ cắm điện, giúp bạn dễ dàng cấp nguồn cho nhiều thiết bị cùng lúc.",
          tagName: "POWER_STRIP",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Accessory", price: 400000, quantity: 20 },
            { color: "Trắng", version: "Pro", type: "Accessory", price: 500000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Số cổng", info: "4 cổng điện, 2 cổng USB" },
            { title: "Tính năng", info: "Bảo vệ quá tải, dễ dàng lắp đặt" }
          ]),
          productImage: JSON.stringify("uploads\\product\\PSA123-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Power Strip ASUS-desc-bef.jpg",
            img1: "uploads\\product\\Power Strip ASUS-desc-8e2.jpg",
            img2: "uploads\\product\\Power Strip ASUS-desc-4dd.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 123,
          name: "Dell Pegboard Organizer",
          productId: "DPO124",
          brandId: 2,
          description: "Bảng treo đồ Pegboard Dell giúp bạn tổ chức không gian làm việc gọn gàng, dễ dàng treo các đồ dùng văn phòng.",
          tagName: "PEGBOARD_ORGANIZER",
          variants: JSON.stringify([
            { color: "Trắng", version: "Standard", type: "Accessory", price: 300000, quantity: 25 },
            { color: "Gỗ", version: "Deluxe", type: "Accessory", price: 450000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Gỗ công nghiệp, sơn bền" },
            { title: "Kích thước", info: "60 x 40 cm" },
            { title: "Tính năng", info: "Dễ dàng treo đồ, tiết kiệm không gian" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DPO124-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Pegboard Organizer-desc-a59.jpg",
            img1: "uploads\\product\\Dell Pegboard Organizer-desc-32d.jpg",
            img2: "uploads\\product\\Dell Pegboard Organizer-desc-8b1.jpg",
            img3: "uploads\\product\\Dell Pegboard Organizer-desc-f4c.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 124,
          name: "Cable Management Tray Lenovo",
          productId: "CMT125",
          brandId: 3,
          description: "Khay đi dây điện Lenovo kẹp bàn giúp giữ cho không gian làm việc gọn gàng, tránh rối dây cáp điện.",
          tagName: "CABLE_TRAY",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "Accessory", price: 200000, quantity: 30 },
            { color: "Trắng", version: "Pro", type: "Accessory", price: 250000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Chất liệu", info: "Nhựa chịu lực" },
            { title: "Kích thước", info: "30 x 10 x 5 cm" },
            { title: "Tính năng", info: "Dễ dàng lắp đặt, chống rối dây" }
          ]),
          productImage: JSON.stringify("uploads\\product\\CMT125-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Cable Management Tray Lenovo-desc-018.jpg",
            img1: "uploads\\product\\Cable Management Tray Lenovo-desc-e55.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 125,
          name: "ASUS VR Headset Pro",
          productId: "VRP125",
          brandId: 1,
          description: "Kính thực tế ảo ASUS VR Headset Pro với màn hình độ phân giải cao và khả năng kết nối nhanh, mang đến trải nghiệm chân thực.",
          tagName: "VR_HEADSET",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "VR", price: 9000000, quantity: 20 },
            { color: "Trắng", version: "Pro", type: "VR", price: 12000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "4K Ultra HD" },
            { title: "Kết nối", info: "USB-C, Bluetooth 5.0" },
            { title: "Tính năng", info: "Hỗ trợ thực tế ảo, 6 DOF, tích hợp tai nghe" }
          ]),
          productImage: JSON.stringify("uploads\\product\\VRP125-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS VR Headset Pro-desc-d38.jpg",
            img1: "uploads\\product\\ASUS VR Headset Pro-desc-2f0.jpg",
            img2: "uploads\\product\\ASUS VR Headset Pro-desc-57c.jpg",
            img3: "uploads\\product\\ASUS VR Headset Pro-desc-ee2.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 126,
          name: "Dell Immersive AR Glasses",
          productId: "DAR126",
          brandId: 2,
          description: "Kính thực tế ảo tăng cường Dell Immersive AR mang đến trải nghiệm vượt trội với công nghệ AR tiên tiến.",
          tagName: "AR_GLASSES",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "AR", price: 10000000, quantity: 15 },
            { color: "Xám", version: "Deluxe", type: "AR", price: 13000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Trọng lượng", info: "300g" },
            { title: "Kết nối", info: "Wi-Fi 6, Bluetooth 5.1" },
            { title: "Tính năng", info: "Hỗ trợ thực tế tăng cường, tương tác cảm ứng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DAR126-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Immersive AR Glasses-desc-0a6.jpg",
            img1: "uploads\\product\\Dell Immersive AR Glasses-desc-39d.jpg",
            img2: "uploads\\product\\Dell Immersive AR Glasses-desc-bb0.jpg",
            img3: "uploads\\product\\Dell Immersive AR Glasses-desc-aaf.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 127,
          name: "Lenovo Explorer VR",
          productId: "LVR127",
          brandId: 3,
          description: "Kính thực tế ảo Lenovo Explorer được thiết kế cho trải nghiệm chơi game và học tập đầy cảm hứng.",
          tagName: "VR_HEADSET",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "VR", price: 8000000, quantity: 18 },
            { color: "Xám", version: "Pro", type: "VR", price: 10000000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "2880 x 1600" },
            { title: "Kết nối", info: "USB-C, DisplayPort" },
            { title: "Tính năng", info: "Hỗ trợ thực tế ảo, thiết kế công thái học" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LVR127-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo Explorer VR-desc-310.jpg",
            img1: "uploads\\product\\Lenovo Explorer VR-desc-a1f.jpg",
            img2: "uploads\\product\\Lenovo Explorer VR-desc-d1d.jpg",
            img3: "uploads\\product\\Lenovo Explorer VR-desc-7dd.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 128,
          name: "Microsoft Hololens 3",
          productId: "MHL128",
          brandId: 4,
          description: "Microsoft Hololens 3 với công nghệ AI tích hợp, giúp biến không gian thực thành trải nghiệm số tuyệt vời.",
          tagName: "AR_HEADSET",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "AR", price: 15000000, quantity: 10 },
            { color: "Bạc", version: "Enterprise", type: "AR", price: 20000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Trọng lượng", info: "550g" },
            { title: "Kết nối", info: "Wi-Fi 6, USB-C" },
            { title: "Tính năng", info: "Hỗ trợ thực tế tăng cường, tương tác AI" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MHL128-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Hololens 3-desc-565.jpg",
            img1: "uploads\\product\\Microsoft Hololens 3-desc-483.jpg",
            img2: "uploads\\product\\Microsoft Hololens 3-desc-c2c.jpg",
            img3: "uploads\\product\\Microsoft Hololens 3-desc-2a3.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 129,
          name: "MSI Virtual Vision",
          productId: "MSIVV129",
          brandId: 5,
          description: "MSI Virtual Vision được thiết kế cho game thủ, mang lại trải nghiệm VR cực kỳ mượt mà và chi tiết.",
          tagName: "VR_HEADSET",
          variants: JSON.stringify([
            { color: "Đen", version: "Gaming", type: "VR", price: 11000000, quantity: 15 },
            { color: "Đỏ", version: "Pro", type: "VR", price: 14000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "OLED 4K" },
            { title: "Kết nối", info: "HDMI, USB-C" },
            { title: "Tính năng", info: "Tích hợp âm thanh 3D, hỗ trợ thực tế ảo" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSIVV129-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI Virtual Vision-desc-7e7.jpg",
            img1: "uploads\\product\\MSI Virtual Vision-desc-9ac.jpg",
            img2: "uploads\\product\\MSI Virtual Vision-desc-048.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 130,
          name: "ASUS AR Glasses Vision",
          productId: "ARV130",
          brandId: 1,
          description: "Kính thực tế tăng cường ASUS AR Glasses Vision với công nghệ hiển thị tiên tiến và thiết kế nhẹ nhàng.",
          tagName: "AR_GLASSES",
          variants: JSON.stringify([
            { color: "Đen", version: "Standard", type: "AR", price: 11500000, quantity: 12 },
            { color: "Trắng", version: "Pro", type: "AR", price: 14500000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Trọng lượng", info: "250g" },
            { title: "Hiển thị", info: "Full HD, 90Hz" },
            { title: "Tính năng", info: "Tích hợp cảm biến chuyển động, tương tác thực tế tăng cường" }
          ]),
          productImage: JSON.stringify("uploads\\product\\ARV130-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS AR Glasses Vision-desc-2b6.jpg",
            img1: "uploads\\product\\ASUS AR Glasses Vision-desc-ec5.jpg",
            img2: "uploads\\product\\ASUS AR Glasses Vision-desc-10d.jpg",
            img3: "uploads\\product\\ASUS AR Glasses Vision-desc-a37.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 131,
          name: "Dell Precision VR Kit",
          productId: "DVRK131",
          brandId: 2,
          description: "Dell Precision VR Kit mang đến sự kết hợp hoàn hảo giữa công nghệ VR và năng suất công việc.",
          tagName: "VR_HEADSET",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "VR", price: 9500000, quantity: 10 },
            { color: "Bạc", version: "Pro", type: "VR", price: 13000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Độ phân giải", info: "3200 x 1800" },
            { title: "Kết nối", info: "USB-C, HDMI" },
            { title: "Tính năng", info: "Hỗ trợ VR chuyên nghiệp, thiết kế nhẹ" }
          ]),
          productImage: JSON.stringify("uploads\\product\\DVRK131-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Precision VR Kit-desc-808.jpg"           
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 132,
          name: "Lenovo Smart AR Gear",
          productId: "LAR132",
          brandId: 3,
          description: "Lenovo Smart AR Gear là giải pháp tối ưu cho việc giải trí và làm việc trong không gian số.",
          tagName: "AR_GLASSES",
          variants: JSON.stringify([
            { color: "Đen", version: "Basic", type: "AR", price: 12000000, quantity: 9 },
            { color: "Xám", version: "Advanced", type: "AR", price: 15500000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Hiển thị", info: "QHD, 120Hz" },
            { title: "Kết nối", info: "Wi-Fi 6E, USB-C" },
            { title: "Tính năng", info: "Tương tác cảm ứng, hỗ trợ đa nền tảng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\LAR132-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo-Smart-AR-Gear-desc-1.jpg",
            img1: "uploads\\product\\Lenovo-Smart-AR-Gear-desc-2.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 133,
          name: "MSI Reality Vision Pro",
          productId: "MSIRV133",
          brandId: 5,
          description: "MSI Reality Vision Pro thiết kế dành cho người sáng tạo nội dung và các game thủ chuyên nghiệp.",
          tagName: "VR_HEADSET",
          variants: JSON.stringify([
            { color: "Đen", version: "Gaming", type: "VR", price: 12500000, quantity: 14 },
            { color: "Đỏ", version: "Pro", type: "VR", price: 15500000, quantity: 7 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "Dual OLED 4K" },
            { title: "Kết nối", info: "DisplayPort, USB-C" },
            { title: "Tính năng", info: "Tích hợp cảm biến chuyển động, âm thanh vòm 3D" }
          ]),
          productImage: JSON.stringify("uploads\\product\\MSIRV133-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI Reality Vision Pro-desc-b25.jpg",
            img1: "uploads\\product\\MSI Reality Vision Pro-desc-5f3.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 134,
          name: "ASUS ZenBook Pro 16X OLED",
          productId: "ZBP134",
          brandId: 1,
          description: "Laptop ASUS ZenBook Pro 16X OLED mang đến hiệu suất vượt trội với màn hình OLED 4K và vi xử lý Intel Core i9 thế hệ mới.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xám", version: "i7, 16GB RAM", type: "Ultrabook", price: 45000000, quantity: 10 },
            { color: "Bạc", version: "i9, 32GB RAM", type: "Ultrabook", price: 60000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "16 inch, 4K OLED" },
            { title: "Vi xử lý", info: "Intel Core i9-13900H" },
            { title: "Đồ họa", info: "NVIDIA GeForce RTX 4060" }
          ]),
          productImage: JSON.stringify("uploads\\product\\ZBP134-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS ZenBook Pro 16X OLED-desc-337.jpg",
            img1: "uploads\\product\\ASUS ZenBook Pro 16X OLED-desc-07d.jpg",
            img2: "uploads\\product\\ASUS ZenBook Pro 16X OLED-desc-1f1.jpg",
            img3: "uploads\\product\\ASUS ZenBook Pro 16X OLED-desc-e9e.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 135,
          name: "Dell XPS 15 9520",
          productId: "XPS135",
          brandId: 2,
          description: "Dell XPS 15 9520 với thiết kế sang trọng và hiệu năng mạnh mẽ, phù hợp cho công việc sáng tạo và giải trí.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i7, 16GB RAM", type: "Workstation", price: 48000000, quantity: 12 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Workstation", price: 65000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, 3.5K InfinityEdge" },
            { title: "Vi xử lý", info: "Intel Core i9-13900HK" },
            { title: "Đồ họa", info: "NVIDIA GeForce RTX 4070" }
          ]),
          productImage: JSON.stringify("uploads\\product\\XPS135-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell XPS 15 9520-desc-4ca.jpg",
            img1: "uploads\\product\\Dell XPS 15 9520-desc-7d0.jpg",
            img2: "uploads\\product\\Dell XPS 15 9520-desc-618.jpg",
            img3: "uploads\\product\\Dell XPS 15 9520-desc-928.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 136,
          name: "Lenovo ThinkPad X1 Carbon Gen 11",
          productId: "TPC136",
          brandId: 3,
          description: "Lenovo ThinkPad X1 Carbon Gen 11 mang lại độ bền và hiệu năng tối ưu, được thiết kế dành cho doanh nhân.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 16GB RAM", type: "Business", price: 40000000, quantity: 20 },
            { color: "Xám", version: "i7, 32GB RAM", type: "Business", price: 52000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, 2.8K WQXGA" },
            { title: "Vi xử lý", info: "Intel Core i7-13700H" },
            { title: "Tính năng đặc biệt", info: "Bảo mật vPro, cảm biến vân tay" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC136-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo ThinkPad X1 Carbon Gen 11-desc-da0.jpg",
            img1: "uploads\\product\\Lenovo ThinkPad X1 Carbon Gen 11-desc-43c.jpg",
            img2: "uploads\\product\\Lenovo ThinkPad X1 Carbon Gen 11-desc-4b4.jpg",
            img3: "uploads\\product\\Lenovo ThinkPad X1 Carbon Gen 11-desc-2a6.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 137,
          name: "ASUS ZenBook Pro 14 OLED",
          productId: "TPC137",
          brandId: 1,
          description: "ASUS ZenBook Pro 14 OLED mang đến hiệu năng mạnh mẽ cùng màn hình OLED đỉnh cao, hoàn hảo cho sáng tạo nội dung.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xanh", version: "i7, 16GB RAM", type: "Creator", price: 43000000, quantity: 15 },
            { color: "Bạc", version: "i9, 32GB RAM", type: "Creator", price: 59000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, 2.8K OLED" },
            { title: "Vi xử lý", info: "Intel Core i9-13900H" },
            { title: "Tính năng đặc biệt", info: "Màn hình cảm ứng, hỗ trợ bút Stylus" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC137-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS ZenBook Pro 14 OLED-desc-f8a.jpg",
            img1: "uploads\\product\\ASUS ZenBook Pro 14 OLED-desc-05d.jpg",
            img2: "uploads\\product\\ASUS ZenBook Pro 14 OLED-desc-887.jpg",
            img3: "uploads\\product\\ASUS ZenBook Pro 14 OLED-desc-802.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 138,
          name: "ASUS ROG Strix G16",
          productId: "TPC138",
          brandId: 1,
          description: "ASUS ROG Strix G16 là sự lựa chọn hoàn hảo cho game thủ, với hiệu năng đỉnh cao và thiết kế đầy phong cách.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM, RTX 4060", type: "Gaming", price: 49000000, quantity: 12 },
            { color: "Đen", version: "i9, 32GB RAM, RTX 4080", type: "Gaming", price: 70000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "16 inch, FHD, 165Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-13980HX" },
            { title: "Tính năng đặc biệt", info: "Bàn phím RGB, hệ thống tản nhiệt thông minh" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC138-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS ROG Strix G16-desc-636.jpg",
            img1: "uploads\\product\\ASUS ROG Strix G16-desc-faa.jpg",
            img2: "uploads\\product\\ASUS ROG Strix G16-desc-dcb.jpg",
            img3: "uploads\\product\\ASUS ROG Strix G16-desc-266.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 139,
          name: "ASUS VivoBook 15",
          productId: "TPC139",
          brandId: 1,
          description: "ASUS VivoBook 15 là sự kết hợp hoàn hảo giữa hiệu năng và giá trị, phù hợp với nhu cầu học tập và làm việc hàng ngày.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i5, 8GB RAM", type: "Everyday", price: 20000000, quantity: 25 },
            { color: "Xám", version: "i7, 16GB RAM", type: "Everyday", price: 27000000, quantity: 15 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, FHD" },
            { title: "Vi xử lý", info: "Intel Core i7-13500H" },
            { title: "Tính năng đặc biệt", info: "Bàn phím số, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC139-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\ASUS VivoBook 15-desc-366.jpg",
            img1: "uploads\\product\\ASUS VivoBook 15-desc-46d.jpg",
            img2: "uploads\\product\\ASUS VivoBook 15-desc-e45.jpg",
            img3: "uploads\\product\\ASUS VivoBook 15-desc-c4f.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 140,
          name: "Dell Inspiron 15",
          productId: "TPC140",
          brandId: 2,
          description: "Dell Inspiron 15 mang đến hiệu năng mạnh mẽ, thiết kế tinh tế, phù hợp cho công việc và giải trí.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 8GB RAM", type: "Everyday", price: 19000000, quantity: 20 },
            { color: "Bạc", version: "i7, 16GB RAM", type: "Everyday", price: 25000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, FHD" },
            { title: "Vi xử lý", info: "Intel Core i7-13500H" },
            { title: "Tính năng đặc biệt", info: "Bàn phím có đèn nền, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC140-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Inspiron 15-desc-170.jpg",
            img1: "uploads\\product\\Dell Inspiron 15-desc-d2f.jpg",
            img2: "uploads\\product\\Dell Inspiron 15-desc-8fb.jpg",
            img3: "uploads\\product\\Dell Inspiron 15-desc-253.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },        
        {
          id: 141,
          name: "Dell XPS 13",
          productId: "TPC141",
          brandId: 2,
          description: "Dell XPS 13 là dòng laptop cao cấp, mang đến hiệu năng mạnh mẽ, thiết kế nhỏ gọn và sang trọng.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xám", version: "i5, 8GB RAM", type: "Premium", price: 29000000, quantity: 18 },
            { color: "Bạc", version: "i7, 16GB RAM", type: "Premium", price: 37000000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "13.3 inch, 4K UHD" },
            { title: "Vi xử lý", info: "Intel Core i7-1365U" },
            { title: "Tính năng đặc biệt", info: "Màn hình viền mỏng, bàn phím có đèn nền, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC141-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell XPS 13-desc-743.jpg",
            img1: "uploads\\product\\Dell XPS 13-desc-256.jpg",
            img2: "uploads\\product\\Dell XPS 13-desc-b33.jpg",
            img3: "uploads\\product\\Dell XPS 13-desc-b42.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 142,
          name: "Dell Latitude 14",
          productId: "TPC142",
          brandId: 2,
          description: "Dell Latitude 14 là dòng laptop doanh nhân, với thiết kế bền bỉ và hiệu năng ổn định, lý tưởng cho công việc hàng ngày.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 8GB RAM", type: "Business", price: 22000000, quantity: 30 },
            { color: "Bạc", version: "i7, 16GB RAM", type: "Business", price: 29000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, Full HD" },
            { title: "Vi xử lý", info: "Intel Core i7-1250U" },
            { title: "Tính năng đặc biệt", info: "Chống sốc, bảo mật vân tay, bàn phím có đèn nền" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC142-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Dell Latitude 14-desc-356.jpg",
            img1: "uploads\\product\\Dell Latitude 14-desc-023.jpg",
            img2: "uploads\\product\\Dell Latitude 14-desc-37c.jpg",
            img3: "uploads\\product\\Dell Latitude 14-desc-367.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 143,
          name: "Lenovo ThinkPad X1 Carbon",
          productId: "TPC143",
          brandId: 3,
          description: "Lenovo ThinkPad X1 Carbon là dòng laptop cao cấp dành cho doanh nhân, với thiết kế nhẹ nhàng, hiệu năng vượt trội và tính bảo mật cao.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 8GB RAM", type: "Business", price: 35000000, quantity: 15 },
            { color: "Đen", version: "i7, 16GB RAM", type: "Business", price: 43000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, 4K UHD" },
            { title: "Vi xử lý", info: "Intel Core i7-1165G7" },
            { title: "Tính năng đặc biệt", info: "Mỏng nhẹ, bảo mật vân tay, bàn phím có đèn nền" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC143-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo ThinkPad X1 Carbon-desc-e0b.jpg",
            img1: "uploads\\product\\Lenovo ThinkPad X1 Carbon-desc-865.jpg",
            img2: "uploads\\product\\Lenovo ThinkPad X1 Carbon-desc-a52.jpg",
            img3: "uploads\\product\\Lenovo ThinkPad X1 Carbon-desc-e5b.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 144,
          name: "Lenovo IdeaPad 3",
          productId: "TPC144",
          brandId: 3,
          description: "Lenovo IdeaPad 3 là một lựa chọn tuyệt vời cho người dùng học tập và làm việc với hiệu năng ổn định và thiết kế đơn giản.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i3, 4GB RAM", type: "Everyday", price: 12000000, quantity: 25 },
            { color: "Đen", version: "i5, 8GB RAM", type: "Everyday", price: 16000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, Full HD" },
            { title: "Vi xử lý", info: "Intel Core i5-1135G7" },
            { title: "Tính năng đặc biệt", info: "Cổng kết nối đầy đủ, bàn phím số" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC144-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo IdeaPad 3-desc-ba9.jpg",
            img1: "uploads\\product\\Lenovo IdeaPad 3-desc-767.jpg"           
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 145,
          name: "Lenovo Legion 5 Pro",
          productId: "TPC145",
          brandId: 3,
          description: "Lenovo Legion 5 Pro là laptop gaming với cấu hình mạnh mẽ, mang lại trải nghiệm chơi game mượt mà, thiết kế hiện đại.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 32000000, quantity: 12 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 40000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "16 inch, WQXGA (2560x1600)" },
            { title: "Vi xử lý", info: "Intel Core i7-12700H" },
            { title: "Tính năng đặc biệt", info: "Màn hình tần số quét 165Hz, hệ thống tản nhiệt Advanced" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC145-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Lenovo Legion 5 Pro-desc-366.jpg",
            img1: "uploads\\product\\Lenovo Legion 5 Pro-desc-46d.jpg",
            img2: "uploads\\product\\Lenovo Legion 5 Pro-desc-e45.jpg",
            img3: "uploads\\product\\Lenovo Legion 5 Pro-desc-c4f.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 146,
          name: "Microsoft Surface Laptop 4",
          productId: "TPC146",
          brandId: 4,
          description: "Microsoft Surface Laptop 4 với thiết kế sang trọng, hiệu năng vượt trội, là sự lựa chọn lý tưởng cho công việc và giải trí.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i5, 8GB RAM", type: "Premium", price: 35000000, quantity: 10 },
            { color: "Đen", version: "i7, 16GB RAM", type: "Premium", price: 42000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "13.5 inch, PixelSense, 2256x1504" },
            { title: "Vi xử lý", info: "Intel Core i7-1185G7" },
            { title: "Tính năng đặc biệt", info: "Thiết kế mỏng nhẹ, bàn phím có đèn nền, màn hình cảm ứng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC146-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Laptop 4-desc-357.jpg",
            img1: "uploads\\product\\Microsoft Surface Laptop 4-desc-727.jpg",
            img2: "uploads\\product\\Microsoft Surface Laptop 4-desc-a68.jpg",
            img3: "uploads\\product\\Microsoft Surface Laptop 4-desc-a3f.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 147,
          name: "Microsoft Surface Laptop Go",
          productId: "TPC147",
          brandId: 4,
          description: "Microsoft Surface Laptop Go mang đến hiệu năng đáng kinh ngạc trong một thiết kế nhỏ gọn, phù hợp với nhu cầu di động cao.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xanh", version: "i5, 8GB RAM", type: "Everyday", price: 20000000, quantity: 18 },
            { color: "Bạc", version: "i5, 8GB RAM", type: "Everyday", price: 21000000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "12.4 inch, PixelSense, 1536x1024" },
            { title: "Vi xử lý", info: "Intel Core i5-1035G1" },
            { title: "Tính năng đặc biệt", info: "Thiết kế siêu mỏng, thời lượng pin dài, bảo mật vân tay" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC147-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Laptop Go-desc-25c.jpg",
            img1: "uploads\\product\\Microsoft Surface Laptop Go-desc-def.jpg",
            img2: "uploads\\product\\Microsoft Surface Laptop Go-desc-305.jpg",
            img3: "uploads\\product\\Microsoft Surface Laptop Go-desc-28a.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 148,
          name: "Microsoft Surface Book 3",
          productId: "TPC148",
          brandId: 4,
          description: "Microsoft Surface Book 3 là chiếc laptop 2-in-1 với khả năng biến hóa linh hoạt, màn hình cảm ứng sắc nét và cấu hình mạnh mẽ.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i7, 16GB RAM", type: "Premium", price: 45000000, quantity: 8 },
            { color: "Bạc", version: "i5, 8GB RAM", type: "Premium", price: 39000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "13.5 inch, PixelSense, 3000x2000" },
            { title: "Vi xử lý", info: "Intel Core i7-1065G7" },
            { title: "Tính năng đặc biệt", info: "2-in-1, màn hình cảm ứng, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC148-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Book 3-desc-5ee.jpg",
            img1: "uploads\\product\\Microsoft Surface Book 3-desc-0b1.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 149,
          name: "Microsoft Surface Pro 7",
          productId: "TPC149",
          brandId: 4,
          description: "Microsoft Surface Pro 7 là một chiếc máy tính bảng mạnh mẽ có thể chuyển thành laptop, rất thích hợp cho những người làm việc di động.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 8GB RAM", type: "2-in-1", price: 25000000, quantity: 15 },
            { color: "Bạc", version: "i7, 16GB RAM", type: "2-in-1", price: 32000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "12.3 inch, PixelSense, 2736x1824" },
            { title: "Vi xử lý", info: "Intel Core i7-1065G7" },
            { title: "Tính năng đặc biệt", info: "2-in-1, màn hình cảm ứng, cổng USB-C" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC149-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Microsoft Surface Pro 7-desc-f4b.jpg",
            img1: "uploads\\product\\Microsoft Surface Pro 7-desc-370.jpg",
            img2: "uploads\\product\\Microsoft Surface Pro 7-desc-3a7.jpg",
            img3: "uploads\\product\\Microsoft Surface Pro 7-desc-009.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 150,
          name: "MSI GE76 Raider",
          productId: "TPC150",
          brandId: 5,
          description: "MSI GE76 Raider là dòng laptop gaming cao cấp với cấu hình cực mạnh, mang đến trải nghiệm chơi game tuyệt vời và thiết kế ấn tượng.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 45000000, quantity: 8 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 55000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "17.3 inch, Full HD, 360Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-11980HK" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 3080, tản nhiệt mạnh mẽ" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC150-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI GE76 Raider-desc-272.jpg",
            img1: "uploads\\product\\MSI GE76 Raider-desc-fd5.jpg",
            img2: "uploads\\product\\MSI GE76 Raider-desc-ada.jpg",
            img3: "uploads\\product\\MSI GE76 Raider-desc-f55.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 151,
          name: "MSI GS66 Stealth",
          productId: "TPC151",
          brandId: 5,
          description: "MSI GS66 Stealth là laptop gaming siêu mỏng, kết hợp hiệu năng mạnh mẽ và thiết kế tinh tế, lý tưởng cho game thủ chuyên nghiệp.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 38000000, quantity: 10 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 47000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, Full HD, 240Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-11900H" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 3070, thiết kế siêu mỏng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC151-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI GS66 Stealth-desc-fb8.jpg",
            img1: "uploads\\product\\MSI GS66 Stealth-desc-735.jpg",
            img2: "uploads\\product\\MSI GS66 Stealth-desc-0c8.jpg",
            img3: "uploads\\product\\MSI GS66 Stealth-desc-141.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 152,
          name: "MSI Creator 15",
          productId: "TPC152",
          brandId: 5,
          description: "MSI Creator 15 là laptop dành cho sáng tạo nội dung với hiệu suất mạnh mẽ, màn hình chất lượng cao và thiết kế tinh tế.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Creator", price: 40000000, quantity: 7 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Creator", price: 51000000, quantity: 4 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, 4K UHD, 100% Adobe RGB" },
            { title: "Vi xử lý", info: "Intel Core i9-10885H" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 3060, màn hình sắc nét cho công việc sáng tạo" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC152-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI Creator 15-desc-61c.jpg",
            img1: "uploads\\product\\MSI Creator 15-desc-242.jpg",
            img2: "uploads\\product\\MSI Creator 15-desc-9cb.jpg",
            img3: "uploads\\product\\MSI Creator 15-desc-a54.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 153,
          name: "MSI Pulse GL66",
          productId: "TPC153",
          brandId: 5,
          description: "MSI Pulse GL66 là laptop gaming với cấu hình mạnh mẽ, tần số quét màn hình cao, phù hợp với những game thủ đam mê tốc độ.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 35000000, quantity: 12 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 45000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, Full HD, 144Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-11900H" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 3060, hệ thống tản nhiệt Cooler Boost" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC153-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\MSI Pulse GL66-desc-861.jpg",
            img1: "uploads\\product\\MSI Pulse GL66-desc-2dc.jpg",
            img2: "uploads\\product\\MSI Pulse GL66-desc-ee1.jpg",
            img3: "uploads\\product\\MSI Pulse GL66-desc-466.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 154,
          name: "Acer Predator Helios 300",
          productId: "TPC154",
          brandId: 6,
          description: "Acer Predator Helios 300 là laptop gaming mạnh mẽ, thiết kế ấn tượng với hiệu năng vượt trội, mang đến trải nghiệm chơi game đỉnh cao.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 36000000, quantity: 12 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 42000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, Full HD, 165Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-11900H" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 3070, hệ thống tản nhiệt Aeroblade 3D" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC154-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer Predator Helios 300-desc-4a1.jpg",
            img1: "uploads\\product\\Acer Predator Helios 300-desc-9c9.jpg",
            img2: "uploads\\product\\Acer Predator Helios 300-desc-8f3.jpg",
            img3: "uploads\\product\\Acer Predator Helios 300-desc-a7d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 155,
          name: "Acer Swift 3",
          productId: "TPC155",
          brandId: 6,
          description: "Acer Swift 3 là laptop siêu mỏng nhẹ, hiệu năng ổn định, lý tưởng cho công việc văn phòng và học tập.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i5, 8GB RAM", type: "Everyday", price: 18000000, quantity: 15 },
            { color: "Vàng", version: "i7, 16GB RAM", type: "Everyday", price: 23000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, Full HD" },
            { title: "Vi xử lý", info: "Intel Core i7-1165G7" },
            { title: "Tính năng đặc biệt", info: "Thời lượng pin dài, thiết kế mỏng nhẹ" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC155-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer Swift 3-desc-366.jpg",
            img1: "uploads\\product\\Acer Swift 3-desc-9b3.jpg",
            img2: "uploads\\product\\Acer Swift 3-desc-a82.jpg",
            img3: "uploads\\product\\Acer Swift 3-desc-a5d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 156,
          name: "Acer Aspire 7",
          productId: "TPC156",
          brandId: 6,
          description: "Acer Aspire 7 với cấu hình mạnh mẽ và thiết kế thanh lịch, là sự lựa chọn phù hợp cho công việc, học tập và giải trí.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 8GB RAM", type: "Everyday", price: 19000000, quantity: 20 },
            { color: "Đen", version: "i7, 16GB RAM", type: "Everyday", price: 25000000, quantity: 12 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, Full HD" },
            { title: "Vi xử lý", info: "Intel Core i7-11800H" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa GTX 1650, hiệu năng ổn định" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC156-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Acer Aspire 7-desc-709.jpg",
            img1: "uploads\\product\\Acer Aspire 7-desc-987.jpg",
            img2: "uploads\\product\\Acer Aspire 7-desc-f16.jpg",
            img3: "uploads\\product\\Acer Aspire 7-desc-a67.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 157,
          name: "Razer Blade 16",
          productId: "TPC157",
          brandId: 7,
          description: "Razer Blade 16 là laptop gaming cao cấp với thiết kế mỏng nhẹ, màn hình sắc nét và hiệu năng vượt trội, phù hợp cho game thủ chuyên nghiệp.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 62000000, quantity: 10 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 75000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "16 inch, 4K UHD, 120Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-13980HX" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 4090, màn hình Mini LED" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC157-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Razer Blade 16-desc-b85.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 158,
          name: "Razer Blade 14",
          productId: "TPC158",
          brandId: 7,
          description: "Razer Blade 14 là dòng laptop nhỏ gọn với hiệu năng mạnh mẽ, kết hợp thiết kế cao cấp, thích hợp cho cả chơi game và công việc sáng tạo.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "Ryzen 7, 16GB RAM", type: "Gaming", price: 52000000, quantity: 12 },
            { color: "Đen", version: "Ryzen 9, 32GB RAM", type: "Gaming", price: 60000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, QHD, 165Hz" },
            { title: "Vi xử lý", info: "AMD Ryzen 9 7945HX" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 4080, thiết kế siêu mỏng" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC158-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Razer Blade 14-desc-06b.jpg",
            img1: "uploads\\product\\Razer Blade 14-desc-de0.jpg",
            img2: "uploads\\product\\Razer Blade 14-desc-7e6.jpg",
            img3: "uploads\\product\\Razer Blade 14-desc-7dc.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 159,
          name: "Razer Book 13",
          productId: "TPC159",
          brandId: 7,
          description: "Razer Book 13 là laptop dành cho công việc và giải trí, thiết kế mỏng nhẹ, thời lượng pin dài và hiệu năng vượt trội.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i5, 8GB RAM", type: "Everyday", price: 32000000, quantity: 15 },
            { color: "Bạc", version: "i7, 16GB RAM", type: "Everyday", price: 40000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "13.4 inch, FHD+ Touch, 120Hz" },
            { title: "Vi xử lý", info: "Intel Core i7-1165G7" },
            { title: "Tính năng đặc biệt", info: "Thiết kế mỏng nhẹ, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC159-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\Razer Book 13-desc-fbb.jpg",
            img1: "uploads\\product\\Razer Book 13-desc-c1d.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 160,
          name: "GIGABYTE AORUS 17X",
          productId: "TPC160",
          brandId: 8,
          description: "GIGABYTE AORUS 17X là laptop gaming cao cấp với màn hình lớn, cấu hình mạnh mẽ, mang đến trải nghiệm chơi game đỉnh cao cho game thủ chuyên nghiệp.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 57000000, quantity: 10 },
            { color: "Đen", version: "i9, 32GB RAM", type: "Gaming", price: 68000000, quantity: 6 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "17.3 inch, QHD, 240Hz" },
            { title: "Vi xử lý", info: "Intel Core i9-13900HX" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 4090, hệ thống tản nhiệt Windforce Infinity" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC160-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\GIGABYTE AORUS 17X-desc-fa3.png"            
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 161,
          name: "GIGABYTE Aero 15 OLED",
          productId: "TPC161",
          brandId: 8,
          description: "GIGABYTE Aero 15 OLED là laptop sáng tạo nội dung với màn hình OLED sắc nét và hiệu năng mạnh mẽ, lý tưởng cho các nhà thiết kế đồ họa và biên tập video.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xám", version: "i7, 16GB RAM", type: "Creative", price: 49000000, quantity: 8 },
            { color: "Xám", version: "i9, 32GB RAM", type: "Creative", price: 58000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, 4K UHD, OLED" },
            { title: "Vi xử lý", info: "Intel Core i9-12900H" },
            { title: "Tính năng đặc biệt", info: "Màn hình OLED chuẩn 100% DCI-P3, card đồ họa RTX 3080" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC161-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\GIGABYTE Aero 15 OLED-desc-3e5.jpg"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 162,
          name: "GIGABYTE G5 KE",
          productId: "TPC162",
          brandId: 8,
          description: "GIGABYTE G5 KE là laptop gaming giá tốt với cấu hình cân bằng, mang lại hiệu suất vượt trội cho các game thủ phổ thông.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen", version: "i5, 16GB RAM", type: "Gaming", price: 28000000, quantity: 12 },
            { color: "Đen", version: "i7, 16GB RAM", type: "Gaming", price: 34000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "15.6 inch, FHD, 144Hz" },
            { title: "Vi xử lý", info: "Intel Core i7-12500H" },
            { title: "Tính năng đặc biệt", info: "Card đồ họa RTX 3060, bàn phím RGB" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC162-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\GIGABYTE G5 KE-desc-11c.jpg"           
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 163,
          name: "GIGABYTE U4 UD",
          productId: "TPC163",
          brandId: 8,
          description: "GIGABYTE U4 UD là laptop mỏng nhẹ với hiệu năng ổn định, phù hợp cho học tập và làm việc văn phòng.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xám", version: "i5, 8GB RAM", type: "Everyday", price: 22000000, quantity: 15 },
            { color: "Xám", version: "i7, 16GB RAM", type: "Everyday", price: 27000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, FHD" },
            { title: "Vi xử lý", info: "Intel Core i7-1165G7" },
            { title: "Tính năng đặc biệt", info: "Trọng lượng chỉ 990g, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC163-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\GIGABYTE U4 UD-desc-30c.jpg"         
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 164,
          name: "VAIO Z (2023)",
          productId: "TPC164",
          brandId: 9,
          description: "VAIO Z là laptop cao cấp với thiết kế tinh tế, hiệu năng mạnh mẽ và trọng lượng siêu nhẹ, phù hợp cho doanh nhân và người dùng cao cấp.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Đen Carbon", version: "i7, 16GB RAM", type: "Business", price: 62000000, quantity: 8 },
            { color: "Đen Carbon", version: "i9, 32GB RAM", type: "Business", price: 75000000, quantity: 5 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, 4K UHD" },
            { title: "Vi xử lý", info: "Intel Core i9-11900H" },
            { title: "Tính năng đặc biệt", info: "Thiết kế carbon siêu nhẹ, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC164-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\VAIO Z (2023)-desc-571.JPG",
            img1: "uploads\\product\\VAIO Z (2023)-desc-919.JPG",
            img2: "uploads\\product\\VAIO Z (2023)-desc-a91.JPG",
            img3: "uploads\\product\\VAIO Z (2023)-desc-eea.JPG"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 165,
          name: "VAIO SX14",
          productId: "TPC165",
          brandId: 9,
          description: "VAIO SX14 là laptop doanh nhân với thiết kế mỏng nhẹ, hiệu năng ổn định và màn hình 4K, phù hợp cho công việc văn phòng và di chuyển thường xuyên.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i5, 8GB RAM", type: "Business", price: 38000000, quantity: 12 },
            { color: "Đen", version: "i7, 16GB RAM", type: "Business", price: 47000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, 4K UHD" },
            { title: "Vi xử lý", info: "Intel Core i7-1255U" },
            { title: "Tính năng đặc biệt", info: "Thiết kế mỏng nhẹ, tích hợp bảo mật vân tay" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC165-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\VAIO SX14-desc-acd.JPG",
            img1: "uploads\\product\\VAIO SX14-desc-9c8.JPG",
            img2: "uploads\\product\\VAIO SX14-desc-1ef.JPG",
            img3: "uploads\\product\\VAIO SX14-desc-b29.JPG"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 166,
          name: "VAIO FE14",
          productId: "TPC166",
          brandId: 9,
          description: "VAIO FE14 là laptop phổ thông với thiết kế hiện đại, hiệu năng tốt, lý tưởng cho học tập và công việc hàng ngày.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Xám", version: "i3, 8GB RAM", type: "Everyday", price: 22000000, quantity: 15 },
            { color: "Xám", version: "i5, 16GB RAM", type: "Everyday", price: 27000000, quantity: 10 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, FHD" },
            { title: "Vi xử lý", info: "Intel Core i5-1235U" },
            { title: "Tính năng đặc biệt", info: "Thiết kế nhỏ gọn, tích hợp webcam Full HD" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC166-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\VAIO FE14-desc-67b.JPG",
            img1: "uploads\\product\\VAIO FE14-desc-6be.JPG",
            img2: "uploads\\product\\VAIO FE14-desc-510.JPG",
            img3: "uploads\\product\\VAIO FE14-desc-7a7.JPG"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 167,
          name: "VAIO SE14",
          productId: "TPC167",
          brandId: 9,
          description: "VAIO SE14 là laptop hướng đến người dùng văn phòng, với thiết kế sang trọng và hiệu năng mạnh mẽ để đáp ứng mọi nhu cầu công việc.",
          tagName: "LAPTOP",
          variants: JSON.stringify([
            { color: "Bạc", version: "i5, 8GB RAM", type: "Business", price: 30000000, quantity: 15 },
            { color: "Xám", version: "i7, 16GB RAM", type: "Business", price: 37000000, quantity: 8 }
          ]),
          specifications: JSON.stringify([
            { title: "Màn hình", info: "14 inch, FHD" },
            { title: "Vi xử lý", info: "Intel Core i7-1255U" },
            { title: "Tính năng đặc biệt", info: "Âm thanh Dolby Audio, thời lượng pin dài" }
          ]),
          productImage: JSON.stringify("uploads\\product\\TPC167-main.jpg"),
          imageUrl: JSON.stringify({
            img0: "uploads\\product\\VAIO SE14-desc-1c0.JPG",
            img1: "uploads\\product\\VAIO SE14-desc-701.JPG",
            img2: "uploads\\product\\VAIO SE14-desc-fc2.JPG",
            img3: "uploads\\product\\VAIO SE14-desc-60b.JPG"
          }),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
        
    
                                    
    ]);

    // Thêm dữ liệu vào bảng ProductCategory
    await knex('ProductCategory').insert([
      {
        productId: 1, 
        categoryId: 1,
      },
      {
        productId: 2, 
        categoryId: 1,
      },
      {
        productId: 3, 
        categoryId: 1,
      },
      {
        productId: 4, 
        categoryId: 1,
      },
      {
        productId: 5, 
        categoryId: 1,
      },
      {
        productId: 6, 
        categoryId: 1,
      },
      {
        productId: 7, 
        categoryId: 1,
      },
      {
        productId: 8, 
        categoryId: 1,
      },
      {
        productId: 9, 
        categoryId: 1,
      },
      {
        productId: 10, 
        categoryId: 1,
      },
      {
        productId: 11, 
        categoryId: 1,
      },
      {
        productId: 12, 
        categoryId: 1,
      },
      {
        productId: 13, 
        categoryId: 1,
      },
      {
        productId: 14, 
        categoryId: 2,
      },
      {
        productId: 15, 
        categoryId: 2,
      },
      {
        productId: 16, 
        categoryId: 2,
      },
      {
        productId: 17, 
        categoryId: 2,
      },
      {
        productId: 18, 
        categoryId: 2,
      },
      {
        productId: 19, 
        categoryId: 2,
      },
      {
        productId: 20, 
        categoryId: 3,
      },
      {
        productId: 21, 
        categoryId: 3,
      },
      {
        productId: 22, 
        categoryId: 3,
      },
      {
        productId: 23, 
        categoryId: 3,
      },
      {
        productId: 24, 
        categoryId: 3,
      },
      {
        productId: 25, 
        categoryId: 3,
      },
      {
        productId: 26, 
        categoryId: 3,
      },
      {
        productId: 27, 
        categoryId: 3,
      },
      {
        productId: 28, 
        categoryId: 3,
      },
      {
        productId: 29, 
        categoryId: 3,
      },
      {
        productId: 30, 
        categoryId: 3,
      },
      {
        productId: 31, 
        categoryId: 4,
      },
      {
        productId: 32, 
        categoryId: 4,
      },
      {
        productId: 33, 
        categoryId: 4,
      },
      {
        productId: 34, 
        categoryId: 4,
      },
      {
        productId: 35, 
        categoryId: 4,
      },
      {
        productId: 36, 
        categoryId: 5,
      },
      {
        productId: 37, 
        categoryId: 6,
      },
      {
        productId: 38, 
        categoryId: 6,
      },
      {
        productId: 39, 
        categoryId: 6,
      },
      {
        productId: 40, 
        categoryId: 7,
      },
      {
        productId: 41, 
        categoryId: 7,
      },
      {
        productId: 42, 
        categoryId: 7,
      },
      {
        productId: 43, 
        categoryId: 8,
      },
      {
        productId: 44, 
        categoryId: 8,
      },
      {
        productId: 45, 
        categoryId: 8,
      },
      {
        productId: 46, 
        categoryId: 9,
      },
      {
        productId: 47, 
        categoryId: 9,
      },
      {
        productId: 48, 
        categoryId: 9,
      },
      {
        productId: 49, 
        categoryId: 10,
      },
      {
        productId: 50, 
        categoryId: 10,
      },
      {
        productId: 51, 
        categoryId: 10,
      },
      {
        productId: 52, 
        categoryId: 11,
      },
      {
        productId: 53, 
        categoryId: 11,
      },
      {
        productId: 54, 
        categoryId: 11,
      },
      {
        productId: 55, 
        categoryId: 12,
      },
      {
        productId: 56, 
        categoryId: 12,
      },
      {
        productId: 57, 
        categoryId: 12,
      },
      {
        productId: 58, 
        categoryId: 13,
      },
      {
        productId: 59, 
        categoryId: 13,
      },
      {
        productId: 60, 
        categoryId: 13,
      },
      {
        productId: 61, 
        categoryId: 14,
      },
      {
        productId: 62, 
        categoryId: 14,
      },
      {
        productId: 63, 
        categoryId: 14,
      },
      {
        productId: 46, 
        categoryId: 15,
      },
      {
        productId: 47, 
        categoryId: 15,
      },
      {
        productId: 48, 
        categoryId: 15,
      },
      {
        productId: 64, 
        categoryId: 16,
      },
      {
        productId: 65, 
        categoryId: 16,
      },
      {
        productId: 66, 
        categoryId: 16,
      },
      {
        productId: 67, 
        categoryId: 2,
      },
      {
        productId: 68, 
        categoryId: 2,
      },
      {
        productId: 69, 
        categoryId: 2,
      },
      {
        productId: 70, 
        categoryId: 2,
      },
      {
        productId: 71, 
        categoryId: 2,
      },
      {
        productId: 72, 
        categoryId: 2,
      },
      {
        productId: 73, 
        categoryId: 2,
      },
      {
        productId: 74, 
        categoryId: 2,
      },
      {
        productId: 75, 
        categoryId: 2,
      },
      {
        productId: 76, 
        categoryId: 4,
      },
      {
        productId: 77, 
        categoryId: 4,
      },
      {
        productId: 78, 
        categoryId: 4,
      },
      {
        productId: 79, 
        categoryId: 4,
      },
      {
        productId: 80, 
        categoryId: 4,
      },
      {
        productId: 81, 
        categoryId: 4,
      },
      {
        productId: 82,
        categoryId: 4,
      },
      {
        productId: 83,
        categoryId: 4,
      },
      {
        productId: 84,
        categoryId: 4,
      },
      {
        productId: 85,
        categoryId: 4,
      },
      {
        productId: 86,
        categoryId: 4,
      },
      {
        productId: 87,
        categoryId: 4,
      },
      {
        productId: 88,
        categoryId: 4,
      },
      {
        productId: 89,
        categoryId: 5,
      },
      {
        productId: 90, 
        categoryId: 5,
      },
      {
        productId: 91,
        categoryId: 5,
      },
      {
        productId: 92,
        categoryId: 5,
      },
      {
        productId: 93,
        categoryId: 5,
      },
      {
        productId: 94,
        categoryId: 5,
      },
      {
        productId: 95,
        categoryId: 5,
      },
      {
        productId: 96,
        categoryId: 5,
      },
      {
        productId: 97,
        categoryId: 5,
      },
      {
        productId: 98,
        categoryId: 5,
      },
      {
        productId: 99,
        categoryId: 5,
      },    
      {
        productId: 100,
        categoryId: 6,
      },
      {
        productId: 101,
        categoryId: 6,
      },
      {
        productId: 102,
        categoryId: 6,
      },
      {
        productId: 103,
        categoryId: 6,
      },
      {
        productId: 104,
        categoryId: 6,
      },    
      {
        productId: 105,
        categoryId: 6,
      },
      {
        productId: 106,
        categoryId: 6,
      },
      {
        productId: 107,
        categoryId: 6,
      },
      {
        productId: 108,
        categoryId: 6,
      },    
      {
        productId: 109,
        categoryId: 7,
      },
      {
        productId: 110,
        categoryId: 7,
      },
      {
        productId: 111,
        categoryId: 7,
      },
      {
        productId: 112,
        categoryId: 7,
      },    
      {
        productId: 113,
        categoryId: 7,
      },
      {
        productId: 114,
        categoryId: 7,
      },
      {
        productId: 115,
        categoryId: 7,
      },
      {
        productId: 116,
        categoryId: 7,
      },    
      {
        productId: 117,
        categoryId: 7,
      },    
      {
        productId: 118,
        categoryId: 8,
      },
      {
        productId: 119,
        categoryId: 8,
      },    
      {
        productId: 120,
        categoryId: 8,
      },
      {
        productId: 121,
        categoryId: 8,
      },          
      {
        productId: 122,
        categoryId: 8,
      },    
      {
        productId: 123,
        categoryId: 8,
      },
      {
        productId: 124,
        categoryId: 8,
      },   
      {
        productId: 125,
        categoryId: 9,
      },    
      {
        productId: 126,
        categoryId: 9,
      },
      {
        productId: 127,
        categoryId: 9,
      },          
      {
        productId: 128,
        categoryId: 9,
      },    
      {
        productId: 129,
        categoryId: 9,
      },
      {
        productId: 130,
        categoryId: 9,
      },
      {
        productId: 131,
        categoryId: 9,
      },          
      {
        productId: 132,
        categoryId: 9,
      },    
      {
        productId: 133,
        categoryId: 9,
      },
      {
        productId: 134,
        categoryId: 1,
      },          
      {
        productId: 135,
        categoryId: 1,
      },    
      {
        productId: 136,
        categoryId: 1,
      },
      {
        productId: 137,
        categoryId: 1,
      },          
      {
        productId: 138,
        categoryId: 1,
      },    
      {
        productId: 139,
        categoryId: 1,
      },
      {
        productId: 140,
        categoryId: 1,
      },          
      {
        productId: 141,
        categoryId: 1,
      },    
      {
        productId: 142,
        categoryId: 1,
      },
      {
        productId: 143,
        categoryId: 1,
      },          
      {
        productId: 144,
        categoryId: 1,
      },    
      {
        productId: 145,
        categoryId: 1,
      },
      {
        productId: 146,
        categoryId: 1,
      },
      {
        productId: 147,
        categoryId: 1,
      },          
      {
        productId: 148,
        categoryId: 1,
      },    
      {
        productId: 149,
        categoryId: 1,
      },
      {
        productId: 150,
        categoryId: 1,
      },
      {
        productId: 151,
        categoryId: 1,
      },          
      {
        productId: 152,
        categoryId: 1,
      },    
      {
        productId: 153,
        categoryId: 1,
      },
      {
        productId: 154,
        categoryId: 1,
      },
      {
        productId: 155,
        categoryId: 1,
      },
      {
        productId: 156,
        categoryId: 1,
      },
      {
        productId: 157,
        categoryId: 1,
      },
      {
        productId: 158,
        categoryId: 1,
      },
      {
        productId: 159,
        categoryId: 1,
      },
      {
        productId: 160,
        categoryId: 1,
      },
      {
        productId: 161,
        categoryId: 1,
      },
      {
        productId: 162,
        categoryId: 1,
      },
      {
        productId: 163,
        categoryId: 1,
      },
      {
        productId: 164,
        categoryId: 1,
      },
      {
        productId: 165,
        categoryId: 1,
      },
      {
        productId: 166,
        categoryId: 1,
      },
      {
        productId: 167,
        categoryId: 1,
      },
    ]);

    console.log('Seed dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi seed dữ liệu:', error);
  }
};
