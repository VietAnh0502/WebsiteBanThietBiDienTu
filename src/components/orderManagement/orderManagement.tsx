"use client";

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Input, Form, message, Space, Row, Col, ConfigProvider, Select, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import '@/src/cssfolder/OrderManagement.css';
import { render } from 'react-dom';

const { Option } = Select;

interface OrderType {
  id: number;
  orderNumber: string;
  orderDate: string;
  customerID: string;
  status: string;
  totalAmount: number;
  shippingAddress: string;
  paymentMethod: string;
  name: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

const OrderManagement: React.FC = () => {
  const [dataSource, setDataSource] = useState<OrderType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filteredInfo, setFilteredInfo] = useState<any>({});
  const [sortedInfo, setSortedInfo] = useState<any>({});

  const router = useRouter();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/getAllOrder');
      const data = await response.json();
      setDataSource(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      message.error('Không thể tải dữ liệu đơn hàng');
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
  };

  const handleAddNew = () => {
    setModalType('add');
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleDeleteSelected = () => {
    if (selectedRowKeys.length === 0) {
      message.warning("Vui lòng chọn ít nhất một hàng để xóa.");
      return;
    }

    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedRowKeys.length} đơn hàng đã chọn?`,
      onOk: () => {
        setDataSource((prev) => prev.filter((item) => !selectedRowKeys.includes(item.id)));
        setSelectedRowKeys([]);
        message.success('Đã xóa các hàng được chọn!');
      },
      onCancel: () => {
        message.info('Hành động xóa đã bị hủy.');
      },
    });
  };

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns: any = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left' as 'left',
      render: (_: any, record: OrderType) => (
        <div
          onClick={() => router.push(`/orderManagement/detail/${record.id}`)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Mã Đơn Hàng',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      sorter: (a: OrderType, b: OrderType) => a.orderNumber.localeCompare(b.orderNumber),
      sortOrder: sortedInfo.columnKey === 'orderNumber' ? sortedInfo.order : null,
      fixed: 'left' as 'left',
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status',
      key: 'status',
      fixed: 'left' as 'left',
      filters: [
        { text: 'Pending', value: 'pending' },
        { text: 'Completed', value: 'completed' },
        { text: 'Cancelled', value: 'cancelled' },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value: string | number | boolean, record: OrderType) => record.status === value,
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
      sorter: (a: OrderType, b: OrderType) => a.totalAmount - b.totalAmount,
      render: (value: number) => `${value.toLocaleString()} VNĐ`,
    },
    {
      title: 'Ngày Đặt Hàng',
      dataIndex: 'orderDate',
      key: 'orderDate',
      sorter: (a: OrderType, b: OrderType) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime(),
      render: (date: string) => new Date(date).toLocaleDateString('vi-VN'),
    },
    {
      title: 'Khách Hàng',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: OrderType, b: OrderType) => a.name.localeCompare(b.name),
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
      render: (method: number) => (
        <>
          <Tag color='magenta'>{method === 1 ? 'Thanh toán khi nhận hàng' : method === 2 ? 'ZaloPay' : method === 3 ? 'MoMo' : 'không xác định'}</Tag>
        </>
      )
    },
    {
      title: 'Phương Thức Thanh Toán',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      render: (method: number) => (
        <>
          <Tag color='magenta'>{method === 1 ? 'Thanh toán khi nhận hàng' : method === 2 ? 'ZaloPay' : method === 3 ? 'MoMo' : 'không xác định'}</Tag>
        </>
      )
    },
    {
      title: 'Người duyệt',
      dataIndex: 'statusHistory',
      key: 'statusHistory',
      render: (method: any) => (
        method.map((item: any) => {
          const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Tag color={randomColor} key={item.updatedBy}>{item.user.name}</Tag>
          )
        }
        )
      )
    }
  ];

  return (
    <div className="container">
      <Row className="header">
        <Col className="title">
          <h2 style={{ display: "flex", alignItems: "center" }}>
            <img src="\icon\box.png" alt="" />
            Quản lý đơn hàng
          </h2>
        </Col>
        <Col className="button-group">
        </Col>
      </Row>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        rowKey="id"
        onChange={handleChange}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default OrderManagement;