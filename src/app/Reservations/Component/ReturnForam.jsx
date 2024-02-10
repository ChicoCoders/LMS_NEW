'use client'
import { Card, Checkbox, Col, DatePicker, Form, Image, Input, InputNumber, Row, Select } from 'antd'
import Column from 'antd/es/table/Column';
import React from 'react'



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
                            <Col xs={24} sm={12}><Form.Item name='reservationId' label="Reservation Id" ><Input disabled placeholder={props.data1.reservationId} /> </Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name="resourceId" label="Resource/ISBN"><Input disabled placeholder={props.data1.resourceId} /></Form.Item></Col>
                        </Row>
                        <Row gutter={[10,10]}>
                        <Col xs={24} sm={12}><Form.Item name="returnid" label="Return by" rules={[{ required: true }]}><Input/></Form.Item></Col>
                            <Col xs={24} sm={12}><Form.Item name="returnDate" label="Return Date" rules={[{ required: true }]}><DatePicker /></Form.Item></Col>
                        </Row>
                        <Row gutter={[10,10]}>
                            <Col xs={24} sm={12}><Form.Item name='penalty' label="Penalty"><InputNumber /></Form.Item></Col>
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
