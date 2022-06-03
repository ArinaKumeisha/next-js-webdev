import React, {FC} from 'react';
import styles from '../styles/Socials.module.scss'
import Head from "next/head";
import {SocialsType} from '../types/types';

type Props = {
  socials: SocialsType[]
}
const Socials: FC<Props> = ({socials}) => {
  return (
    <div className={styles.block}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
      </Head>
      <h1>Main Page with information</h1>
    <div className={styles.socials}>
      {socials && socials.map(el => {
        return (
          <div key={el.id} className={styles.social}>
            <div>{el.icon}</div>
            <a href={el.path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${el.icon} ${styles.iconStyle}`} aria-hidden="true" />
            </a>
          </div>
        )
      })}
    </div>
    </div>
  );
};

export default Socials;