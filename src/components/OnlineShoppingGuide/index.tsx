'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import '@/src/cssfolder/OnlineShoppingGuide.css'; // Import file CSS

const { Title, Paragraph } = Typography;

const OnlineShoppingGuide: React.FC = () => {
    return (
        <div className="shopping-guide-container">
            <div className="shopping-guide-content">
                <Typography>
                    {/* Header */}
                    <Title className="shopping-guide-title" level={2}>
                        Hướng dẫn mua hàng Online - Thinking
                    </Title>

                    <Divider />

                    {/* Nội dung */}
                    <Paragraph className="shopping-guide-paragraph">
                        Nhằm giúp Quý khách hàng có được trải nghiệm mua hàng tốt nhất, Thinking xin được đem tới hướng dẫn chi tiết quá trình mua hàng trên website.
                    </Paragraph>

                    <Title className="shopping-guide-title" level={3}>
                        Bước 1:
                    </Title>
                    <Paragraph className="shopping-guide-paragraph">
                        Đầu tiên, Quý khách hàng hãy tra cứu sản phẩm muốn mua và chọn <strong>Mua ngay</strong> để lập tức đi tới giỏ hàng. 
                    </Paragraph>
                    <Paragraph className="shopping-guide-paragraph">
                        Trong trường hợp Quý khách vẫn muốn tiếp tục mua sắm, hãy ấn vào nút hình giỏ hàng để thêm sản phẩm vào giỏ, trong khi vẫn ở lại trang hiện tại.
                    </Paragraph>

                    <Title className="shopping-guide-title" level={3}>
                        Bước 2:
                    </Title>
                    <Paragraph className="shopping-guide-paragraph">
                        Sau khi đã chọn xong (các) sản phẩm muốn mua, Quý khách hàng vui lòng ấn vào nút ở góc trên cùng bên phải website để đi tới khu vực giỏ hàng.
                    </Paragraph>

                    <Title className="shopping-guide-title" level={3}>
                        Bước 3:
                    </Title>
                    <Paragraph className="shopping-guide-paragraph">
                        Tại giỏ hàng, Quý khách hàng có thể điều chỉnh số lượng sản phẩm muốn mua, xóa bớt sản phẩm, v.v. Khi đã hoàn thành, vui lòng nhấn nút <strong>Đặt hàng</strong> để bắt đầu quá trình đặt mua.
                    </Paragraph>

                    <Title className="shopping-guide-title" level={3}>
                        Bước 4:
                    </Title>
                    <Paragraph className="shopping-guide-paragraph">
                        Bắt đầu quá trình đặt hàng, Quý khách hàng sẽ được chọn giữa hai hình thức nhận hàng là <strong>Tại cửa hàng</strong> và <strong>Giao tận nơi</strong>.
                    </Paragraph>
                    <Paragraph className="shopping-guide-paragraph">
                        <strong>Đối với hình thức nhận hàng Tại cửa hàng:</strong>
                        Quý khách hàng vui lòng chọn cơ sở của Thinking gần nhất để thuận tiện cho việc nhận hàng. Sau đó, Quý khách hàng điền <strong>Họ và tên</strong> cùng <strong>Số điện thoại</strong> để hoàn thành phần thông tin đặt hàng.
                    </Paragraph>
                    <Paragraph className="shopping-guide-paragraph">
                        <strong>Đối với hình thức nhận hàng Giao tận nơi:</strong>
                        Quý khách hàng vui lòng điền đầy đủ thông tin ở các ô trống bao gồm <strong>Họ và tên</strong>, <strong>Số điện thoại</strong>, <strong>Khu vực</strong> và <strong>Địa chỉ nhận hàng</strong>.
                    </Paragraph>

                    <Title className="shopping-guide-title" level={3}>
                        Bước 5:
                    </Title>
                    <Paragraph className="shopping-guide-paragraph">
                        Sau khi hoàn thành các thao tác ở trên, Quý khách hàng vui lòng kiểm tra đơn hàng của mình trong phần <strong>Tóm tắt đơn hàng</strong> và <strong>Sản phẩm trong đơn</strong> rồi ấn nút <strong>Đặt hàng</strong> để hoàn tất quá trình.
                    </Paragraph>
                    <Paragraph className="shopping-guide-paragraph">
                        Sau khi Quý khách hàng đặt mua sản phẩm trên website, sẽ có nhân viên của Thinking liên hệ lại để xác nhận đơn hàng.
                    </Paragraph>

                    <Paragraph className="shopping-guide-paragraph">
                        Như vậy, đó là hướng dẫn chi tiết về toàn bộ quá trình đặt hàng thông qua website. Để được hỗ trợ kỹ hơn, Quý khách hàng vui lòng liên hệ tới Thinking thông qua fanpage và số điện thoại <strong>0925123456</strong>.
                    </Paragraph>
                </Typography>
            </div>
        </div>
    );
};

export default OnlineShoppingGuide;
