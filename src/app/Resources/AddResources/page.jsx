'use client'
import React,{useState} from 'react'
import ResourcesAddForm from '../Components/ResourcesAddForm'
//import EditModel from '../Components/EditModal'
import { Form,Button, Flex,Modal,Tooltip } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { HomeOutlined,InteractionOutlined,LeftCircleOutlined} from '@ant-design/icons';
import AdressBar from '../../Component/AdressBar';

const PageRoot = [
  {
        key:'1',
      href: '',
      title: <HomeOutlined />,
  },
  {
    key:'2',
      href: '',
      title: (
          <>
              <InteractionOutlined />
              <span>Reservations</span>
          </>
      ),
  },
  {
    key:'3',
      href: '',
      title: (
          
              <span> About Reservation</span>
      ),
  },
]

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
            imagePath:'gwsxyqj',
            url:'hvhjbkjh',
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
      <Flex justify="space-between" style={{marginBottom:'25px'}}>
        <div>
          <font style={{ fontSize: '18px',fontWeight:'600'}}>Add New Resource</font>
        </div>
        <div >
        <Tooltip title="Go Back">
          <Link href="/Resources">
             <LeftCircleOutlined style={{ fontSize: '22px',marginTop:'7px',color:'black'}}/>
          </Link> 
        </Tooltip>
        </div>
      </Flex>
      <ResourcesAddForm form={form} />
      <Flex justify="end">
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Add Resource
        </Button>

        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>
      </Flex>
    </div>
  );
}

export default page
