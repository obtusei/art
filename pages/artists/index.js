import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"

export default function Home() {
  return (
    <div>
      <h1>Artists</h1>
    <div className={styles.artgrid}>
    {
      [1,2,3,4,5,6,7,8,9].map(card => (
        <ArtCard/>
      ))
    }
    </div>
    </div>
  )
}
