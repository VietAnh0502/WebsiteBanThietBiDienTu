'use client';
import React, { useState, useEffect, KeyboardEvent } from 'react';
import { Row, Col, Button, Form, Input, Upload, message, Select, DatePicker, InputNumber, InputNumberProps, Typography, Card } from "antd";
import { LoadingOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/es/upload';
import { RcFile, UploadFile } from 'antd/es/upload/interface';
import { useRouter } from 'next/navigation';
// import styles from '../profile/profile.module.css';
import type { GetProp, UploadProps } from 'antd';
import FormDataBuilder from '../../utils/formData';
import axios from 'axios';

const { Title } = Typography;

// ethnicGroups.ts
export const ethnicGroups: { value: string; label: string }[] = [
    { value: "ba_na", label: "Ba Na" },
    { value: "bo_y", label: "Bố Y" },
    { value: "brau", label: "Brâu" },
    { value: "bru_van_kieu", label: "Bru - Vân Kiều" },
    { value: "cham", label: "Chăm (Champa)" },
    { value: "cho_ro", label: "Chơ Ro" },
    { value: "chut", label: "Chứt" },
    { value: "co", label: "Co" },
    { value: "cong", label: "Cống" },
    { value: "co_ho", label: "Cơ Ho" },
    { value: "co_tu", label: "Cơ Tu" },
    { value: "dao", label: "Dao" },
    { value: "e_de", label: "Ê Đê" },
    { value: "giay", label: "Giáy" },
    { value: "gia_rai", label: "Gia Rai" },
    { value: "gie_trieng", label: "Gié-Triêng" },
    { value: "hmong", label: "H'Mông (Mông)" },
    { value: "ha_nhi", label: "Hà Nhì" },
    { value: "hre", label: "Hrê" },
    { value: "khang", label: "Kháng" },
    { value: "khmer", label: "Khơ Me (Khmer)" },
    { value: "kho_mu", label: "Khơ Mú" },
    { value: "kinh", label: "Kinh (Việt)" },
    { value: "la_chi", label: "La Chí" },
    { value: "la_ha", label: "La Ha" },
    { value: "lao", label: "Lào" },
    { value: "lu", label: "Lự" },
    { value: "lo_lo", label: "Lô Lô" },
    { value: "ma", label: "Mạ" },
    { value: "mang", label: "Mảng" },
    { value: "mnong", label: "Mnông" },
    { value: "muong", label: "Mường" },
    { value: "ngai", label: "Ngái" },
    { value: "nung", label: "Nùng" },
    { value: "o_du", label: "Ô Đu" },
    { value: "pa_then", label: "Pà Thẻn" },
    { value: "phu_la", label: "Phù Lá" },
    { value: "pu_peo", label: "Pu Péo" },
    { value: "ra_glai", label: "Ra Glai" },
    { value: "ro_mam", label: "Rơ Măm" },
    { value: "san_chay", label: "Sán Chay" },
    { value: "san_diu", label: "Sán Dìu" },
    { value: "si_la", label: "Si La" },
    { value: "ta_oi", label: "Tà Ôi" },
    { value: "tay", label: "Tày" },
    { value: "thai", label: "Thái" },
    { value: "tho", label: "Thổ" },
    { value: "xinh_mun", label: "Xinh Mun" },
    { value: "xo_dang", label: "Xơ Đăng" },
    { value: "xtieng", label: "Xtiêng" },
    { value: "hoa", label: "Hoa (Người Hoa)" },
    { value: "lao", label: "Lào" },
    { value: "ngai_2", label: "Ngái" },
    { value: "ha_nhi_2", label: "Hà Nhì" }
];


interface User {
    id: string;
    name: string;
    email: string;
    verified: boolean | null;
    role: string | null;
    createdAt: Date;
    updatedAt: Date;
    provider: string | null;
    phoneNumber: string | null;
    dateOfBirth: Date | null;
    address: string | null;
    nationality: string | null;
    hometown: string | null;
    img: string | null;
    gender: string | null;
    CCCD: string | null;
}

interface Province {
    id: string;
    name: string;
}

interface District {
    id: string;
    name: string;
}

interface Ward {
    id: string;
    name: string;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt5M;
};

const CreateProfileManagement: React.FC = () => {
    const [form] = Form.useForm();
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [provinceId, setProvinceId] = useState<string>('');
    const [districtId, setDistrictId] = useState<string>('');
    const [wardId, setWardId] = useState<string>('');
    const [provinceIdHometown, setProvinceIdHometown] = useState<string>('');
    const [districtIdHometown, setDistrictIdHometown] = useState<string>('');
    const [wardIdHometown, setWardIdHometown] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [permissions, setPermissions] = useState<string[]>([]);

    const router = useRouter();

    useEffect(() => {
        fetchProvinces();
    }, []);

    useEffect(() => {
        if (provinceId) {
            fetchDistricts(provinceId);
        }
    }, [provinceId]);

    useEffect(() => {
        if (districtId) {
            fetchWards(districtId);
        }
    }, [districtId]);

    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
            const results = await response.json();
            setProvinces(results.data);
        } catch (error) {
            console.error('Error fetching provinces:', error);
            message.error('Lỗi khi tải danh sách tỉnh/thành phố.');
        }
    };

    const fetchDistricts = async (provinceId: string) => {
        try {
            const response = await fetch(`https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`);
            const results = await response.json();
            setDistricts(results.data);
        } catch (error) {
            console.error('Error fetching districts:', error);
            message.error('Lỗi khi tải danh sách quận/huyện.');
        }
    };

    const fetchWards = async (districtId: string) => {
        try {
            const response = await fetch(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`);
            const results = await response.json();
            setWards(results.data);
        } catch (error) {
            console.error('Error fetching wards:', error);
            message.error('Lỗi khi tải danh sách phường/xã.');
        }
    };

    const handleProvinceChange = (value: string) => {
        const selectedProvinceId = provinces.find(province => province.name === value)?.id;
        if (selectedProvinceId) {
            setProvinceId(selectedProvinceId);
            fetchDistricts(selectedProvinceId);
        }
    };

    const handleDistrictChange = (value: string) => {
        const selectedDistrictId = districts.find(district => district.name === value)?.id;
        if (selectedDistrictId) {
            setDistrictId(selectedDistrictId);
            fetchWards(selectedDistrictId);
        }
    };

    const handleWardChange = (value: string) => {
        const selectedWardId = wards.find(ward => ward.name === value)?.id;
        if (selectedWardId) {
            setWardId(selectedWardId);
        }
    };

    const handleProvinceChangeH = (value: string) => {
        const selectedProvinceId = provinces.find(province => province.name === value)?.id;
        console.log(setDistrictId)
        if (selectedProvinceId) {
            setProvinceIdHometown(selectedProvinceId);
            fetchDistricts(selectedProvinceId);
        }
    };

    const handleDistrictChangeH = (value: string) => {
        const selectedDistrictId = districts.find(district => district.name === value)?.id;
        if (selectedDistrictId) {
            setDistrictIdHometown(selectedDistrictId);
            fetchWards(selectedDistrictId);
        }
    };

    const handleWardChangeH = (value: string) => {
        const selectedWardId = wards.find(ward => ward.name === value)?.id;
        if (selectedWardId) {
            setWardIdHometown(selectedWardId);
        }
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();

            console.log("values", values)

            const Values = {
                ...values,
                dateOfBirth: values.dateOfBirth.toISOString(),
                addressProvince: { id: provinceId, name: values.addressProvince },
                addressDistrict: { id: districtId, name: values.addressDistrict },
                addressWard: { id: wardId, name: values.addressWard },
                hometownProvince: { id: provinceIdHometown, name: values.hometownProvince },
                hometownDistrict: { id: districtIdHometown, name: values.hometownDistrict },
                hometownWard: { id: wardIdHometown, name: values.hometownWard },
            };


            let formData = new FormData();
            const formDataBuilder = new FormDataBuilder();
            formDataBuilder.buildFormData(formData, Values);

            if (imageFile) {
                formData.append('img', imageFile);
            }

            console.log("formData", formData)

            const result: any = await axios.post('http://localhost:4000/api/createUser', formData);
            message.success('Tạo mới thông tin người dùng thành công!');
            router.push('/profileManagement')

        } catch (error: any) {
            console.error('Error creating user:', error);
            message.error(error.response.data.message);
        }
    };


    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false);
                setImageUrl(url);
                setImageFile(info.file.originFileObj as RcFile);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );


    return (
        <div style={{
            padding: "15px",
            overflowY: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            maxHeight: 'calc(100vh - 64px)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Title level={3} style={{ margin: 0 }}>
                    <UserOutlined />&nbsp;Thông tin cá nhân
                </Title>
                <Button
                    type="primary"
                    onClick={handleSubmit}
                    icon={<PlusOutlined />}
                    style={{
                        backgroundColor: "#52c41a",
                        width: "120px",
                        marginRight: "5vh"
                    }}
                >
                    Tạo mới
                </Button>
            </div>

            <Form
                form={form}
                layout="vertical"
                initialValues={{ nationality: "kinh" }}
            >
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card title="Thông tin tài khoản" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                            <Row gutter={[16, 16]}>
                                <Col span={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Form.Item label="Ảnh đại diện:">
                                        <Upload
                                            name="img"
                                            listType="picture-card"
                                            showUploadList={false}
                                            beforeUpload={beforeUpload}
                                            onChange={handleChange}
                                            maxCount={1}
                                        >
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt="avatar"
                                                    style={{
                                                        width: '200%',
                                                        height: '200%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            ) : (
                                                uploadButton
                                            )}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                                <Col span={19}>
                                    <Row gutter={[16, 16]}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="name"
                                                label="Họ và tên"
                                                rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="email"
                                                label="Email"
                                                rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="password"
                                                label="Password"
                                                rules={[
                                                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                                                    { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                                                    { pattern: /^(?=.*[!@#$%^&*])/, message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt!' }
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="confirmPassword"
                                                label="Nhập lại mật khẩu"
                                                dependencies={['password']}
                                                rules={[
                                                    { required: true },
                                                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                                                    { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                                                    { pattern: /^(?=.*[!@#$%^&*])/, message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt!' },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Mật khẩu nhập lại không khớp!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input.Password />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                name="role"
                                                label="Vai trò"
                                                rules={[{ required: true, message: 'Vui lòng chọn vai trò!' }]}
                                            >
                                                <Select
                                                    options={[
                                                        { value: 'admin', label: 'admin' },
                                                        { value: 'manager', label: 'manager' },
                                                    ]}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card title="Địa chỉ hiện tại" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Tỉnh / Thành phố:"
                                        name="addressProvince"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Chọn Tỉnh / Thành phố"
                                            optionFilterProp="children"
                                            onChange={handleProvinceChange}
                                            // className={`${styles.customInput} ${styles.selectInput}`}
                                            options={provinces.map(province => ({
                                                value: province.name,
                                                label: province.name,
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Quận / Huyện / Thị xã:"
                                        name="addressDistrict"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true, message: 'Vui lòng nhập Quận / Huyện / Thị xã!' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Chọn Quận / Huyện / Thị xã"
                                            optionFilterProp="children"
                                            onChange={handleDistrictChange}
                                            // className={`${styles.customInput} ${styles.selectInput}`}
                                            options={districts.map(district => ({
                                                value: district.name,
                                                label: district.name,
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Phường / Xã / Thị trấn / Thôn / Đội:"
                                        name="addressWard"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true, message: 'Vui lòng nhập Phường / Xã / Thị trấn / Thôn / Đội!' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Phường / Xã / Thị trấn / Thôn / Đội"
                                            optionFilterProp="children"
                                            onChange={handleWardChange}
                                            // className={`${styles.customInput} ${styles.selectInput}`}
                                            options={wards.map(ward => ({
                                                value: ward.name,
                                                label: ward.name,
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card title="Địa chỉ quê quán" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Tỉnh / Thành phố:"
                                        name="hometownProvince"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Chọn Tỉnh / Thành phố"
                                            optionFilterProp="children"
                                            onChange={handleProvinceChangeH}
                                            // className={`${styles.customInput} ${styles.selectInput}`}
                                            options={provinces.map(province => ({
                                                value: province.name,
                                                label: province.name,
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Quận / Huyện / Thị xã:"
                                        name="hometownDistrict"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true, message: 'Vui lòng nhập Quận / Huyện / Thị xã!' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Chọn Quận / Huyện / Thị xã"
                                            optionFilterProp="children"
                                            onChange={handleDistrictChangeH}
                                            // className={`${styles.customInput} ${styles.selectInput}`}
                                            options={districts.map(district => ({
                                                value: district.name,
                                                label: district.name,
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Phường / Xã / Thị trấn / Thôn / Đội:"
                                        name="hometownWard"
                                        labelCol={{ span: 24 }}
                                        rules={[{ required: true, message: 'Vui lòng nhập Phường / Xã / Thị trấn / Thôn / Đội!' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Phường / Xã / Thị trấn / Thôn / Đội"
                                            optionFilterProp="children"
                                            onChange={handleWardChangeH}
                                            // className={`${styles.customInput} ${styles.selectInput}`}
                                            options={wards.map(ward => ({
                                                value: ward.name,
                                                label: ward.name,
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col span={24}>
                        <Card title="Thông tin người dùng" style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}>
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
                                    <Form.Item
                                        name="CCCD"
                                        label="CCCD"
                                        rules={[
                                            { required: true, message: 'Vui lòng nhập CCCD!' },
                                            { pattern: /^[0-9]{12}$/, message: 'CCCD phải là 12 chữ số hợp lệ!' }
                                        ]}
                                    >
                                        <Input
                                            maxLength={12}
                                            style={{ width: '100%' }}
                                            placeholder="Nhập số CCCD"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="phoneNumber"
                                        label="Số điện thoại"
                                        rules={[
                                            { required: true, message: 'Vui lòng nhập số điện thoại!' },
                                        ]}
                                    >
                                        <Input
                                            maxLength={10}
                                            style={{ width: '100%' }}
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item
                                        name="dateOfBirth"
                                        label="Ngày sinh"
                                        rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
                                    >
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="gender"
                                        label="Giới tính"
                                        rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                                    >
                                        <Select
                                            options={[
                                                { value: '1', label: 'Nam' },
                                                { value: '2', label: 'Nữ' },
                                                { value: '3', label: 'Không xác định' },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="nationality"
                                        label="Quốc tịch"
                                        rules={[{ required: true, message: 'Vui lòng nhập quốc tịch!' }]}
                                    >
                                        <Select
                                            options={ethnicGroups}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default CreateProfileManagement;