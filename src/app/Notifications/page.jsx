import React from 'react'
import Navigations from '../Component/Navigations'
import { HomeOutlined,MessageOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
// import NotificationTable from './Component/NotificationTable'


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
                <span>Notifications</span>
            </>
        ),
    },
    {
        href: '',
        title: (
            <>
                <MessageOutlined/>
                <span>Search Notifications</span>
            </>
        ),
    },
]

function page() {
    return (
        <div>
            <div>
                <Navigations selectedItem="Notifications" topic='Notifications' pageroot={PageRoot1}>
                    
                   <NotificationTable/>

                    
                </Navigations>
            </div>
        </div>
    )
}

export default page
