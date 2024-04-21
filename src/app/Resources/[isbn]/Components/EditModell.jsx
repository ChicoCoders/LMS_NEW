import { Button, DatePicker, Flex, Form, Input,message,InputNumber,Row,Col,TextArea,ConfigProvider,Drawer,Space} from 'antd'
import Modal from 'antd/es/modal/Modal'
import moment from 'moment';
import UploadImage from '../../Components/myComponent/UploadImage';
import React, { useState,useEffect} from 'react'
import axios from 'axios';
import axioinstance from '../../../Instance/api_instance';
import { useParams } from 'next/navigation';
import { CloseCircleOutlined} from '@ant-design/icons';

function EditModall(props) {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Extend Date Successfully!',
        });
      };
      const errormsg = () => {
        messageApi.open({
          type: 'error',
          content: 'Extend Date is Failed',
        });
      };

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  //console.log(props.data.description);

  // Initialize form with data
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
      addededOn: props.data.addedon,
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
            // showSuccessModal();
            props.fetchData();
        }, 3000);
        alert(response.data.isbn);
     },(error)=>{
      
        setLoading(false);
        console.log(error);
     alert(error);}
     
    )
             
    
};
    return (
        <ConfigProvider
    theme={{
    token: {
      fontSize:'13px',
      lineHeight:'25px',
    },
    components: {
        Form: {
          itemMarginBottom:20
        },
      },}}>    
        <div>
           
            
        <Drawer
                closable={false}
                style={{ maxWidth: '100%' }}
                width='65%'
                open={props.open}
                centered
                title={<span style={{ fontSize: '17px' }}>Edit Resource Details</span>} 
                
                onClose={props.close}
                extra={
                  <Space>
                    <CloseCircleOutlined onClick={props.close} style={{ fontSize: '22px'}}/>
                    {/* <Button >Cancel</Button> */}
                  </Space>
                }
                
                footer={[
                    <Flex wrap='wrap' gap="5px" style={{ height:'30px',justifyContent:'flex-end',paddingRight:'30px'}}>
                        <Button style={{ height:'30px',width:'120px'}} size='small' shape='round' key="submit" type="primary"   onClick={handleFormSubmit} loading={loading}>
                            Save
                        </Button>
                        <Button style={{ height:'30px',width:'120px' }} size='small' shape='round' key="back" onClick={props.close}>
                            Cancel
                        </Button>

                    </Flex>
                ]}
            >

                <div style={{
                }}>
                    <Form form={form} onSubmit={handleFormSubmit} layout='vertical'>
                     <Row align="middle" gutter={[30,10]} style={{padding:'0 0 0 15px',fontWeight:'600'}}>  
                    <Col xs={24} sm={15} >
                        <Row gutter={[30,10]} > 
                            <Col xs={24} sm={18} > <Form.Item name="isbn" label="ISBN" rules={[{ required: true }]}><Input onChange={(e) => handleInputChange("isbn", e.target.value)}/></Form.Item></Col>
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
                            <Col xs={24} sm={12}><Form.Item name='addededOn' label="Added On" rules={[{ required: true }]}></Form.Item></Col>
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
                    <Col xs={24} sm={9} >
                        {/* <Row gutter={[30,10]}>
                             <Col xs={24} sm={24}><UploadImage/> </Col>
                        </Row> */}
                        <Row gutter={[30,10]}>
                            <Col xs={24} sm={18}><Form.Item name='description' label="Description" ><Input onChange={(e) => handleInputChange("description", e.target.value)}/></Form.Item></Col>
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

export default EditModall
