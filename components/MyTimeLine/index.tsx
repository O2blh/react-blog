import React from 'react'
import { ISiteLog } from '@/interface'

import styles from './index.module.css'

interface IProps {
  date: string
  siteLogList: Array<ISiteLog>
}

const MyTimeline: React.FC<IProps> = ({ date, siteLogList }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.date}>
        <div className={styles.dot}>
          <div className={styles.dotIn} />
        </div>
        {date}
      </div>
      <ul className={styles.content}>
        {siteLogList.map((log) => {
          return (
            <li key={log._id} className={styles.log}>
              {log.content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MyTimeline
