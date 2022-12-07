import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IGallery } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getGalleryById } from '@/request/api'

import styles from './index.module.css'

interface IProps {
  gallery: IGallery
}

const GlaDetail: NextPage<IProps> = ({ gallery }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | ${gallery.title}`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>{gallery.title}</div>
      <div className={styles.content}>
        {gallery.pics.map((pic) => {
          return <img key={pic} src={pic} alt='' className={styles.pic} />
        })}
      </div>
    </div>
  )
}

export default GlaDetail

export const getServerSideProps: GetServerSideProps = async (context) => {
  let galId = ''
  if (context.query.galId) {
    galId = String(context.query.galId)
  }
  const res = await getGalleryById(galId)
  let notFound = false
  if (!res[0]) {
    notFound = true
  }
  return {
    props: {
      gallery: res[0],
    },
    notFound,
  }
}
