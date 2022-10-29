import { Html, Head, Main, NextScript,Link } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
        
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> 
          <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600;6..96,700&family=Inria+Sans:wght@300;400;700&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300&family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700&family=Vidaloka&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}