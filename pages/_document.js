import { Html, Head, Main, NextScript,Link } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
        
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> 
          <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/> */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300;400;700&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300&family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}