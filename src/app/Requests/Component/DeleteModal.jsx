'use client'
import { Button, Col, Flex, Form, Modal, Popconfirm, Row, message } from 'antd'
import React, { Children, useState } from 'react'
import ReturnForam from './ReturnForam'
import axioinstance from '../../Instance/api_instance';
import { QuestionCircleOutlined } from '@ant-design/icons';



function DeleteModal({requestId,fetchData}) {
    const [messageApi, contextHolder] = message.useMessage();


    const successModal = (m) => {
      messageApi.open({
        type: 'success',
        content: m,
      });
    };
    const errorModal = (m) => {
      messageApi.open({
        type: 'error',
        content: m,
      });
    };

    const handleRemove=async()=>{
        try{
            await axioinstance.delete(`Request/RemoveRequest?id=${requestId}`)
            successModal("Remove Request");
            fetchData();
        }catch(error){
            errorModal("Can't Remove Request");
        }
    }

    return (
        <>
        {contextHolder}
        <Popconfirm
        title="Remove Requests"
        description="Are you sure to remove this request?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => handleRemove(requestId)}
    >
        
        <Button
            danger
            type='primary'
            shape='round'
            size='small' 
        >
            Remove
        </Button>
        </Popconfirm>
        </>
    )
}

export default DeleteModal
