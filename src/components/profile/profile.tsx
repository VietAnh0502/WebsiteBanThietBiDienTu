"use client";

import React, { useState, useEffect, use } from "react";
import { Input, Button, Layout, Menu, Table, Form, Row, Col, Divider, Modal, message } from "antd";
import { UserOutlined, HistoryOutlined, GiftOutlined, EnvironmentOutlined, StarOutlined, QuestionCircleOutlined, MailOutlined, PhoneOutlined, AimOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import axios from "axios";
import Cookies from 'js-cookie';
import { getDecodedToken } from '@/src/utils/decode-token';
import OrderHistory from "./OrderHistory";

const { Content } = Layout;

// Define data types
interface ProfileData {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface OrderData {
  key: string;
  orderId: string;
  orderNumber: string;
  orderDate: string;
  status: string;
  totalAmount: string;
  shippingAddress: string;
  paymentMethod: string;
  name: string;
  phoneNumber: string;
  items: string[];
  productDetails: {
    image: string;
    name: string;
    quantity: number;
    description: string;
    tagName: string;
    variants: { cpu: string; ram: string };
    price: string;
    speed: string;
    onboardCard: string;
    discreteCard: string;
    ssdCapacity: string;
    color: string;
  }[];
}

const Profile: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("1");
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [currentOrderDetails, setCurrentOrderDetails] = useState<any | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  const [greetingIcon, setGreetingIcon] = useState<string>("");

  // Profile data state
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [form] = Form.useForm();
  const [userId, setUserId] = useState<any>();

  const fetchUserId = async () => {
    const authToken = Cookies.get('token');
    if (authToken) {
      const tokenAfterDecode = getDecodedToken(authToken);
      setUserId(tokenAfterDecode?.sub); // Chỉ cập nhật userId
    }
  };

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getCustomer/${userId}`);
      console.log('response', response.data.data.user);
      setProfileData(response.data.data.user);
      form.setFieldsValue(response.data.data.user);
    } catch (error) {
      console.error("Failed to fetch profile data: ", error);
    }
  };

  // useEffect để gọi fetchUserId khi component mount
  useEffect(() => {
    fetchUserId();
  }, []);

  // useEffect để gọi fetchProfileData khi userId thay đổi
  useEffect(() => {
    if (userId) {
      fetchProfileData();
    }
  }, [userId]);


  // Update greeting based on time of day
  useEffect(() => {
    const hour = dayjs().hour();
    if (hour >= 5 && hour < 12) {
      setGreeting("Chào buổi sáng");
      setGreetingIcon("/icon/morning.png"); // Morning sun icon
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Chào buổi chiều");
      setGreetingIcon("/icon/afternoon.png"); // Afternoon sun icon
    } else {
      setGreeting("Chào buổi tối");
      setGreetingIcon("icon/evening.png"); // Night moon icon
    }
  }, []);

  const updateProfile = async (values: any) => {
    try {
      console.log('values', values);
      const response = await axios.patch(`http://localhost:4000/api/updateCustomer/${userId}`, values);
      console.log('response', response.data);
      message.success("Cập nhật thông tin người dùng thành công");
      fetchProfileData();
    } catch (error) {
      console.error("Failed to update profile: ", error);
    }
  }

  const menuItems = [
    { key: "1", icon: <UserOutlined />, label: "Thông tin tài khoản" },
    { key: "2", icon: <HistoryOutlined />, label: "Lịch sử đơn hàng" },
    { key: "3", icon: <GiftOutlined />, label: "Ví voucher" },
    { key: "4", icon: <EnvironmentOutlined />, label: "Sổ địa chỉ" },
    { key: "5", icon: <StarOutlined />, label: "Đánh giá & nhận xét" },
    { key: "6", icon: <QuestionCircleOutlined />, label: "Câu hỏi thường gặp" },
  ];

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    minHeight: '80vh',
    padding: '50px 50px',
    margin: '24px 0',
    borderRadius: '15px'
  };

  const greetingContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '32px',
    marginLeft: '36px'
  };

  const greetingImageStyle: React.CSSProperties = {
    width: '88px',
    height: '88px',
    marginRight: '36px'
  };

  const greetingTextStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const subGreetingStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '20px',
    color: '#69b1ff',
  };

  const sidebarStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    padding: '16px',
    borderRadius: '8px',
    border: '2px solid #1890ff',
  };

  const menuStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px'
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '15px'
  };

  return (
    <Layout style={containerStyle}>
      <div>
        {/* Greeting Section */}
        <div style={greetingContainerStyle}>
          <img src={greetingIcon} alt="greeting" style={greetingImageStyle} />
          <div>
            <h1 style={greetingTextStyle}>{greeting},</h1>
            <h2 style={subGreetingStyle}>{profileData.name}</h2>
          </div>
        </div>

        <Row gutter={24}>
          {/* Sidebar */}
          <Col span={7}>
            <div style={sidebarStyle}>
              <Menu
                mode="vertical"
                selectedKeys={[selectedMenu]}
                onClick={({ key }) => setSelectedMenu(key)}
                style={menuStyle}
                items={menuItems}
              />
            </div>
          </Col>

          {/* Main Content */}
          <Col span={17}>
            <div style={contentStyle}>
              {selectedMenu === "1" && (
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' }}>
                    Thông tin tài khoản
                  </h2>
                  <Form layout="vertical" onFinish={updateProfile} form={form}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="name"
                          label="Tên của bạn"
                          rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}
                        >
                          <Input
                            prefix={<UserOutlined />}
                            placeholder="Nhập tên của bạn"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                        >
                          <Input
                            readOnly
                            prefix={<MailOutlined />}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="phoneNumber"
                          label="Số điện thoại"
                          rules={[
                            { required: true, message: 'Vui lòng nhập số điện thoại!' },
                            { pattern: /^\d{10}$/, message: 'Số điện thoại phải gồm đúng 10 chữ số!' },
                          ]}
                        >
                          <Input
                            placeholder="Nhập số điện thoại"
                            prefix={<PhoneOutlined />}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="address"
                          label="Nhập địa chỉ"
                          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                        >
                          <Input
                            placeholder="Nhập địa chỉ"
                            prefix={<EnvironmentOutlined />}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Divider />
                    <Button type="primary" htmlType="submit">Cập nhật thông tin người dùng</Button>
                  </Form>
                </div>
              )}

              {selectedMenu === "2" && (
                <OrderHistory />
              )}

              {/* Other menu content would go here */}
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Profile;