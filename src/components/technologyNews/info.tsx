'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import '../../cssfolder/TechnologyNewsinfo.css';

// Định nghĩa kiểu cho bài viết
interface Article {
  title: string;
  description: string;
  content: {
    heading: string;
    subheading: string;
    text: string;
    image: string;
  }[]; 
}

// Fake dữ liệu bài viết chi tiết
// Fake dữ liệu bài viết chi tiết
const fakeDetailData: Record<string, Article> = {
  "1": {
    "title": "Cách kiểm tra dung lượng RAM tối đa laptop đơn giản nhất",
    "description": "Hướng dẫn chi tiết cách kiểm tra dung lượng RAM tối đa laptop trên Windows, macOS, Linux. Tìm hiểu ngay để nâng cấp RAM hiệu quả!",
    "content": [
      {
        "heading": "1. Tại sao cần kiểm tra dung lượng RAM tối đa?",
        "subheading": "Hiệu suất của laptop phụ thuộc vào RAM",
        "text": "RAM là một trong những yếu tố quan trọng ảnh hưởng đến hiệu suất máy tính. Kiểm tra dung lượng RAM tối đa giúp bạn xác định khả năng nâng cấp.",
        "image": "https://www.tnc.com.vn/uploads/newp/n2024/cach-chon-ram-phu-hop-voi-main-va-cpu-1065.webp"
      },
      {
        "heading": "2. Cách kiểm tra dung lượng RAM tối đa trên Windows",
        "subheading": "Hướng dẫn cho hệ điều hành Windows",
        "text": "Truy cập vào Task Manager hoặc sử dụng các công cụ phần mềm để kiểm tra dung lượng RAM tối đa mà máy tính của bạn hỗ trợ.",
        "image": "https://news.khangz.com/wp-content/uploads/2023/03/cai-win-11-2.jpg"
      },
      {
        "heading": "3. Kiểm tra dung lượng RAM tối đa trên macOS",
        "subheading": "Các bước kiểm tra RAM trên hệ điều hành macOS",
        "text": "Để kiểm tra dung lượng RAM tối đa, bạn có thể sử dụng 'About This Mac' trong menu Apple hoặc công cụ phần mềm của bên thứ ba.",
        "image": "https://www.techsignin.com/wp-content/uploads/2019/05/kiem-tra-dung-luong-va-cac-su-co-loi-ram-tren-macbook-va-imac-2.jpg"
      },
      {
        "heading": "4. Kiểm tra RAM trên Linux",
        "subheading": "Cách kiểm tra RAM trên Linux",
        "text": "Sử dụng lệnh `free -h` hoặc các công cụ như `dmidecode` để xem thông tin về dung lượng RAM trên hệ điều hành Linux.",
        "image": "https://vinasupport.com/uploads/2021/10/Lenh-lscpu.png"
      }
    ]
  },
  "2": {
    "title": "Laptop rò điện: Nguyên nhân, cách khắc phục & phòng tránh",
    "description": "Tìm hiểu nguyên nhân laptop bị rò điện, cách khắc phục hiệu quả và các biện pháp phòng tránh tình trạng này.",
    "content": [
      {
        "heading": "1. Nguyên nhân laptop rò điện",
        "subheading": "Hệ thống dây điện và tiếp xúc không an toàn",
        "text": "Rò điện thường xảy ra do dây nguồn hoặc bộ sạc bị hỏng hoặc tiếp xúc kém. Nguyên nhân cũng có thể do môi trường ẩm ướt.",
        "image": "https://laptophaidang.com/pic/news/images/laptop-bi-ro-dien-5.jpg"
      },
      {
        "heading": "2. Cách kiểm tra tình trạng rò điện của laptop",
        "subheading": "Sử dụng thiết bị đo điện để kiểm tra",
        "text": "Sử dụng đồng hồ vạn năng (multimeter) để đo điện áp và xác định xem có rò rỉ điện từ bộ sạc hay các linh kiện không.",
        "image": "https://bizweb.dktcdn.net/100/512/769/files/kiem-tra-lai-o-cam.jpg?v=1728312384515"
      },
      {
        "heading": "3. Biện pháp khắc phục rò điện",
        "subheading": "Thay thế bộ sạc và kiểm tra dây điện",
        "text": "Khi phát hiện rò điện, bạn cần thay thế bộ sạc và dây nguồn. Kiểm tra kỹ càng các kết nối và môi trường xung quanh.",
        "image": "https://bizweb.dktcdn.net/100/428/778/files/khac-phuc-ro-dien.jpg?v=1651594453302"
      },
      {
        "heading": "4. Phòng tránh tình trạng rò điện",
        "subheading": "Chú ý bảo trì và sử dụng linh kiện chính hãng",
        "text": "Để phòng tránh tình trạng rò điện, bạn nên bảo trì định kỳ, sử dụng bộ sạc chính hãng và không sử dụng máy trong môi trường ẩm ướt.",
        "image": "https://cdn.tgdd.vn/Files/2021/08/28/1378440/dong-ro-la-gi-cach-kiem-tra-va-khac-phuc-dong-die.png"
      }
    ]
  },
  "3": {
    "title": "Hướng dẫn bảo dưỡng laptop đúng cách tại nhà",
    "description": "Tìm hiểu cách bảo dưỡng laptop tại nhà, giữ cho máy tính luôn sạch sẽ và hoạt động bền bỉ.",
    "content": [
      {
        "heading": "1. Tại sao cần bảo dưỡng laptop định kỳ?",
        "subheading": "Giảm nguy cơ hỏng hóc và kéo dài tuổi thọ",
        "text": "Bảo dưỡng định kỳ giúp loại bỏ bụi bẩn, đảm bảo máy hoạt động ổn định và giảm nguy cơ hư hỏng các linh kiện.",
        "image": "https://hdlaptop.net/img/bao-duong-ve-sinh-laptop-la-gi.jpg"
      },
      {
        "heading": "2. Làm sạch bộ phận bên ngoài của laptop",
        "subheading": "Vệ sinh màn hình và bàn phím",
        "text": "Dùng khăn mềm, dung dịch vệ sinh đặc biệt để lau chùi màn hình và bàn phím laptop, giúp tránh bụi bẩn và vi khuẩn.",
        "image": "https://cdn11.dienmaycholon.vn/filewebdmclnew/public//userupload/images/huong-dan-ve-sinh-lap-top-sach-nhu-moi-1.jpg"
      },
      {
        "heading": "3. Bảo dưỡng quạt và làm mát hệ thống",
        "subheading": "Giảm nhiệt độ hoạt động của laptop",
        "text": "Vệ sinh quạt tản nhiệt định kỳ và thay keo tản nhiệt giúp giữ nhiệt độ máy tính ở mức ổn định, tránh tình trạng quá nhiệt.",
        "image": "https://xedoisong.vn/uploads/20221025/congnghe203jxmz_ijvy.jpg"
      },
      {
        "heading": "4. Kiểm tra và nâng cấp phần cứng",
        "subheading": "Cập nhật và thay thế linh kiện cũ",
        "text": "Kiểm tra các thành phần phần cứng của laptop và thay thế những linh kiện cũ như ổ cứng, RAM để tăng hiệu suất máy.",
        "image": "https://cdn.tgdd.vn/hoi-dap/989497/cach-kiem-tra-o-cung-laptop-co-con-tot-khong1-800x480.jpg"
      }
    ]
  },
  "4": {
    "title": "Cách để laptop chạy hết công suất Win 11",
    "description": "Tìm hiểu các cách tối ưu hóa và tăng hiệu suất laptop khi sử dụng Windows 11, giúp máy tính hoạt động mượt mà và hiệu quả.",
    "content": [
      {
        "heading": "1. Cập nhật hệ điều hành và driver",
        "subheading": "Đảm bảo máy tính luôn chạy phiên bản mới nhất",
        "text": "Cập nhật Windows 11 và các driver phần cứng giúp máy tính chạy mượt mà hơn, cải thiện hiệu suất và giảm thiểu các lỗi hệ thống.",
        "image": "https://bcavn.com/Image/Picture/New/driverupdate.png"
      },
      {
        "heading": "2. Tắt các ứng dụng không cần thiết khi khởi động",
        "subheading": "Giảm tải cho hệ thống khi khởi động",
        "text": "Điều chỉnh các ứng dụng khởi động tự động khi bật máy tính. Tắt những chương trình không cần thiết giúp giảm bớt gánh nặng cho CPU.",
        "image": "https://cdn.tgdd.vn/hoi-dap/1060841/disable-800x548.jpg"
      },
      {
        "heading": "3. Tối ưu hóa hiệu suất trong Cài đặt",
        "subheading": "Cấu hình hệ thống để tận dụng tối đa sức mạnh phần cứng",
        "text": "Vào phần Cài đặt > Hệ thống > Hiệu suất, và điều chỉnh các tùy chọn để tối ưu hóa tốc độ và hiệu suất của máy tính.",
        "image": "https://idconline.vn/blog/wp-content/uploads/2023/05/image-42.png"
      },
      {
        "heading": "4. Sử dụng phần mềm tối ưu hóa hệ thống",
        "subheading": "Dọn dẹp và tối ưu hệ thống",
        "text": "Cài đặt các phần mềm tối ưu hóa như CCleaner để dọn dẹp các tệp rác, kiểm tra ổ cứng và tối ưu hóa bộ nhớ, giúp hệ thống chạy nhanh hơn.",
        "image": "https://blog.xprofile.vn/wp-content/uploads/2023/03/Kiem-thu-phan-mem-la-giai-doan-rat-quan-trong-e1679610306325.png"
      },
      {
        "heading": "5. Cập nhật các ứng dụng phần mềm",
        "subheading": "Cập nhật các phần mềm và ứng dụng thường xuyên",
        "text": "Đảm bảo các ứng dụng và phần mềm đang sử dụng luôn ở phiên bản mới nhất. Điều này giúp tối ưu hóa hiệu suất và bảo mật của laptop.",
        "image": "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/174756/Originals/cap-nhat-phan-mem-2.jpg"
      }
    ]
  }
  // Các bài viết khác...
};
const TechnologyNewsInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy ID từ URL
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    console.log(`Đang tải bài viết với ID: ${id}`); // Kiểm tra id

    setLoading(true);

    // Mô phỏng tải dữ liệu
    const timeout = setTimeout(() => {
      if (id && fakeDetailData[id]) {
        setArticle(fakeDetailData[id]); // Lấy bài viết theo ID
      } else {
        setArticle(null); // Không tìm thấy bài viết
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); // Dọn dẹp timeout khi component bị unmount
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin tip="Đang tải dữ liệu..." />
      </div>
    );
  }

  if (!article) {
    return <div className="error-message">Không tìm thấy bài viết này.</div>;
  }

  return (
  <div className="article-container">
    <h1>{article.title}</h1>
    <p>{article.description}</p>
    <div className="content">
      {article.content.map((section, index) => (
        <div key={index}>
          <h2>{section.heading}</h2>
          <h3>{section.subheading}</h3>
          <p>{section.text}</p>
          <img src={section.image} alt={section.heading} className="section-image" />
        </div>
      ))}
    </div>
  </div>
);

};

export default TechnologyNewsInfo;
