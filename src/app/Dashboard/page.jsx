import React from 'react'
import Navigations from '../Component/Navigations';
import ContentBox from '../Component/ContentBox';
import { HomeOutlined } from '@ant-design/icons';
import Dashboard from './Component/Dashboard';

const PageRoot = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {
    href: '',
    title: (
      <>
        <HomeOutlined />
        <span>Dashboard</span>
      </>
    ),
  },
]
function page() {
  return (
    <div>
      <Navigations>
        <ContentBox pageroot={PageRoot} >
          <Dashboard />
        </ContentBox>
      </Navigations>
    </div>
  )
}

export default page
