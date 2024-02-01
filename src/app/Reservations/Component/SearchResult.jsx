'use client'
import ResultTable from '../../Component/ResultTable'
import React from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import { Button, Space, Tag } from 'antd';



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
      render: (status) => (status=="borrowed"?<Button type='primary'  size='small' shape='round'>Borrowed</Button>:(status=="overdue"?<Button type='danger' size='small' shape='round'>Overdue</Button>:<Button type='primary' disabled size='small' shape='round'>Reserved</Button>)),
    },
  
  ];

function SearchResult(props) {
  return (
    <div>
      <ResultTable dataset={props.data} columnset={columns} />
    </div>
  )
}

export default SearchResult
