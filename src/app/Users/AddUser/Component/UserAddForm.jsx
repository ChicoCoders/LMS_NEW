'use client'
import { Button, Checkbox,Flex, Col, Form, Image, Input, InputNumber, Row, Select,Card } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Password from 'antd/es/input/Password'
import axios from 'axios';
import React, { useState } from 'react'


function UserAddForm(props) {

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

    <Flex  justify='center'>   	    <Card style={{width:"400px"}} bordered>
                    <Form   form={props.form} size='small' layout='vertical' name="nest-messages"  >
                    <div>
                    <Form.Item name='address' label="Address"> <Select size='medium' defaultValue={usertype} value={usertype} onChange={value=>SetUserType(value)}
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
                                </Select></Form.Item>
                    <Form.Item name="email" label="Email" required   rules={[{ required: true },{type:"email"}]} ><Input type='email' size='medium' value={email} onChange={(e)=>SetEmail(e.target.value)}/></Form.Item>
                    </div>
                    
                    <div>
                    <Form.Item name="fname" label="First Name" required rules={[{ required: true }]} ><Input size='medium' value="sssssssssssssssssssss" onChange={(a)=>SetFName(a.target.value)}/></Form.Item>
                    <Form.Item name="lname" label="Last Name" required rules={[{ required: true }]} ><Input size='medium' value={lname} onChange={(e)=>SetLName(e.target.value)}/></Form.Item>
                    <Form.Item name='dob' label="Date of Birth" required rules={[{ required: true }]} ><Input size='medium' value={dob} onChange={(e)=>SetDOB(e.target.value)}/></Form.Item>
                    <Form.Item name='nic' label="NIC" required rules={[{ required: true }]} > <Input size='medium' value={nic} onChange={(e)=>SetNIC(e.target.value)}/></Form.Item>
                    </div>
                        
                         
                        
                       
                           
                        <div>
                          <Form.Item name='address' label="Address" required rules={[{ required: true }]} ><Input size='medium' value={address} onChange={(e)=>SetAddress(e.target.value)}/></Form.Item>
                          <Form.Item name='phone' label="Phone Number" required rules={[{ required: true }]} > <Input size='medium' value={phonenumber} onChange={(e)=>SetPhoneNumber(e.target.value)}/></Form.Item>
                          </div>
                           
                           
                      
                        
                           
                      
                        
                  
             </Form>
             </Card>
{/* 
        <Row></Row>
        <Form form={form} style={{ width: 200 }}>
            <Form.Item label="First Name" name="fname" rules={[{ required: true, message: 'Please input!', },]}>
                
            </Form.Item>
            <Form.Item label="Last Name" name="lname" rules={[{ required: true, message: 'Please input!', },]}>
                
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true,email:true, message: 'Please input!', },]}>
                
            </Form.Item>
            <Form.Item label="DOB" name="dob" rules={[{ required: true, message: 'Please input!', },]}>
                
            </Form.Item>
            <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input!', },]}>
                
            </Form.Item>
            <Form.Item label="PhoneNumber" name="phonenumber" rules={[{ required: true, message: 'Please input!', },]}>
               
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input!', },]}>
                <Password value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item label="NIC" name="nic" rules={[{ required: true, message: 'Please input!', },]}>
                
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
                
            </Form.Item>
        </Form>
                      */}
    </Flex>
    )
}

export default UserAddForm
