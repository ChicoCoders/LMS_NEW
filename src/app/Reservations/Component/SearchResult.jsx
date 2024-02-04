'use client'
import ResultTable from '../../Component/ResultTable'
import React, { useState } from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import { Button, Space, Tag } from 'antd';
import IssueModal from './IsuueModal'






function SearchResult(props) {


  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const closeModal=()=>{
    setOpen(false);
  };
 

  const columns = [
    {
        title: 'Reservation',
        dataIndex: 'reservationId',
        key: 'reservationId',
      },
      {
        title: 'Resource',
        dataIndex: 'resourceId',
        key: 'resourceId',
      },
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'userName',
      },
      {
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate',
      },
     
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="large">
        <Button type='primary' icon={<MoreOutlined /> } size='small' shape='round'>More</Button>
        </Space>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (status=="borrowed"?<Button onClick={showModal} type='primary'  size='small' shape='round'>Borrowed</Button>:(status=="overdue"?<Button type='danger' size='small' shape='round'>Overdue</Button>:<Button type='primary' disabled size='small' shape='round'>Reserved</Button>)),
    },
  
  ];

  return (
    <div>
      <ResultTable dataset={props.data} columnset={columns} pagination={{pageSize:20}}/>
      <IssueModal  open1={open} open={showModal} close={closeModal}/>
    </div>
  )
}

export default SearchResult
