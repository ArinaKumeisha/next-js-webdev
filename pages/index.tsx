import React from 'react';
import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss';
import Head from "next/head";
import Socials from "../components/Socials";

const Index = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Main</title>
      </Head>
      <Heading text='Next.js' teg='h1'/>
      <Socials socials={socials}/>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const socials = await response.json();
  if(!socials){
    return {
      notFound: true,
    }
  }
  return {
    props: {socials},
  }
}
export default Index;