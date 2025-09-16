"use client";

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, Row, Col, InputNumber, Select, message, Card, Divider } from 'antd';
import { UploadOutlined, PlusOutlined, MinusCircleOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import FormDataBuilder from '../../utils/formData';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;

const EditProductManagement: React.FC<any> = ({ id }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [mainImageFileList, setMainImageFileList] = useState<any[]>([]);
  const [descImageFileList, setDescImageFileList] = useState<any[]>([]);

  const fetchData = async () => {
    if (id) {
      try {
        const Product: any = await axios.post('http://localhost:4000/api/getProductById', { id });

        console.log("Product", Product);
        const categoryData = Product.data.categories.map((item: any) => item.id);
        console.log("categoryData", categoryData);

        const value = {
          productName: Product.data.name,
          productID: Product.data.productId,
          category: categoryData,
          brand: Product.data.brandId,
          variants: Product.data.variants?.map((variant: any) => ({
            color: variant.color,
            version: variant.version,
            type: variant.type,
            price: variant.price,
            quantity: variant.quantity
          })) || [{ color: '', version: '', type: '', price: 0, quantity: 0 }],
          description: Product.data.description,
          specifications: Product.data.specifications.map((spec: any) => ({
            title: spec.title,
            info: spec.info
          }))
        };

        form.setFieldsValue(value);

        // Xử lý ảnh chính
        if (Product.data.productImage) {
          const mainImage = {
            uid: '-1',
            name: 'main-image.png',
            status: 'done',
            url: `http://localhost:4000/${Product.data.productImage}`,
          };
          setMainImageFileList([mainImage]);
          form.setFieldsValue({ productImage: [mainImage] });
        }

        // Xử lý ảnh mô tả
        const imgUrl = Product.data.imageUrl;
        if (imgUrl) {
          const imageList = Object.entries(imgUrl).map(([key, value]) => ({
            uid: `-${key}`,
            name: `-${key}.png`,
            status: 'done',
            url: `http://localhost:4000/${value}`,
          }));
          setDescImageFileList(imageList);
          form.setFieldsValue({ descriptionImages: imageList });
        }

      } catch (error) {
        console.error('Error fetching product:', error);
        message.error('Không thể tải thông tin sản phẩm');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleFinish = async () => {
    try {
      const data = form.getFieldsValue();
      data.id = id;

      let formData = new FormData();
      const formDataBuilder = new FormDataBuilder();
      formDataBuilder.buildFormData(formData, data);

      await axios.put('http://localhost:4000/api/updateProduct', formData);
      message.success("Cập nhật sản phẩm thành công");
      router.push('/productManagement');
    } catch (err: any) {
      console.error(err);
      message.error(err.response?.data?.message || 'Có lỗi xảy ra khi cập nhật sản phẩm');
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/allCategory');
      const categoryData = data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
      setCategories(categoryData);
    } catch (err: any) {
      message.error(err.response?.data?.message || "Không thể tải danh sách thể loại");
    }
  };

  const getAllBrand = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/allBrand');
      const brandData = data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
      setBrands(brandData);
    } catch (err: any) {
      message.error(err.response?.data?.message || "Không thể tải danh sách thương hiệu");
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllBrand();
  }, []);

  // Component con
  const BasicProductInfo = () => (
    <Card title="Thông tin cơ bản" bordered={false}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="productName"
            label="Tên sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="productID"
            label="Mã sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập mã sản phẩm!' }]}
          >
            <Input placeholder="Nhập mã sản phẩm" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="category"
            label="Thể loại"
            rules={[{ required: true, message: 'Vui lòng chọn thể loại!' }]}
          >
            <Select
              placeholder="Chọn thể loại"
              options={categories}
              mode="multiple"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="brand"
            label="Thương hiệu"
            rules={[{ required: true, message: 'Vui lòng chọn thương hiệu!' }]}
          >
            <Select placeholder="Chọn thương hiệu" options={brands} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="tagName"
            label="Tag sản phẩm"
            rules={[{ required: true, message: 'Vui lòng chọn tag sản phẩm!' }]}
          >
            <Input placeholder="Nhập tag snar phẩm" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );

  const ProductImages = () => (
    <Card title="Hình ảnh sản phẩm" bordered={false}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="productImage"
            label="Ảnh chính sản phẩm"
            valuePropName="fileList"
            getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: 'Vui lòng tải lên ảnh chính sản phẩm!' }]}
          >
            <Upload
              name="mainImage"
              listType="picture-card"
              fileList={mainImageFileList}
              onChange={({ fileList }) => setMainImageFileList(fileList)}
              beforeUpload={() => false}
              maxCount={1}
            >
              {mainImageFileList.length >= 1 ? null : (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Tải ảnh chính</div>
                </div>
              )}
            </Upload>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="descriptionImages"
            label="Ảnh mô tả sản phẩm"
            valuePropName="fileList"
            getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              name="descriptionImages"
              listType="picture-card"
              fileList={descImageFileList}
              onChange={({ fileList }) => setDescImageFileList(fileList)}
              beforeUpload={() => false}
              multiple
            >
              {descImageFileList.length >= 4 ? null : (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Tải ảnh mô tả</div>
                </div>
              )}
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );

  const ProductVariants = () => (
    <Card title="Phiên bản sản phẩm" bordered={false}>
      <Form.List name="variants">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Card
                key={key}
                type="inner"
                title={`Phiên bản ${index + 1}`}
                extra={
                  fields.length > 1 && (
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      style={{ color: '#ff4d4f', fontSize: '18px' }}
                    />
                  )
                }
                style={{ marginBottom: 16 }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'color']}
                      label="Màu sắc"
                      rules={[{ required: true, message: 'Vui lòng nhập màu sắc!' }]}
                    >
                      <Input placeholder="Nhập màu sắc" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'version']}
                      label="Phiên bản"
                      rules={[{ required: true, message: 'Vui lòng nhập phiên bản!' }]}
                    >
                      <Input placeholder="Nhập phiên bản" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, 'type']}
                      label="Loại"
                      rules={[{ required: true, message: 'Vui lòng nhập loại!' }]}
                    >
                      <Select placeholder="Nhập loại"
                        options={[
                          { value: 'Chính hãng ', label: 'Chính hãng' },
                          { value: 'Xách tay', label: 'Xách tay' },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'price']}
                      label="Giá"
                      rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}
                    >
                      <InputNumber
                        style={{ width: '100%' }}
                        min={0}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as any}
                        addonAfter="VNĐ"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, 'quantity']}
                      label="Số lượng"
                      rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
                    >
                      <InputNumber style={{ width: '100%' }} min={0} />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
              style={{ marginTop: 16 }}
            >
              Thêm phiên bản sản phẩm
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );

  const ProductSpecifications = () => (
    <Card title="Cấu hình đặc điểm" bordered={false}>
      <Form.List name="specifications">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Row key={key} gutter={16} align="middle" style={{ marginBottom: 16 }}>
                <Col span={10}>
                  <Form.Item
                    {...restField}
                    name={[name, 'title']}
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề cấu hình!' }]}
                  >
                    <Input placeholder={`Tiêu đề cấu hình ${index + 1}`} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    {...restField}
                    name={[name, 'info']}
                    rules={[{ required: true, message: 'Vui lòng nhập thông tin cấu hình!' }]}
                  >
                    <Input placeholder={`Thông tin cấu hình ${index + 1}`} />
                  </Form.Item>
                </Col>
                <Col span={2}>
                  {fields.length > 1 && (
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      style={{ color: '#ff4d4f', fontSize: '18px' }}
                    />
                  )}
                </Col>
              </Row>
            ))}
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Thêm cấu hình đặc điểm
            </Button>
          </>
        )}
      </Form.List>
    </Card>
  );

  const ProductDescription = () => (
    <Card title="Mô tả sản phẩm" bordered={false}>
      <Form.Item name="description" rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}>
        <TextArea rows={6} placeholder="Nhập mô tả chi tiết về sản phẩm..." />
      </Form.Item>
    </Card>
  );

  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Card
        title="Cập nhật thông tin sản phẩm "
        extra={
          <Button
            type="primary"
            onClick={handleFinish}
            icon={<EditOutlined />}
            style={{ backgroundColor: '#fa541c' }}
          >
            Cập nhật sản phẩm
          </Button>
        }
        bordered={false}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            specifications: [{ title: '', info: '' }],
            variants: [{ color: '', version: '', type: '', price: 0, quantity: 0 }]
          }}
        >
          <BasicProductInfo />
          <Divider />
          <ProductImages />
          <Divider />
          <ProductVariants />
          <Divider />
          <ProductSpecifications />
          <Divider />
          <ProductDescription />
        </Form>
      </Card>
    </div>
  );
};

export default EditProductManagement;