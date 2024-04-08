'use client'
import { Button, Checkbox, Col, Form, Image, Input, InputNumber, Row, Select,DatePicker} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Password from 'antd/es/input/Password'
import axios from 'axios';
import React, { useState } from 'react'
import UploadImage from './myComponent/UploadImage'
import UploadURL from './myComponent/UploadURL'
import TextArea from 'antd/es/input/TextArea';

function ResourcesAddForm(props) {

    // const [form] = Form.useForm();

    // const[ID,SetID]=useState()
    // const[title,SetTitle]=useState("")
    // const[auther,SetAuther]=useState("")
    // const[type,SetType]=useState("")
    // const[quantity,SetQuantity]=useState("")
    // const[year,SetYear]=useState("")
    // const[price,SetPrice]=useState("")
    // const[pagecount,SetPagecount]=useState("")
    // const[addedOn,SetAddedOn]=useState("")
    // const[category,SetCategory]=useState("")
    // const[description,SetDescription]=useState("")
    // const[addedByID,SetAddedByID]=useState("sasindu")
    // const[imageURL,SetImageURL]=useState("cgnfgj")
    // const[location,SetLocation]=useState("")

    // const Clear=()=>{
    //     SetID("");
    //     SetTitle("");
    //     SetAuther("");
    //     SetType("");
    //     SetQuantity("");
    //     SetYear("");
    //     SetPrice("");
    //     SetPagecount("");
    //     SetAddedOn("");
    //     SetCategory("");
    //     SetPublisher("");
    //     SetImageURL("");
    //     SetAddedByID("");
    //     SetDescription("");
    //     SetLocation("");
    // }

    // const submitForm= ()=>{
    //         axios.post('http://localhost:5164/api/Resource/AddResource',{
    //             isbn:isbn,
    //             title:title,
    //             auther:auther,
    //             type:type,
    //             quantity:quantity,
    //             //year:year,
    //             price:price,
    //             pagecount:pagecount,
    //             addedOn:addedOn,
    //             addedByID:addedByID,
    //             category:category,
    //             imageURL:imageURL,
    //             description:description,
    //             location:location,
    //          })
    //          .then((response)=>{
    //             alert(response.data.isbn);
    //          },(error)=>{
    //          alert(error);} )
    //          form.resetFields;          
            
    // }
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (

    <div>
                    <Form form={props.form} size='small' layout='vertical' name="nest-messages"  >
                    <Row align="middle" gutter={[30,10]}>
                    <Col xs={24} sm={8} align="middle">
                        {/* <UploadImage/>                     */}
                    </Col>
                    <Col xs={24} sm={16} >
                        
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={10} ><Form.Item name="isbn" label="ID ( ISBN )" rules={[{ required: true }]}><Input size="middle" /></Form.Item></Col>
                            <Col xs={24} sm={10}><Form.Item name="title" label="Title" rules={[{ required: true }]}><Input size="middle"/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={10}><Form.Item name="auther" label="Auther" rules={[{ required: true }]}><Input size="middle"/></Form.Item></Col>
                            <Col xs={24} sm={10}><Form.Item name="type" label="Type" rules={[{ required: true }]}><Input size="middle"/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={10}><Form.Item name='location' label="Location" rules={[{ required: true }]}><Input size="middle"/></Form.Item></Col> 
                            <Col xs={24} sm={10}><Form.Item name="year" label="Year" rules={[{ required: true }]}><Input size="middle"/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={6}><Form.Item name='addedOn' label="Added On" rules={[{ required: true }]}><DatePicker onChange={onChange} size="middle"/></Form.Item></Col>
                            <Col xs={24} sm={5}><Form.Item name='quantity' label="Quantity" rules={[{ required: true }]}><InputNumber size="middle"/></Form.Item></Col>
                            <Col xs={24} sm={5}><Form.Item name="price" label="Price" rules={[{ required: true }]}><InputNumber size="middle"/></Form.Item></Col>
                            <Col xs={24} sm={5}><Form.Item name="pagecount" label="No of pages" rules={[{ required: true }]}><InputNumber size="middle"/></Form.Item></Col>
                        </Row>
                        {/* <Row gutter={[30,10]}>
                            
                               
                        </Row> */}
                        <Row gutter={[30,10]}>
                        <Col xs={24} sm={20}><Form.Item name='description' label="Description" ><TextArea rows={4} /></Form.Item></Col>
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

export default ResourcesAddForm
