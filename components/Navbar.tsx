import React, {FC} from 'react';
import styles from '../styles/Navbar.module.scss';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image'


const navigation = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Posts', path: '/posts'},
  {id: 3, title: 'Contacts', path: '/contacts'},
]
const Navbar: FC = () => {
  const { pathname } = useRouter()
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Image src='/gradient.png' width='80' height='80' alt='studio'/>
      </div>
      <div className={styles.links}>
        {navigation.map((nav) => {
          return (
            <Link key={nav.id} href={nav.path}>
              <a className={ pathname === nav.path ? styles.active :''}>{nav.title}</a>
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Navbar;