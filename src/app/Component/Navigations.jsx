'use client';
import React, { useState } from 'react';
import { UserOutlined, MessageOutlined, ReadOutlined, AuditOutlined, InteractionOutlined, InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons';
import { Card, Flex, Layout, Menu, Space, theme, Dropdown, Badge } from 'antd';
import Link from 'next/link';
import AdressBar from './AdressBar';
import notifications from './Notifications';




const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: '1',
    icon: React.createElement(MessageOutlined),
    label: 'Notifications'
  },
  {
    key: '2',
    icon: React.createElement(UserOutlined),
    label: `Profile`,
  },
];

const sideitems = [
  {
    key: 'Dashboard',
    icon: React.createElement(DashboardOutlined),
    label: <Link href="/Dashboard">Dashboard</Link>,
  },
  {
    key: 'Resources',
    icon: React.createElement(ReadOutlined),
    label: <Link href="/Resources">Resources</Link>,
  },
  {
    key: 'Users',
    icon: React.createElement(UserOutlined),
    label: <Link href="/Users">Users</Link>,
  },
  {
    key: 'Requests',
    icon: React.createElement(AuditOutlined),
    label: <Link href="/Requests">Requests</Link>,
  },
  {
    key: 'Notifications',
    icon: React.createElement(MessageOutlined),
    label: <Link href="/Notifications">Notifications</Link>,
  },
  {
    key: 'Reservations',
    icon: React.createElement(InteractionOutlined),
    label: <Link href="/Reservations">Reservations</Link>,
  },
  {
    key: 'Reports',
    icon: React.createElement(InfoCircleOutlined),
    label: <Link href="/Reports">Reports</Link>,
  },
];

function Navigations(props) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(notifications.length);

  const handleNotificationClick = (e) => {
    e.preventDefault();
    setNotificationVisible(!notificationVisible);
    setUnreadNotificationCount(0);
  };

  const handleModalClose = () => {
    setNotificationVisible(false);
  };

  const notificationMenu = (
      <Menu>
        {notifications.map((notification) => (
            <Menu.Item key={notification.id}>
              <Link href={`/Notifications/${notification.id}`} passHref>
                  <div>
                    <strong>{notification.type}</strong> - {notification.description.split(' ').slice(0, 5).join(' ')}...
                  </div>
              </Link>
            </Menu.Item>
        ))}
      </Menu>
  );


  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={{ height: 'auto' }}
        >
          <div style={{ position: 'sticky', top: 0 }}>
            <div style={{ color: 'white', width: '100%', textAlign: 'center', padding: '20px 10px' }}>LIBRARY MANAGEMENT SYSTEM</div>
            <hr></hr>
            <Menu theme="dark" mode="inline" items={sideitems} defaultSelectedKeys={[props.selectedItem]} />
          </div>
        </Sider>
        <Layout>
          <Header style={{ zIndex: 2, position: 'sticky', top: 0, padding: 0, background: 'rgb(255,255,255)' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>
              <Dropdown overlay={notificationMenu} trigger={['click']}>
                <Badge count={unreadNotificationCount} size="small" overflowCount={10}>
                  <a href="#" onClick={handleNotificationClick}><MessageOutlined /></a>
                </Badge>
              </Dropdown>
              <span style={{ margin: '0 10px' }}>notifications</span>
              <Space>
                <UserOutlined />
                <span>Profile</span>
              </Space>
            </div>
          </Header>
          <Content style={{ margin: '24px 5%' }}>
            <Card>
              <Flex justify='space-between' align='center' wrap=''>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>{props.topic}</div>
                <div><AdressBar item={props.pageroot} /></div>
              </Flex>
              <Flex vertical style={{ margin: '30px 0 0 0 ' }}>{props.children}</Flex>
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
        <Dropdown
            visible={notificationVisible}
            onVisibleChange={(visible) => setNotificationVisible(visible)}
            overlay={notificationMenu}
            placement="bottomRight"
        >
          <></>
        </Dropdown>
      </Layout>
  );
}

export default Navigations;
