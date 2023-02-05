import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks'
import { useLocalStorageState, useMount } from 'ahooks'
import { setMode } from '@/redux/modeSlice'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '../BackToTop'
import styles from './style.module.css'
import { modeMap, modeMapProps } from './Header/modeMap'

const Layout = ({ children }) => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.mode.value)
  const bgClasses = [styles.bg0, styles.bg1, styles.bg2]

  const [localMode, setLocalMode] = useLocalStorageState('localMode')

  useMount(() => {
    if (localMode) {
      dispatch(setMode(Number(localMode)))
    }
  })

  useEffect(() => {
    setLocalMode(mode)
    modeMapProps.forEach((prop) => {
      const bodyStyle = window.document.getElementsByTagName('body')[0].style
      bodyStyle.setProperty(prop, modeMap[prop][mode])
    })
  }, [mode, setLocalMode])

  return (
    <div className={classNames(styles.AppBox, bgClasses[mode])}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
