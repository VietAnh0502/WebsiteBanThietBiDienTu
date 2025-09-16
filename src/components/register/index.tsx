"use client";

import * as React from "react";
import { Button, Checkbox, Col, Input, Row, Typography, Form, message } from "antd";
import "@/src/cssfolder/RegisterPage.css";
import axios from "axios";
import router from "@/api";
import { useRouter } from "next/navigation";

const { Title, Text, Link } = Typography;

const Register = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = async (values: any) => {
        console.log("Success:", values);
        try {
            const sendDataa = await axios.post("http://localhost:4000/api/register", values);
            message.success("Đăng ký thành công");
            router.push("/login");
        } catch (err: any) {
            console.log(err);
            message.error(err.response.data.error);
        }
    };

    React.useEffect(() => {
        document.body.style.margin = "0";
    }, []);
    return (
        <div className="login-container">
            <Row style={{ height: "101vh" }} gutter={[16, 0]}>
                <Col span={14} className="login-illustration">
                    <img
                        src="/logo/undraw_podcast_re_wr88.svg"
                        alt="Illustration"
                        className="illustration-image"
                        style={{ width: 700 }}
                    />
                </Col>

                <Col span={10} className="login-form">
                    <Form
                        className="form-content"
                        onFinish={onFinish}
                    >
                        <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <img src="../../../logo/logo.png" alt="" style={{ width: "150px" }} />
                        </div>
                        <br />
                        <div className="form-fields">
                            <Form.Item
                                name="name"
                                label="Họ và tên"
                                labelCol={{ span: 24 }}
                                rules={[
                                    { required: true, message: 'Họ và tên không được để trống!' },
                                    {
                                        pattern: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỉịọỏốồổỗộớờởỡợỤỦỨỪỬỮựỳỵỷỹ\s]+$/,
                                        message: 'Họ và tên chỉ được chứa chữ cái và khoảng trắng!',
                                    },
                                    { min: 2, message: 'Họ và tên phải có ít nhất 2 ký tự!' },
                                    { max: 50, message: 'Họ và tên không được vượt quá 50 ký tự!' },
                                ]}
                            >
                                <Input
                                    placeholder="Họ và tên"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                labelCol={{ span: 24 }}
                                rules={[
                                    { required: true, message: 'Email không được để trống!' },
                                    {
                                        type: 'email',
                                        message: 'Vui lòng nhập đúng định dạng email!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Email"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Mật khẩu"
                                labelCol={{ span: 24 }}
                                rules={[
                                    { required: true, message: 'Mật khẩu không được để trống!' },
                                    {
                                        pattern: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                                        message: 'Mật khẩu phải có ít nhất 6 ký tự và chứa ít nhất 1 ký tự đặc biệt!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Mật khẩu"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="rePassword"
                                label="Nhập lại mật khẩu"
                                labelCol={{ span: 24 }}
                                dependencies={['password']} // Phụ thuộc vào trường password
                                rules={[
                                    { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
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
                                <Input.Password
                                    placeholder="Nhập lại mật khẩu"
                                    className="input-field"
                                    style={{ height: '50px', borderRadius: '10px' }}
                                />
                            </Form.Item>

                        </div>
                        <Button type="primary" htmlType="submit" block className="login-button" style={{ height: '50px', marginTop: "20px" }}>
                            Đăng ký
                        </Button>
                        <div className="register-link">
                            <Text style={{ fontSize: "15px" }}>
                                Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
                            </Text>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;
