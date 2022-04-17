import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './style.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.AppBox}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
