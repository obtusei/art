import React, { useState } from 'react'
import { Button, Container,Form,FloatingLabel, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bstyles from "../../styles/components/Button.module.css"
import styles from '../../styles/signup.module.css'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '../../components/Icons'
import LoginToView from '../../components/LoginToView'

const fetcher = url => fetch(url).then(r => r.json())
function Edit({userData}) {
  const {data:session,error} = useSWR("/api/users/session",fetcher)
  const [name,setName] = useState(session ? session.name:"")
  const [username,setUsername] = useState(session ? session.username:"")
  const [email,setEmail] = useState(session ? session.email:"")
  const [bio,setBio] = useState(session ? session.bio:"")
  const [usernameError,setUsernameError] = useState(false)
  const [emailError,setEmailError] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const router = useRouter()
  const {data:mainSession} = useSession()

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  async function submitForm(){
      const data = { name:name,username:username, email:email,bio:bio === null ? "":bio}
    try{

      axios.put("/api/users/create",data,{withCredentials:true})
      .then((res) => {
        router.push(session ? `/${session.username}`:`/`);
      })
      .catch((err) => {
        if (err.response.data.message == "Email already exists"){
          setEmailError(true)
        }else if (err.response.data.message == "Username already exist"){
          setUsernameError(true)
        }else{
          console.log(err.response.data)
        }
      })
    }
    catch{
      console.log("error")
    }
    
  }

  const handleChange = async (event) => {
    
    const fileUploaded = event.target.files[0];
    setSelectedImage(fileUploaded);
    let formData = new FormData();
     if (selectedImage != null){
      formData.append("selectedFile", selectedImage);
      formData.append('originalname', selectedImage.name);
        try {
        axios({
          method: "POST",
          url: "/api/upload",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
          }).then((res) => {
            mutate("/api/users/session")
          }).catch((err) => {
            console.log("err.response.data")
            console.log(err.response.data)
          })
          
        } catch(error) {
          console.log(error)
        }
     }else{
      alert("NULL")
     }
  };

  if (!session){
    return <LoginToView/>
  }

  return (
    <Container className={styles.container}>
      <Row>
        <h3>Edit Profile</h3>
        <hr />
        <br />
        <Col xs={6} md={4} style={{textAlign:"center"}}>
        {
        session && session.image != null ?
        <Image src={session?.image} alt="image" width={"120px"} height={"120px"} layout="intrinsic" style={{borderRadius:"100px"}}/>
        :
        <Image src={"/placeholder.jpg"} alt="image" width={"120px"} height={"120px"} layout="intrinsic" style={{borderRadius:"100px"}}/>
        }
         <br />
        <Button className={bstyles.defaultDark} onClick={handleClick}>Change Profile</Button>
        <input type="file" id="upload" ref={hiddenFileInput} onChange={handleChange} hidden/>
        {/* <label htmlFor="upload" style={{
           display: "inline-block",
            backgroundColor: "indigo",
            color: "white",
            padding: "0.5rem",
            cursor: "pointer"
        }}>Choose file</label> */}
        </Col>
      <Col xs={12} md={8}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={() => setUsernameError(false)}/>
          <Form.Text style={{color:"red"}}>{usernameError ? "Username must be unique":""}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={() => setEmailError(false)}/>
          <Form.Text style={{color:"red"}}>{emailError ? "Email must be unique":""}</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Bio</Form.Label>
          <Form.Control as="textarea" placeholder="Enter your bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </Form.Group>
        
        <Button onClick={() => submitForm()} className={bstyles.filled}>
          Save Changes
        </Button><br /><br />
        <Button className={bstyles.defaultDark} onClick={() => router.back()}>
          <ArrowLeftIcon/> Go Back
        </Button>
      </Form></Col>
      </Row>
    </Container>
  )
}

export default Edit