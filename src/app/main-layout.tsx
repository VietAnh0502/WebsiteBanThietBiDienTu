"use client";

import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import HeaderPage from './header';
import FooterPage from './footer';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { getDecodedToken } from '../utils/decode-token';
import AdminMainLayout from './admin-main-layout';


const { Header, Content, Footer, Sider } = Layout;

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [role, setRole] = useState<any>();
    console.log('Role:', role?.role);

    useEffect(() => {
        // Lấy token từ cookies
        const authToken = Cookies.get('token');
        console.log('Token:', authToken);
        if (authToken) {
            console.log('Token:', authToken);
            const tokenAfterDecode = getDecodedToken(authToken);
            console.log('Token after decode:', tokenAfterDecode?.role);
            setRole(tokenAfterDecode);
        }
    }, []);

    React.useEffect(() => {
        document.body.style.margin = '0';
    }, []);

    return (
        <>
            {role?.role === 'admin' ? (
                <AdminMainLayout role={role}>
                    {children}
                </AdminMainLayout>
            ) : (
                <div>
                    <ConfigProvider
                    theme={{
                        components: {
                          Layout: {
                            bodyBg:'#f6f9fc'
                          },
                        },
                      }}>
                    <Layout style={{ minHeight: '100vh'}}>
                        <HeaderPage />
                        <Layout>
                            <Content>
                                <div style={{margin:'0 auto', width: 1200}}>
                                {/* phàn tử con render sau layout */}
                                {children}
                                {/* phàn tử con render sau layout */}
                                </div>
                            </Content>
                        </Layout>

                        <Footer style={{ textAlign: 'center', backgroundColor:"white" }}>
                            <FooterPage />
                        </Footer>
                    </Layout>
                    </ConfigProvider>
                </div>
            )}
        </>
    );
};

export default MainLayout;
