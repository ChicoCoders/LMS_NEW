'use client'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Password from 'antd/es/input/Password'
import axios from 'axios';
import React, { useState } from 'react'


function UserAddForm() {

    const [form] = Form.useForm();

    const[fname,SetFName]=useState("dsads")
    const[lname,SetLName]=useState("")
    const[email,SetEmail]=useState("")
    const[dob,SetDOB]=useState("")
    const[address,SetAddress]=useState("")
    const[phonenumber,SetPhoneNumber]=useState("rtete")
    const[password,SetPassword]=useState("")
    const[nic,SetNIC]=useState("")
    const[usertype,SetUserType]=useState("patron")
    const[addedby,SetAddedBy]=useState(0)

    const Clear=()=>{
        SetFName("");
        SetLName("");
        SetAddedBy("");
        SetDOB("");
        SetEmail("");
        SetNIC("");
        SetPassword("");
        SetPhoneNumber("");
        SetUserType("patron");
        SetAddress("");

    }

    const submitForm= ()=>{
            axios.post('http://localhost:5164/api/User',{
                fName:fname,
                lName:lname,
                dob:dob,
                email:email,
                address:address,
                addedById:addedby,
                nic:nic,
                userType:usertype,
                password:password,
                phoneNumber:phonenumber
                
             })
             .then((response)=>{
                alert(response.data.fName);
             },(error)=>{
             alert(error);} )
             form.resetFields;
            
           
            
    }


    return (

    <div>
        {fname}
        <Form form={form} style={{ width: 200 }}>
            <Form.Item label="First Name" name="fname" rules={[{ required: true, message: 'Please input!', },]}>
                <Input value="sssssssssssssssssssss" onChange={(a)=>SetFName(a.target.value)}/>
            </Form.Item>
            <Form.Item label="Last Name" name="lname" rules={[{ required: true, message: 'Please input!', },]}>
                <Input value={lname} onChange={(e)=>SetLName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true,email:true, message: 'Please input!', },]}>
                <Input value={email} onChange={(e)=>SetEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item label="DOB" name="dob" rules={[{ required: true, message: 'Please input!', },]}>
                <Input value={dob} onChange={(e)=>SetDOB(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input!', },]}>
                <Input value={address} onChange={(e)=>SetAddress(e.target.value)}/>
            </Form.Item>
            <Form.Item label="PhoneNumber" name="phonenumber" rules={[{ required: true, message: 'Please input!', },]}>
                <Input value={phonenumber} onChange={(e)=>SetPhoneNumber(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input!', },]}>
                <Password value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item label="NIC" name="nic" rules={[{ required: true, message: 'Please input!', },]}>
                <Input value={nic} onChange={(e)=>SetNIC(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Type" name="usertype" rules={[{ required: true, message: 'Please input!', },]}>
                <Select defaultValue={usertype} value={usertype} onChange={value=>SetUserType(value)}
                   options={[
                    {
                      value: 'admin',
                      label: 'Admin',
                    },
                    {
                      value: 'patron',
                      label: 'Patron',
                    }
                   
                    ]}>
                    
                </Select>
            </Form.Item>
            <Form.Item label="Added by" name="addedby" rules={[{ required: true, message: 'Please input!', },]}>
                <InputNumber value={addedby} onChange={value=>SetAddedBy(value)}/>
            </Form.Item>
            <Form.Item label=" ">
                <Button type="primary"  block onClick={()=>submitForm()}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
                    
    </div>
    )
}

export default UserAddForm
