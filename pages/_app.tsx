import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '@/styles/global.css'
import '@/styles/antd.cover.css'
import '@/styles/hljs.custom.css'
import '@/styles/marked.css'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
