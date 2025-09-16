import React, { useEffect, useState, useRef } from 'react';
import {
  Table,
  Card,
  Typography,
  Select,
  Row,
  Col,
  ConfigProvider,
  Descriptions,
  Tag,
  Space,
  Button,
  Input,
  Form,
  message,
} from 'antd';
import {
  ShopOutlined,
  UserOutlined,
  PhoneOutlined,
  HomeOutlined,
  BorderlessTableOutlined,
  CalendarOutlined,
  DollarOutlined,
  EditOutlined,
  SearchOutlined,
  BankOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import type {
  TableColumnsType,
  TableProps
} from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const OrderDetailView: React.FC<any> = ({ id }) => {
  const [orderData, setOrderData] = useState<any>({});
  const [orderDetail, setOrderDetail] = useState<any>([]);
  const searchInput = useRef<any>(null);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [form] = Form.useForm();

  const router = useRouter();

  console.log(orderDetail);


  const fetchOrderDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getOrderByID/${id}`);
      console.log(response.data);
      setOrderData(response.data.order);
      setOrderDetail(response.data.orderDetails);
      form.setFieldsValue({ status: response.data.order.status });
    } catch (error) {
      console.error('Error fetching order detail:', error);
    }
  }

  useEffect(() => {
    fetchOrderDetail();
  }, [id]);

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
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Phiên bản',
      dataIndex: 'variants',
      key: 'variants-version',
      align: 'center',
      render: (variants: any, record: any) =>
        variants.map((variant: any, index: number) => {
          const colors = 'blue';
          return (
            <Tag
              color={colors}
              key={`type-${variant.version}-${index}`}
            >
              {variant.version}
            </Tag>
          );
        }),
    },
    {
      title: 'Màu',
      dataIndex: 'variants',
      key: 'variants-color',
      align: 'center',
      render: (variants: any, record: any) =>
        variants.map((variant: any, index: number) => {
          const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Tag
              color={randomColor}
              key={`${record.productId}-color-${variant.color}-${index}`}
            >
              {variant.color}
            </Tag>
          );
        }),
    },
    {
      title: 'Loại hàng',
      dataIndex: 'variants',
      key: 'variants-type',
      align: 'center',
      render: (variants: any, record: any) =>
        variants.map((variant: any, index: number) => {
          const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Tag
              color={randomColor}
              key={`${record.productId}-type-${variant.type}-${index}`}
            >
              {variant.type}
            </Tag>
          );
        }),
    },
    {
      title: 'Giá',
      dataIndex: 'variants',
      align: 'center',
      key: 'variants-price',
      render: (variant: any) => (
        variant.map((item: any) => (
          <span key={item.price}>{Number(item.price).toLocaleString('vi-VN')}</span>
        ))
      )
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
    {
      title: 'Tổng',
      dataIndex: 'variants',
      key: 'variants',
      align: 'center',
      render: (variants: any, record: any) => {
        const total = variants.reduce((sum: number, current: any) => sum + (current.price * record.quantity), 0);
        return total.toLocaleString('vi-VN');
      }
    },
  ];

  const changeOrderStatus = async (values: any) => {
    try {
      const response = await axios.patch(`http://localhost:4000/api/updateOrderStatus/${id}`, { status: values.status });
      console.log(response.data);
      message.success('Cập nhật trạng thái đơn hàng thành công');
      router.push('/orderManagement');
    } catch (error) {
      console.error('Error updating order status:', error);
      message.error('Cập nhật trạng thái đơn hàng thất bại');
    }
  }

  return (
    <>
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              <ShopOutlined style={{ marginRight: 8 }} />
              Đơn hàng
            </Title>
          </Col>
          <Col>
            <Space size="large" align="center">
              <span style={{ fontSize: 14 }}>Trạng thái đơn hàng:</span>
              <Form form={form} onFinish={changeOrderStatus} layout="inline">
                <Form.Item
                  name="status"
                >
                  <Select
                    style={{ width: 200 }}
                    options={[
                      { value: 'pending', label: 'Chờ xử lý' },
                      { value: 'confirmed', label: 'Đã xác nhận' },
                      { value: 'shipped', label: 'Đang giao' },
                      { value: 'delivered', label: 'Đã giao' },
                      { value: 'cancelled', label: 'Đã hủy' },
                    ]}
                  />
                </Form.Item>
                <Button variant="solid" color='danger' type="primary" htmlType="submit" icon={<EditOutlined />}>
                  Cập nhật trạng thái
                </Button>
              </Form>
            </Space>
          </Col>
        </Row>
        <br /><br />

        <Row gutter={24}>
          <Col span={12}>
            <Descriptions title={<span style={{ fontSize: '20px' }}>Thông tin đơn hàng</span>} column={1}>
              <Descriptions.Item label={<><BorderlessTableOutlined />&nbsp;&nbsp;Mã đơn hàng</>}>
                <span style={{ fontSize: '16px' }}>{orderData.orderNumber}</span>
              </Descriptions.Item>
              <Descriptions.Item label={<><CalendarOutlined />&nbsp;&nbsp;Ngày đặt</>}>
                <span style={{ fontSize: '16px' }}>{orderData.orderDate}</span>
              </Descriptions.Item>
              <Descriptions.Item label={<><DollarOutlined />&nbsp;&nbsp;Tổng tiền</>}>
                <span style={{ color: '#f50', fontSize: '16px' }}>
                  {(Number(orderData.totalAmount)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label={<><BankOutlined />&nbsp;&nbsp;Phương thức thanh toán</>}>
                <span style={{ fontSize: '16px' }}>
                  {orderData.paymentMethod === 1 ? 'Thanh toán khi nhận hàng' :
                    orderData.paymentMethod === 2 ? 'ZaloPay' :
                      orderData.paymentMethod === 3 ? 'Momo' : 'Không xác định'}
                </span>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Descriptions title={<span style={{ fontSize: '20px' }}>Thông tin khách hàng</span>} column={1}>
              <Descriptions.Item label={<><UserOutlined />&nbsp;&nbsp;Khách hàng</>}>
                <span style={{ fontSize: '16px' }}>{orderData.name}</span>
              </Descriptions.Item>
              <Descriptions.Item label={<><PhoneOutlined />&nbsp;&nbsp;Số điện thoại</>}>
                <span style={{ fontSize: '16px' }}>{orderData.phoneNumber}</span>
              </Descriptions.Item>
              <Descriptions.Item label={<><HomeOutlined />&nbsp;&nbsp;Địa chỉ</>}>
                <span style={{ fontSize: '16px' }}>{orderData.shippingAddress}</span>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>

      <Card
        title="Chi tiết sản phẩm"
        bordered={false}
        style={{ marginBottom: 24 }}
      >
        <Table
          columns={columns}
          dataSource={orderDetail}
          pagination={false}
          bordered
          summary={(pageData) => {
            const total = pageData.reduce((sum, current) => sum + (current.price * current.quantity), 0);
            return (
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={7} align="right">
                  <strong>Tổng cộng</strong>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} align="right">
                  <strong style={{ color: '#f50' }}>
                    {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </strong>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            );
          }}
        />
      </Card>
    </>
  );
};

export default OrderDetailView;