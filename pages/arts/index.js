import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import useSWR from "swr"
import {useSession} from "next-auth/react"
const fetcher = url => fetch(url).then(r => r.json())

export default function Museums() {
  const nepaliArt = ["Painting","Architecture","Sculpture","Wood Carving","Pottery"]
  const {data,error} = useSWR("/api/art",fetcher)
  const {data:session} = useSession();
  if (!session){
    return <p>Login to view</p>
  }
  return (
    <div className={styles.mainView}>
      <h1>Arts</h1>
    <div className={styles.artgrid}>
    {
      data ? data.map((card,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard h={card.name} botHidden href={`/arts/${card.id}`} image={`/painting/${card.image}.jpg`}/>
        </div>
      )) : error ? <>Error</>:<></>
    }
    </div>
    </div>
  )
}