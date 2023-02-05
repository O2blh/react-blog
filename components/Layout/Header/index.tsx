import React, { useState } from 'react'
import { HomeOutlined, BgColorsOutlined, SettingOutlined, CheckOutlined, MenuOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import { Drawer } from 'antd'

import { BLOG_ADMIN_URL } from '@/constants/siteInfo'
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks'
import { setMode } from '@/redux/modeSlice'

import styles from './style.module.css'

const navs = [
  {
    label: '文章',
    route: null,
    children: [
      {
        label: '找文章',
        route: ROUTES.ARTICLES,
      },
      {
        label: '分类',
        route: ROUTES.CLASSIFY,
      },
      {
        label: '标签',
        route: ROUTES.TAGS,
      },
    ],
  },
  {
    label: '图库',
    route: ROUTES.GALLERY,
  },
  {
    label: '说说',
    route: ROUTES.SAY,
  },
  {
    label: '留言',
    route: ROUTES.MSG,
  },
  {
    label: '友链',
    route: ROUTES.FRIEND_LINK,
  },
  {
    label: '作品',
    route: ROUTES.WORKS,
  },
  {
    label: '建站',
    route: ROUTES.WEBSITE_LOGS,
  },
  {
    label: '关于',
    route: ROUTES.ABOUT,
  },
]

const modeOptions = ['rgb(19, 38, 36)', 'rgb(110, 180, 214)', 'rgb(171, 194, 208)']

const Header = () => {
  const dispatch = useAppDispatch()
  const curModeIndex = useAppSelector((state) => state.mode.value)

  const modeChange = (modeIndex) => {
    dispatch(setMode(Number(modeIndex)))
  }

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)
  const showDrawer = () => {
    setIsMobileNavVisible(true)
  }
  const onClose = () => {
    setIsMobileNavVisible(false)
  }
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {/* 首页 */}
          <Link href={ROUTES.ROOT} passHref>
            <a href={ROUTES.HOME} className={classNames(styles.btn, styles.homeBtn)}>
              <HomeOutlined />
            </a>
          </Link>
          {/* 主题切换 */}
          <div className={classNames(styles.btn, styles.bgBtn)}>
            <BgColorsOutlined />
            <div className={styles.modeOptions}>
              {modeOptions.map((mode, index) => {
                const isCurMode = curModeIndex === index
                return (
                  <div
                    key={mode}
                    className={styles.modeOption}
                    style={{ backgroundColor: mode }}
                    onClick={() => {
                      modeChange(index)
                    }}
                  >
                    {isCurMode && <CheckOutlined />}
                  </div>
                )
              })}
            </div>
          </div>
          {/* 后台管理按钮 */}
          <a href={BLOG_ADMIN_URL} className={classNames(styles.btn, styles.adminBtn)} target='_blank' rel='noreferrer'>
            <SettingOutlined />
          </a>
          {/* 导航 */}
          {navs.map((nav) => {
            if (nav.children) {
              return (
                <div className={styles.navBtn} key={nav.label}>
                  {nav.label}
                  <div className={styles.secondNav}>
                    {nav.children.map((item) => {
                      return (
                        <Link href={item.route} passHref key={item.label}>
                          <a className={styles.secondNavBtn} href={item.route}>
                            {item.label}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            }
            return (
              <Link href={nav.route} passHref key={nav.label}>
                <a className={styles.navBtn} key={nav.label} href={nav.route}>
                  {nav.label}
                </a>
              </Link>
            )
          })}
        </div>
      </nav>
      {/* 手机模式下的导航按钮 */}
      <div className={styles.mobileNavBtn} onClick={showDrawer}>
        <MenuOutlined />
      </div>
      {/* 手机模式下的导航 */}
      <Drawer
        className={classNames(styles.drawer, 'mobile-nav-box')}
        placement='right'
        onClose={onClose}
        visible={isMobileNavVisible}
      >
        <Link href={ROUTES.ROOT} passHref>
          <a className={styles.navBtn} key='主页' href={ROUTES.ROOT}>
            主页
          </a>
        </Link>
        {navs.map((nav) => {
          if (nav.children) {
            return (
              <>
                {nav.children.map((item) => {
                  return (
                    <Link href={item.route} passHref key={item.label}>
                      <a className={styles.navBtn} href={item.route}>
                        {item.label}
                      </a>
                    </Link>
                  )
                })}
              </>
            )
          }
          return (
            <Link href={nav.route} passHref key={nav.label}>
              <a className={styles.navBtn} href={nav.route}>
                {nav.label}
              </a>
            </Link>
          )
        })}
      </Drawer>
    </>
  )
}

export default Header
