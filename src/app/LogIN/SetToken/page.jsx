'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import Cookies from "js-cookie";
import React, { useEffect } from 'react'

function page() {

    const searchParams = useSearchParams()
    const jwt = searchParams.get('jwt')
    const router = useRouter();
    

  
  useEffect(() => {
    if (jwt) {
      // Save token as a cookie
      Cookies.set('jwt', jwt, { path: '/' }, { httpOnly: false });
    }
  },[]);

  return (
    <a href='/LogIN/ResetPassword'>Click Here to Reset Password..............</a>
  )
}

export default page