import React, { useState, useEffect } from 'react';
import { Modal, Form, Upload, Input, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import '@/src/cssfolder/UpdateCategoryModal.css'; // Import CSS file

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
  categoryId: string | null;
  onClose: () => void;
  onSuccess: () => void;
}

const UpdateCategoryModal: React.FC<UpdateCategoryModalProps> = ({ 
  isVisible, 
  categoryId, 
  onClose, 
  onSuccess 
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (isVisible && categoryId) {
      fetchCategoryDetails();
    }
  }, [isVisible, categoryId]);

  const fetchCategoryDetails = async () => {
    try {
      const data = await axios.post('http://localhost:4000/api/get1Category', { id: categoryId });
      
      form.setFieldsValue({
        categoryName: data.data.name,
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
    // Nếu là ảnh mới (status là 'done'), chỉ giữ lại ảnh cuối cùng được tải lên
    if (file.status === 'done' || file.status === 'uploading') {
      setFileList(newFileList.slice(-1));
    }
    // Nếu ảnh bị xóa, cập nhật danh sách
    else if (file.status === 'removed') {
      setFileList(newFileList);
    }
  };

  const handleUpdateCategory = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append('id', categoryId || '');
      formData.append('categoryName', values.categoryName);
      
      if (values.description) {
        formData.append('description', values.description);
      }

      if (values.image && values.image.file) {
        formData.append('image', values.image.file.originFileObj);
      }

      await axios.put(`http://localhost:4000/api/updateCategory`, formData);
      
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
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Modal
        title="Chỉnh sửa thể loại"
        open={isVisible}
        onCancel={() => {
          onClose();
          form.resetFields();
          setFileList([]);
        }}
        footer={null}
      >
        <Form onFinish={handleUpdateCategory} layout="vertical" form={form}>
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
            <Button type="primary" htmlType="submit" className="modal-footer-button">
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
        <img alt="preview" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UpdateCategoryModal;
