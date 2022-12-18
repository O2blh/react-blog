import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IFriendLink } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getFriendsLink } from '@/request/api'
import Link from 'next/link'
import styles from './index.module.css'

interface IProps {
  friendsLinkList: Array<IFriendLink>
}

const FriendLink: NextPage<IProps> = ({ friendsLinkList }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 友链`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>友情链接</div>
      <div className={styles.content}>
        {friendsLinkList.map((item) => {
          return (
            <Link key={item._id} href={item.url}>
              <a className={styles.friendLinkItem} href={item.url} target='_blank' rel='noreferrer'>
                <img src={item.avatar} className={styles.avatar} />
                <div className={styles.info}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.desc}>{item.desc}</div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default FriendLink

export const getServerSideProps: GetServerSideProps = async (context) => {
  const friendsLinkList = await getFriendsLink()
  return {
    props: {
      friendsLinkList,
    },
  }
}
