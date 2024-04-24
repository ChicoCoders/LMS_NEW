'use client'
import React,{useState} from 'react'
import ResourcesAddForm from '../Components/ResourcesAddForm'
import { Form,Button, Flex,Modal,Tooltip } from 'antd';
import axios from 'axios';


function page(props) {

   const [loading, setLoading] = useState(false);
   const [form] = Form.useForm();
    const submitForm= async ()=>{
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
            addededOn:'10 Monday',
            addedByID:'sasindu',
            imagePath:'imageURL',
            url:'rvtfe',
            location:form.getFieldValue('location'),
            description:form.getFieldValue('description'),
          
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
          console.log(response.data.imagePath);
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
      <Flex justify="space-between">
        <div>
          <font style={{ fontSize: '18px',fontWeight:'600'}}>Add New Resource</font>
        </div>
      </Flex>
      <ResourcesAddForm form={form} />
      <Flex justify="end">
        <Button
          key="submit"
          type='primary' size="medium" 
          loading={loading}
          onClick={handleOk}
          style={{marginRight:'10px'}}
        >
          Add Resource
        </Button>

        <Button key="back"  size="medium"  onClick={handleCancel}>
          Cancel
        </Button>
      </Flex>
    </div>
  );
}

export default page
