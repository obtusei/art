import ArtCard from "../../components/ArtCard";
import styles from "../../styles/artists.module.css"

export default function Arts() {
  return (
    <div>
      <h1 style={{'fontWeight':'normal'}}>Arts</h1>
      <div className={styles.artgrid}>
        {
          [...Array(20)].map((card,index) => (
            <div key={index}>
              <ArtCard/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
