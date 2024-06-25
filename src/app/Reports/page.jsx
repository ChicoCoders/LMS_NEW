'use client'
import React, { Children } from 'react'
import { UserOutlined, MessageOutlined, ReadOutlined, AuditOutlined, InteractionOutlined, InfoCircleOutlined,DashboardOutlined,HomeOutlined  } from '@ant-design/icons';
import Navigations from '../Component/Navigations'
//import Dashboard from "../Dashboard/Components/dashboard"
import ContentBox from '../Component/ContentBox';
//import Reservation from '../Reservation/Component/table'
import Table from './Component/table'

const PageRoot1 = [
  {
      href: '',
      title: <HomeOutlined />,
  },
  {
      href: '',
      title: (
          <>
              <MessageOutlined/>
              <span>Reports</span>
          </>
      ),
  },
  {
      href: '',
      title: (
          <>
              <MessageOutlined/>
              <span>Search Reports</span>
          </>
      ),
  },
]


function page() {
  return (
    <div>
        <Table/>
    </div>
  )
}

export default page