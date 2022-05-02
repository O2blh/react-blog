import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'antd/dist/antd.css'
import '@/styles/global.css'
import '@/styles/antd.cover.css'
import '@/styles/hljs.custom.css'
import '@/styles/marked.css'
import '@/styles/post.nav.css'
import Layout from '@/components/Layout'

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
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
