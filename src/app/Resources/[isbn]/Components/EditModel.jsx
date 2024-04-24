import { Button, DatePicker, Flex,message,InputNumber,Row,ConfigProvider,Drawer,Space,Image} from 'antd'
import React, { useState,useEffect} from 'react'
import moment from 'moment';
import axios from 'axios';
import { CloseCircleOutlined} from '@ant-design/icons';
import { Form, Col, Input } from 'antd';
const { TextArea } = Input; 

function EditModal(props) {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Edit Resource details Successfully!',
        });
      };
      const errormsg = () => {
        messageApi.open({
          type: 'error',
          content: 'Edit Resource details are Failed',
        });
      };

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      isbn: props.data.isbn,
      title: props.data.title,
      author: props.data.author,
      type: props.data.type,
      quantity: props.data.total,
      price: props.data.price,
      description: props.data.description,
      pages: props.data.pages,
      //addededOn: props.data.addedon,
      location: props.data.location,
      addedByID: 'sasindu',
      imagePath: 'hello.lk',
      url: 'hello.lk'
    });
    
  }, [props.data, form]);
  
    
  const handleInputChange = (fieldName, value) => {
    form.setFieldsValue({ [fieldName]: value });
    console.log(props.data.isbn);
  };
  const handleFormSubmit= async ()=>{
    const formData = form.getFieldsValue();
    console.log(formData.addedByID);
    console.log(formData);

    setLoading(true);
    console.log(formData.addedByID);
    axios.put('http://localhost:5164/api/Resource/EditResource',formData)

     .then((response)=>{
        setTimeout(() => {
            setLoading(false);
            props.fetchData();
            success();
        }, 3000);
     },(error)=>{
        setLoading(false);
        errormsg();
      }
     
    )
             
    
};
    return (
      
    <ConfigProvider
       theme={{
       token: {
          fontSize:'13px',
          lineHeight:'25px',
          colorBorder: '#d9d9d9',
       },
       components: {
        Form: {
           itemMarginBottom:20
        },
      },}}>  
      {contextHolder}  
        <div>
           
            
        <Drawer
                closable={false}
                style={{ maxWidth: '100%' }}
                width='65%'
                open={props.open}
                centered
                title={<span style={{ fontSize: '18px' }}>Edit Resource Details</span>} 
                
                onClose={props.close}
                extra={
                  <Space>
                    <CloseCircleOutlined onClick={props.close} style={{ fontSize: '22px'}}/>
                  </Space>
                }
                
                footer={[
                    <Flex wrap='wrap' gap="5px" style={{ height:'30px',justifyContent:'flex-end',paddingRight:'30px'}}>
                        <Button style={{ height:'30px',width:'120px'}} size='medium'  key="submit" type="primary"   onClick={handleFormSubmit} loading={loading}>
                            Save
                        </Button>
                        <Button style={{ height:'30px',width:'120px',background:'grey'}} size='medium'  key="back" onClick={props.close}>
                            Cancel
                        </Button>

                    </Flex>
                ]}
            >

                <div style={{
                }}>
                    <Form form={form} onSubmit={handleFormSubmit} layout='vertical'>
                     <Row align="middle" gutter={[30,10]} style={{padding:'0 0 0 15px',fontWeight:'600'}}>  
                    <Col xs={24} sm={14} >
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={18} > <Form.Item name="isbn" label="ISBN" rules={[{ required: true }]}><Input  disabled placeholder={props.data.isbn}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}  >
                            <Col xs={24} sm={18}><Form.Item name="title" label="Title" rules={[{ required: true }]}><Input onChange={(e) => handleInputChange("title", e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]}  >
                            <Col xs={24} sm={18}><Form.Item name="author" label="Auther" rules={[{ required: true }]}><Input onChange={(e) => handleInputChange("author", e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={9}><Form.Item name="type" label="Type" rules={[{ required: true }]}><Input onChange={(e) => handleInputChange("type", e.target.value)}/></Form.Item></Col>
                            {/* <Col xs={24} sm={9}><Form.Item name="year" label="Year" rules={[{ required: true }]}><Input onChange={(e) => handleInputChange("isbn", e.target.value)}/></Form.Item></Col> */}
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={9}><Form.Item name='location' label="Location" rules={[{ required: true }]}><Input onChange={(e) => handleInputChange("location", e.target.value)}/></Form.Item></Col> 
                            <Col xs={24} sm={10}><Form.Item name='addedOn' label="Added On"><DatePicker defaultValue={moment()} disabled style={{ width: '180px',height:'30px'}}/></Form.Item></Col>
                        </Row>
                        <Row gutter={[0,0]}>
                            <Col xs={24} sm={7}><Form.Item name='quantity' label="Quantity" rules={[{ required: true }]}><InputNumber min={0} onChange={(e) => handleInputChange("quantity", e.target.value)}/></Form.Item></Col>
                            <Col xs={24} sm={7}><Form.Item name="price" label="Price" rules={[{ required: true }]}><InputNumber min={0} onChange={(e) => handleInputChange("price", e.target.value)}/></Form.Item></Col>
                            <Col xs={24} sm={7}><Form.Item name="pages" label="No of pages" rules={[{ required: true }]}><InputNumber min={0} onChange={(e) => handleInputChange("pagecount", e.target.value)}/></Form.Item></Col>
                        </Row>
                        <Col xs={24} sm={7} style={{ display: 'none' }}><Form.Item name="addedByID" label="addedByID" rules={[{ required: true }]}></Form.Item></Col>
                        <Col xs={24} sm={7} style={{ display: 'none' }}><Form.Item name="imagePath" label="imagePath" rules={[{ required: true }]}></Form.Item></Col>
                        <Col xs={24} sm={7} style={{ display: 'none' }}><Form.Item name="url" label="url" rules={[{ required: true }]}></Form.Item></Col>
                        
                    </Col>
                    <Col xs={24} sm={10} align="middle" >
                        <Row gutter={[40,10]} style={{marginBottom:'15px',marginLeft:'10px'}}>
                           <Image
                              src={props.data.url}
                              alt={`Image of ${props.data.title}`}
                              width="65%"
                               />
                        </Row>
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={22}><Form.Item name='description' label="Description" ><TextArea rows={5} onChange={(e) => handleInputChange("description", e.target.value)}/></Form.Item></Col>
                        </Row>                
                    </Col>
                </Row>
      </Form>
                </div>

            </Drawer>
            
        </div>
        </ConfigProvider>
    )
}

export default EditModal
