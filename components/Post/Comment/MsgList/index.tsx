import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { MessageOutlined } from '@ant-design/icons'
import Avatar from '../EditBox/Aratar'

import MarkDown from '../../MarkDown'

import styles from './style.module.css'
import EditBox from '../EditBox'

const MsgList = () => {
  const msgList = [
    {
      _id: '112313',
      avatar: '',
      name: '蓝云',
      date: 1651050683231,
      msg: '666',
      href: 'https://www.baidu.com',
    },
  ]

  const [showReplyBox, setshowReplyBox] = useState(false)

  const closeReplyBox = useCallback(() => setshowReplyBox(!showReplyBox), [showReplyBox])

  return (
    <>
      {msgList.map((item) => {
        return (
          <div key={item._id} className={styles.commentItem}>
            <div className={styles.commentBox}>
              <div className={styles.avatarBox}>
                <Avatar avatar={null} />
              </div>
              <div className={styles.contentBox}>
                <div className={styles.userInfo}>
                  <a className={styles.name} href={item.href} target='_blank' rel='noreferrer'>
                    {item.name}
                  </a>
                  <span className={styles.date}>{dayjs(item.date).format('YYYY-MM-DD hh:mm:ss')}</span>
                  <span className={styles.reply} onClick={closeReplyBox}>
                    <MessageOutlined />
                  </span>
                </div>
                <MarkDown content={item.msg} className={classNames(styles.content, 'commentContent')} />
              </div>
            </div>
            {showReplyBox && (
              <div className={styles.replyBox}>
                <EditBox replyPerson={{ name: '蓝云' }} closeReplyBox={closeReplyBox} />
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default MsgList
