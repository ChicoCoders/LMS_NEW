'use client'
import React, { useState } from 'react';
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header } = Layout

function TopNav() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
    </div>
  )
}

export default TopNav
