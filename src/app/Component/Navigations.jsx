'use client'
import React from 'react';
import { UserOutlined, MessageOutlined, ReadOutlined, AuditOutlined, InteractionOutlined, InfoCircleOutlined,DashboardOutlined  } from '@ant-design/icons';
import { Layout, Menu, Space, theme } from 'antd';
import Link from 'next/link';
import AdressBar from './AdressBar';


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
  key: 'Dashboard',
  icon: React.createElement(DashboardOutlined ),
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
}

];

function Navigations(props) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
        <Content style={{ margin: '24px 5%' }}>
          
            
            <div ><AdressBar item={props.pageroot}/></div>
            <div style={{padding:'5px 0 30px 0',fontSize:'20px',fontWeight:'600'}}>{props.topic}</div>
            {props.children}
          
        </Content >

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );

}

export default Navigations
