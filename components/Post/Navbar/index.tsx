import React, { useEffect, useMemo, useState } from 'react'
import MarkNav from 'markdown-navbar'
import classNames from 'classnames'
import { throttle } from '@/utils/helper'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

import styles from './style.module.css'

const NavBar = ({ content }) => {
  const handleScroll = () => {
    const markNav = document.getElementsByClassName('markdown-navigation')[0]
    if (markNav) {
      const { scrollHeight, scrollTop, clientHeight: navHeight } = markNav
      if (scrollHeight < navHeight) {
        return
      }
      const active = markNav.querySelector<HTMLElement>('.title-anchor.active')
      if (!active) {
        return
      }
      const { offsetTop, clientHeight } = active
      if (scrollTop <= offsetTop && scrollTop + navHeight >= offsetTop) {
        return
      }
      if (offsetTop > scrollTop + navHeight) {
        markNav.scrollTo(0, offsetTop - navHeight + clientHeight)
      }
      if (offsetTop < scrollTop) {
        markNav.scrollTo(0, offsetTop)
      }
    }
  }

  const debounceHandleScroll = useMemo(() => throttle(handleScroll, 10), [])

  useEffect(() => {
    window.addEventListener('scroll', debounceHandleScroll)
    return () => {
      window.removeEventListener('scroll', debounceHandleScroll)
    }
  }, [])

  const [isDrawerShow, setIsDrawerShow] = useState(false)

  return (
    <>
      <MarkNav
        className={classNames(styles.postNavBar, styles.navBar)}
        source={content}
        headingTopOffset={70}
        ordered={false}
      />
      <div className={styles.hoverBar} onClick={() => setIsDrawerShow(true)}>
        <MenuFoldOutlined />
      </div>
      <Drawer
        placement='right'
        onClose={() => setIsDrawerShow(false)}
        visible={isDrawerShow}
        className={classNames(styles.drawer, 'mobile-navBar-box')}
        width={340}
      >
        <MarkNav className={classNames(styles.postNavBar)} source={content} headingTopOffset={70} ordered={false} />
      </Drawer>
    </>
  )
}

export default NavBar
