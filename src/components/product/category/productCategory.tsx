'use client';
import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Row, Typography, Spin, Button, Tag, Carousel, message, ConfigProvider, Divider } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Title, Paragraph, Text } = Typography;



interface LaptopPageProps {
  id: number;
}

const ProductCategory: React.FC<LaptopPageProps> = ({ id }) => {
  const carouselRef = useRef<any>(null);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<any[]>([]);
  const [category, setCategory] = useState<any>({});
  const [Brand, setBrand] = useState<any>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [originalProductData, setOriginalProductData] = useState<any[]>([]);
  // Thêm state để theo dõi kích thước màn hình
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );


  const router = useRouter();

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

  const fectchProdutByCategoryData = async () => {
    try {
      const api = await axios.get(`http://localhost:4000/api/getProductByCategory/${id}`);
      setProductData(api.data);
      setOriginalProductData(api.data); // Lưu dữ liệu gốc
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  const handleBrandClick = (brandId: number) => {
    const filteredProducts = originalProductData.filter(product => product.brand.id === brandId);
    setProductData(filteredProducts); // Chỉ thay đổi dữ liệu hiển thị
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const getAllBrand = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allBrand')
      console.log('count:', data)
      setBrand(data.data)
    } catch (err: any) {
      message.error(err.response.data.message);
    }
  }

  useEffect(() => {
    getAllBrand();
  }, [])

  const fetchCategory = async () => {
    try {
      const api = await axios.post(`http://localhost:4000/api/get1Category`, { id: id });
      setCategory(api.data);
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu sản phẩm");
    }
  };

  useEffect(() => {
    fectchProdutByCategoryData();
    fetchCategory();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColumnCount = () => {
    if (screenWidth < 576) return 24; // 1 cột
    if (screenWidth < 768) return 12; // 2 cột
    if (screenWidth < 992) return 8;  // 3 cột
    return 6;                         // 4 cột mặc định
  };

  const getContainerPadding = () => {
    if (screenWidth < 576) return "10px";
    if (screenWidth < 992) return "15px";
    return "20px";
  };



  return (
    <div style={{ 
      padding: getContainerPadding(),
      maxWidth: "100%",
      margin: "0 auto"
    }}>
      {/* Header with carousel */}
      <div style={{ marginBottom: "20px" }}>
        <Card style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          marginBottom: "20px",
          width: "100%",
          overflow: "hidden"
        }}>
          <Title level={2} style={{
            fontSize: screenWidth < 576 ? "1.5rem" : "2rem",
            marginBottom: "1rem"
          }}>{category.name}</Title>
          
          {loading ? (
            <Spin size="large" />
          ) : (
            <Paragraph style={{ 
              fontSize: screenWidth < 576 ? "14px" : "16px",
              marginBottom: "20px" 
            }}>
              {category.description}
            </Paragraph>
          )}
          
          <Row>
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              marginTop: '1rem',
              overflow: 'hidden'
            }}>
              <Row style={{
                paddingTop: '10px',
                paddingBottom: '10px',
                display: 'flex',
                height: screenWidth < 576 ? '60px' : '80px',
                alignItems: 'center',
                margin: '0 auto',
              }}>
                <Col span={screenWidth < 576 ? 20 : 22} style={{ position: 'relative' }}>
                  <Carousel
                    ref={carouselRef}
                    dots={false}
                    slidesToShow={Math.min(7, Math.floor(screenWidth / 150))}
                    slidesToScroll={Math.min(6, Math.floor(screenWidth / 150))}
                    infinite={false}
                    responsive={[
                      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 3 } },
                      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } },
                      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                    ]}
                  >
                    {Brand.map((Brand: any, index: any) => (
                      <div key={index} style={{
                        padding: screenWidth < 576 ? '5px' : '10px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                        <Button
                          color="default"
                          variant="outlined"
                          onClick={() => handleBrandClick(Brand.id)}
                          style={{
                            fontWeight: 600,
                            fontSize: screenWidth < 576 ? '12px' : '14px',
                            borderRadius: '20px',
                            height: screenWidth < 576 ? 30 : 40,
                            width: '100%',
                            maxWidth: screenWidth < 576 ? '120px' : '150px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <img
                            src={`http://localhost:4000/${Brand.imageUrl}`}
                            style={{ 
                              width: screenWidth < 576 ? '35px' : '45px',
                              marginRight: '5px'
                            }}
                            alt={Brand.name}
                          />
                          {screenWidth > 576 && Brand.name}
                        </Button>
                      </div>
                    ))}
                  </Carousel>
                </Col>
                
                <Col span={screenWidth < 576 ? 4 : 2} style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  gap: screenWidth < 576 ? '5px' : '15px'
                }}>
                  <Button
                    type='text'
                    shape="circle"
                    onClick={handlePrev}
                    style={{
                      padding: screenWidth < 576 ? '4px' : '8px',
                      minWidth: screenWidth < 576 ? '24px' : '32px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: 'transparent'
                    }}
                  >
                    <LeftOutlined style={{ fontSize: screenWidth < 576 ? '12px' : '14px' }} />
                  </Button>
                  <Button
                    type='text'
                    shape="circle"
                    onClick={handleNext}
                    style={{
                      padding: screenWidth < 576 ? '4px' : '8px',
                      minWidth: screenWidth < 576 ? '24px' : '32px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: 'transparent'
                    }}
                  >
                    <RightOutlined style={{ fontSize: screenWidth < 576 ? '12px' : '14px' }} />
                  </Button>
                </Col>
              </Row>
            </div>
          </Row>
        </Card>
      </div>

      {/* Product list */}
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={[
            screenWidth < 576 ? 8 : 16, 
            screenWidth < 576 ? 8 : 16
          ]} style={{ 
            width: '100%', 
            marginBottom: '3rem',
            padding: '0 10px'
          }}>
            {productData.slice(0, visibleItems).map((product) => (
              <Col 
                key={product.id} 
                xs={24} 
                sm={12} 
                md={8} 
                lg={6}
                style={{ marginBottom: screenWidth < 576 ? '10px' : '20px' }}
              >
                <Card
                  hoverable
                  cover={
                    <div style={{ 
                      height: screenWidth < 576 ? '200px' : '250px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        alt={product.name} 
                        src={`http://localhost:4000/${product.productImage}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  }
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
                    title={
                      <div style={{ 
                        fontSize: screenWidth < 576 ? '14px' : '16px',
                        fontWeight: 'bold',
                        marginBottom: '8px'
                      }}>
                        {product.name}
                      </div>
                    }
                    description={
                      <>
                        <p style={{ 
                          fontSize: screenWidth < 576 ? '14px' : '16px', 
                          fontWeight: 'bold' 
                        }}>
                          <span style={{ color: 'black' }}>Giá:</span>{' '}
                          <span style={{ color: '#fe3464' }}>
                            {Number(product.variants[0]?.price || 0).toLocaleString()} VNĐ
                          </span>
                        </p>
                        <div>
                          <Text type="secondary" style={{ 
                            fontSize: screenWidth < 576 ? '12px' : '14px',
                            fontWeight: 'normal',
                            color: 'black'
                          }}>
                            Màu: <Tag color="cyan">{product.variants[0]?.color || 'Không có màu'}</Tag>
                          </Text>
                        </div>
                        <Divider style={{ margin: '10px 0' }} />
                        {product.specifications && product.specifications.length > 0 ? (
                          product.specifications.slice(0, screenWidth < 576 ? 2 : 4).map((spec: { title: string; info: string }, index: number) => (
                            <div key={index}>
                              <Text type="secondary" style={{ 
                                fontSize: screenWidth < 576 ? '12px' : '14px',
                                fontWeight: 'normal',
                                color: 'black'
                              }}>
                                <strong>{spec.title}</strong>: {spec.info || 'Không có thông tin'}
                              </Text>
                            </div>
                          ))
                        ) : (
                          <div>
                            <Text type="secondary" style={{ 
                              fontSize: screenWidth < 576 ? '12px' : '14px',
                              fontWeight: 'normal',
                              color: 'black'
                            }}>
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

          {visibleItems < productData.length && (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '20px', 
              marginBottom: '20px' 
            }}>
              <Button
                type="default"
                onClick={handleLoadMore}
                style={{
                  width: screenWidth < 576 ? '200px' : '400px',
                  backgroundColor: 'white',
                  color: '#1890ff',
                  borderColor: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: screenWidth < 576 ? '14px' : '16px',
                  padding: screenWidth < 576 ? '4px 15px' : '6px 20px',
                }}
              >
                Xem thêm
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCategory;