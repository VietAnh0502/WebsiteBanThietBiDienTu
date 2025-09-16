'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/AboutUs.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <Typography>
                    {/* Header */}
                    <Title className="about-us-title" level={2}>
                        Về Chúng Tôi - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Paragraph className="about-us-paragraph">
                        Được thành lập vào tháng 11 năm 2024 bởi những chàng trai 21CN5 đầy nhiệt huyết và đam mê công nghệ, với xuất phát điểm là số vốn 0 đồng cho một gian hàng laptop nhỏ tại trường Đại học Kiến trúc Hà Nội, cho đến nay Thinking đã phát triển và vận hành 100 cửa hàng lớn nhỏ bán lẻ máy tính và phụ kiện công nghệ trên hai miền đất nước dưới thương hiệu Thinking, trở thành đơn vị tiên phong trong việc thay đổi mô hình bán lẻ và trải nghiệm công nghệ tại Việt Nam với chuỗi cửa hàng tiêu chuẩn mới - <strong>Dạo Bước Công Nghệ</strong>.
                    </Paragraph>

                    <Title className="about-us-title" level={3}>
                        Tầm Nhìn
                    </Title>
                    <Paragraph className="about-us-paragraph">
                        Với hơn 5 thành viên (tiếp tục mở rộng) tại Hà Nội, Sài Gòn và 200% tăng trưởng doanh thu trong suốt 3 năm liên tiếp, Thinking tự tin thực hiện tầm nhìn 2025 trở thành Top 5 nhà cung cấp máy tính tại thị trường Việt Nam.
                    </Paragraph>

                    <Title className="about-us-title" level={3}>
                        Sứ Mệnh
                    </Title>
                    <Paragraph className="about-us-paragraph">
                        Thinking với sứ mệnh mang lại những giá trị tốt đẹp, luôn lấy khách hàng làm trung tâm, bằng kiến thức chuyên môn, sự chân thành và nhiệt huyết của tuổi trẻ, đồng thời ứng dụng công nghệ số để tối ưu và linh hoạt, mang lại trải nghiệm tốt nhất dành cho khách hàng qua từng dịch vụ mà công ty cung cấp.
                    </Paragraph>

                    <Title className="about-us-title" level={3}>
                        Giá Trị Cốt Lõi
                    </Title>
                    <Paragraph className="about-us-paragraph">
                        <strong>Chuyên môn:</strong> Thinking luôn sẵn sàng phục vụ quý khách hàng với đội ngũ chuyên viên tư vấn có chuyên môn, được đào tạo bài bản, có kiến thức chuyên sâu về sản phẩm, thấu hiểu nhu cầu của khách hàng.
                    </Paragraph>
                    <Paragraph className="about-us-paragraph">
                        <strong>Chân thành:</strong> Thinking luôn phục vụ khách hàng bằng tất cả sự chân thành và tin cậy.
                    </Paragraph>
                    <Paragraph className="about-us-paragraph">
                        <strong>Linh hoạt:</strong> Linh hoạt là giá trị quan trọng mà Thinking mang đến để vận hành và phục vụ khách hàng tốt nhất trong bối cảnh xã hội liên tục vận động hiện nay.
                    </Paragraph>
                    <Paragraph className="about-us-paragraph">
                        Thinking là hệ thống bán lẻ máy tính và phụ kiện uy tín tại Việt Nam với chuỗi cửa hàng trải nghiệm độc đáo và đội ngũ tư vấn chuyên sâu, hình thức thanh toán đa dạng và bảo hành uy tín, tin cậy giúp khách hàng tự tin lựa chọn các sản phẩm công nghệ phù hợp nhất.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default AboutUs;
