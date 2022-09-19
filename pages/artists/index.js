import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"

export default function Home() {
  return (
    <div className={styles.mainView}>
      <h1>Artists</h1>
    <div className={styles.artgrid}>
    {
      [...Array(20)].map((card,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard topHidden href={'/arts'}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}
