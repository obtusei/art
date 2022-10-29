import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Image from 'next/image'
import Lottie from "lottie-react";
import loginAnimation from "../public/login.json"

import bstyles from "../styles/components/Button.module.css"
import { ArrowIcon } from './Icons';
import { useRouter } from 'next/router';
function LoginToView() {
  const router = useRouter()
  return (
    <div style={{fontFamily:"Inria Sans, sans-serif"}}>
      <Container style={{textAlign:"center"}}>
        <Lottie animationData={loginAnimation} style={{height:300}}/>
        <h3>Login to view</h3>
        <p>Please login to view the content</p>
        <Button className={bstyles.outlineDark} onClick={() => router.push("/login")}>Go to Login Page<ArrowIcon isDark={true}/></Button>
      </Container>
    </div>
  )
}

export default LoginToView