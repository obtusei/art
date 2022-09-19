import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"

export default function Museums() {
  return (
    <div className={styles.mainView}>
      <h1>Museums</h1>
    <div className={styles.artgrid}>
    {
      [...Array(20)].map((card,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard topHidden href={`/museums/${card}`}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}
