'use client'
import { Button, Checkbox, Form, Input, Spin, message } from 'antd'
import { useForm} from 'antd/es/form/Form'
import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'; 
import { UserContext } from '../../Context/Context';
import Link from 'next/link';
import Cookies from "js-cookie";


function Loginform({spinning,setSpinning}) {
  
    const [form] = Form.useForm();
    const getUser = React.useContext(UserContext).GetUser;
    const user = React.useContext(UserContext).user;
    
    const [loading,setLoading]=useState(false);
    const [loading1,setLoading1]=useState(false);
    const [loading2,setLoading2]=useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [login,setLogin]=useState(false);
    

    const successModal = () => {
      messageApi.open({
        type: "success",
        content: "Log in successfully",
      });
    };
  
    const errorModal = (e) => {
      messageApi.open({
        type: "error",
        content: e,
      });
    };

    const NewLogIn=()=>{
      Cookies.remove('jwt');
      setLoading1(true);
      setLoading1(false);
      setLogin(false);
    }

    const continueLogIn=()=>{
      setSpinning(true);
      setLoading2(true);
      router.push("/Dashboard");
    }
  
    

    const router = useRouter();
    const onFinish=async()=>{
      setLoading(true);
      setSpinning(true);
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
              console.log(response.data);
              //redirect(`/Dashboard`)
            
              getUser();
              // console.log(user);
              router.push( "/Dashboard")	;
              //user.userName=="admin"?router.push('/Dashboard'):router.push('/LogIN/Userselect');
              successModal();
        }catch(error){
            setLoading(false);
            setSpinning(false);
            console.log(error);
            errorModal(error.response);
        }
        }

      
        useEffect(() => {
          const token=Cookies.get("jwt");
          if(token){
            setLogin(true);
            getUser();
          }
          setSpinning(false);
        }, []);

        useEffect(() => {})


  return (
    <div style={{margin:30}}>
      {contextHolder}
    
    {!login?
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
        offset: 0,
        span: 24,
      }}
    >
      <center><Link href="/LogIN/ForgetPassword">Forget Password?</Link></center>
      

    </Form.Item>
   

   
    <Form.Item
      wrapperCol={{
        offset: 0,
        span: 24,
      }}
    >
      <Button block type="primary" htmlType="submit" loading={loading}>
        Log In
      </Button>
      
    </Form.Item>
      </Form>
      :<div>
        <strong>You have already login as {user.fName+" "+user.lName}</strong>
        <br/><br/><br/><br/><br/><br/><br/><br/>
       
        <Button type='primary' block onClick={NewLogIn} loading={loading1}>Log in As New User</Button>
        <br/><br/>
        <Button type='primary'block onClick={continueLogIn} loading={loading2}>Continue as {user.fName+" "+user.lName}</Button>
      </div>
      }
      
    </div>
  )
    }
export default Loginform
