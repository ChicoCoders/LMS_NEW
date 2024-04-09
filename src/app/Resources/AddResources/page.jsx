'use client'
import React,{useState} from 'react'
import ResourcesAddForm from '../Components/ResourcesAddForm'

import { Form,Button, Flex,Modal} from 'antd';
import axios from 'axios';

function page(props) {

   const [loading, setLoading] = useState(false);
   const [form] = Form.useForm();
    
    const submitForm= async ()=>{console.log('hi')
        axios.post('http://localhost:5164/api/Resource/AddResource',{
            isbn:form.getFieldValue('isbn'),
            title:form.getFieldValue('title'),
            author:form.getFieldValue('auther'),
            type:form.getFieldValue('type'),
            quantity:form.getFieldValue('quantity'),
           //year:form.getFieldValue('year'),
            price:form.getFieldValue('price'),
            pages:form.getFieldValue('pagecount'),
            //addededOn:form.getFieldValue('addedOn'),
            addededOn:'wehbjew',
            addedByID:'sasindu',
           //category:form.getFieldValue('category'),
            imagePath:'gwsxyqj',
            url:'hvhjbkjh',
            location:form.getFieldValue('location'),
           //description:form.getFieldsValue('description'),
         })
         .then((response)=>{
            setTimeout(() => {
              
                setLoading(false);
                showSuccessModal();
                form.resetFields();
            }, 3000);
            alert(response.data.isbn);
         },(error)=>{
          
            setLoading(false);
            console.log(error);
         alert(error);}
         
        )
                 
        
}
const showSuccessModal = () => {
  Modal.success({
      title: 'Success',
      content: 'Successfully Return the Resource',
  });
};

const handleOk = () => {
  form.validateFields()
      .then(() => {
          setLoading(true);
          
          submitForm();
          console.log('hi');
         
      })

      .catch(() => {
          console.log("Validate Failed:");
      });




};
const handleCancel = () => {
  props.close();
  form.resetFields();
}
  return (
    <div>
      <ResourcesAddForm form={form}/>
      <Flex>
      <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Add Resource
      </Button>
                        
      <Button key="back" onClick={handleCancel}>
            Cancel
     </Button>
     </Flex>
    </div>
  )
}

export default page
