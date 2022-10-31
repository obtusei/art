import Image from 'next/image'
import React from 'react'
import bstyles from "../../styles/components/Button.module.css"
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowLeftIcon } from '../../components/Icons'
import LoginToView from '../../components/LoginToView'

const fetcher = url => fetch(url).then(r => r.json())

function Artist() {
  const router = useRouter();
  const {id} = router.query
  const {data,error} = useSWR(`/api/artist/${id}`,fetcher)
  if (!data) return <LoginToView/>
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