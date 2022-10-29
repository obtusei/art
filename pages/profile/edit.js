import React, { useEffect, useState } from 'react'
import { Button, Container,Form,FloatingLabel, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import bstyles from "../../styles/components/Button.module.css"
import axios from 'axios'
import useSWR from 'swr'

// export async function getServerSideProps(context) {

//   const res = await axios.get("/api/users/session",{withCredentials:true})
//   const userData = res.data
//   return {
//     props: {
//       userData:userData
//     }, // will be passed to the page component as props
//   }
// }

const fetcher = url => fetch(url).then(r => r.json())
function Edit({userData}) {
  const {data:session,error} = useSWR("/api/users/session",fetcher)
  const [name,setName] = useState(session ? session.name:"")
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [bio,setBio] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = async (event) => {
     let formData = new FormData();

     const fileUploaded = event.target.files[0];
     formData.append("selectedFile", selectedFile);
     setSelectedImage(fileUploaded);
      try {
      const response = await axios({
        method: "post",
        url: "/api/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }
  };

  return (
    <Container>
      <Row>
        <h3>Edit Profile</h3>
        <hr />
        <br />
        <Col xs={6} md={4} style={{textAlign:"center"}}>
        <Image src={"/img1.jpg"} alt="image" width={"120px"} height={"120px"} layout="intrinsic" style={{borderRadius:"100px"}}/> <br />
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
          <Form.Control type="text" placeholder="Enter your username" />
          <Form.Text className="text-muted">
            It must be unique
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            It must be unique
          </Form.Text>
        </Form.Group>
        
        <FloatingLabel
          controlId="floatingTextarea"
          label="Enter your bio"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        
        <Button variant="primary" type="submit">
          Save Changes
        </Button><br /><br />
        <Button variant="primary" type="submit">
          Go Back
        </Button>
      </Form></Col>
      </Row>
    </Container>
  )
}

export default Edit