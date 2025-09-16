'use client';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Divider, Tag, Button, Spin, message, Empty } from 'antd';
import { TagOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const ProductDetail: React.FC<any> = ({ id }) => {
  const router = useRouter();
  const [mainImage, setMainImage] = useState('');
  const [productData, setProductData] = useState<any>(null);
  const [similarProducts, setSimilarProducts] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState<any>(null);
  const [selectedVersion, setSelectedVersion] = useState<string>('');
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/getProductById', { id });
        setProductData(response.data);
        setMainImage(response.data.image);
      } catch (error: any) {
        message.error(error.response?.data?.message)
      }
    };

    fetchProductData();
  }, [id]);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      if (!id) return;
      
      try {
        const response = await axios.get(`http://localhost:4000/api/getRecommend/${id}`);
        setSimilarProducts(response.data);
      } catch (error: any) {
        message.error(error.response?.data?.message || "Lỗi khi tải sản phẩm tương tự");
      }
    };

    fetchSimilarProducts();
  }, [id]);

  const addProductToCart = (buyNow: boolean = false) => {
    if (!selectedVersion || !selectedType) {
      message.warning("Vui lòng chọn phiên bản sản phẩm!");
      return;
    }

    try {
      let cartData: any = localStorage.getItem('cart');
      cartData = cartData ? JSON.parse(cartData) : [];

      const existingProductIndex = cartData.findIndex((item: any) =>
        item.id === productData.id && item.selectedVersion === selectedVersion
      );

      if (existingProductIndex !== -1) {
        cartData[existingProductIndex].quantity += 1;
      } else {
        cartData.push({
          ...productData,
          selectedVersion,
          price: Number(selectedType),
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cartData));
      message.success("Sản phẩm đã được thêm vào giỏ hàng");

      if (buyNow) {
        router.push('/shoppingCart');
      }
    } catch (error: any) {
      message.error("Lỗi trong quá trình thêm sản phẩm vào giỏ hàng");
    }
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  if (!productData) return <div><Spin /></div>;

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={24}>
        <Col span={14}>
          <Card
            cover={
              <img
                alt={productData.name}
                src={`http://localhost:4000/${productData.productImage}`}
                style={{ height: '500px', objectFit: 'contain' }}
              />
            }
          />
          <Row gutter={[8, 8]} style={{ marginTop: '16px' }}>
            {Object.keys(productData.imageUrl).map((key: any) => (
              <Col span={6} key={key}>
                <img
                  alt={productData.name}
                  src={`http://localhost:4000/${productData.imageUrl[key]}`}
                  style={{ width: '100%', objectFit: 'contain', cursor: 'pointer' }}
                  onClick={() => setMainImage(productData.imageUrl[key])}
                />
              </Col>
            ))}
          </Row>
          <br />
          <Card
            title="Cấu hình đặc điểm"
            style={{
              marginTop: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '10px',
                      backgroundColor: '#f0f0f0',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    Đặc điểm
                  </th>
                  <th
                    style={{
                      padding: '10px',
                      backgroundColor: '#f0f0f0',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    Thông tin
                  </th>
                </tr>
              </thead>
              <tbody>
                {productData.specifications.map((item: any, index: number) => (
                  <tr
                    key={item.title}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
                    }}
                  >
                    <td
                      style={{
                        padding: '10px',
                        borderBottom: '1px solid #ddd',
                      }}
                    >
                      {item.title}:
                    </td>
                    <td
                      style={{
                        padding: '10px',
                        borderBottom: '1px solid #ddd',
                      }}
                    >
                      {item.info}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <br />
          <Card title="Chính sách bảo hành & đổi trả" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div>Bảo hành 12 tháng tại chuỗi cửa hàng</div>
            <div>Đổi mới trong 15 ngày đầu tiên</div>
          </Card>
          <br />
          <Card title="Bài viết mô tả">
            {productData.description}
          </Card>
        </Col>

        <Col span={10}>
          <div style={{
            position: 'sticky',
            top: '20px',
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            maxHeight: '100vh',
            overflow: 'auto',
          }}>
            <div style={{ fontSize: '14px', backgroundColor: "#ff4d4f", padding: "20px", color: "white", fontWeight: "bold" }}>
              <TagOutlined /> {productData.tagName.toUpperCase()}
            </div>
            <div style={{ padding: "20px" }}>
              <Title level={3}>{productData.name}</Title>
              <Text type="secondary">MSP: {productData.productId}</Text>
              <Divider />
              <Title level={5}>Phiên bản ( Chọn phiên bản )</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag
                  key={`version-${item.version}-${index}`}
                  color={selectedVersion === item.version ? 'gold' : 'blue'}
                  style={{ fontSize: '16px', padding: '5px 10px', cursor: 'pointer' }}
                  onClick={() => {
                    setSelectedVersion(item.version);
                    setSelectedType(item.price);
                  }}
                >
                  {item.version}
                </Tag>
              ))}
              <br />
              <Title level={5}>Màu</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag key={`color-${item.color}-${index}`} color='lime' style={{ fontSize: '16px', padding: '5px 10px' }}>
                  {item.color}
                </Tag>
              ))}
              <br />
              <Title level={5}>Loại hàng</Title>
              {productData.variants.map((item: any, index: number) => (
                <Tag key={`type-${item.type}-${index}`} color='volcano' style={{ fontSize: '16px', padding: '5px 10px' }}>
                  {item.type}
                </Tag>
              ))}
              <Divider />
              {selectedType ? (
                <Title level={2} style={{ color: 'red' }}>
                  {Number(selectedType).toLocaleString() + 'đ'}
                </Title>
              ) : (
                <Text type="secondary">
                  Vui lòng chọn phiên bản để xem giá!
                </Text>
              )}
              <Divider />
              <Row gutter={[16, 0]}>
                <Col span={12}>
                  <Button
                    style={{ width: "100%", height: "40px", backgroundColor: "#69c0ff", color: "white", fontWeight: "bold" }}
                    onClick={() => addProductToCart(false)}
                  >
                    Thêm vào giỏ
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    style={{ width: "100%", height: "40px", backgroundColor: "#ff4d4f", fontWeight: "bold", color: "white" }}
                    onClick={() => addProductToCart(true)}
                  >
                    Mua ngay
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: '20px' }}>
        <div style={{ fontSize: '20px', fontWeight: 500, marginBottom: '20px' }}>
          Sản phẩm tương tự
        </div>
        
        {similarProducts.length > 0 ? (
          <>
            <Row gutter={[16, 16]} style={{ width: '1200px', marginBottom: '3rem' }}>
              {similarProducts.slice(0, visibleItems).map((product: any) => (
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

            {visibleItems < similarProducts.length && (
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
          </>
        ) : (
          <Card style={{ marginBottom: '3rem' }}>
            <Empty
              description={
                <Text style={{ fontSize: '16px', color: '#8c8c8c' }}>
                  Không có sản phẩm tương tự
                </Text>
              }
            />
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;