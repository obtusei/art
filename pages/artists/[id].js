import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import bstyles from "../../styles/components/Button.module.css"
import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowLeftIcon } from '../../components/Icons'

const fetcher = url => fetch(url).then(r => r.json())
function Artist() {
  const router = useRouter();
  const {id} = router.query
  const {data,error} = useSWR(`/api/artist/${id}`,fetcher)
  const getSperated = () => {
    const text = "Email- info@mona.com.np, Phone- 01-4700800"
    const splited = text.split("- ")
    
    return {email:splited[1].split(",")[0],phone:splited[2]}
  }
  if (!data) return <></>
  else if (error) return <p>Error</p>
  else {
    return (
     <div style={{padding:"10px"}}>
      <Button className={bstyles.defaultDark} style={{marginBottom:"20px"}} onClick={() => router.back()}>
        <ArrowLeftIcon/>
      </Button>
      <Container fluid>
        <Row>
          <Col>
          <div>
          <h1>{data.name}</h1>
          <h5>About:</h5>
          <p>{data.description}</p>
          
        </div>
          </Col>
          <Col>
          <div style={{minWidth:"50%",backgroundImage:"url(`./img1.jpg`)"}}>
      <Image src={`/artist/${data.image}.jpg`} width={"500px"} height={"500px"} alt='name'/>
        </div>
        </Col>
        </Row>
      </Container>

      
     
    </div>
    )
  }
}

export default Artist