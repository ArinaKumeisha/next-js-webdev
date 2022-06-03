import React, {FC} from 'react';
import Heading from "../../components/Heading";
import Head from "next/head";
import styles from '../../styles/Contacts.module.scss';
import Link from "next/link";
import {User} from '../../types/types';
import {GetStaticProps} from 'next';

type Props = {
  users: User[]
}
const Contacts: FC<Props> = ({users}) => {
  return (
    <div className={styles.contacts}>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text='contacts' teg='h1'/>
      <div className={styles.usersBlock}>
        {users.map(user => {
          return (
            <div key={user.id} className={styles.user}>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
              <div>{user.address.street}</div>
              <div className='linkBlock'>
                <Link href={`/contacts/${user.id}`}><a className='link'>More
                  information</a></Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Contacts;

export const getStaticProps: GetStaticProps  = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  if (!users) {
    return {
      notFound: true,
    }
  }
  return {
    props: {users},
  }
}