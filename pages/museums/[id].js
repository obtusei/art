import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import useSWR from "swr"
import styles from "../../styles/detail.module.css"
const fetcher = url => fetch(url).then(r => r.json())

import ArtCard from "../../components/ArtCard"
import bstyles from "../../styles/components/Button.module.css"
import { useRouter } from 'next/router'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowLeftIcon } from '../../components/Icons'
function Artist() {

  const router = useRouter()
  const { data, error } = useSWR(`/api/museum/${router.query.id}`, fetcher)
  
  const getSperated = () => {
    const text = "Email- info@mona.com.np, Phone- 01-4700800"
    const splited = text.split("- ")
    
    return {email:splited[1].split(",")[0],phone:splited[2]}
  }
  if (!data) return <></>
  else if (error) return <p>Error</p>
  else{
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
          <h5>Contacts:</h5>
          <p><b>Email: </b><br /><a href={`mailto:${getSperated().email}`} style={{color:"red"}}>{getSperated().email}</a><br/>
          <b>Phone: </b><br />{getSperated().phone}</p>
          
        </div>
          </Col>
          <Col>
          <div>
            {/* fill,fixed,intrinsic,responsive */}
      <Image src={`/museums/${data.image}.jpg`} alt={data.name} width={"660px"} height={"500px"} layout="intrinsic"/>
        </div>
        </Col>
        </Row>
      </Container>
      
     
    </div>
  )
  }
}

export default Artist