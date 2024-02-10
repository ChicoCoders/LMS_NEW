'use client'
import React, { useEffect, useState } from 'react'

import Navigations from '../Component/Navigations'
import ContentBox from '../Component/ContentBox'
import { HomeOutlined } from '@ant-design/icons';
import UserAddForm from './Component/UserAddForm';
import { Button, Form, Input } from 'antd';


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
                <span>Users</span>
            </>
        ),
    },
    {
        href: '',
        title: (
            <>
                <HomeOutlined />
                <span> Search Results</span>
            </>
        ),
    },
]


function page() {
  

    return (
        <div>
            
                   
                    <UserAddForm />

                
        </div>
    )
}

export default page
