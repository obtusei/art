import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import useSWR from "swr"
import LoginToView from "../../components/LoginToView"
import {useSession} from "next-auth/react"
const fetcher = url => fetch(url).then(r => r.json())

export default function Museums() {
  const nepaliArt = ["Painting","Architecture","Sculpture","Wood Carving","Pottery"]
  const {data,error} = useSWR("/api/art",fetcher)
  const {data:session} = useSession();
  if (!session){
    return <LoginToView/>
  }
  return (
    <div className={styles.mainView}>
      <h1 style={{paddingLeft:"20px"}}>Arts</h1>
    <div className={styles.artgrid}>
    {
      data ? data.map((card,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard name={card.name} id={card.id} image={`/painting/${card.image}.jpg`} pathname={"art"}/>
        </div>
      )) : error ? <>Error</>:<></>
    }
    </div>
    </div>
  )
}