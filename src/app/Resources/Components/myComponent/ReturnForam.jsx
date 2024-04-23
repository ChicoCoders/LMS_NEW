'use client'
import { Card, Checkbox, Col, DatePicker, Form, Image, Input, InputNumber, Row, Select } from 'antd'
import Column from 'antd/es/table/Column';
import React from 'react'
import ReturnModel from './ReturnModel';
import UploadImage from './UploadImage';
import UploadURL from './UploadURL';


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function ReturnForam(props) {
    return (
           <Form   form={props.form1} size='small' layout='vertical' name="nest-messages" validateMessages={validateMessages} style={{paddingLeft:'-493px'}}>
            <div style={{background:'#2D363F0D'}}>
               <h4 style={{paddingLeft:'27px'}}>Add Resources</h4>
            </div>
                <Row gutter={[10,10]}>
                    <Col xs={'317px'} sm={'317px'} style={{padding:'150px'}}>
                    <Row gutter={[10,10]}>
                        <UploadImage/>  
                    </Row>
                    <Row gutter={[10,10]}>
                        <UploadURL/>  
                    </Row>
                    
                    </Col>
                    <Col xs={100} sm={100} style={{width:'450px'}}>
                        
                        <Row gutter={[10,10]}>
                            <Col xs={'317px'} sm={'32px'}><Form.Item name="title" label="Title" rules={[{ required: true }]}><Input/></Form.Item></Col>
                            <Col xs={'317px'} sm={'32px'}><Form.Item name="year" label="Year" rules={[{ required: true }]}><Input/></Form.Item></Col>
                        </Row>
                        <Row gutter={[10,10]}>
                            <Col xs={'317px'} sm={'32px'}><Form.Item name='category' label="Category" ><Input/></Form.Item></Col>
                            <Col xs={'317px'} sm={'32px'}><Form.Item name="publisher" label="Publisher"><Input/></Form.Item></Col>
                        </Row>
                        <Row gutter={[10,10]}>
                            <Col xs={'317px'} sm={'32px'}><Form.Item name="price" label="Price" rules={[{ required: true }]}><Input/></Form.Item></Col>
                            <Col xs={'317px'} sm={'32px'}><Form.Item name="pages" label="Pages" rules={[{ required: true }]}><Input/></Form.Item></Col>
                        </Row>
                        <Row gutter={[10,10]}>
                            <Col xs={10} sm={5}><Form.Item name='quantity' label="Quantity"><Input/></Form.Item></Col>
                            <Col xs={10} sm={5}><Form.Item name='location' label="Location"><Input/></Form.Item></Col>
                            <Col xs={10} sm={5}><Form.Item name='addedOn' label="Added on"><Input /></Form.Item></Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
       
    )
}

export default ReturnForam