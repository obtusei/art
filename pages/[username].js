import React from 'react'
import { useSession, signOut, getSession } from "next-auth/react"
import { Button, Container,Tabs,Tab } from 'react-bootstrap'
import styles from "../styles/artists.module.css"
import bstyles from "../styles/components/Button.module.css"
import useSWR from 'swr'
import ArtCard from '../components/ArtCard'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
const fetcher = url => fetch(url).then(r => r.json())

export const getStaticPaths = async () => {
  const response = await axios.get("http://localhost:3000/api/users/all")
  const users = response.data
  const paths = users.map((user) => ({
    params: {
      username:user.username.toString().toLowerCase()
    }
  }))
  
  return{
    paths:paths,
    fallback:false
  }
}

export const getStaticProps = async (context) => {
  const username = context.params?.username
  const session = await getSession(context)
  const response = await axios.get(`http://localhost:3000/api/users/${username}`)
  const user = response.data
  return {
    props: { 
      user:user,
    },
  }
}

function Profile({user}) {
  const { data:savedArt, error:savedArtError } = useSWR('/api/users/saved/art', fetcher)
  const { data:savedArtist, error:savedArtistError } = useSWR('/api/users/saved/artist', fetcher)
  const { data:savedMuseums, error:savedMuseumError } = useSWR('/api/users/saved/museum', fetcher)

  const { data:favArt, error:favArtError } = useSWR(`/api/users/fav/art?id=${user.id}`, fetcher)
  const { data:favArtist, error:favArtistError } = useSWR(`/api/users/fav/artist?id=${user.id}`, fetcher)
  const { data:favMuseums, error:favMuseumError } = useSWR(`/api/users/fav/museum?id=${user.id}`, fetcher)
  const {data:session} = useSession()
  const isNative = session ? (user.email === session.user.email ? true:false):false
  const router = useRouter()
  return (
    <Container>
      <h1>User Profile</h1>
      <hr />
      <div
      style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        fontFamily: 'Inria Sans, sans-serif'
      }}
      >
        <div
      style={{
        display:"flex",
        flexDirection:"row",
        gap:"20px"
        
      }}
      >
        {
          user && user.image != null  ? <Image src={user.image} alt='image' width={"120px"} height={"120px"} style={{borderRadius:"100px"}}/>
          :<Image src={"/placeholder.jpg"} alt='image' width={"120px"} height={"120px"} style={{borderRadius:"100px"}}/>
        }
      <div>
        <div style={{
          display:"flex",
          flexDirection:"column",
          
        }}>
          <h3>{user.name}</h3>
          <p><b>@{user.username}</b></p>
        </div>
        <p>{user.bio}</p>
      </div>
      </div>
      <div>   
        {isNative ? <Button className={bstyles.outlineDark} onClick={() => router.push("/profile/edit")}>Edit Profile</Button>:<></>}
      </div>
      </div>
      <br />
      <hr />
      <Tabs
        defaultActiveKey="favorites"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
      <Tab eventKey="favorites" title="Favorites">
        <h4>Arts</h4>
        <div className={styles.artgrid}>
          {
            favArt ? (favArt.length > 0 ? favArt.map((fav,index) => (
              <div key={index} className={styles.gridItem}>
                <ArtCard name={fav?.art?.name} id={fav?.art?.id} image={`/painting/${fav?.art.image}.jpg`} pathname="art"/>
              </div>
            )):<EmptyContent/>): favArtError ? <>Error</>:<></>
          }
        </div>
        <br />
        <h4>Museums</h4>
        <div className={styles.artgrid}>
          {
            favMuseums ? (favMuseums.length > 0 ? favMuseums.map((fav,index) => (
              <div key={index} className={styles.gridItem}>
                <ArtCard name={fav?.museum?.name} id={fav?.museum?.id} image={`/museums/${fav?.museum?.image}.jpg`} pathname="museum"/>
              </div>
            )):<EmptyContent/>): favMuseumError ? <>Error</>:<></>
          }
        </div>
        <br />
        <h4>Artists</h4>
        <div className={styles.artgrid}>
          {
            favArtist ? (favArtist.length > 0 ? favArtist.map((fav,index) => (
              <div key={index} className={styles.gridItem}>
                <ArtCard name={fav?.artist?.name} id={fav?.artist?.id} image={`/artist/${fav?.artist?.image}.jpg`} pathname="artist"/>
              </div>
            )):<EmptyContent/>): favArtistError ? <>Error</>:<></>
          }
        </div>
      </Tab>
      {/* SAVED */}
      {
        isNative && <Tab eventKey="saved" title="Saved">
        <h4>Arts</h4>
        <div className={styles.artgrid}>
          {
            savedArt ? (savedArt.length > 0 ? savedArt.map((saved,index) => (
              <div key={index} className={styles.gridItem}>
                <ArtCard name={saved?.art?.name} id={saved?.art?.id} image={`/painting/${saved?.art.image}.jpg`} pathname="art"/>
              </div>
            )):<EmptyContent/>): savedArt ? <>Error</>:<></>
          }
        </div>
        <br />
        <h4>Museums</h4>
        <div className={styles.artgrid}>
          {
            savedMuseums ? (savedMuseums.length > 0 ? savedMuseums.map((saved,index) => (
              <div key={index} className={styles.gridItem}>
                <ArtCard name={saved?.museum?.name} id={saved?.museum?.id} image={`/museums/${saved?.museum?.image}.jpg`} pathname="museum"/>
              </div>
            )):<EmptyContent/>): savedMuseumError ? <>Error</>:<></>
          }
        </div>
        <br />
        <h4>Artists</h4>
        <div className={styles.artgrid}>
          {
            savedArtist ? (savedArtist.length > 0 ? savedArtist.map((saved,index) => (
              <div key={index} className={styles.gridItem}>
                <ArtCard name={saved?.artist?.name} id={saved?.artist?.id} image={`/artist/${saved?.artist?.image}.jpg`} pathname="artist"/>
              </div>
            )):<EmptyContent/>): savedArtistError ? <>Error</>:<></>
          }
        </div>
      </Tab>
      }
      </Tabs>
    

    </Container>
  )
}


const EmptyContent = () => {
  return(
    <Container>
      No content
    </Container>
  )
}
export default Profile