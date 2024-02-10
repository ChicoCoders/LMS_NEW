import React from 'react'
import Navigations from '../Component/Navigations'
import { HomeOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';


const PageRoot1 = [
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
            <div>
                <Navigations selectedItem="Users" topic='Search Users' pageroot={PageRoot1}>
                    
                    <Card title="myCard">gegrdrgdgrdrteertg</Card>
                    
                </Navigations>
            </div>
        </div>
    )
}

export default page
