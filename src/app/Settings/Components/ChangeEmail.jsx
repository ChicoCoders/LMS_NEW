'use client'
import { EditOutlined } from '@ant-design/icons'
import { Card, DatePicker, Form,Flex, Input, Button, Collapse ,message} from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import axioinstance from '../../Instance/api_instance'
import { Spin } from 'antd/es'
import { EmailContext} from '../../Context/Context'

function EditProfile() {
  const form1=useForm();
  const[edit,setEdit]=useState(true);
  const[form]=useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const[spinning,setSpinning]=useState(false);
  const email=React.useContext(EmailContext).email;
  const setEmail=React.useContext(EmailContext).setEmail;


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



const ChangeEmail=()=>{
  form.validateFields().then(async()=>{
    setSpinning(true);
    try{
      const newemail=form.getFieldValue('newemail');
      const response=await axioinstance.put(`User/ChangeEmail?newEmail=${newemail}`);
      console.log(response.data);
      success("Email Changed Successfully");
      setEmail(newemail);
      form.setFieldValue("newemail","")
      setEdit(true);
    }catch(e){
      error("Email Change Failed");
      
    }
  setSpinning(false);
  }).catch((e)=>{})
  
}


useEffect(()=>{form.setFieldValue("currentemail",email)},[email])
  return (
    <div>
      {contextHolder}
      <Collapse
      items={[{ key: '1', label: "Change Email Address", children: <>
       <Button size='small'  shape='circle' onClick={()=>setEdit(!edit)}><EditOutlined /></Button>  
       <Spin spinning={spinning} >
        <Flex justify='center'>
        <Form form={form} style={{width:'75%'}} size='small'  name="nest-messages"  labelCol={{  span: 6,}} wrapperCol={{span:16}}  disabled={edit}>
        <Form.Item name="currentemail" label="Current Email" ><Input size='medium' disabled/></Form.Item>
        <Form.Item name="newemail" label="New Email" rules={[{ required: true,type:"email" }]} ><Input size='medium' /></Form.Item>
       
      
       <Form.Item colon={false}  label="  "   >
        <Button  type="primary"   size="medium" htmlType="submit" onClick={ChangeEmail}>
       Verify
      </Button>
      <Button  style={{margin:"0 0 0 10px"}}    size="medium" onClick={()=>form.setFieldValue("newemail","")}>
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