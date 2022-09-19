import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"



export default function Museums() {
  const nepaliArt = ["Painting","Architecture","Sculpture","Wood craving","Pottery","Pagoda","Shikhara","Stupa"]
  return (
    <div className={styles.mainView}>
      <h1>Arts</h1>
    <div className={styles.artgrid}>
    {
      nepaliArt.map((card,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard h={card} p={"120"} href={`/arts/${card}`} image={"img1.jpg"}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}