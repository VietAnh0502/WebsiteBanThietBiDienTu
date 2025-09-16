import React, { useState } from 'react';
import { Modal, Form, Upload, Input, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import '@/src/cssfolder/CreateCategoryModal.css'; // Import file CSS

type FileType = any;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface CreateCategoryModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({ 
  isVisible, 
  onClose, 
  onSuccess 
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

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

  const handleFileChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const handleCreateCategory = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('categoryName', values.categoryName);
      
      if (values.description) {
        formData.append('description', values.description);
      }

      if (values.image && values.image.file) {
        formData.append('image', values.image.file.originFileObj);
      }

      await axios.post('http://localhost:4000/api/createCategory', formData);
      
      message.success('Tạo mới danh mục thành công!');
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
      <div className="upload-button-text">Upload</div>
    </button>
  );

  return (
    <>
      <Modal
        title="Tạo mới thể loại"
        open={isVisible}
        onCancel={() => {
          onClose();
          form.resetFields();
          setFileList([]);
        }}
        footer={null}
      >
        <Form onFinish={handleCreateCategory} layout="vertical" form={form}>
          <Form.Item
            label="Thêm ảnh"
            name="image"
            rules={[{ required: true, message: 'Vui lòng thêm ảnh!' }]}
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
            label="Tên thể loại"
            name="categoryName"
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
            <Button className="full-width-button" type="primary" htmlType="submit">
              Tạo mới
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
        <img className="upload-image" alt="preview" src={previewImage} />
      </Modal>
    </>
  );
};

export default CreateCategoryModal;
