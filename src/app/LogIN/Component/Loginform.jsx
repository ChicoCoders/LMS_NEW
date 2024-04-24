import { Button, Checkbox, Form, Input } from 'antd'
import { useForm} from 'antd/es/form/Form'
import axios from 'axios';
import React from 'react'
import { useRouter } from 'next/navigation'; 



function Loginform() {
  
    const [form] = Form.useForm();

    const router = useRouter();
    const onFinish=async()=>{
        try{
            const response =await axios.post('http://localhost:5164/api/Auth/login', 
              {
                userName: String(form.getFieldValue('username')),
                password: String(form.getFieldValue('password')),
              },{ withCredentials: true });
              
            //   const data=response.data;
            //   const jwtToken = response.Cookies.jwt; 
            //   console.log(jwtToken);
            //   cookies.set('jwt', jwtToken, { path: '/', httpOnly: true });
              console.log(response.data);
              router.push('/Dashboard');
              console.log(response.data);
        }catch(error){
            console.log("error")
            router.push('/LogIN');
        }
        }
 
  return (
    <div>
      <Form 
      form={form}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>

    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
    }
export default Loginform
