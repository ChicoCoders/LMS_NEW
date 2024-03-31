'use client'
import React, { useState } from 'react'
import Navigations from '../Component/Navigations'
import ContentBox from '../Component/ContentBox'
import { HomeOutlined } from '@ant-design/icons';
import SearchResult from './Component/SearchResult';
import { Button,Popconfirm } from 'antd';
import AddUserModal from './Component/AddUserModal';



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
const data =  [
    { userId: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', description: '' },
    { userId: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', description: '' },
    { userId: '3', name: 'Alice Johnson', email: 'alice@example.com', role: 'Moderator', description: '' },
    { userId: '4', name: 'Bob Brown', email: 'bob@example.com', role: 'User', description: '' },
    { userId: '5', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin', description: '' },
    { userId: '6', name: 'Emma Wilson', email: 'emma@example.com', role: 'User', description: '' },
    { userId: '7', name: 'Michael Clark', email: 'michael@example.com', role: 'Moderator', description: '' },
    { userId: '8', name: 'Olivia Lee', email: 'olivia@example.com', role: 'User', description: '' },
    { userId: '9', name: 'Daniel Garcia', email: 'daniel@example.com', role: 'Admin', description: '' },
    { userId: '10', name: 'Sophia Martinez', email: 'sophia@example.com', role: 'User', description: '' },
    { userId: '11', name: 'James Rodriguez', email: 'james@example.com', role: 'Moderator', description: '' },
    { userId: '12', name: 'Isabella Hernandez', email: 'isabella@example.com', role: 'Admin', description: '' },
    { userId: '13', name: 'William Lopez', email: 'william@example.com', role: 'User', description: '' },
    { userId: '14', name: 'Mia Gonzalez', email: 'mia@example.com', role: 'User', description: '' },
    { userId: '15', name: 'Benjamin Perez', email: 'benjamin@example.com', role: 'Admin', description: '' },
    { userId: '16', name: 'Charlotte Torres', email: 'charlotte@example.com', role: 'Moderator', description: '' },
    { userId: '17', name: 'Elijah Ramirez', email: 'elijah@example.com', role: 'User', description: '' },
    { userId: '18', name: 'Amelia Flores', email: 'amelia@example.com', role: 'User', description: '' },
    { userId: '19', name: 'Lucas Washington', email: 'lucas@example.com', role: 'Admin', description: '' },
    { userId: '20', name: 'Avery Wood', email: 'avery@example.com', role: 'Moderator', description: '' },
    { userId: '21', name: 'Evelyn Scott', email: 'evelyn@example.com', role: 'User', description: '' },
    { userId: '22', name: 'Alexander Green', email: 'alexander@example.com', role: 'User', description: '' },
    { userId: '23', name: 'Harper Adams', email: 'harper@example.com', role: 'Admin', description: '' },
    { userId: '24', name: 'Jackson Baker', email: 'jackson@example.com', role: 'Moderator', description: '' },
  ];


function page() {
    const [open, setOpen] = useState(false);
    const showModal = () => {
    setOpen(true);
    };
    const closeModal=()=>{
    setOpen(false);
    };
    return (
        <div>
            <div>
                <Navigations selectedItem="Users" topic='Search Users' pageroot={PageRoot}>
                    <Button adddd onClick={()=>showModal() }/>
                        <AddUserModal open1={open} open={showModal} close={closeModal}/>
                        <SearchResult data={data} />
                </Navigations>
            </div>
        </div>
    )
}

export default page