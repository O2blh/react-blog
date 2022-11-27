import React from 'react'
import MarkDown from '../../MarkDown'

import styles from './style.module.css'

interface IProps {
  content: string
}

const PreviewBox: React.FC<IProps> = ({ content }) => {
  return (
    <div className={styles.previewBox}>
      <MarkDown content={content} />
    </div>
  )
}

export default PreviewBox
