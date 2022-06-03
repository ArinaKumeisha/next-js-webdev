import React, {FC} from 'react';
import Heading from "../../components/Heading";
import Head from "next/head";
import {User} from '../../types/types';
import {GetServerSideProps} from 'next';

type Props = {
  user: User;
}
const Contact: FC<Props>= ({user}) => {
  const {name, username, email, id} = user;
  const {street, suite, city} = user.address;
  if(!user){
    return <Heading teg='h3' text='Empty contact'/>
  }
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
    <Heading text={`info about user with id ${id}`} teg='h1'/>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <h3>{email}</h3>
      <div>{street}</div>
      <div>{suite}</div>
      <div>{city}</div>
    </>
  );
};

export default Contact;
export const getServerSideProps: GetServerSideProps = async (context) =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const data = await response.json();
  return {
    props: {user: data}, // will be passed to the page component as props
  }
}