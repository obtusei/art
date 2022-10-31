import styles from '../styles/Home.module.css'
import bstyles from '../styles/components/Button.module.css'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
  const [searchTerm,setSearchTerm] = useState("")
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Container style={{color:"white"}}>
          <Row style={{height:"100vh",alignItems:"center"}}>
            <Col style={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
              <div className={styles.stack}>
                <p className={styles.caption}>explore nepali art</p>
              <h1 className={styles.headline}>art history tracker</h1>
              </div>
              
              <Form className="d-flex" style={{justifyContent:"center"}} action={`/search?q=${searchTerm}`}>
                  <Form.Control
                    type="search"
                    placeholder="search arts and museums"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      backgroundColor:"transparent",
                      border:"none",
                      borderRadius:"0px",
                      fontSize:"1rem",
                      borderBottom:"1px solid rgba(255,255,255,0.8)",
                      maxWidth:"500px",
                      color:"white",
                      fontFamily: 'Bodoni Moda, serif'

                    }}
                  />
                  <Button className={styles.searchButton} onClick={
                    () => router.push(`/search?q=${searchTerm}`)
                  }>
                    <Image src={"/search.svg"} width={"24px"} height={"24px"} alt={"search"}/>
                  </Button>
                </Form>
                <br />
                <br />
                <Button className={bstyles.outline} onClick={() => router.push("/about")}>about us <ArrowIcon/></Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}


const ArrowIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
  )
}