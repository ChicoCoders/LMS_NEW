'use client'
import React from 'react';
import { UserOutlined, MessageOutlined, ReadOutlined, AuditOutlined, InteractionOutlined, InfoCircleOutlined,DashboardOutlined  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';


const { Header, Content, Footer, Sider } = Layout;

const items = [{
  key: '1',
  icon: React.createElement(MessageOutlined),
  label:'Notifications',
},
{
  key: '2',
  icon: React.createElement(UserOutlined),
  label: `Profile`,
}
];



const sideitems = [{
  key: 'dashboard',
  icon: React.createElement(DashboardOutlined ),
  label: <Link href="/Dashboard">Dashboard</Link>,
},
{
  key: 'resources',
  icon: React.createElement(ReadOutlined),
  label: <Link href="/Resources">Resources</Link>,
},
{
  key: 'users',
  icon: React.createElement(UserOutlined),
  label: <Link href="/Users">Users</Link>,
},
{
  key: 'requests',
  icon: React.createElement(AuditOutlined),
  label: <Link href="/Requests">Requests</Link>,
},
{
  key: 'notifications',
  icon: React.createElement(MessageOutlined),
  label: <Link href="/Notifications">Notifications</Link>,
},
{
  key: 'reservations',
  icon: React.createElement(InteractionOutlined),
  label: <Link href="/Reservations">Reservations</Link>,
},
{
  key: 'reports',
  icon: React.createElement(InfoCircleOutlined),
  label: <Link href="/Reports">Reports</Link>,
}

];

function Navigations(props) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="1g"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ height: "auto" }}
      >
        <div style={{ position: 'sticky', top: 0 }}>
          <div style={{ color: 'white', width: '100%', textAlign: 'center',padding:'20px 10px'}}>LIBRARY MANAGEMENT SYSTEM</div>
          <hr></hr>
          <Menu theme="dark" mode="inline"  items={sideitems}  defaultSelectedKeys={[props.selectedItem]}/>
        </div>
      </Sider>
      <Layout>
        <Header style={{ zIndex: 2, position: 'sticky', top: 0, padding: 0, background: 'rgb(255,255,255)' }} >
          <Menu style={{ position: 'sticky', top: 0, justifyContent: 'end' }}
            theme="light" mode="horizontal" defaultSelectedKeys={[]} items={items}  />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              minHeight: 180,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </div>
        </Content >

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );

}

export default Navigations
