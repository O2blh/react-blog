import React from 'react'
import { HomeOutlined, BgColorsOutlined, SettingOutlined, CheckOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './style.module.css'

const Header = () => {
  const navs = [
    {
      label: '文章',
      route: null,
      children: [
        {
          label: '找文章',
          route: '',
        },
        {
          label: '分类',
          route: '',
        },
        {
          label: '标签',
          route: '',
        },
      ],
    },
    {
      label: '图库',
      route: '',
    },
    {
      label: '说说',
      route: '',
    },
    {
      label: '留言',
      route: '',
    },
    {
      label: '友链',
      route: '',
    },
    {
      label: '作品',
      route: '',
    },
    {
      label: '建站',
      route: '',
    },
    {
      label: '关于',
      route: '',
    },
  ]
  const modeOptions = ['rgb(19, 38, 36)', 'rgb(110, 180, 214)', 'rgb(171, 194, 208)']

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <HomeOutlined className={classNames(styles.btn, styles.homeBtn)} />
        <div className={classNames(styles.btn, styles.bgBtn)}>
          <BgColorsOutlined />
          <div className={styles.modeOptions}>
            {modeOptions.map((mode, index) => {
              return (
                <div key={mode} className={styles.modeOption} style={{ backgroundColor: mode }}>
                  <CheckOutlined />
                </div>
              )
            })}
          </div>
        </div>

        <SettingOutlined className={classNames(styles.btn, styles.adminBtn)} />
        {navs.map((nav, index) => {
          if (nav.children) {
            return (
              <div className={styles.navBtn} key={nav.label}>
                {nav.label}
                <div className={styles.secondNav}>
                  {nav.children.map((item) => {
                    return (
                      <a className={styles.secondNavBtn} key={item.label} href={item.route}>
                        {item.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            )
          }
          return (
            <a className={styles.navBtn} key={nav.label} href={nav.route}>
              {nav.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Header
