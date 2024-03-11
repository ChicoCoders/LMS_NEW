'use client'
import React, { useState } from 'react';
import { UserOutlined,LogoutOutlined , MessageOutlined, ReadOutlined, AuditOutlined, InteractionOutlined, InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons';
import { Card, ConfigProvider, Flex, Layout, Menu, Space, theme } from 'antd';
import Link from 'next/link';
import AdressBar from './AdressBar';
import MenuItem from 'antd/es/menu/MenuItem';


const { Header, Content, Footer, Sider } = Layout;

const items = [{
  key: '1',
  icon: React.createElement(MessageOutlined),
  label: 'Notifications',
},
{
  key: '2',
  icon: React.createElement(UserOutlined),
  label: `Profile`,
}
];



const sideitems = [{
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
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
        style={{ height: "auto" }}
      >
        <div style={{ position: 'sticky', top: 0 }}>
          <div style={{ color: 'white', width: '100%', textAlign: 'center', padding: '20px 10px' }}>LIBRARY MANAGEMENT SYSTEM</div>
          <hr></hr>
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  iconSize:20,
                  iconMarginInlineEnd:20,
                  darkItemHoverBg:'rgba(0, 0, 0, 0.3)',
                  collapsedIconSize:20,
                },
              },
            }}
          >
          
          <Menu theme="dark" mode="inline" items={sideitems} defaultSelectedKeys={[props.selectedItem]} />
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  darkItemHoverBg:'	#ff7875',
                },
              },
            }}
          >
         <Menu theme="dark" mode="inline">
            <MenuItem  icon={<LogoutOutlined />}>Logout</MenuItem>
         </Menu>
         </ConfigProvider>
          </ConfigProvider>
        </div>
      </Sider>
      <Layout>
        <Header style={{ zIndex: 2, position: 'sticky', top: 0, padding: 0, background: 'rgb(255,255,255)' }} >
          <Menu style={{ position: 'sticky', top: 0, justifyContent: 'end' }}
            theme="light" mode="horizontal" defaultSelectedKeys={[]} items={items} />
        </Header>
        <Content style={{ margin: '24px 5%' }}>

          <Card >
            <Flex justify='space-between' align='center' wrap=''>

              <div style={{ fontSize: '20px', fontWeight: '600' }}>{props.topic}</div>
              <div ><AdressBar item={props.pageroot} /></div>
            </Flex>
            <Flex vertical style={{ margin: '30px 0 0 0 ' }}>{props.children}</Flex>

          </Card>

        </Content >

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );

}

export default Navigations
