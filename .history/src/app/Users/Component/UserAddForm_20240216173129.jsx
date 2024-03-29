'use client'
import { Button, Checkbox, Col, Form, Image, Input, InputNumber, Row, Select } from 'antd'
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

    <div>
                    <Form   form={props.form} size='small' layout='vertical' name="nest-messages"  >
                    <Row align="middle"  gutter={[30,10]}>
                    <Col xs={24}  sm={6}>
                        <Image
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Picture of the author"
                            width="100%"
                            style={{borderRadius:'50%'}}
                        />
                    </Col>
                    <Col xs={24} sm={18}>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={12}><Form.Item name="fname" label="First Name" ><Input value="sssssssssssssssssssss" onChange={(a)=>SetFName(a.target.value)}/></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name="lname" label="Last Name"><Input value={lname} onChange={(e)=>SetLName(e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={12}><Form.Item name="email" label="Email" rules={[{ required: true }]} ><Input value={email} onChange={(e)=>SetEmail(e.target.value)}/></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name="password" label="Default Password" rules={[{ required: true }]}><Password value={password} onChange={(e)=>SetPassword(e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={12}><Form.Item name='dob' label="Date of Birth"><Input value={dob} onChange={(e)=>SetDOB(e.target.value)}/></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name='nic' label="NIC"> <Input value={nic} onChange={(e)=>SetNIC(e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={12}><Form.Item name='address' label="Address"><Input value={address} onChange={(e)=>SetAddress(e.target.value)}/></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name='phone' label="Phone Number"> <Input value={phonenumber} onChange={(e)=>SetPhoneNumber(e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={12}><Form.Item name='address' label="User Type"> <Select defaultValue={usertype} value={usertype} onChange={value=>SetUserType(value)}
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
                                </Select></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name='phone' label="Books Borrowed"> <InputNumber value={addedby} onChange={value=>SetAddedBy(value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={24}><Form.Item><Checkbox checked> Send notification to user</Checkbox></Form.Item></Col>
                        </Row>
                        
                    </Col>
                    
                </Row>
             </Form>
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
    </div>
    )
}

export default UserAddForm
