'use client'
import React, { useEffect, useState } from 'react'
import ProfilePicUploadPopup from './Component/ProfilePicUploadPopup'
import { Button } from 'antd';






function page() {


  const [open, setOpen] = useState(false);

  const showModal = () => {
    
    setOpen(true);
  };

  const closeModal=()=>{
    setOpen(false);
  };
 
  return(
    <>
    <Button onClick={showModal}>yes</Button>
<ProfilePicUploadPopup open1={open} open={showModal} close={closeModal}/>
</>
)
}
  
 
export default page
