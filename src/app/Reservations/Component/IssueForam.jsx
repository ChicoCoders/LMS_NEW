'use client'
import { Card, Checkbox, Col, DatePicker, Form, Image, Input, InputNumber, Row, Select } from 'antd'
import Column from 'antd/es/table/Column';
import React, { use, useState } from 'react'



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
    const [borrowerID,setBorrowerId]=useState("");
    const [IssuerID,setIssuerId]=useState("");
    const [dueDate,setueDate]=useState("");

   
    return (
        
            <Form   form={props.form1} size='small' layout='vertical' name="nest-messages" validateMessages={validateMessages}>
                <Row align="middle"  gutter={[10,10]}>
                    <Col xs={24}  sm={8}>
                        <Image
                            src="https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png"
                            alt="Picture of the author"
                            width="150px"
    
                        />
                    </Col>
                    <Col xs={24} sm={16}>
                        <Row gutter={[10,10]}>
                            <Col xs={24} sm={12}><Form.Item name="resourceId" label="Resource/ISBN"  initialValue={props.data1}><Input disabled placeholder={props.data1} /></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name="borrowerId" label="Borrowed By" rules={[{ required: true }]}><Input/></Form.Item></Col>
                        </Row>
                        <Row gutter={[10,10]}>
                             <Col xs={24} sm={12}><Form.Item name="issuerId" label="Issued By" rules={[{ required: true }]}><Input/></Form.Item></Col>
                             <Col xs={24} sm={12}><Form.Item name="dueDate" label="Return Date" rules={[{ required: true }]}><DatePicker /></Form.Item></Col>
                        </Row>
                        
                        
                     
                        <Row gutter={[10,10]}>
                            <Col xs={24} sm={24}><Form.Item><Checkbox checked> Send notification to user</Checkbox></Form.Item></Col>
                        </Row>
                    </Col>

                </Row>










            </Form>
       
    )
}

export default ReturnForam
