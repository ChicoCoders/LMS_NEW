import React from 'react'
import Navigations from '../Component/Navigations';
import ContentBox from '../Component/ContentBox';
import { HomeOutlined,DashboardOutlined  } from '@ant-design/icons';
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
        <DashboardOutlined />
        <span>Dashboard</span>
      </>
    ),
  },
]
function page() {
  return (
    <div>
      

          <Dashboard />


    </div>
  )
}

export default page