import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import axios from "axios"
import safeJsonStringify from "safe-json-stringify"
import useSWR from "swr"
const fetcher = url => fetch(url).then(r => r.json())
export default function Museums() {
  const { data, error } = useSWR('/api/museum', fetcher)

  return (
    <div className={styles.mainView}>
      <h1 style={{paddingLeft:"20px"}}>museums</h1>
    <div className={styles.artgrid}>
    {
      data ? data.map((museum,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard topHidden p={museum.name} href={`/museums/${museum.id}`} image={`/museums/${museum.image}.jpg`}/>
        </div>
      )): error ? <>Error</>:<></>
    }
    </div>
    </div>
  )
}
