import React, {FC} from 'react';
import Head from "next/head";
import styles from '../../styles/Posts.module.scss'
import Link from "next/link";

import {GetStaticProps} from 'next';
import {Post} from '../../types/types';
import Heading from '../../components/Heading';



type Props = {
  posts: Post[]
}
const Posts = ({posts}:Props) => {
  if(!posts){
    return {
      notFound: true,
    }
  }
  return (
    <div className={styles.posts}>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text='All posts are here' teg='h3'/>
      <div className={styles.postBlock}>
        {posts.map(post => {
          return <div key={post.id} className={styles.post}>
            <h1>{post.title}</h1>
            <div className='linkBlock'>
              <Link className='link' href={`/posts/${post.id}`}><a className='link'>More
                information</a></Link>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}