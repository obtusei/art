import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import useSWR from "swr"
import {useSession} from "next-auth/react"

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const {data,error} = useSWR('/api/artist', fetcher)
  const {data:session} = useSession();
  if (!session){
    return <p>Login to view</p>
  }
  return (
    <div className={styles.mainView}>
      <h1>Artists</h1>
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
