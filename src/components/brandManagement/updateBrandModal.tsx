import React, { useState, useEffect } from 'react';
import { Modal, Form, Upload, Input, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import '@/src/cssfolder/UpdateBrandModal.css'; // Import file CSS

type FileType = any;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UpdateCategoryModalProps {
  isVisible: boolean;
  brandId: string | null;
  onClose: () => void;
  onSuccess: () => void;
}

const UpdateBrandModal: React.FC<UpdateCategoryModalProps> = ({ 
  isVisible, 
  brandId, 
  onClose, 
  onSuccess 
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (isVisible && brandId) {
      fetchBrandDetails();
    }
  }, [isVisible, brandId]);

  const fetchBrandDetails = async () => {
    try {
      const data = await axios.post('http://localhost:4000/api/get1Brand', { id: brandId });
      
      form.setFieldsValue({
        brandName: data.data.name,
        description: data.data.description,
      });

      if (data.data.imageUrl) {
        setFileList([
          {
            uid: '-1',
            name: 'image',
            status: 'done',
            url: data.data.imageUrl,
          },
        ]);
      }
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  const validateImageUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Chỉ được upload file định dạng JPG hoặc PNG!');
      return Upload.LIST_IGNORE;
    }
    return isJpgOrPng;
  };

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleFileChange = ({ file, fileList: newFileList }: any) => {
    if (file.status === 'done' || file.status === 'uploading') {
      setFileList(newFileList.slice(-1));
    } else if (file.status === 'removed') {
      setFileList(newFileList);
    }
  };

  const handleUpdateBrand = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('id', brandId || '');
      formData.append('brandName', values.brandName);
      
      if (values.description) {
        formData.append('description', values.description);
      }

      if (values.image && values.image.file) {
        formData.append('image', values.image.file.originFileObj);
      }

      await axios.put(`http://localhost:4000/api/updateBrand`, formData);
      
      message.success('Cập nhật danh mục thành công!');
      form.resetFields();
      setFileList([]);
      onSuccess();
      onClose();
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  const uploadButton = (
    <button className="upload-button" type="button">
      <PlusOutlined />
      <div>Upload</div>
    </button>
  );

  return (
    <>
      <Modal
        title="Chỉnh sửa thương hiệu"
        open={isVisible}
        onCancel={() => {
          onClose();
          form.resetFields();
          setFileList([]);
        }}
        footer={null}
      >
        <Form onFinish={handleUpdateBrand} layout="vertical" form={form}>
          <Form.Item
            label="Thêm ảnh"
            name="image"
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              beforeUpload={validateImageUpload}
              onPreview={handlePreview}
              onChange={handleFileChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Tên thương hiệu"
            name="brandName"
            rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button className="submit-button" type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={previewOpen}
        title="Xem trước hình ảnh"
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="preview" className="preview-image" src={previewImage} />
      </Modal>
    </>
  );
};

export default UpdateBrandModal;
