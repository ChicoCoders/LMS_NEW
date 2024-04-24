import React from 'react'
import Navigations from '../../Component/Navigations'
import { HomeOutlined,InteractionOutlined } from '@ant-design/icons';
import AboutCard from './Components/AboutCard'

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
                <span>Resources</span>
            </>
        ),
    },
    {
      key:'3',
        href: '',
        title: (
            
                <span> About Resource</span>
        ),
    },
  ]

function page({params}) {
  
  return (
    <div>
       
       <AboutCard isbn={params.isbn}/>
       
    </div>
  ) 
}

export default page
