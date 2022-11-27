import type { AppProps } from 'next/app'
import store from '@/redux/store'
import { Provider } from 'react-redux'
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
    <Provider store={store}>
      <Layout>
        <Script src='https://pv.sohu.com/cityjson?ie=utf-8' strategy='afterInteractive' onLoad={onCiteLoad} />
        <Script src='/mobile.js' strategy='beforeInteractive' />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
