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
      {console.log(PageRoot)}
      <Navigations selectedItem='Dashboard' topic='Dashboard' pageroot={PageRoot}>
        
          <Dashboard />

        
      </Navigations>
    </div>
  )
}

export default page
