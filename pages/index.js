import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      
      <div>
        <p>Explore Nepali Art</p>
        <h1>The largest collection of Nepali Art</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        <div>
          <Link href="/about">Read more about us</Link>
          <Link href="/arts">Discover Arts</Link>
        </div>
      </div>
    </div>
  )
}
