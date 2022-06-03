import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import Heading from '../components/Heading';
import {Head} from 'next/document';




const Error = () => {
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      return router.push('/')
    }, 3000)
  }, [])
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text='Error' teg='h1'/>
      <Heading text='Something is going error' teg='h2'/>
    </>
  );
};

export default Error;