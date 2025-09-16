'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/PaymentPolicy.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const PaymentPolicy: React.FC = () => {
    return (
        <div className="payment-policy-container">
            <div className="payment-policy-content">
                <Typography>
                    {/* Header */}
                    <Title className="payment-policy-title" level={2}>
                        Chính sách thanh toán - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Title className="payment-policy-title" level={3}>
                        I. Thanh toán tiền mặt
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Tại cửa hàng:</strong> Quý khách có thể đến mua hàng và thanh toán trực tiếp tại các chuỗi cửa hàng thuộc hệ thống Thinking.
                    </Paragraph>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Tại địa chỉ giao nhận hàng:</strong> Thanh toán cho nhân viên giao hàng trực tiếp của Thinking.
                    </Paragraph>

                    <Title className="payment-policy-title" level={3}>
                        II. Thanh toán trực tuyến trên website
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Các phương thức thanh toán</strong>
                    </Paragraph>
                    <Title className="payment-policy-title" level={4}>
                        Thanh toán qua thẻ ATM nội địa
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        ThinkPro hỗ trợ mua hàng bằng thẻ ATM nội địa của 40 ngân hàng trong nước kết nối với cổng thanh toán VNPT EPAY. Hình thức thanh toán đơn giản, dễ sử dụng, trực quan và an toàn chỉ trong ba bước:
                    </Paragraph>
                    <ul className="payment-list">
                        <li>Bước 1: Nhập thông tin thẻ.</li>
                        <li>Bước 2: Xác thực khách hàng.</li>
                        <li>Bước 3: Thanh toán và nhận ngay kết quả.</li>
                    </ul>
                    <Paragraph className="payment-policy-paragraph">
                        Ngoài ra, để thanh toán bằng thẻ ngân hàng nội địa, thẻ của Quý khách phải được đăng ký sử dụng tính năng thanh toán trực tuyến, hoặc ngân hàng điện tử của Ngân hàng.
                    </Paragraph>
                    <Paragraph className="payment-policy-paragraph">
                        Giao dịch được ghi nhận là thành công khi bạn nhận được thông báo từ hệ thống cổng thanh toán trả về trạng thái “Giao dịch thành công”.
                    </Paragraph>

                    <Title className="payment-policy-title" level={4}>
                        Thanh toán qua thẻ Visa/ Master/ JCB/ American Express/ Union Pay
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        Sau khi chọn hình thức thanh toán qua thẻ Visa/ Master/ JCB/ American Express/ Union Pay, hệ thống chuyển sang giao diện thanh toán của VNPT EPAY. Quý khách sẽ tiến hành điền các thông tin theo hướng dẫn để hoàn tất việc đặt hàng.
                    </Paragraph>

                    <Title className="payment-policy-title" level={4}>
                        Thanh toán trực tuyến qua Cổng thanh toán VNPAY-QR
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        Sau khi Quý khách lựa chọn hình thức thanh toán qua VNPAY QR, hệ thống sẽ chuyển sang giao diện thanh toán của VNPT EPAY. Quý khách tiến hành mở App ngân hàng, quét mã QR trên để hoàn tất việc đặt hàng.
                    </Paragraph>

                    <Title className="payment-policy-title" level={3}>
                        III. Thanh toán quẹt thẻ ATM, Visa, MasterCard
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Tại cửa hàng:</strong> Cà thẻ trực tiếp tại các chuỗi cửa hàng thuộc hệ thống ThinkPro. Tất cả hệ thống cửa hàng ThinkPro đều hỗ trợ quẹt thẻ ATM, Visa, MasterCard.
                    </Paragraph>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Tại nhà/ nơi nhận hàng:</strong> Quý khách vui lòng yêu cầu trước để Chuyên viên bán hàng đem theo máy hỗ trợ thanh toán và quẹt thẻ.
                    </Paragraph>

                    <Title className="payment-policy-title" level={3}>
                        IV. Quy định về thời gian hoàn trả tiền
                    </Title>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Thẻ ATM nội địa:</strong> Thời gian hoàn tiền: 7 - 10 ngày làm việc (không tính Thứ 7, Chủ Nhật và Ngày lễ).
                    </Paragraph>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>Thẻ tín dụng:</strong> Thời gian hoàn tiền: 7 - 15 ngày làm việc (không tính Thứ 7, Chủ Nhật và Ngày lễ).
                    </Paragraph>
                    <Paragraph className="payment-policy-paragraph">
                        <strong>VNPAY-QR:</strong> Thời gian hoàn tiền: 5 - 7 ngày làm việc (không tính Thứ 7, Chủ Nhật và Ngày lễ).
                    </Paragraph>
                    <Paragraph className="payment-policy-paragraph">
                        ThinkPro sẽ hỗ trợ liên hệ ngân hàng giải quyết nếu Khách hàng không nhận được tiền trong thời gian quy định.
                    </Paragraph>

                    <Paragraph className="payment-policy-paragraph">
                        Nếu Quý khách có bất kỳ câu hỏi nào về chính sách thanh toán, vui lòng liên hệ Thinking để được hỗ trợ.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default PaymentPolicy;
