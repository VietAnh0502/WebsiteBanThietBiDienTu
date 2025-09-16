'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/WarrantyPolicy.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const WarrantyPolicy: React.FC = () => {
    return (
        <div className="warranty-policy-container">
            <div className="warranty-policy-content">
                <Typography>
                    {/* Header */}
                    <Title className="warranty-policy-title" level={2}>
                        Chính sách bảo hành - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Title className="warranty-policy-title" level={3}>
                        Bảo hành laptop
                    </Title>
                    <Paragraph className="warranty-policy-paragraph">
                        Tất cả các sản phẩm do Thinking bán ra đều được bảo hành theo điều kiện bảo hành của hãng cung cấp. Hàng sản xuất, các thiết bị ngoại vi, quà tặng đi kèm sản phẩm đều không được bảo hành.
                    </Paragraph>
                    <ul className="warranty-list">
                        <li>Sản phẩm bị hư hỏng do quá trình sử dụng (Gồm hao mòn ổ đĩa SSD, màn hình điểm, hỏng tác động bên trong hoặc bên ngoài...).</li>
                        <li>Các phần mềm bản quyền cài đặt theo máy.</li>
                        <li>Sản phẩm hết thời hạn bảo hành hoặc tem bảo hành sản phẩm được ghi trên màn hình theo serial của sản phẩm có trên website thinkpro.vn.</li>
                        <li>Không có tem bảo hành của Công ty/hãng phân phối/siêu âm xuất hoặc tem bảo hành không hợp lệ do bị rách, bị mờ, bị dán đè hoặc có dấu hiệu tháo gỡ.</li>
                        <li>Số serial máy, vỏ sản phẩm hoặc linh kiện sản phẩm không hợp lệ (bị mờ hoặc đục mất, bị rách, bị tẩy xóa, bị thay đổi, bị đánh tráo...).</li>
                        <li>Sản phẩm bị hư do nguyên nhân bất khả kháng (lũ lụt, hỏa hoạn, ngoại lực, điện năng bất thường, sai điện áp quy định...).</li>
                        <li>Hư hỏng, mất dữ liệu: hệ điều hành và dữ liệu bị virus, do vận chuyển/cài đặt sai quy cách, linh kiện bị hư do khách hàng tự ý tháo lắp, thay đổi cấu trúc sản phẩm hoặc sửa chữa không đúng kỹ thuật.</li>
                        <li>Chúng tôi từ chối bảo hành sản phẩm đã can thiệp hoặc bị từ chối bảo hành từ ủy quyền của ThinkPro.</li>
                    </ul>

                    <Title className="warranty-policy-title" level={3}>
                        Bảo hành phụ kiện
                    </Title>
                    <ul className="warranty-list">
                        <li>Bảo hành 1 năm (1 đổi 1 với các thiết bị như USB, Chuột, Cáp, Sạc, Sạc dự phòng, Bàn phím, Đế tản nhiệt, Tai nghe trừ các phụ kiện hãng như Apple, Thiết bị mạng, phần mềm, các phụ kiện không dây).</li>
                        <li>Bảo hành 1 năm (không đổi mới) đối với phụ kiện hãng chính hãng Apple.</li>
                        <li>Không bảo hành đối với Bàn di chuột, Vỏ ốp, Túi xách, Tai chống ồn, Tai chống nước, Tay cầm chơi game.</li>
                    </ul>

                    <Title className="warranty-policy-title" level={3}>
                        Thời gian nhận bảo hành và trả bảo hành
                    </Title>
                    <Paragraph className="warranty-policy-paragraph">
                        <strong>Thời gian tiếp nhận bảo hành:</strong> Từ 8h00-12h00 và 14h00-18h00 tất cả các ngày trong tuần, từ Thứ Hai đến Chủ nhật.
                    </Paragraph>
                    <Paragraph className="warranty-policy-paragraph">
                        <strong>Thời gian trả bảo hành:</strong> Trong thời gian bảo hành, sản phẩm cần được gửi đi hãng sản xuất hoặc đại lý bảo hành chính hãng nên thời gian trả bảo hành có thể kéo dài sớm hoặc lâu hơn tùy thuộc vào tình trạng bảo hành của hãng.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default WarrantyPolicy;
