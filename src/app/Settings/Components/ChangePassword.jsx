'use client'
import { EditOutlined } from '@ant-design/icons'
import { Card, DatePicker, Form,Flex, Input, Button, Collapse, Spin,message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import Password from 'antd/es/input/Password'
import React, { useState } from 'react'
import axioinstance from '../../Instance/api_instance'

function EditProfile() {
  const [form]=Form.useForm();
  const[edit,setEdit]=useState(true);
  const[spinning,setSpinning]=useState(false);
  const[newPassword,setNewPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  const [messageApi, contextHolder] = message.useMessage();

  const success = (m) => {
    messageApi.open({
      type: 'success',
      content: m,
    });
  };

  const error = (m) => {
    messageApi.open({
      type: 'error',
      content: m,
    });
  };

  const ChangePassword =() => {
    form.validateFields().then(async()=>{
    setSpinning(true);
    try{
    
    const response=await axioinstance.put("User/ChangePassword",
      {
        oldPassword:form.getFieldValue('current'),
        newPassword:form.getFieldValue('new')
      }
    );
    success("password changed successfully");
    setConfirmPassword('');
    setNewPassword('');
    form.resetFields();
    
  }catch(e){
    console.log(e);
     error("password change failed");
  }
    setEdit(true);
    setSpinning(false);
}).catch((e)=>{})}

  return (
    
    



    <div>
      {contextHolder}
      <Collapse
      items={[{ key: '1', label: "Change Password", children: 
      <>
      <Spin spinning={spinning}>
       <Button size='small'   shape='circle' onClick={()=>setEdit(!edit)}><EditOutlined /></Button>  
       <div>{confirmPassword}</div>
        <Flex justify='center'>
        <Form form={form} style={{width:'75%'}} size='small'  name="nest-messages"  labelCol={{  span: 6,}} wrapperCol={{span:16}}  disabled={edit}>
        
        <Form.Item name="current" label="Current Password" rules={[{ required: true }]} ><Password size='medium'  /></Form.Item>
        <Form.Item name="new" label="New Password" rules={[{ required: true }]} ><Password size='medium'  onChange={(e)=>setNewPassword(e.target.value)}/></Form.Item>

        <Form.Item name="new1" label="Confirm Password" rules={[{ required: true }, {
            validator: (_, value) =>
             confirmPassword==newPassword ? Promise.resolve() : Promise.reject(new Error('Confirm Password Different from New Password')),
          },
        ]} ><Password size='medium'  onChange={(e)=>setConfirmPassword(e.target.value)}/></Form.Item>
      
       <Form.Item colon={false}  label="  "   >
       <Button  type="primary"   size="medium" htmlType="submit" onClick={ChangePassword}>
        Confirm
      </Button>
      <Button style={{margin:"0 0 0 10px"}}  size="medium"  >
        Reset
      </Button>
      </Form.Item>
    
        </Form>
        </Flex>
        </Spin>
        </>
        }]}
        />
    </div>
  )
}

export default EditProfile