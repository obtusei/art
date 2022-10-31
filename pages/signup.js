import styles from '../styles/signup.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Lottie from "lottie-react";
import axios from 'axios';
import {useSession} from "next-auth/react"
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import registerAnimation from "../public/register.json";
export default function Home() {

  const [fullname,setFullname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const[password,setPassword]= useState('');
  const [usernameError,setUsernameError] = useState(false)
  const [emailError,setEmailError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
  const router  = useRouter();
  const {data:session} = useSession();

  async function submitForm(){
    
    if (!passwordError){
      const data = { name:fullname,username:username, email:email,password:password}
    try{

      axios.post("/api/users/create",data,{withCredentials:true})
      .then((res) => {
        router.push("/login");
      })
      .catch((err) => {
        if (err.response.data.message == "Email already exists"){
          setEmailError(true)
        }else{
          setUsernameError(true)
        }
      })

      // router.push('/login')
    }
    catch{
      console.log("error")
    }
    }
  }

  if (session){
    router.push('/');
  }
  return (
    <Container className={styles.container}>
        <Row>
          <Col style={{display:"flex",justifyContent:"center"}}>
            <Lottie animationData={registerAnimation} style={{height:500}}/>;
        </Col>

        <Col>
            <h1>Sign Up</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>full name</Form.Label>
                  <Form.Control type={'text'} placeholder={"enter your name"} value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                  <Form.Text style={{color:"red"}}></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>username</Form.Label>
                  <Form.Control type={'text'} placeholder={"enter your username"} value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={() => setUsernameError(false)}/>
                  <Form.Text style={{color:"red"}}>{usernameError ? "Username must be unique":""}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>email</Form.Label>
                  <Form.Control type={'email'} placeholder={"enter your email"} value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={() => setEmailError(false)}/>
                  <Form.Text style={{color:"red"}}>{emailError ? "Email must be unique":""}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type={'password'} placeholder={"create a password"} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={() => setPasswordError(false)}/>
                  <Form.Text style={{color:"red"}}>{passwordError ? "Password must be longer than six letters":""}</Form.Text>
                </Form.Group>
                <div>
                  <Button onClick={ () => {
                    if (password.length < 6){
                      setPasswordError(true)
                    }else{

                      submitForm()
                    }
                  }} style={{width:"100%",backgroundColor:"red",border:"none"}} disabled={ email === "" || password === "" || username === ""} >
                    Sign Up 
                  </Button>
                </div>
              </Form>
              <br />
              <div>
                <p>already have an account? <Link href="/login"><a style={{color:"red"}}>login</a></Link></p>
              </div>
          </Col>
        </Row>
    </Container>
  )
}
