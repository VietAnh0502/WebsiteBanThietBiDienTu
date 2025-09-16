
'use client';

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Empty,
  Row,
  Typography,
  Image,
  message,
  Divider,
  Modal,
  Steps,
  theme,
  Form,
  Input,
  Result,
} from "antd";
import {
  ShoppingCartOutlined,
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  DollarOutlined,
  UserOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  RollbackOutlined,
  CheckOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "@/src/cssfolder/shoppingCart.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { getDecodedToken } from '@/src/utils/decode-token';
import { createOrder } from "@/src/controller/order-controller";

const { Title, Text } = Typography;

const PaymentSuccess: React.FC = () => {
  const [cartData, setCartData] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const [current, setCurrent] = useState(3);
  const [customerId, setCustomerId] = useState<any>();
  const [customerInfo, setCustomerInfo] = useState<any>();
  const [payment, setPayment] = useState(false);
  const [orderid, setOrderId] = useState<any>();
  const [orderStatus, setOrderStatus] = useState(true);

  const fetchProductData = async () => {
    try {
      const storedData = localStorage.getItem("cart");
      if (!storedData) {
        throw new Error("Không tìm thấy sản phẩm trong giỏ hàng.");
      }

      const parsedData = JSON.parse(storedData);
      setCartData(parsedData);
    } catch (error: any) {
      message.error(error.message || "An unknown error occurred.");
    }
  };

  const fetchTokenData = async () => {
    try {
      // Lấy token từ cookies
      const authToken = Cookies.get('token');
      console.log('Token:', authToken);
      if (authToken) {
        const tokenAfterDecode = getDecodedToken(authToken);
        setCustomerId(tokenAfterDecode?.sub);
      } else {
        console.error('Vui lòng đăng nhập để tiếp tục');
      }

    } catch (error: any) {
      console.error(error.message);
    }
  }

  const fetchCustomerInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getCustomer/${customerId}`);
      console.log('Customer Info:', response.data.data.user);
      form.setFieldsValue({
        name: response.data.data.user.name,
        phoneNumber: response.data.data.user.phoneNumber,
        address: response.data.data.user.address,
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchTokenData();
    fetchProductData();
  }, []);

  const handleSubmit = () => {
    form.submit(); // Submit form
  };

  const CustomerInfo = (values: any) => {
    setCustomerInfo(values);
    next();
  }

  const handleCreateOrder = async () => {
    try {
      if (!customerInfo) {
        return;
      }

      const dataOfForm = {
        ...customerInfo,
        customerID: customerId,
      };

      if (!dataOfForm) {
        message.error('Vui lòng điền đầy đủ thông tin');
        return;
      }

      const productData = localStorage.getItem("cart");
      if (!productData) {
        throw new Error("Không tìm thấy sản phẩm trong giỏ hàng.");
      }
      const productDataPaser = JSON.parse(productData);

      const orderData = {
        customerInfo: dataOfForm,
        cartItems: productDataPaser,
        totalAmount: totalPrice,
      };

      console.log('Order Data:', orderData);

      if (orderStatus == true) {
        const response = await axios.post('http://localhost:4000/api/createOrder', orderData);
        console.log('Order Response:', response.data.order.id);

        setPayment(true);
        setOrderId(response.data.order.id);
        setOrderStatus(false);

        message.success('Đặt hàng thành công');
      }

    } catch (error: any) {
      message.error("Lỗi trong quá trình đặt hàng.");
    }
  };

  // Declare totalPrice and totalPriceWithVAT only once
  const totalPrice = cartData.reduce((total, item) => total + item.variants[0]?.price * item.quantity, 0);
  const totalPriceWithVAT = totalPrice * 1;

  const increaseQuantity = (id: number) => {
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cartData.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: number, selectedVersion: string) => {
    const updatedCart = cartData.filter(item =>
      !(item.id === id && item.selectedVersion === selectedVersion)
    );
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const MomoHandel = async () => {
    try {
      const data = { amount: totalPrice, cartData: cartData };
      updatePaymentMethod(3);
      const api = await axios.post('http://localhost:4000/api/momopayment', { data });
      router.push(api.data.payUrl);
    } catch (error: any) {
      message.error(error.message || "Lỗi trong quá trình thanh toán.");
    }
  };

  const ZaloHandel = async () => {
    try {
      const data = { amount: totalPrice, cartData: cartData };
      updatePaymentMethod(2);
      const api = await axios.post('http://localhost:4000/api/zalopayment', { data });
      router.push(api.data.orderurl);
    } catch (error: any) {
      message.error(error.message || "Lỗi trong quá trình thanh toán.");
    }
  };

  const OrderHandel = async () => {
    try {
      if (customerId) {
        fetchCustomerInfo();
        next();
      } else {
        message.error('Vui lòng đăng nhập để tiếp tục');
      }
    } catch (error: any) {
      message.error('Vui lòng điền đầy đủ thông tin');
    }
  }

  const updatePaymentMethod = async (values: any) => {
    try {
      const api = await axios.patch(`http://localhost:4000/api/updatePaymentMethod/${orderid}`, { values });

    } catch (error: any) {
      message.error('Vui lòng chọn phương thức thanh toán');
    }
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const steps = [
    {
      title: 'Giỏ hàng',
      icon: <ShoppingCartOutlined />,
      content: (
        <div className="cartCard">
          {cartData.length === 0 ? (
            <Empty
              image={<ShoppingCartOutlined className="emptyCart" />}
              imageStyle={{ height: 100 }}
              description={<span>Giỏ hàng trống</span>}
            >
            </Empty>
          ) : (
            cartData.map(item => (
              <div key={`${item.id}-${item.selectedVersion}`} className="cartItem">
                <Image src={item.productImage} alt={item.name} width={100} height={100} className="cartImage" />
                <div className="product">
                  <Title level={5}>{item.name}</Title>
                  <Text type="secondary">Phiên bản: {item.version} | Màu: {item.color}</Text>
                  <div className="quantityControl">
                    <Button
                      icon={<MinusOutlined />}
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                    />
                    <span className="quantityValue">{item.quantity}</span>
                    <Button icon={<PlusOutlined />} onClick={() => increaseQuantity(item.id)} />
                  </div>
                </div>
                <div className="cartPrice">
                  <Text strong className="priceText">
                    {Number(item.price || 0).toLocaleString()} đ
                  </Text>
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => removeItem(item.id, item.selectedVersion)}
                    className="removeButton"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      ),
    },
    {
      title: 'Thông tin đặt hàng',
      icon: <UserOutlined />,
      content: (
        <div>
          <Form form={form} onFinish={CustomerInfo} layout="vertical" style={{ padding: '0 15%' }} >
            <p style={{ fontSize: '20px', fontWeight: 600 }}>Thông tin khách mua hàng</p>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Họ và tên"
                  rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phoneNumber"
                  label="Số điện thoại"
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại!' },
                    { pattern: /^\d{10}$/, message: 'Số điện thoại phải có đủ 10 số!' }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            {/* Phần chọn cách giao hàng */}
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '20px', fontWeight: 600 }}>Địa chỉ giao hàng</p>

              <Form.Item
                name="address"
                label="Số nhà, tên đường"
                rules={[{ required: true, message: 'Vui lòng nhập số nhà, tên đường!' }]}
              >
                <Input />
              </Form.Item>
            </div>
          </Form>
        </div>
      ),
    },
    {
      title: 'Thanh toán',
      icon: <CreditCardOutlined />,
      content: (
        <>
          <Row>
            <Col span={14}>
              <Card title={<Title level={5}>Tóm tắt đơn hàng</Title>}>
                <div className="cartCard">
                  {cartData.length === 0 ? (
                    <Empty
                      image={<ShoppingCartOutlined className="emptyCart" />}
                      imageStyle={{ height: 100 }}
                      description={<span>Giỏ hàng trống</span>}
                    >
                    </Empty>
                  ) : (
                    cartData.map(item => (
                      <div key={`${item.id}-${item.selectedVersion}`} className="cartItem">
                        <Image src={item.productImage} alt={item.name} width={100} height={100} className="cartImage" />
                        <div className="product">
                          <Title level={5}>{item.name}</Title>
                          <Text type="secondary">Phiên bản: {item.version} | Màu: {item.color}</Text>
                          <div className="quantityControl">
                            <Button
                              icon={<MinusOutlined />}
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                            />
                            <span className="quantityValue">{item.quantity}</span>
                            <Button icon={<PlusOutlined />} onClick={() => increaseQuantity(item.id)} />
                          </div>
                        </div>
                        <div className="cartPrice">
                          <Text strong className="priceText">
                            {Number(item.price || 0).toLocaleString()} đ
                          </Text>
                          <Button
                            type="text"
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => removeItem(item.id, item.selectedVersion)}
                            className="removeButton"
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </Col>

            <Col span={10}>
              <Card
                title={<Title level={5} style={{ fontSize: '14px' }}>Tổng hóa đơn</Title>}
                className="cartSummary"
                style={{ borderRadius: '8px', padding: '16px' }}
              >
                <Text style={{ fontSize: '12px', color: '#595959' }}>
                  Tạm tính: <strong style={{ fontSize: '14px', color: '#333' }}>{totalPrice.toLocaleString()} đ</strong>
                </Text>
                <Divider />
                <Text style={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>
                  Tổng cộng: <strong className="totalPrice" style={{ color: '#1890ff' }}>{totalPriceWithVAT.toLocaleString()} đ</strong>
                </Text>
                <Divider />
                <Button
                  type="primary"
                  block
                  disabled={totalPrice === 0}
                  style={{
                    height: '40px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    backgroundColor: "#ff4d4f",
                    borderRadius: '10px',
                  }}
                  onClick={handleCreateOrder}
                >
                  Đặt hàng
                </Button>

                <Divider plain>Thanh toán</Divider>

                {payment && (
                  <Button
                    type="primary"
                    block
                    disabled={totalPrice === 0}
                    style={{
                      height: '40px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      backgroundColor: totalPrice === 0 ? '#d9d9d9' : '#1890ff',
                      borderRadius: '10px',
                    }}
                    onClick={() => {
                      setPaymentMethod(true);
                    }}
                  >
                    Chọn phương thức thanh toán
                  </Button>
                )}
              </Card>

              <br />

              {paymentMethod && (
                <Card
                  bordered={false}
                  title={<Title level={5} style={{ fontSize: '14px', color: '#333' }}>Chọn hình thức thanh toán</Title>}
                  className="paymentMethod"
                  style={{ borderRadius: '8px', background: '#fafafa', padding: '16px' }}
                >
                  <Button
                    type="primary"
                    block
                    style={{
                      marginBottom: '12px',
                      height: '40px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      backgroundColor: '#73d13d',
                      borderColor: '#73d13d',
                    }}
                    onClick={() => {
                      updatePaymentMethod(1);
                      next();
                    }}
                  >
                    <DollarOutlined /> Thanh toán khi nhận hàng
                  </Button>
                  <Divider style={{ margin: '12px 0', fontSize: '10px', color: '#595959' }}>Hoặc</Divider>
                  <Button.Group style={{ width: '100%', display: 'flex', gap: '8px' }}>
                    <Button
                      type="primary"
                      block
                      style={{
                        backgroundColor: '#005BAA',
                        height: '40px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                      }}
                      onClick={() => ZaloHandel()}
                    >
                      ZaloPay
                    </Button>
                    <Button
                      type="primary"
                      block
                      style={{
                        backgroundColor: '#AF2070',
                        height: '40px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                      }}
                      onClick={() => MomoHandel()}
                    >
                      MoMo
                    </Button>
                  </Button.Group>
                </Card>
              )}
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: 'Hoàn thành',
      icon: <CheckCircleOutlined />,
      content: (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Result
              status="success"
              title="Thanh toán thành công!"
              subTitle="Cảm ơn bạn đã mua hàng. Chúng tôi đã nhận được thanh toán của bạn."
              icon={<SmileOutlined />}
              extra={[
                <Button type="primary" key="home" onClick={() => router.push('/home')} >
                  Quay lại trang chủ
                </Button>,
                <Button key="orders" >
                  Xem lịch sử đơn hàng
                </Button>,
              ]}
            />
          </div>
        </>
      )
    },
  ];

  const renderStepButtons = () => {
    const buttons = [];

    if (current > 0 && current < steps.length - 1) {
      buttons.push(
        <Button key="back" onClick={prev} className="prevButton">
          <RollbackOutlined />Trở lại
        </Button>
      );
    }

    if (current < steps.length - 1) {
      switch (current) {
        case 0:
          if (cartData.length > 0) {
            buttons.push(
              <Button key="next" type="primary" onClick={OrderHandel} className="nextButton">
                <ShoppingCartOutlined style={{ fontSize: '15px' }} />Đặt hàng ngay
              </Button>
            );
          }
          break;
        case 1:
          buttons.push(
            <Button type="primary" htmlType="submit" form="" onClick={handleSubmit} className="nextButton">
              <CheckOutlined />Xác nhận thông tin
            </Button>
          );
          break;
        case 2:
          // Only show back button during payment step
          break;
      }
    }

    return buttons;
  };

  return (
    <Row gutter={[16, 16]} className="cartRow">
      <Col span={24}>
        <Card
          title={
            <Steps
              current={current}
              items={steps.map((item) => ({
                key: item.title,
                title: item.title,
                icon: item.icon
              }))}
              className="stepStyle"
            />
          }
          className="cartCard"
        >
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 44, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            {renderStepButtons()}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentSuccess;
