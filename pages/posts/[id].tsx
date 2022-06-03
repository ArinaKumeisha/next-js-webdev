import React from 'react';
import Heading from "../../components/Heading";
import Head from "next/head";
import {GetServerSideProps} from 'next';
import {PostWithInfo} from '../../types/types';

type Props = {
  post: PostWithInfo;
}
const Post = ({post}: Props) => {
  const {id, title, body} = post;
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Heading text='Here one post:' teg='h1'/>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps  = async (context)=> {
  // Fetch data from external API
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const post = await response.json()
  
  // Pass data to the page via props
  return {props: {post}}
}