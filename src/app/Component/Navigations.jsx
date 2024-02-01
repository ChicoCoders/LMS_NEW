'use client'
import React from 'react';
import { UserOutlined, MessageOutlined, ReadOutlined, AuditOutlined, InteractionOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [{
  key: '1',
  icon: React.createElement(MessageOutlined),
  label: `Notifications`,
},
{
  key: '2',
  icon: React.createElement(UserOutlined),
  label: `Profile`,
}
];

const sideitems = [{
  key: '1',
  icon: React.createElement(MessageOutlined),
  label: `Dashboard`,
},
{
  key: '2',
  icon: React.createElement(ReadOutlined),
  label: `Resources`,
},
{
  key: '3',
  icon: React.createElement(UserOutlined),
  label: `Users`,
},
{
  key: '4',
  icon: React.createElement(AuditOutlined),
  label: `Requests`,
},
{
  key: '5',
  icon: React.createElement(MessageOutlined),
  label: `Notifications`,
},
{
  key: '6',
  icon: React.createElement(InteractionOutlined),
  label: `Reservations`,
},
{
  key: '7',
  icon: React.createElement(InfoCircleOutlined),
  label: `Reports`,
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideitems} />
        </div>
      </Sider>
      <Layout>
        <Header style={{ zIndex: 2, position: 'sticky', top: 0, padding: 0, background: 'rgb(255,255,255)' }} >
          <Menu style={{ position: 'sticky', top: 0, justifyContent: 'end' }}
            theme="light" mode="horizontal" defaultSelectedKeys={['4']} items={items} />
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
