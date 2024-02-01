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
        title: 'Staus',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
          <span>
            {status.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'borrowed') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="large">
        <Button type='primary' icon={<MoreOutlined /> } size='small'></Button>
        </Space>
      )
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
