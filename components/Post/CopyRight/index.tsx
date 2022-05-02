import React from 'react'
import { SITE_NAME } from '@/constants/siteInfo'
import copy from 'copy-to-clipboard'
import { message } from 'antd'
import CopyIcon from './CopyIcon'
import CopyrightIcon from './CopyrightIcon'
import styles from './style.module.css'

const CopyRight = ({ title, link }) => {
  const copyLink = () => {
    if (copy(link)) {
      message.success('复制成功')
    }
  }

  return (
    <div className={styles.copyRight}>
      <div className={styles.articleTitle}>{title}</div>
      <div className={styles.articleLink}>
        {link}
        <span className={styles.copyBtn} onClick={copyLink}>
          <CopyIcon />
        </span>
      </div>
      <div className={styles.statement}>
        本站所有文章除特别声明外,均采用
        <a
          className={styles.agreement}
          href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
          target='_blank'
          rel='noreferrer'
        >
          CC BY-NC-SA 4.0
        </a>
        许可协议，转载请注明来自<span className={styles.sitename}>{SITE_NAME}</span>。
      </div>
      <CopyrightIcon className={styles.copyrightIcon} />
    </div>
  )
}

export default CopyRight
