'use client'
import { EditOutlined } from '@ant-design/icons'
import { Card, DatePicker, Form,Flex, Input, Button, Collapse ,Spin,message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { use, useEffect, useState } from 'react'
import axioinstance from '../../Instance/api_instance'
import dayjs from 'dayjs';
import { UserContext } from '../../Context/Context'

function EditProfile() {
  const [form]=useForm();
  const[edit,setEdit]=useState(true);
  const[save,setSave]=useState(true);
  const[date,setDate]=useState('');
  const[spinning,setSpinning]=useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //using Context
  const user = React.useContext(UserContext).user;
  const getUser = React.useContext(UserContext).GetUser;

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


  
  
  const SaveChanges = ()=>{
    form.validateFields().then(

    async()=>{
    setSpinning(true);
    try{
    const response = await axioinstance.put("User/EditUser",
    {
      fName:form.getFieldValue('fname'),
      lName:form.getFieldValue('lname'),
      dob:date,
      nic:form.getFieldValue('nicno'),
      address:form.getFieldValue('address'),
      phoneNumber:form.getFieldValue('mobile')
    }
  )
    setEdit(true);
    success("Successfully edit your details!");
    getUser();
  }catch(e){
    error("Edit details is failed!");
  }
  setSpinning(false);

  }).catch((e)=>{})}
  

  const GetMyData =async()=>{

    setSpinning(true);
      try{
      form.setFieldValue('fname',user.fName);
      form.setFieldValue('lname',user.lName);
      form.setFieldValue('nicno',user.nic);
      form.setFieldValue('address',user.address);
      form.setFieldValue('mobile',user.phone);
      form.setFieldValue('dob',dayjs(user.dob, "YYYY-MM-DD"));
      setDate(user.dob);
      }catch(e){
        console.log(e)
        error("Error in loading previous data!");
      }
      setSave(true);
      setSpinning(false);
  }



 useEffect(() => {GetMyData()}, [user])

  return (
    <div>
      
      {contextHolder}
      <Collapse
      items={[{ key: '1', label: "Edit Profile Details", children: <>
       <Button size='small'  shape='circle' onClick={()=>setEdit(!edit)}><EditOutlined /></Button>  
       <Spin spinning={spinning}>
        <Flex justify='center'>
        <Form onValuesChange={()=>setSave(false)} form={form} style={{width:'75%'}} size='small'  name="nest-messages"  labelCol={{  span: 6,}} wrapperCol={{span:16}}  disabled={edit} >
        {/* initialValue={dayjs(date, "YYYY-MM-DD")}></Form> */}
        <Form.Item name="fname" label="First Name" rules={[{ required: true }]}  ><Input size='medium' /></Form.Item>
        <Form.Item name="lname" label="Last Name" rules={[{ required: true }]} ><Input size='medium'  /></Form.Item>
        <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]} ><DatePicker size='medium' onChange={(e, s) => setDate(s)}/></Form.Item>
        <Form.Item name="nicno" label="NIC" rules={[{ required: true }]} ><Input size='medium'   /></Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]} ><Input size='medium'   /></Form.Item>
        <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]} ><Input size='medium'   /></Form.Item>
      
       <Form.Item colon={false}  label="  "   >
     
        <Button onClick={SaveChanges}  type="primary"   size="medium" htmlType="submit" disabled={save||edit}>
        Save
      </Button>
      <Button onClick={GetMyData} style={{margin:"0 0 0 10px"}}  size="medium"  >
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