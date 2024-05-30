'use client'
import { Button, Checkbox, Form, Input, Spin, message } from 'antd'
import { useForm} from 'antd/es/form/Form'
import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'; 

import Link from 'next/link';


function Loginform({spinning,setSpinning}) {
  
    const [form] = Form.useForm();
  
    const [loading,setLoading]=useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();

    const successModal = () => {
      messageApi.open({
        type: "success",
        content: "Sent Password Reset Link Successfully",
      });
    };
  
    const errorModal = (e) => {
      messageApi.open({
        type: "error",
        content: e,
      });
    };
  
    useEffect(() => {
      setSpinning(false);
    }, []);

    
    const onFinish=async()=>{
      setLoading(true);
      setSpinning(true);
        try{
            const response =await axios.get(`http://localhost:5164/api/User/forgetPassword?email=${form.getFieldValue('email')}`);
            successModal();
            router.push('/LogIN');
        }catch(error){
            setSpinning(false);
            setLoading(false);
            errorModal("Error when sent password reset link, please try again!");
        }
        }

      
          
  return (
    <div style={{margin:30}}>
      {contextHolder}


      <Form 
      form={form}
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 20,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
     onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
    
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
          type:'email'
        },
      ]}
    >
      <Input />
    </Form.Item>

   

   <br></br>
    <Form.Item
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
    >
      <Button block type="primary" htmlType="submit" loading={loading}>
        Send Password Reset Link
      </Button>
      
    </Form.Item>
  </Form>
    </div>
  )
    }
export default Loginform
