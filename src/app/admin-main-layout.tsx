import React, { Children, useState } from 'react';
import {
    ShoppingCartOutlined,
    FileOutlined,
    AppstoreOutlined,
    TeamOutlined,
    UserOutlined,
    UnorderedListOutlined,
    GlobalOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Avatar, message } from 'antd';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const items: MenuItem[] = [
    getItem('Thống kê', 'orderStatistics', <PieChartOutlined />),
    getItem('Quản lí người dùng ', 'profileManagement', <UserOutlined />),
    getItem('Quản lí sản phẩm', 'productManagement', <AppstoreOutlined />),
    getItem('Quản lí đơn hàng', 'orderManagement', <ShoppingCartOutlined />),
    getItem('Quản lí thể loại', 'categoryManagement', <UnorderedListOutlined />),
    getItem('Quản lí thương hiệu', 'brandManagement', <GlobalOutlined />),
];

const AdminMainLayout: React.FC<any> = ({ children, role }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const router = useRouter();  // Hook from Next.js to navigate programmatically

    const handleMenuClick = (e: { key: string }) => {
        // Use router.push to navigate based on the clicked menu item
        switch (e.key) {
            case 'profileManagement':
                router.push('/profileManagement');
                break;
            case 'productManagement':
                router.push('/productManagement');
                break;
            case 'orderManagement':
                router.push('/orderManagement');
                break;
            case 'categoryManagement':
                router.push('/categoryManagement');
                break;
            case 'brandManagement':
                router.push('/brandManagement');
                break;
            case 'orderStatistics':
                router.push('/orderStatistics');
                break;
            default:
                break;
        }
    };

    const logoutHandel = async () => {
        try {
            await axios.post('/api/logout');
            console.log('Đăng xuất thành công');
            router.push('/login');
        } catch (err) {
            message.error('Đăng xuất thất bại');
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                style={{ backgroundColor: "white" }}
                collapsible collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                theme="light"
            >
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "50px" }}>
                    <img src="/logo/logo.png" alt="" style={{ width: "100px" }} />
                </div>
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
            </Sider>
            <Layout>
                <Header style={{ paddingLeft: "50px", background: colorBgContainer, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                    <div onClick={logoutHandel} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="default" >
                            {user}
                        </Avatar>
                        &nbsp;
                        Đăng xuất
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    VietAnh ©{new Date().getFullYear()} Created by VietAnh - 21CN5
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminMainLayout;