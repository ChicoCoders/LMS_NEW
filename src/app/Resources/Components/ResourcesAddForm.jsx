'use client'
import { Button, Checkbox, Col, Form, Image, Input, InputNumber, Row, Select,DatePicker,ConfigProvider} from 'antd'
import UploadImage from './myComponent/UploadImage'
import React, { useState } from 'react'
import EditModal from '../[isbn]/Components/EditModel';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';

function ResourcesAddForm(props) {
    

return (

    <div>

    <ConfigProvider
    theme={{
    token: {
      fontSize:'14px',
      lineHeight:'30px'
    },
    components: {
        Form: {
          itemMarginBottom:18,
        },
    },}}>
            <Form form={props.form}  layout='vertical'  >
                <Row align="middle" gutter={[30,10]} style={{paddingLeft:'50px',fontWeight:'600'}}>  
                    <Col xs={24} sm={13} >
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={18} ><Form.Item name="isbn" label="ISBN No" rules={[{ required: true }]} ><Input /></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}  >
                            <Col xs={24} sm={18}><Form.Item name="title" label="Title" rules={[{ required: true }]}><Input/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}  >
                            <Col xs={24} sm={18}><Form.Item name="auther" label="Auther" rules={[{ required: true }]}><Input/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={9}><Form.Item name="type" label="Type" rules={[{ required: true }]}><Input/></Form.Item></Col>
                            {/* <Col xs={24} sm={9}><Form.Item name="year" label="Year" rules={[{ required: true }]}><Input/></Form.Item></Col> */}
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={9}><Form.Item name='location' label="Location" rules={[{ required: true }]}><Input/></Form.Item></Col> 
                            <Col xs={24} sm={10}><Form.Item name='addedOn' label="Added On"><DatePicker defaultValue={moment()} disabled style={{ width: '180px',height:'30px'}}/></Form.Item></Col>
                        </Row>
                        
                        <Row gutter={[0,0]}>
                            <Col xs={24} sm={7}><Form.Item name='quantity' label="Quantity" rules={[{ required: true }]}><InputNumber min={0}/></Form.Item></Col>
                            <Col xs={24} sm={7}><Form.Item name="price" label="Price" rules={[{ required: true }]}><InputNumber min={0}/></Form.Item></Col>
                            <Col xs={24} sm={7}><Form.Item name="pagecount" label="No of pages" rules={[{ required: true }]}><InputNumber min={0}/></Form.Item></Col>
                        </Row>
                        
                    </Col>
                    <Col xs={24} sm={10} align="middle">
                        <Row gutter={[30,11]} >
                             <Col xs={24} sm={24} style={{padding:'15px 0 0 0'}}>
                                <Form.Item><UploadImage setImageURL={props.setImageURL}/> </Form.Item>
                             </Col>
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={24}><Form.Item name='description' label="Description" ><TextArea rows={4} /></Form.Item></Col>
                        </Row>                
                    </Col>
                </Row>
            </Form>
    </ConfigProvider>
    
    </div>
    )
}

export default ResourcesAddForm
