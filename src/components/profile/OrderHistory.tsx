import React, { useEffect, useState, useRef } from 'react';
import {
    Table,
    Button,
    Modal,
    Tag,
    message,
    Descriptions,
    Card,
    Row,
    Col,
    Space,
    Form,
    Select,
    Typography,
    Input
} from 'antd';
import { createStyles } from 'antd-style';
import Cookies from 'js-cookie';
import { getDecodedToken } from '@/src/utils/decode-token';
import axios from 'axios';
import {
    BorderlessTableOutlined,
    CalendarOutlined,
    UserOutlined,
    PhoneOutlined,
    HomeOutlined,
    DollarOutlined,
    ShopOutlined,
    BankOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    ExperimentOutlined,
} from '@ant-design/icons';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import type {
    TableColumnsType,
    TableProps
} from 'antd';

const { Title } = Typography;

const useStyle = createStyles(({ css, token }: { css: any; token: any }) => {
    const { antCls } = token;
    return {
        customTable: css`
        ${antCls}-table {
          ${antCls}-table-container {
            ${antCls}-table-body,
            ${antCls}-table-content {
              scrollbar-width: thin;
              scrollbar-color: #eaeaea transparent;
              scrollbar-gutter: stable;
            }
          }
        }
      `,
    };
});

const OrderHistory: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const { styles } = useStyle();
    const [dataSource, setDataSource] = useState<any[]>([]);
    const [userId, setUserId] = useState<any>();
    const [form] = Form.useForm();
    const [orderData, setOrderData] = useState<any>(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<any>(null);

    const showModal = (order: any) => {
        setSelectedOrder(order);
        setOrderData(order);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedOrder(null);
    };

    const changeOrderStatus = async (values: any) => {
        // Implement your order status change logic here
        console.log('Status changed:', values);
    };

    const fetchUserId = async () => {
        const authToken = Cookies.get('token');
        if (authToken) {
            const tokenAfterDecode = getDecodedToken(authToken);
            setUserId(tokenAfterDecode?.sub);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/getOrderByUserID/${userId}`);
            console.log('response', response.data);
            setDataSource(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
            message.error('Không thể tải dữ liệu đơn hàng');
        }
    };

    useEffect(() => {
        fetchUserId();
    }, []);

    useEffect(() => {
        if (userId) {
            fetchOrders();
        }
    }, [userId]);

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
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: FilterDropdownProps) => (
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
        onFilter: (value: any, record: any) =>
            record[dataIndex]?.toString().toLowerCase().includes((value as string).toLowerCase()),
    });

    const columns: any = [
        {
            title: 'Mã Đơn Hàng',
            dataIndex: 'orderNumber',
            key: 'orderNumber',
        },
        {
            title: 'Trạng Thái',
            dataIndex: 'status',
            key: 'status',
            fixed: 'left' as 'left',
            render: (status: string) => {
                let color = '';
                let text = status;
                switch (status) {
                    case 'pending':
                        color = 'orange';
                        text = 'Chờ Xác Nhận';
                        break;
                    case 'confirmed':
                        color = 'blue';
                        text = 'Đã Xác Nhận';
                        break;
                    case 'shipped':
                        color = 'purple';
                        text = 'Đang Giao';
                        break;
                    case 'delivered':
                        color = 'green';
                        text = 'Đã Giao';
                        break;
                    case 'cancelled':
                        color = 'red';
                        text = 'Đã Hủy';
                        break;
                }
                return <Tag color={color}>{text}</Tag>;
            },
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (total: string) => <span style={{ color: "#ff4d4f" }}>{total}</span>
        },
        {
            title: 'Ngày Đặt Hàng',
            dataIndex: 'orderDate',
            key: 'orderDate',
        },
        {
            title: 'Khách Hàng',
            dataIndex: 'name',
            key: 'name',
            render: (customer: string) => <span style={{ color: "#69b1ff" }}>{customer}</span>
        },
        {
            title: 'Số Điện Thoại',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Địa Chỉ',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
        },
        {
            title: 'Phương Thức Thanh Toán',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
            render: (paymentMethod: string | number) => {
                let text = '';
                let color = '';
                switch (String(paymentMethod)) {
                    case '1':
                        text = 'Thanh Toán Trực Tiếp';
                        color = 'green';
                        break;
                    case '2':
                        text = 'ZaloPay';
                        color = 'blue';
                        break;
                    case '3':
                        text = 'Momo';
                        color = 'magenta';
                        break;
                    default:
                        text = 'Không xác định';
                        color = 'red';
                }
                return <Tag color={color}>{text}</Tag>;
            },
        },
        {
            title: 'Hành Động',
            key: 'action',
            fixed: 'right',
            render: (_: any, record: any) => (
                <Button color='primary' variant="filled" type="primary" onClick={() => showModal(record)}>
                    Xem Chi Tiết
                </Button>
            ),
        },
    ];

    const columns1: TableColumnsType<any> = [
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
                    <span >{Number(item.price).toLocaleString('vi-VN')}</span>
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

    return (
        <div>
            <Table columns={columns} dataSource={dataSource} scroll={{ x: 'max-content' }} className={styles.customTable} />

            <Modal
                title="Chi Tiết Đơn Hàng"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={1100}
            >
                {selectedOrder && (
                    <>
                        <Card bordered={false} style={{ marginBottom: 24 }}>
                            <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
                                <Col>
                                    <Title level={2} style={{ margin: 0 }}>
                                        <ShopOutlined style={{ marginRight: 8 }} />
                                        Đơn hàng
                                    </Title>
                                </Col>
                            </Row>

                            <Row gutter={24}>
                                <Col span={12}>
                                    <Descriptions title={<span style={{ fontSize: '20px' }}>Thông tin đơn hàng</span>} column={1}>
                                        <Descriptions.Item label={<><BorderlessTableOutlined />&nbsp;&nbsp;Mã đơn hàng</>}>
                                            <span style={{ fontSize: '16px' }}>{orderData?.orderNumber}</span>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={<><CalendarOutlined />&nbsp;&nbsp;Ngày đặt</>}>
                                            <span style={{ fontSize: '16px' }}>{orderData?.orderDate}</span>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={<><DollarOutlined />&nbsp;&nbsp;Tổng tiền</>}>
                                            <span style={{ color: '#f50', fontSize: '16px' }}>
                                                {(Number(orderData?.totalAmount)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                            </span>
                                        </Descriptions.Item>

                                        <Descriptions.Item label={<><HomeOutlined />&nbsp;&nbsp;Trạng thái</>}>
                                            <span style={{ fontSize: '16px', color: '#69b1ff' }}>
                                                {orderData?.status === 'pending' && 'Chờ xử lý'}
                                                {orderData?.status === 'confirmed' && 'Đã xác nhận'}
                                                {orderData?.status === 'shipped' && 'Đang giao'}
                                                {orderData?.status === 'delivered' && 'Đã giao'}
                                                {orderData?.status === 'cancelled' && 'Đã hủy'}
                                            </span>
                                        </Descriptions.Item>
                                    </Descriptions>
                                </Col>
                                <Col span={12}>
                                    <Descriptions title={<span style={{ fontSize: '20px' }}>Thông tin khách hàng</span>} column={1}>
                                        <Descriptions.Item label={<><UserOutlined />&nbsp;&nbsp;Khách hàng</>}>
                                            <span style={{ fontSize: '16px' }}>{orderData?.name}</span>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={<><PhoneOutlined />&nbsp;&nbsp;Số điện thoại</>}>
                                            <span style={{ fontSize: '16px' }}>{orderData?.phoneNumber}</span>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={<><HomeOutlined />&nbsp;&nbsp;Địa chỉ</>}>
                                            <span style={{ fontSize: '16px' }}>{orderData?.shippingAddress}</span>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={<><ExperimentOutlined />&nbsp;&nbsp;Phương thức thanh toán</>}>
                                            <span style={{ fontSize: '16px' }}>
                                                {orderData?.paymentMethod === 1 ? 'Thanh toán khi nhận hàng' :
                                                    orderData?.paymentMethod === 2 ? 'ZaloPay' :
                                                        orderData?.paymentMethod === 3 ? 'Momo' : 'Không xác định'}
                                            </span>
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
                                columns={columns1}
                                dataSource={orderData?.orderDetails}
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
                )}
            </Modal>
        </div>
    );
};

export default OrderHistory;