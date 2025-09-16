'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/ExchangePolicy.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const ExchangePolicy: React.FC = () => {
    return (
        <div className="exchange-policy-container">
            <div className="exchange-policy-content">
                <Typography>
                    {/* Header */}
                    <Title className="exchange-policy-title" level={2}>
                        Chính sách đổi trả - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Title className="exchange-policy-title" level={3}>
                        I. Chính sách đổi trả laptop chính hãng
                    </Title>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>30 ngày đầu kể từ thời điểm nhận máy:</strong> Nếu sản phẩm Quý Khách hàng mua về gặp lỗi do nhà sản xuất, Thinking sẽ hỗ trợ:
                    </Paragraph>
                    <ul className="exchange-list">
                        <li>1 đổi 1 sản phẩm mới với cùng tùy chọn màu và cấu hình. Nếu không còn hàng, Quý Khách hàng có thể đổi sang sản phẩm tương đương giá trị hoặc giá cao hơn (bù chi phí chênh lệch).</li>
                        <li>Hoàn tiền: Thinking kiểm tra tình trạng máy và thông báo giá trị thu lại trực tiếp.</li>
                    </ul>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Điều kiện:</strong> Sản phẩm phải giữ nguyên 100% ngoại hình ban đầu, đầy đủ hộp, giấy tờ và thỏa mãn điều kiện bảo hành.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Trường hợp không lỗi:</strong> Quý Khách hàng muốn trả lại/đổi sản phẩm, Thinking sẽ thông báo chi phí thu lại/đổi sang sản phẩm mới sau khi kiểm tra tình trạng.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>30 ngày đầu:</strong> Sản phẩm có lỗi do người sử dụng sẽ không được hỗ trợ đổi trả, chỉ hỗ trợ sửa chữa/thay thế linh kiện có tính phí.
                    </Paragraph>

                    <Title className="exchange-policy-title" level={3}>
                        II. Chính sách đổi trả laptop nhập khẩu
                    </Title>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>15 ngày đầu kể từ thời điểm nhận máy:</strong> Sản phẩm lỗi do nhà sản xuất sẽ được hỗ trợ đổi mới hoặc hoàn tiền 100% nếu không còn hàng.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Điều kiện:</strong> Sản phẩm phải giữ nguyên 100% ngoại hình ban đầu, đầy đủ hộp, giấy tờ liên quan.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Không lỗi:</strong> Thinking sẽ thông báo trực tiếp về chi phí đổi sản phẩm.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Sau 15 ngày đầu:</strong> Thinking hỗ trợ bảo hành sửa chữa tại Trung tâm Bảo hành hợp lệ, không áp dụng đổi trả cho các trường hợp không lỗi.
                    </Paragraph>

                    <Title className="exchange-policy-title" level={3}>
                        III. Chính sách đổi trả phụ kiện
                    </Title>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>15 ngày đầu:</strong> Miễn phí đổi trả nếu sản phẩm gặp lỗi. Sau 15 ngày, Thinking áp dụng bảo hành theo chính sách của hãng.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Trường hợp lỗi phần mềm:</strong> Không áp dụng đổi mới, Thinking sẽ hỗ trợ xử lý lỗi phần mềm miễn phí.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Đổi sản phẩm nguyên kiện:</strong> Quý Khách hàng trả thêm phí tương đương 20% giá trị hóa đơn.
                    </Paragraph>

                    <Title className="exchange-policy-title" level={3}>
                        IV. Chính sách hoàn tiền
                    </Title>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>15 ngày đầu:</strong> Hoàn tiền 70% giá trị hóa đơn. Sau 15 ngày, trừ thêm 15% giá trị hóa đơn mỗi tháng.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Điều kiện:</strong> Sản phẩm phải giữ nguyên ngoại hình ban đầu, đầy đủ hộp và phụ kiện.
                    </Paragraph>
                    <Paragraph className="exchange-policy-paragraph">
                        <strong>Hàng khuyến mãi:</strong> Nếu thất lạc, Thinking sẽ tính phí theo giá niêm yết.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default ExchangePolicy;
