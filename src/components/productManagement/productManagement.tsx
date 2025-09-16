import React, { useEffect, useRef } from 'react';
import { Space, Table, Tag, Button, Modal, Input } from 'antd';
import { EditOutlined, SearchOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import type { TableColumnsType, TableProps } from 'antd';
import styles from '@/src/cssfolder/ProductManagement.module.css';  // Import CSS module
import type { FilterDropdownProps } from 'antd/es/table/interface';


const ProductManagement: React.FC = () => {
  const router = useRouter();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedProducts, setSelectedProducts] = useState<React.Key[]>([]);
  const [data, setData] = useState<any>([]);
  const [productData, setProductData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<any>(null);
  console.log(data);

  const rowSelection: TableProps<any>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedProducts(selectedRowKeys);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const getAllProduct = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getAllProduct');
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch product data:', error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: string): TableColumnsType<any>[number] => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes((value as string).toLowerCase()),
  });


  const columns: TableColumnsType<any> = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_: any, record: any) => (
        <div
          onClick={() => router.push(`/productManagement/edit/${record.id}`)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Mã sản phẩm',
      dataIndex: 'productId',
      align: 'center',
      key: 'productId',
      fixed: 'left',
      width: "5%",
      ...getColumnSearchProps('productId'),
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      fixed: 'left',
      width: "15%",
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Thể loại',
      dataIndex: 'categories',
      key: 'categories',
      align: 'center',
      fixed: 'left',
      width: "25%",
      render: (categories: any) => categories.map((category: any) => {
        const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return <Tag color={randomColor} key={category.id}>{category.name}</Tag>;
      }),
      ...getColumnSearchProps('categories'),
    },
    {
      title: 'Thương hiệu',
      dataIndex: "brand",
      key: 'brand',
      align: 'center',
      fixed: 'left',
      width: "10%",
      render: (brand: any) => brand ? brand.name : 'N/A',
      ...getColumnSearchProps('brand'),
    },
    {
      title: 'Màu',
      dataIndex: 'variants',
      key: ' variants',
      align: 'center',
      width: "20%",
      render: (variants: any) => variants.map((variants: any) => {
        const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return <Tag color={randomColor} key={variants.version}>{variants.color}</Tag>;
      }),
    },
    {
      title: 'Loại hàng',
      dataIndex: 'variants',
      align: 'center',
      key: 'variants',
      width: "15%",
      render: (variants: any) => variants.map((variants: any) => {
        const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return <Tag color={randomColor} key={variants.version}>{variants.type}</Tag>;
      }),
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      align: 'center',
      key: 'description',
      width: "100%",
    },
  ];

  const handleDelete = () => {
    if (selectedProducts.length === 0) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Vui lòng chọn ít nhất một người dùng để xóa.',
      });
      return;
    }

    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedProducts.length} sản phẩm đã chọn?`,
      onOk: async () => {
        try {
          const deleteProduct = await axios.delete('http://localhost:4000/api/deleteProduct', {
            data: { ids: selectedProducts },
          });

          setProductData(prevData => prevData.filter(product => !selectedProducts.includes(product.id)));
          setSelectedProducts([]);

          Modal.success({
            title: 'Thành công',
            content: 'Đã xóa người dùng thành công.',
          });

          getAllProduct();
        } catch (error) {
          console.error('Error deleting users:', error);
          Modal.error({
            title: 'Lỗi',
            content: 'Có lỗi xảy ra khi xóa người dùng. Vui lòng thử lại.',
          });
        }
      },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <Button type="primary"
          onClick={() => router.push('/productManagement/create')}
          className={`${styles.button} ${styles.createButton}`} >
          <PlusOutlined />
          Tạo mới
        </Button>

        <Button
          type="primary"
          onClick={handleDelete}
          className={`${styles.button} ${styles.deleteButton}`} >
          <DeleteOutlined />
          Xóa
        </Button>
      </div>
      <Table<any>
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey="id"
        scroll={{ x: 'max-content' }}
        className={styles.table}
      />
    </>
  );
};

export default ProductManagement;
