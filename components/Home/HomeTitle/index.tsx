import React from 'react'
import { SITE_NAME } from '@/constants/siteInfo'
import usePoem from '@/hooks/usePoem'
import styles from './style.module.css'

const HomeTitle = () => {
  const [poem] = usePoem()
  return (
    <div className={styles.box}>
      <div className={styles.name}>{SITE_NAME}</div>
      <div className={styles.desc}>{poem?.content}</div>
    </div>
  )
}

export default HomeTitle
