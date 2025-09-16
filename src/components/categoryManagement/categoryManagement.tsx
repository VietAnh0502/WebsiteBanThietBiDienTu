'use client';
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, message, TableProps } from 'antd';
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import CreateCategoryModal from './createCategoryModal';
import UpdateCategoryModal from './updateCategoryModal';

// Import CSS file
import '@/src/cssfolder/CategoryManagement.css';
import { response } from 'express';

const CategoryManagement = () => {
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [isWarningModalVisible, setIsWarningModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [currentEditCategoryId, setCurrentEditCategoryId] = useState<string | null>(null);

  const rowSelection: TableProps<any>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      setSelectedUsers(selectedRowKeys);
    },
  };

  const columns: any = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_: any, record: any) => (
        <div
          onClick={() => handleEditCategory(record.id)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Tên thể loại',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
  ];

  const fetchData = async () => {
    try {
      const data = await axios.get('http://localhost:4000/api/allCategory');
      setCategoryData(data?.data);
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (selectedUsers.length === 0) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Vui lòng chọn ít nhất một danh mục để xóa.',
      });
      return;
    }

    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedUsers.length} danh mục đã chọn?`,
      onOk: async () => {
        try {
          const deleteUser = await axios.delete('http://localhost:4000/api/deleteCategory', {
            data: { ids: selectedUsers },
          });

          message.success('Xóa danh mục thành công!');
          fetchData();
          setSelectedUsers([]);

          Modal.success({
            title: 'Thành công',
            content: 'Đã xóa danh mục thành công.',
          });
        } catch (error: any) {
          console.error('Error deleting users:', error);
          Modal.error({
            title: 'Lỗi',
            content: error.response.data.message,
          });
        }
      },
    });
  };

  const handleEditCategory = (categoryId: string) => {
    setCurrentEditCategoryId(categoryId);
    setIsEditModalVisible(true);
  };

  return (
    <>
      <div className="button-container">
        <Button
          type="primary"
          onClick={() => setIsCreateModalVisible(true)}
          className="create-button"
        >
          <PlusOutlined />
          Tạo mới
        </Button>

        <Button
          type="primary"
          onClick={handleDelete}
          className="delete-button"
        >
          <DeleteOutlined />
          Xóa
        </Button>
      </div>

      <Table<any>
        columns={columns}
        dataSource={categoryData}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowKey="id"
      />

      {/* Modal cảnh báo */}
      <Modal
        title={
          <span>
            <ExclamationCircleOutlined style={{ color: '#faad14', marginRight: '8px' }} />
            Cảnh báo
          </span>
        }
        open={isWarningModalVisible}
        onOk={() => setIsWarningModalVisible(false)}
        onCancel={() => setIsWarningModalVisible(false)}
        okText="Đồng ý"
        cancelText="Hủy bỏ"
      >
        <p>Vui lòng chọn ít nhất một danh mục để xóa.</p>
      </Modal>

      {/* Modal tạo mới danh mục */}
      <CreateCategoryModal
        isVisible={isCreateModalVisible}
        onClose={() => setIsCreateModalVisible(false)}
        onSuccess={fetchData}
      />

      {/* Modal chỉnh sửa danh mục */}
      <UpdateCategoryModal
        isVisible={isEditModalVisible}
        categoryId={currentEditCategoryId}
        onClose={() => setIsEditModalVisible(false)}
        onSuccess={fetchData}
      />
    </>
  );
};

export default CategoryManagement;
