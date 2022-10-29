import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from '../components/OffCanvas';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {/* <Navbar/> */}
      <OffcanvasExample/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
