import '../styles/globals.css'
import { ThemeProvider } from 'components/theme'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178475265-1"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-178475265-1');
        `}}/> 
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
