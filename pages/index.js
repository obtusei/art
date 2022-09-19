import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.main}>
        <p className={styles.caption}>Explore Nepali Art</p>
        <h1 className={styles.headline}>The largest collection of Nepali Art</h1>
        <p className={styles.subheadline}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        <div>
          <Link href="/about">Read more about us</Link> <br/><br/>
          <Link href="/arts" className={styles.mainButton}>Discover Arts</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
