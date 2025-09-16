import React, { useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Typography, Button, Space, Card, ConfigProvider, Carousel, message, Tag, Divider } from "antd";
import {
  CheckCircleFilled,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import { Color } from "antd/es/color-picker";
import { CarouselRef } from 'antd/es/carousel';
import axios from "axios";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

const { Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

interface Laptop {
  id: number;
  name: string;
  price: string;
  category: string;
  brand: string;
  imageUrl: string;
  tags: string[];
}


const App: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [visibleItems, setVisibleItems] = useState(8);

  const [category, setCategory] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const pathname = usePathname(); // Thêm hook này
  console.log('products:', products)

  const router = useRouter()

  const carouselContent = [
    {
      imgSrc: "/logo/frame-961182-optimized-thinkpro.webp",
      alt: "Slide 1",
      style: { backgroundColor: 'black', height: '300px', borderRadius: '10px' },
    },
    {
      imgSrc: "/logo/340991422_738592324410569_8236240325667052744_n.jpg",
      alt: "Slide 2",
      style: { backgroundColor: 'gray', height: '300px', borderRadius: '10px' },
    },
    {
      imgSrc: "/logo/frame-961219-2-thinkpro.webp",
      alt: "Slide 3",
      style: { backgroundColor: 'blue', height: '300px', borderRadius: '10px' },
    },
  ];

  const boxes = [
    { id: 1, text: 'Trải nghiệm tận tay', img: '/icon/usp-1.png', Color: '#faf4ff' },
    { id: 2, text: 'Tư vấn viên tận tâm', img: '/icon/usp-2.png', Color: '#FEEECC' },
    { id: 3, text: 'Trung tâm bảo vệ khách hàng', img: '/icon/usp-3.png', Color: '#CBE7FE' },
    { id: 4, text: 'Bảo hành dài lâu', img: '/icon/usp-4.png', Color: '#FBCFD8' },
  ];

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categories.some((cat: { id: number }) => cat.id === selectedCategory))
    : products;


  // Hàm xử lý khi nhấn nút mũi tên trái
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();  // Di chuyển về slide trước
    }
  };

  // Hàm xử lý khi nhấn nút mũi tên phải
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();  // Di chuyển đến slide tiếp theo
    }
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  const getAllCategory = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allCategory')
      console.log('count:', data)
      setCategory(data.data)
    } catch (err: any) {
      message.error(err.response.data.message);
    }
  }

  const getAllProduct = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getAllProduct');
      setProducts(response.data);
    } catch (err: any) {
      message.error(err.response?.data?.message || 'Lỗi khi tải sản phẩm');
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllProduct();
  }, []);

  return (
    <>
      <div style={{ justifySelf: 'center', width: '1200px' }}>
        <div style={{ margin: '30px 0' }}>
          <Carousel autoplay>
            {carouselContent.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  style={{
                    width: '100%',
                    height: slide.style.height,
                    borderRadius: slide.style.borderRadius,
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <Row style={{ fontWeight: '600', fontSize: '28px', lineHeight: '40px' }}>Danh mục nổi bật</Row>
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '2.25rem', paddingRight: '2.25rem', borderRadius: '10px', backgroundColor: 'white' }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
              <Row gutter={[16, 16]} justify="center">
                {category.map((category: any, index: any) => (
                  <Col key={category.id} xs={6} sm={6} md={3}>
                    <ConfigProvider
                      theme={{
                        components: {
                          Button: {
                            colorBorder: 'transparent',
                            defaultHoverBorderColor: 'transparent',
                            defaultHoverColor: '#80c4e9',
                            defaultShadow: '0',
                            defaultHoverBg: '#80c4e9'
                          }
                        }
                      }}>
                      <Button
                        type="text"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "160px",
                          width: "100%",
                          padding: "10px",
                          fontWeight: 600,
                          fontSize: '14px'
                        }}
                        onClick={() => { router.push(`/product/category/${category.id}`) }}
                      >
                        <img
                          src={category.imageUrl}
                          alt={category.name}
                          style={{ width: "103px", height: "103px", marginBottom: "8px" }}
                        />
                        <span>{category.name}</span>
                      </Button>
                    </ConfigProvider>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
        <div style={{ width: '1200px', height: '196px', marginTop: '3rem' }}>
          <Row>
            <span style={{ fontSize: 28, fontWeight: 600 }}>Chọn Think?
              <span style={{ fontSize: 24, fontWeight: 600, marginLeft: '1rem', color: 'rgb(107 112 117)' }}>Chọn sự thoải mái, an tâm vì có sự tận tâm.</span></span>
          </Row>
          <Row
            gutter={[16, 16]} // Khoảng cách giữa các cột
            style={{ width: '1200px', marginTop: '1.5rem', alignContent: '' }}
          >
            {boxes.map((box) => (
              <Col key={box.id} span={5}> {/* Mỗi hộp chiếm 1/4 hàng (24/4 = 6) */}
                <div
                  style={{
                    padding: '8px',
                    backgroundColor: box.Color,
                    borderRadius: '4px',
                    fontWeight: 600,
                    lineHeight: '150%',
                    position: 'relative',
                    width: '100%', // Để phù hợp với kích thước cột
                    height: '132px', // Cố định chiều cao như hộp gốc
                  }}
                >
                  <p style={{ fontSize: '14px', width: '85px' }}>{box.text}</p>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                    }}
                  >
                    <img
                      src={box.img}
                      alt=""
                      style={{
                        width: 80,
                      }}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col span={4}>
              <div
                style={{
                  padding: '8px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  fontWeight: 600,
                  lineHeight: '150%',
                  position: 'relative',
                  width: '200px', // Để phù hợp với kích thước cột
                  height: '132px', // Cố định chiều cao như hộp gốc
                  display: 'flex', // Sử dụng flexbox
                  flexDirection: 'column', // Sắp xếp theo cột
                }}
              >
                <CheckCircleFilled style={{ marginTop: '10px', fontSize: '23px', color: 'rgb(59 179 70)' }} />
                <span style={{ fontSize: '12px', fontWeight: 400, marginTop: '8px' }}>VietAnh. Made with love</span> {/* Thêm khoảng cách giữa icon và text */}
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ width: '1200px', height: '196px', marginTop: '3rem' }}>
          <Row>
            <span style={{ fontSize: 28, fontWeight: 600 }}></span>
            <Row>
              <span style={{ fontSize: 28, fontWeight: 600 }}>Gợi ý cho bạn</span>
            </Row>
            <Row>
              <div style={{ position: 'relative', width: '100%', marginTop: '1rem' }}>
                <Row
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    display: 'flex',
                    height: '80px',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                  }}
                >
                  <Col span={22} style={{ position: 'relative' }}>
                    <Carousel
                      ref={carouselRef}
                      dots={false}
                      slidesToShow={7}
                      slidesToScroll={6}
                      infinite={false}
                      responsive={[
                        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
                        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                      ]}
                    >
                      {category.map((category: any, index: any) => (
                        <div
                          key={index}
                          style={{
                            padding: '10px',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <ConfigProvider
                            theme={{
                              components: {
                                Button: {
                                  colorBorder: 'transparent',
                                  defaultHoverBorderColor: 'transparent',
                                  defaultHoverColor: 'black',
                                  defaultShadow: '0',
                                  defaultHoverBg: '#f5f5f5',
                                },
                              },
                            }}
                          >
                            <Button
                              onClick={() => handleCategoryClick(category.id)}
                              style={{
                                fontWeight: 400,
                                fontSize: '12px',
                                border: 'transparent',
                                borderRadius: '8px',
                                height: 40,
                                width: '100%',
                                maxWidth: '150px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {category.name}
                            </Button>

                          </ConfigProvider>
                        </div>
                      ))}
                    </Carousel>
                  </Col>
                  <Col span={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      type='text'
                      shape="circle"
                      onClick={handlePrev}  // Gọi hàm handlePrev
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        borderColor: 'transparent',
                        border: 'transparent'
                      }}
                    >
                      <LeftOutlined />
                    </Button>
                    <Button
                      type='text'
                      shape="circle"
                      onClick={handleNext}  // Gọi hàm handleNext
                      style={{
                        marginLeft: '15px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        borderColor: 'transparent',
                        border: 'transparent'
                      }}
                    >
                      <RightOutlined />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Row>
        </div>
        <Row gutter={[16, 16]} style={{ width: '1200px' }}>
          {filteredProducts.slice(0, visibleItems).map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={product.name} src={`http://localhost:4000/${product.productImage}`} />}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                onClick={() => router.push(`/product/detail/${product.id}`)}
              >
                <Card.Meta
                  title={product.name}
                  description={
                    <>
                      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        <span style={{ color: 'black' }}>Giá:</span>{' '}
                        <span style={{ color: '#fe3464' }}>
                          {Number(product.variants[0]?.price || 0).toLocaleString()} VNĐ
                        </span>
                      </p>
                      <div>
                        <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
                          Màu: <Tag color="cyan">{product.variants[0]?.color || 'Không có màu'}</Tag>
                        </Text>
                      </div>
                      <Divider style={{ margin: '10px 0' }} />
                      {product.specifications && product.specifications.length > 0 ? (
                        product.specifications.slice(0, 4).map((spec: { title: string; info: string }, index: number) => (
                          <div key={index}>
                            <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
                              <strong>{spec.title}</strong>: {spec.info || 'Không có thông tin'}
                            </Text>
                          </div>
                        ))
                      ) : (
                        <div>
                          <Text type="secondary" style={{ fontSize: '14px', fontWeight: 'normal', color: 'black' }}>
                            Không có thông số kỹ thuật.
                          </Text>
                        </div>
                      )}
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {visibleItems < products.length && (
          <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Button
              type="default"
              onClick={handleLoadMore}
              style={{
                width: '400px',
                backgroundColor: 'white',
                color: '#1890ff',
                borderColor: '#ffffff',
                fontWeight: 'bold',
              }}
            >
              Xem thêm
            </Button>
          </div>
        )}
      </div>
    </>

  );
};



export default App;
