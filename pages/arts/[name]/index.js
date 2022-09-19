import Link from "next/link"
import { useRouter } from "next/router"
import ArtCard from "../../../components/ArtCard"
import styles from "../../../styles/artists.module.css"


// export async function getStaticPaths() {
//   const nepaliArt = ["Painting","Architecture","Sculpture","Wood craving","Pottery","Pagoda","Shikhara","Stupa"]
//   return {
//     paths: [{ params: { name: 'Painting' } }, { params: { name: 'Architecture' } }],
//     fallback: false,
//   }
// }

// export async function getStaticProps(context) {
//   return {
//     props: { post: {} },
//   }
// }

export default function Art() {
  const router = useRouter()
  const {name} = router.query
  return (
    <div className={styles.mainView}>
        <Link href={"/arts"} style={{paddingLeft:"200px"}}>Go Back</Link>
        <br/>
      <h1>{name}</h1>
    <div className={styles.artgrid}>
    {
      [1,2,3,4,5,7,8].map((art,index) => (
        <div key={index} className={styles.griditem}>
          <ArtCard h={art} botHidden href={`/arts/${name}/${art}`}/>
        </div>
      ))
    }
    </div>
    </div>
  )
}