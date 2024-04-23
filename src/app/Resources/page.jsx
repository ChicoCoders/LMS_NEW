'use client'
import React, { useState } from 'react'
import Navigations from '../Component/Navigations'
import ContentBox from '../Component/ContentBox'
import { HomeOutlined } from '@ant-design/icons';
import SearchResult from './Components/SearchResult';
import { Button, FloatButton} from 'antd';
import AddResourceModel from './Components/AddResourceModel';
import SearchResources from './Components/SearchResources';
import {PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';


const PageRoot = [
    {
        href: '/Dashboard',
        title: <HomeOutlined />,
    },
    {
        href: '',
        title: (
            <>
                <HomeOutlined />
                <span>Resources</span>
            </>
        ),
    },
    {
        href: '',
        title: (
            <>
                <HomeOutlined />
                <span> Search Resources</span>
            </>
        ),
    },
]
const data =  [
    { userId: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', description: '' },
  ];

  

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [open, setOpen] = useState(false);
    // const showModal = () => {
    // setOpen(true);
    // };
    // const closeModal=()=>{
    // setOpen(false);
    // };
    return (
        <div>
            <div>
                                   
                   <Link href={'/Resources/AddResources'}><FloatButton  icon={<PlusOutlined/>} tooltip="Add a resource" type='primary'/></Link>
                       <SearchResources/>
                       <br />
                       <SearchResult data={data} />
                       {/* <AddResourceModel open1={open} open={showModal} close={closeModal}/> */}
                
            </div>
        </div>
    )
}

export default page
