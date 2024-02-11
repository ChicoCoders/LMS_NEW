import React from 'react'
import Navigations from '../../Component/Navigations'
import { HomeOutlined,InteractionOutlined } from '@ant-design/icons';
import AboutCard from './Component/AboutCard'
import AAA from './Component/AAA'

const PageRoot = [
    {
          key:'1',
        href: '',
        title: <HomeOutlined />,
    },
    {
      key:'2',
        href: '',
        title: (
            <>
                <InteractionOutlined />
                <span>Reservations</span>
            </>
        ),
    },
    {
      key:'3',
        href: '',
        title: (
            
                <span> About Reservation</span>
        ),
    },
  ]

function page() {
  return (
    <div>
       <Navigations selectedItem="User" topic="About User"  pageroot={PageRoot}>
       <AboutCard/>
        </Navigations>
    </div>
  )
}

export default page
