'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/InspectionPolicy.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const InspectionPolicy: React.FC = () => {
    return (
        <div className="container">
            <div className="policy-content">
                <Typography>
                    {/* Header */}
                    <Title className="policy-title" level={2}>
                        Chính sách kiểm hàng - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung chính sách kiểm hàng */}
                    <Title className="policy-title" level={3}>
                        Thời điểm kiểm hàng
                    </Title>
                    <Paragraph className="policy-paragraph">
                        Thinking chấp nhận cho khách hàng đồng kiểm với nhân viên giao hàng tại thời điểm nhận hàng. Không hỗ trợ thử hàng.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        Sau khi nhận hàng, khách hàng kiểm lại phát hiện sai có thể liên lạc với bộ phận chăm sóc khách hàng để được hỗ trợ đổi trả.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Lưu ý:</span> Quý khách vui lòng quay video lúc mở hàng để đối chiếu khi cần thiết.
                    </Paragraph>

                    <Title className="policy-title" level={3}>
                        Phạm vi kiểm tra hàng hóa
                    </Title>
                    <Paragraph className="policy-paragraph">
                        Khách hàng được kiểm tra các sản phẩm thực nhận, đối chiếu, so sánh các sản phẩm nhận được với sản phẩm đã đặt trên đơn sau khi nhân viên ThinkPro xác nhận đơn hàng theo các tiêu chí: ảnh mẫu, mã sản phẩm, kích thước, màu sắc, chất liệu, v.v.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        Khi kiểm tra hàng hóa, khách hàng chỉ kiểm tra bên ngoài chứ không mở lên sử dụng.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        Tuyệt đối không bóc, mở các hộp sản phẩm có tem niêm phong, tem đảm bảo.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        Không được cào lấy mã các sản phẩm có tích điểm, đổi quà.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Lưu ý:</span> Với những sản phẩm nguyên seal sẽ phải thanh toán với Shipper (nếu có COD) mới được bóc mở.
                    </Paragraph>

                    <Title className="policy-title" level={3}>
                        Các bước xử lý khi hàng hóa nhận được không như đơn đặt hàng
                    </Title>
                    <Paragraph className="policy-paragraph">
                        Khi quý khách đồng kiểm, sản phẩm nhận được không như sản phẩm khách đặt trên đơn hàng. Xin hãy liên hệ với hotline <span className="policy-note">0925123456</span> để được gặp bộ phận chăm sóc khách hàng xác nhận lại đơn hàng.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Trường hợp Thinking đóng sai đơn hàng:</span> Khách có thể không nhận hàng, không thanh toán. Trong trường hợp đơn hàng đã thanh toán, khách hàng có thể yêu cầu gửi lại đơn mới hoặc không, ThinkPro sẽ hoàn lại tiền cho quý khách trong thời gian sớm nhất.
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Trường hợp Thinking đóng hàng đúng theo đơn hàng:</span> Nhưng khách hàng thay đổi nhu cầu, khách hàng có thể yêu cầu đổi trả và áp dụng chính sách đổi trả hàng hóa. Trường hợp này khách hàng sẽ phải thanh toán chi phí giao hàng (nếu có).
                    </Paragraph>

                    <Title className="policy-title" level={3}>
                        Các kênh thông tin tiếp nhận khiếu nại của khách hàng
                    </Title>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Hotline:</span> 0925123456
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Fanpage:</span> Thinking - Hệ thống máy tính và Phụ kiện
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Group Telegram:</span> Thinking Community
                    </Paragraph>
                    <Paragraph className="policy-paragraph">
                        <span className="policy-note">Zalo:</span> Thinking
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default InspectionPolicy;
