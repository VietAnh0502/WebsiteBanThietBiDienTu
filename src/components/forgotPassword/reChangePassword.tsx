// // ReChangePassword.tsx
// 'use client';
// import React, { useEffect } from 'react';
// import { Row, Col, Button, Form, Input, message } from "antd";
// import { CheckCircleOutlined } from '@ant-design/icons';
// import { useRouter, useSearchParams } from 'next/navigation';
// // import { trpc } from '../../utils/trpc';

// const ReChangePassword: React.FC = () => {
//     const [form] = Form.useForm();
//     const router = useRouter();
//     const searchParams = useSearchParams(); // Dùng useSearchParams để lấy query params
//     const token = searchParams.get('token'); // Lấy token từ query parameters
//     // const resetPasswordMutation: any = trpc.resetPassword.useMutation();

//     useEffect(() => {
//         if (!token) {
//             message.error('Token không hợp lệ');
//             router.push('/login');
//         }
//     }, [token, router]);

//     const handleResetPassword = async () => {
//         try {
//             const { newPassword } = await form.validateFields(['newPassword']);
//             // await resetPasswordMutation.mutateAsync({ token, newPassword });
//             message.success('Đặt lại mật khẩu thành công');
//             router.push('/login');
//         } catch (error) {
//             message.error('Đặt lại mật khẩu thất bại');
//         }
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
//             <div style={{ backgroundColor: "white", margin: "20px", borderRadius: "25px", width: "420px" }}>
//                 <Row style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     <Form form={form} style={{ padding: "20px" }}>
//                         <Col md={24}>
//                             <div className="text-xl font-bold "
//                                 style={{
//                                     fontWeight: 'bold',
//                                     background: 'linear-gradient(to left, #6756FF, #28f3f5)',
//                                     WebkitBackgroundClip: 'text',
//                                     WebkitTextFillColor: 'transparent',
//                                     backgroundClip: 'text',
//                                     color: 'transparent',
//                                     fontSize: "50px",
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     alignItems: "center",
//                                     height: "80px",
//                                 }}>
//                                 <span>Quên Mật Khẩu</span>
//                             </div>
//                             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", color: "gray" }}>Vui lòng nhập mật khẩu mới!</div>
//                         </Col>

//                         <Col style={{ height: "40px" }}></Col>

//                         <Col md={24}>
//                             <Form.Item
//                                 label="Mật khẩu mới:"
//                                 name="newPassword"
//                                 labelCol={{ span: 24 }}
//                                 rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }, { message: 'Mật khẩu không hợp lệ!' }]}
//                             >
//                                 <Input.Password style={{ borderRadius: "25px" }} />
//                             </Form.Item>
//                         </Col>

//                         <Col md={24}>
//                             <Form.Item
//                                 label="Nhập lại mật khẩu mới:"
//                                 name="confirmNewPassword"
//                                 labelCol={{ span: 24 }}
//                                 dependencies={['newPassword']}
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Vui lòng nhập lại mật khẩu mới!',
//                                     },
//                                     ({ getFieldValue }) => ({
//                                         validator(_, value) {
//                                             if (!value || getFieldValue('newPassword') === value) {
//                                                 return Promise.resolve();
//                                             }
//                                             return Promise.reject(new Error('Mật khẩu mới không khớp!'));
//                                         },
//                                     }),
//                                 ]}
//                             >
//                                 <Input.Password style={{ borderRadius: "25px" }} />
//                             </Form.Item>
//                         </Col>

//                         <Row>
//                             <Col md={12} style={{ padding: "0 5px" }}>
//                                 <Form.Item>
//                                     <Button onClick={() => { router.push('/login') }}
//                                         style={{
//                                             borderRadius: "25px",
//                                             backgroundImage: "linear-gradient(to left, #9C9C9C, #7A7A7A)",
//                                             color: "white",
//                                             textAlign: "center",
//                                             width: "100%",
//                                         }}>
//                                         Trở lại
//                                     </Button>
//                                 </Form.Item>
//                             </Col>

//                             <Col md={12} style={{ padding: "0 5px" }}>
//                                 <Form.Item>
//                                     <Button type="primary" htmlType="submit"
//                                         onClick={handleResetPassword}
//                                         style={{
//                                             borderRadius: "25px",
//                                             backgroundImage: "linear-gradient(to left, #FF851B, #FFA726)",
//                                             color: "white",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             flexDirection: "row",
//                                             width: "100%",
//                                         }}>
//                                         <CheckCircleOutlined />
//                                         Đổi mật khẩu
//                                     </Button>
//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Col style={{ padding: "0 20px", color: "gray", textAlign: "center" }}>Vui lòng điền mật khẩu mới và xác nhận trước khi bấm "Xác nhận"</Col>

//                     </Form >
//                 </Row>
//             </div >
//         </div>
//     );
// };

// export default ReChangePassword;



"use client";

import * as React from "react";
import { Button, Checkbox, Col, Input, Row, Typography, Form, message } from "antd";
import "@/src/cssfolder/ForgotPassword.css";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Title, Text, Link } = Typography;

const ReChangePassword = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const searchParams = useSearchParams(); // Dùng useSearchParams để lấy query params
    const token = searchParams.get('token'); // Lấy token từ query parameters
    // const resetPasswordMutation: any = trpc.resetPassword.useMutation();

    useEffect(() => {
        if (!token) {
            message.error('Token không hợp lệ');
            router.push('/login');
        }
    }, [token, router]);

    const handleResetPassword = async () => {
        try {
            const  newPassword  = await form.getFieldsValue();

            const changePassword = await axios.post("http://localhost:4000/api/reset-password", { token, newPassword });
            // await resetPasswordMutation.mutateAsync({ token, newPassword });
            message.success('Đặt lại mật khẩu thành công');
            router.push('/login');
        } catch (error) {
            message.error('Đặt lại mật khẩu thất bại');
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
                        src="/logo/undraw_dev_focus_re_6iwt.svg"
                        alt="Illustration"
                        className="illustration-image"
                        style={{ width: 700 }}
                    />
                </Col>

                <Col span={10} className="login-form">
                    <Form
                        className="form-content"
                        form={form}
                    >
                        <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <img src="../../../logo/logo.png" alt="" style={{ width: "300px" }} />
                        </div>
                        <br />
                        <div className="form-fields">
                            <Col md={24}>
                                <Form.Item
                                    label="Mật khẩu mới:"
                                    name="newPassword"
                                    labelCol={{ span: 24 }}
                                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }, { message: 'Mật khẩu không hợp lệ!' }]}
                                >
                                    <Input.Password style={{ height:"50px" }} />
                                </Form.Item>
                            </Col>

                            <Col md={24}>
                                <Form.Item
                                    label="Nhập lại mật khẩu mới:"
                                    name="confirmNewPassword"
                                    labelCol={{ span: 24 }}
                                    dependencies={['newPassword']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập lại mật khẩu mới!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('newPassword') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Mật khẩu mới không khớp!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password style={{ height:"50px" }} />
                                </Form.Item>
                            </Col>
                        </div>

                        <Row>
                            <Col md={12} style={{ padding: "0 5px" }}>
                                <Form.Item>
                                    <Button onClick={() => { router.push('/login') }}
                                        style={{
                                            backgroundColor:"#8c8c8c",
                                            color: "white",
                                            textAlign: "center",
                                            width: "100%",
                                            height:"50px",
                                        }}>
                                        Trở lại
                                    </Button>
                                </Form.Item>
                            </Col>

                            <Col md={12} style={{ padding: "0 5px" }}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit"
                                        onClick={handleResetPassword}
                                        style={{
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexDirection: "row",
                                            width: "100%",
                                            backgroundColor:"#80c4e9",
                                            height:"50px",
                                        }}>
                                        <CheckCircleOutlined />
                                        Đổi mật khẩu
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ReChangePassword;

