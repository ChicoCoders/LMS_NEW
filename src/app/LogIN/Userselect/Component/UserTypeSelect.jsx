'use client'
import { Button, Divider } from 'antd'
import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { UserContext } from '../../../Context/Context'
import Cookies from "js-cookie";
import axios from 'axios'

function UserTypeSelect({spinning,setSpinning}) {
    const user = React.useContext(UserContext).user;
    const router =useRouter();
    const getUser = React.useContext(UserContext).GetUser;
    const token =Cookies.get('jwt');
    const selectPatron=async(usertype)=>{
        try{
        Cookies.remove('jwt');
        const response = await axios.post(`http://localhost:5164/api/Auth/selectusertype?userType=${usertype}`,{},
        { withCredentials: true ,
          headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': "application/json",
                'timeout' : 1000,
        }
        });
        getUser();
        while (user.userType!=usertype){ 
         
        }
       
        router.push("/Dashboard");
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
      setSpinning(false);
    }, [])
  return (
    <>
    <Divider />
    <div><center><Button type='primary' style={{width:100}} size='large' onClick={()=>selectPatron("admin")}>Admin</Button></center></div>
    <Divider />
    <div><center><Button type='primary' style={{width:100}} size='large' onClick={()=>selectPatron("patron")}>Patron</Button></center></div>
    <Divider />
    </>
  )
}

export default UserTypeSelect