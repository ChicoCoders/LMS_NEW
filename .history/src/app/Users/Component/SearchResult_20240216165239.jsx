'use client'
import { Button, Flex, Space, Table, message, Popconfirm  } from 'antd'
import React from 'react'
import { UserDeleteOutlined ,MoreOutlined} from '@ant-design/icons';
import ResultTable from '../../Component/ResultTable';
import Link from 'next/link';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};

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
          <Link href="/Users/About" ><MoreOutlined/></Link>
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
          {/* <Link href="/" ><UserDeleteOutlined style={{color:'red'}}/></Link> */}
                  {/* <Button type='primary' icon={<MoreOutlined /> } size='small'></Button>
        <Button type='primary' danger icon={<UserDeleteOutlined />}size='small'></Button> */}
        <Popconfirm
    title="Delete the task"
    description="Are you sure to remove this user?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Remove</Button>
  </Popconfirm>
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
