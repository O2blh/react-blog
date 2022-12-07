import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IGallery } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getGalleryList } from '@/request/api'
import Link from 'next/link'

import styles from './index.module.css'

interface IProps {
  galleryList: Array<IGallery>
}

const Gallery: NextPage<IProps> = ({ galleryList }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 图库`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>图库</div>
      <div className={styles.content}>
        {galleryList.map((gallery) => {
          const encodeStr = encodeURIComponent(gallery._id)
          return (
            <Link key={gallery._id} href={`/galDetail?galId=${encodeStr}`} passHref>
              <a
                href={`/claDetail?tag=${encodeStr}`}
                className={styles.gallery}
                style={{ backgroundImage: `url('${gallery.cover}')` }}
              >
                <div className={styles.galleryTitle}>{gallery.title}</div>
                <div className={styles.split} />
                <div className={styles.desc}>{gallery.descr}</div>
                <div className={styles.mask} />
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery

export const getServerSideProps: GetServerSideProps = async (context) => {
  const galleryList = await getGalleryList()
  return {
    props: {
      galleryList,
    },
  }
}
