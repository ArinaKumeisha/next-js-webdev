import '../styles/globals.css'
import Layout from "../components/Layout";
import world from '../public/world.png';
import Head from 'next/head';
import Image from 'next/image';
import {AppProps} from 'next/app';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>app</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
              href="https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Inter:wght@200;300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;700&family=Vollkorn:wght@500;600&display=swap"
              rel="stylesheet"/>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={world}
        alt='world'
        width={500}
        placeholder="blur"/>
    </Layout>
  )
}

export default MyApp
