import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import useSWR from "swr"
import {useSession} from "next-auth/react"
import LoginToView from "../../components/LoginToView"

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const {data,error} = useSWR('/api/artist', fetcher)
  const {data:session,status} = useSession();
  const isLoading = status === "loading"
  if (!session){
    if (isLoading){
      return <></>
    }else{
      return <LoginToView/>
    }
  }
  return (
    <div className={styles.mainView}>
      <h1 style={{paddingLeft:"20px"}}>Artists</h1>
    <div className={styles.artgrid}>
    {
      data ? data.map((artist,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard p={artist.name} topHidden href={`/artists/${artist.id}`} image={`/artist/${artist.image}.jpg`}/>
        </div>
      )): error ? <>Error</>:<></>
    }
    </div>
    </div>
  )
}
