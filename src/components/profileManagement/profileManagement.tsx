// ProfileManagement.tsx
"use client";

import React, { useState, useEffect } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CloudUploadOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { Table, Button, Modal, Tag } from "antd";
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from '@/src/cssfolder/ProfileManagement.module.css';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export interface DataType {
  id: number;
  name: string;
  email: string;
  verified: boolean;
  password?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  provider?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: string;
  nationality?: string;
  hometown?: string;
  img?: string;
  gender?: string;
  CCCD?: string;
}

const ProfileManagement = () => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [userData, setUserData] = useState<DataType[]>([]);
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  console.log(selectedUsers);

  const router = useRouter();

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authUser: any = await axios.get('http://localhost:4000/api/allUser');
        console.log(authUser.data.data.users);

        const newUserData: any[] = authUser.data.data.users;

        setUserData(newUserData);

      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = () => {
    if (selectedUsers.length === 0) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Vui lòng chọn ít nhất một người dùng để xóa.',
      });
      return;
    }

    Modal.confirm({
      title: 'Xác nhận xóa',
      content: `Bạn có chắc chắn muốn xóa ${selectedUsers.length} người dùng đã chọn?`,
      onOk: async () => {
        try {
          const deleteUser = await axios.delete('http://localhost:4000/api/deleteUser', {
            data: { ids: selectedUsers },
          });

          setUserData(prevData => prevData.filter(user => !selectedUsers.includes(user.id)));
          setSelectedUsers([]);

          Modal.success({
            title: 'Thành công',
            content: 'Đã xóa người dùng thành công.',
          });
        } catch (error) {
          console.error('Error deleting users:', error);
          Modal.error({
            title: 'Lỗi',
            content: 'Có lỗi xảy ra khi xóa người dùng. Vui lòng thử lại.',
          });
        }
      },
    });
  };

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedUsers(selectedRowKeys);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const colors = [
    'magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'
  ];
  const colorMap: { [key: string]: string } = {};

  const getColor = (tag: string) => {
    if (!colorMap[tag]) {
      const colorIndex = Object.keys(colorMap).length % colors.length;
      colorMap[tag] = colors[colorIndex];
    }
    return colorMap[tag];
  };

  const renderTags = (tags: string) => {
    const tagArray = tags.split(',').map(tag => tag.trim());
    return (
      <span>
        {tagArray.map((tag) => (
          <Tag
            color={getColor(tag)}
            key={tag}
          >
            {tag.toUpperCase()}
          </Tag>
        ))}
      </span>
    );
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: '',
      key: 'action',
      width: '20px',
      fixed: 'left',
      render: (_, record) => (
        <div
          onClick={() => router.push(`/profileManagement/edit/${record.id}`)}
          className={styles.editIcon}
        >
          <EditOutlined />
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      filters: Array.from(new Set(userData.map(user => user.name))).map(name => ({ text: name, value: name })),
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value as string),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      fixed: 'left',
      filteredValue: filteredInfo.role || null,
      onFilter: (value, record) => record.role?.includes(value as string) ?? false,
      sorter: (a, b) => (a.role ?? '').localeCompare(b.role ?? ''),
      sortOrder: sortedInfo.columnKey === 'role' ? sortedInfo.order : null,
      render: renderTags,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (date: string) => date ? dayjs(date).format('DD/MM/YYYY') : '',
      sorter: (a, b) => dayjs(a.dateOfBirth).unix() - dayjs(b.dateOfBirth).unix(),
      sortOrder: sortedInfo.columnKey === 'dateOfBirth' ? sortedInfo.order : null,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'CCCD',
      dataIndex: 'CCCD',
      key: 'CCCD',
    },
    {
      title: 'Dân tộc',
      dataIndex: 'nationality',
      key: 'nationality',
    },
  ];

  const importExcel = () => {
    router.push('/profileManagement/importExcel');
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <Button
          type="primary"
          onClick={() => router.push('/profileManagement/create')}
          className={styles.createButton}
        >
          <PlusOutlined />
          Tạo mới
        </Button>

        <Button
          type="primary"
          onClick={handleDelete}
          className={styles.deleteButton}
        >
          <DeleteOutlined />
          Xóa
        </Button>
      </div>

      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={userData}
          onChange={handleChange}
          rowKey="id"
          scroll={{ x: 'max-content' }}
        />
      </div>
    </>
  );
};

export default ProfileManagement;
