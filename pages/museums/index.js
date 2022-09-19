import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import axios from "axios"
import safeJsonStringify from "safe-json-stringify"


export const getStaticProps = async (ctx) => {
   
    const res = await fetch('http://localhost:3000/api/museum')
    const museums = await JSON.parse(safeJsonStringify(res.json()))
    return {
        props: {
            data: museums
        }
    }
  
}

export default function Museums({data}) {
  return (
    <div className={styles.mainView}>
      <h1>Museums |</h1>
    <div className={styles.artgrid}>
    {
      data && data.map((card,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard topHidden p={"Hele"} href={`/museums/${card}`}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}
