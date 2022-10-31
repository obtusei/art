import { useRouter } from 'next/router'
import React from 'react'
import { Container,Form,Button, Tabs, Tab } from 'react-bootstrap'
import hstyles from '../styles/Home.module.css'
import styles from "../styles/artists.module.css"
import Image from 'next/image'
import { useState } from 'react'
import { SearchIcon } from '../components/Icons'
import useSWR from 'swr'
import ArtCard from '../components/ArtCard'
import { useSession } from 'next-auth/react'
import LoginToView from '../components/LoginToView'
const fetcher = url => fetch(url).then(r => r.json())
function Search() {
  const router = useRouter()
  const searchTerm = router.query.q
  const [shouldFetch, setShouldFetch] = useState(searchTerm != null ? true:false);
  const [search,setSearch] = useState(searchTerm ? searchTerm:"")
  const {data:arts,error:artsError} = useSWR(shouldFetch ?`/api/search?check=art&q=${search}`:null,fetcher)
  const {data:artists,error:artitstsError} = useSWR(shouldFetch ?`/api/search?check=artist&q=${search}`:null,fetcher)
  const {data:musuems,error:museumsError} = useSWR(shouldFetch ?`/api/search?check=museum&q=${search}`:null,fetcher)
  const {data:session} = useSession()
  if (session){
    return (
      <Container>
        <h4>Search</h4>
        <Form className="d-flex" style={{justifyContent:"center"}} action={`/search?q=${search}`}>
            <Form.Control
              type="search"
              placeholder="search arts and museums"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                fontFamily: 'Bodoni Moda, serif'

              }}
            />
            <Button className={hstyles.searchButtonDark} onClick={
              () => setShouldFetch(true)
            }>
              <SearchIcon/>
            </Button>
          </Form>
          <br />
          <Tabs
              defaultActiveKey="arts"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
            <Tab eventKey="arts" title="Arts">
                <div className={styles.artgrid}>
                  {
                    arts ? (arts.length > 0 ? arts.map((art,index) => (
                      <div key={index} className={styles.gridItem}>
                        <ArtCard name={art?.name} id={art?.id} image={`/painting/${art?.image}.jpg`} pathname="art"/>
                      </div>
                    )):<>Not found</>): artsError ? <>Error</>:<></>
                  }
                </div>
              </Tab>
              <Tab eventKey="artists" title="Artists">
                <div className={styles.artgrid}>
                  {
                    artists ? (artists.length > 0 ? artists.map((art,index) => (
                      <div key={index} className={styles.gridItem}>
                        <ArtCard name={art?.name} id={art?.id} image={`/artist/${art?.image}.jpg`} pathname="artist"/>
                      </div>
                    )):<>Not found</>): artitstsError ? <>Error</>:<></>
                  }
                </div>
              </Tab>
              <Tab eventKey="museums" title="Museums">
                <div className={styles.artgrid}>
                  {
                    musuems ? (musuems.length > 0 ? musuems.map((art,index) => (
                      <div key={index} className={styles.gridItem}>
                        <ArtCard name={art?.name} id={art?.id} image={`/museums/${art?.image}.jpg`} pathname="museum"/>
                      </div>
                    )):<>Not found</>): museumsError ? <>Error</>:<></>
                  }
                </div>
              </Tab>
        </Tabs>
      </Container>
    )
  }else{
    return <LoginToView/>
  }
}

export default Search