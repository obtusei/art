import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowLeftIcon } from '../../components/Icons'
import bstyles from "../../styles/components/Button.module.css"
const fetcher = url => fetch(url).then(r => r.json())
function Art() {
  const router = useRouter();
  const { id } = router.query;
  const {data,error} = useSWR(`/api/art/${id}`,fetcher)
  if (!data){
    return <></>
  }
  else if (error){
    return <>Error</>
  }
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
          <hr />
          <p><span>Title: </span>{data.name}</p>
          <p><span>Artist: </span><Link href={`/artists/${data.artist.id}`}>{data.artist.name}</Link></p>
          <p><span>Musuems: </span><Link href={`/museums/${data.museum.id}`}>{data.museum.name}</Link></p>
          <p><span>Descriptions: </span>{data.description}</p>

        </div>
          </Col>
          <Col>
          
      <Image src={`/painting/${data.image}.jpg`} width={"500px"} height={"500px"} alt='name'/>
        
        </Col>
        </Row>
      </Container>
      
     
    </div>
  )
  }
}

export default Art