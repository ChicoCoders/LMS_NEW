import React from 'react'
import Navigations from '../../Component/Navigations'
import { HomeOutlined,InteractionOutlined } from '@ant-design/icons';
import AboutCard from './Components/AboutCart'
import AAA from './Components/AAA'
import AdressBar from '@/app/Component/AdressBar';
import AboutCartModel from './Components/AboutCartModel';

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

function page(props) {
  return (
    <div>
         <AdressBar  topic="About Resource"  pageroot={PageRoot}/>
        <AboutCartModel/>
        
    </div>
  )
}

export default page
