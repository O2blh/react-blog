import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'
import 'antd/dist/antd.css'
import '@/styles/global.css'
import '@/styles/antd.cover.css'
import '@/styles/hljs.custom.css'
import '@/styles/marked.css'
import '@/styles/post.nav.css'
import Layout from '@/components/Layout'
import { accessLog } from '@/request/api'
import { getReferrer } from '@/utils/helper'
import dayjs from 'dayjs'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    function inMobile() {
      document.getElementsByTagName('html')[0].style.fontSize = `${document.documentElement.clientWidth / 450}px`
      if (document.getElementsByTagName('html')[0].clientWidth > 1240) {
        document.body.style.overflowX = 'hidden'
        document.body.style.overflowY = 'overlay'
        document.body.style.width = '100%'
      }
    }
    document.addEventListener('DOMContentLoaded', inMobile)
    window.onresize = inMobile
  }, [])

  const onCiteLoad = () => {
    console.log(window.returnCitySN)
    if (window.returnCitySN) {
      const { cip } = window.returnCitySN
      if (!window.sessionStorage.getItem(cip)) {
        window.sessionStorage.setItem(cip, JSON.stringify(window.returnCitySN))
        const time = Date.now()
        const params = {
          time,
          dateStr: dayjs(time).format('YYYY-MM-DD HH:mm:ss'),
          url: window.location.href,
          refer: getReferrer(),
          ...window.returnCitySN,
        }
        accessLog(params)
      }
    }
  }

  return (
    <Layout>
      <Script src='https://pv.sohu.com/cityjson?ie=utf-8' strategy='afterInteractive' onLoad={onCiteLoad} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
