import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
        <script src="//cdn.bootcss.com/jquery/2.1.1/jquery.min.js" />
        <script src="//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}