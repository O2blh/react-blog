import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '../BackToTop'
import styles from './style.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.AppBox}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
