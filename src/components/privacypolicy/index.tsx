'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/PrivacyPolicy.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-content">
                <Typography>
                    {/* Header */}
                    <Title className="privacy-policy-title" level={2}>
                        Chính sách bảo mật - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Paragraph className="privacy-policy-paragraph">
                        Nhằm đảm bảo an toàn cho website và bảo mật thông tin cho Khách hàng, Thinking đưa ra một số chính sách bảo mật thông tin cho Khách hàng (cá nhân & doanh nghiệp) khi mua hàng tại website.
                    </Paragraph>
                    <Paragraph className="privacy-policy-paragraph">
                        Bảo vệ dữ liệu cá nhân của Khách hàng là vấn đề quan tâm hàng đầu của Thinking. Chính sách bảo mật của Thinking dành cho Khách hàng là việc thu thập thông tin cũng như tôn trọng quyền riêng tư cá nhân của Khách hàng và tất cả người dùng trên trang web của Thinking.
                    </Paragraph>

                    <Title className="privacy-policy-title" level={3}>
                        1. Mục đích thu thập thông tin
                    </Title>
                    <ul className="policy-list">
                        <li>Xử lý các vấn đề liên quan tới đơn hàng của Khách hàng, cụ thể: Xác nhận thanh toán và hỗ trợ dịch vụ.</li>
                        <li>Cung cấp nhanh chóng tới Khách hàng các thông tin về chương trình Khuyến mãi, cụ thể: Giới thiệu về các sản phẩm, dịch vụ mới của Thinking.</li>
                        <li>Hỗ trợ giải quyết các vấn đề liên quan tới khiếu nại, góp ý từ phía Khách hàng, cụ thể: Chăm sóc khách hàng.</li>
                        <li>Thu thập dữ liệu về hành trình khách hàng (lượt click, số lần xem trang, thời gian ở lại trang,...) nhằm thực hiện các hoạt động nghiên cứu, cải thiện và cung cấp tới Khách hàng trải nghiệm mua hàng tốt nhất.</li>
                    </ul>

                    <Title className="privacy-policy-title" level={3}>
                        2. Phạm vi thu thập thông tin
                    </Title>
                    <Paragraph className="privacy-policy-paragraph">
                        Những thông tin Khách hàng cung cấp sẽ được lưu trữ tại cơ sở dữ liệu của Thinking, điều này đồng nghĩa với việc Khách hàng đã hoàn toàn đồng ý và chấp thuận việc thông tin cá nhân Khách hàng cung cấp cho Thinking sẽ được lưu trữ lại trên hệ thống.
                    </Paragraph>
                    <Paragraph className="privacy-policy-paragraph">
                        Những thông tin được thu thập bao gồm:
                    </Paragraph>
                    <ul className="policy-list">
                        <li>Họ và tên</li>
                        <li>Số điện thoại</li>
                        <li>Địa chỉ</li>
                        <li>Email</li>
                        <li>Thông tin đăng nhập tài khoản (Tên đăng nhập, Mật khẩu đăng nhập)</li>
                    </ul>

                    <Title className="privacy-policy-title" level={3}>
                        3. Phạm vi sử dụng thông tin
                    </Title>
                    <Paragraph className="privacy-policy-paragraph">
                        Thinking có thể sử dụng dữ liệu để tùy biến và cải tiến nhằm phục vụ Khách hàng tốt hơn. Thinking không sử dụng thông tin của Khách hàng vào mục đích bất hợp pháp. Thinking được quyền cung cấp thông tin của Khách hàng cho Bên Thứ Ba trong các trường hợp:
                    </Paragraph>
                    <ul className="policy-list">
                        <li>Được khách hàng chấp thuận.</li>
                        <li>Dịch vụ của Thinking cung cấp yêu cầu sự tương tác với Bên Thứ Ba hoặc do Bên Thứ Ba cung cấp. Bên Thứ Ba cam kết sẽ bảo mật thông tin cá nhân của Khách hàng.</li>
                        <li>Theo yêu cầu của cơ quan có thẩm quyền và theo các quy định của pháp luật.</li>
                    </ul>

                    <Title className="privacy-policy-title" level={3}>
                        4. Cam kết bảo mật thông tin cá nhân khách hàng
                    </Title>
                    <Paragraph className="privacy-policy-paragraph">
                        Những rủi ro liên quan đến vấn đề cung cấp dữ liệu cá nhân và không có hệ thống kỹ thuật nào an toàn tuyệt đối. Thinking luôn nỗ lực tiến hành những biện pháp an ninh thích hợp để ngăn chặn và giảm thiểu tối đa các rủi ro.
                    </Paragraph>
                    <Paragraph className="privacy-policy-paragraph">
                        Tuy nhiên, có thể có những nhân tố vượt ngoài tầm kiểm soát của Thinking dẫn đến việc dữ liệu bị tiết lộ. Vì vậy, Thinking không chịu trách nhiệm bảo đảm dữ liệu luôn được duy trì ở tình trạng hoàn hảo hoặc không bị tiết lộ.
                    </Paragraph>
                    <Paragraph className="privacy-policy-paragraph">
                        Thinking không bán hay trao đổi những thông tin này với bất kỳ một Bên Thứ Ba nào khác, trừ trường hợp được quy định trong Điều khoản Dịch vụ.
                    </Paragraph>

                    <Title className="privacy-policy-title" level={3}>
                        5. Đơn vị thu thập và quản lý thông tin cá nhân
                    </Title>
                    <Paragraph className="privacy-policy-paragraph">
                        <strong>Trường Đại học Kiến trúc Hà Nội</strong><br />
                        Địa chỉ: Km10 Nguyễn Trãi, Thanh Xuân, Hà Nội
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
