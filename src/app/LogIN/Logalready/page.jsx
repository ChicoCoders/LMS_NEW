import React from 'react';
import LoginForm from '../Component/Loginform';
import Image from 'next/image';



const Login = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    display: 'flex',
    flexWrap: 'wrap',
    width: '800px',
    minHeight: '350px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const loginFormStyle = {
    background: 'white',
    flexWrap: 'wrap',
    flex: 1,
    minWidth: '300px',
  };

 

  const imageSectionStyle = {
    flexWrap: 'wrap',
    flex: 1,
    display: 'flex',	
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,20,41)',	
  };

  return (
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8f8f8"}}>
    <div style={containerStyle}>
    <div style={imageSectionStyle}>
      <Image src='/librarylogo.png'  width={250} height={150} alt=''/>
      </div>
      <div style={loginFormStyle}>
        <h2 style={{margin:"30px 0 0 0",textAlign:"center"}}>Login</h2>
        <LoginForm />
      </div>
      
    </div>
    </div>
  );
};

export default Login;
