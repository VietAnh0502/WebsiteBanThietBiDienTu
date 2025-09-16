'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/ShippingPolicy.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const ShippingPolicy: React.FC = () => {
    return (
        <div className="shipping-policy-container">
            <div className="shipping-policy-content">
                <Typography>
                    {/* Header */}
                    <Title className="shipping-policy-title" level={2}>
                        Chính sách vận chuyển - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Title className="shipping-policy-title" level={3}>
                        Chính sách vận chuyển và giao nhận
                    </Title>
                    <Paragraph className="shipping-policy-paragraph">
                        Thinking hỗ trợ vận chuyển toàn quốc dưới 2 hình thức:
                    </Paragraph>
                    <ul className="policy-list">
                        <li>
                            <strong>Giao hàng tận nơi, thanh toán khi nhận hàng (COD):</strong>
                            <ul className="sub-policy-list">
                                <li>Quý khách sẽ cần thanh toán 100% phí vận chuyển phát sinh trong quá trình vận chuyển (Sẽ có thông báo trước khi gửi hàng) và thực hiện đặt cọc trước cho đơn hàng:</li>
                                <li>Đối với đơn hàng dưới 10.000.000đ: Quý khách không cần đặt cọc.</li>
                                <li>Đối với đơn hàng từ 10.000.000đ trở lên: Quý khách sẽ cần đặt cọc theo hướng dẫn ở bước Thanh toán nếu đặt trên website hoặc theo hướng dẫn của Chuyên viên bán hàng.</li>
                                <li>Thinking hỗ trợ Quý khách phí thu hộ và bảo hiểm đơn hàng.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Giao hàng tận nơi, thanh toán trước 100%:</strong>
                            <ul className="sub-policy-list">
                                <li>Quý khách sẽ được miễn phí vận chuyển phát sinh trong quá trình giao hàng.</li>
                                <li>Quý khách vui lòng thanh toán trước 100% giá trị đơn hàng.</li>
                                <li>Thinking hỗ trợ Quý khách phí bảo hiểm đơn hàng.</li>
                            </ul>
                        </li>
                    </ul>

                    <Title className="shipping-policy-title" level={3}>
                        Đối tác vận chuyển
                    </Title>
                    <Paragraph className="shipping-policy-paragraph">
                        <strong>Qua đơn vị chuyển phát:</strong> Thinking hỗ trợ gửi hàng qua các đơn vị chuyển phát uy tín như VNPost, Viettel Post, Nhất Tín Logistics... Thinking chịu trách nhiệm tới khi sản phẩm tới tay Quý khách (Quý khách vui lòng kiểm tra sản phẩm khi nhận hàng).
                    </Paragraph>
                    <Paragraph className="shipping-policy-paragraph">
                        Trong trường hợp sản phẩm bị rơi vỡ, móp méo, trầy xước hoặc sản phẩm không đúng như thông tin ban đầu mà Thinking cung cấp, Quý khách vui lòng không nhận hàng và thông báo lại với Thinking. Trường hợp đã nhận hàng mà sản phẩm có phát sinh những vấn đề trên, Thinking sẽ không thể hỗ trợ xử lý.
                    </Paragraph>
                    <Paragraph className="shipping-policy-paragraph">
                        <strong>Nhà xe:</strong> Thinking không hỗ trợ vận chuyển qua nhà xe. Nếu Quý khách yêu cầu vận chuyển qua nhà xe thì nhà xe phải do Quý khách chỉ định. Trong trường hợp phát sinh vấn đề, Thinking không hỗ trợ xử lý.
                    </Paragraph>

                    <Title className="shipping-policy-title" level={3}>
                        Ship nội thành Hà Nội và Hồ Chí Minh
                    </Title>
                    <Paragraph className="shipping-policy-paragraph">
                        Thinking hỗ trợ vận chuyển nội thành Hà Nội và TP Hồ Chí Minh hoàn toàn miễn phí nếu khách hàng thanh toán trước giá trị đơn hàng.
                    </Paragraph>
                    <Paragraph className="shipping-policy-paragraph">
                        <strong>Ship ngoại thành:</strong> Nếu Quý khách thanh toán trước 100% sẽ được miễn phí toàn bộ chi phí vận chuyển. Đối với các đơn hàng ở khu vực ngoại thành, Thinking hỗ trợ giao hàng tại nhà có tính phí (5.000đ/1km).
                    </Paragraph>

                    <Title className="shipping-policy-title" level={3}>
                        Thời gian vận chuyển
                    </Title>
                    <ul className="policy-list">
                        <li>
                            <strong>Nội thành Hà Nội và TP Hồ Chí Minh:</strong> Giao hàng trong vòng 1-4 giờ với sản phẩm có sẵn. Đối với sản phẩm không sẵn hàng, Thinking sẽ thông báo thời gian giao hàng cụ thể.
                        </li>
                        <li>
                            <strong>Tỉnh khác:</strong> Giao hàng qua các đơn vị vận chuyển trong 1-4 ngày (có thể trì hoãn trong dịp lễ/tết).
                        </li>
                        <li>
                            <strong>Ngoại thành Hà Nội và TP Hồ Chí Minh:</strong> Đơn hàng đặt trước 12h00 sẽ giao trong ngày. Đơn hàng đặt sau thời gian này sẽ được hẹn lịch cụ thể.
                        </li>
                    </ul>
                </Typography>
            </div>
        </div>
    );
};

export default ShippingPolicy;
