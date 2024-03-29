'use client'
import { Button, Flex, Space, Table } from 'antd'
import React from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import ResultTable from '../../Component/ResultTable';
import Link from 'next/link';

const columns = [
    {
        title: 'UserID',
        dataIndex: 'userId',
        key: 'userId',
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
      },
    {
      title: 'More',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
        <Space size="large" >
          <Link href="/About" ><MoreOutlined/></Link>
        </Space>
         
        </>
      )
    },
    {
      title: 'Remove',
      dataIndex: '',
      key: 'x',
      render: () => (
        <>
          <Space size="large">
          <Link href="/" ><UserDeleteOutlined style={{color:'red'}}/></Link>
                  {/* <Button type='primary' icon={<MoreOutlined /> } size='small'></Button>
        <Button type='primary' danger icon={<UserDeleteOutlined />}size='small'></Button> */}
        </Space>
        </>
      )
    },
  ];


function SearchResult(props) {
  return(
    <ResultTable dataset={props.data} columnset={columns} pagination={{pageSize:20}}/>
  )
}

export default SearchResult
