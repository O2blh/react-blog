import React from 'react'
import styles from './style.module.css'

const Footer = () => {
  const tags = ['React', 'NextJs', 'TypeScript', 'Antd', 'ahooks', 'CloudBase']

  return (
    <div className={styles.footer}>
      <div className={styles.footerTitle}>
        个人博客系统<a href='https://gitee.com/bao-longhui/react-blog.git'>「源代码」</a>
      </div>
      <div>
        <a href='https://beian.miit.gov.cn/'>浙ICP备2022010990号-1</a>
      </div>
      <div>
        {tags.map((tag) => {
          return (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
