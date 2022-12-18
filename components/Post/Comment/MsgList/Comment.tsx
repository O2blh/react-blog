import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { MessageOutlined } from '@ant-design/icons'
import { IComment } from '@/interface'
import Avatar from '../EditBox/Aratar'
import EditBox from '../EditBox'
import MarkDown from '../../MarkDown'

import styles from './style.module.css'

interface IProps {
  comment: IComment
  toComment: IComment
  replyTo?: IComment
  getCommentList: () => void
  addComment: (arg0: any) => any
}

const Comment: React.FC<IProps> = ({ comment, toComment, replyTo, getCommentList, addComment }) => {
  const [showReplyBox, setshowReplyBox] = useState(false)

  const closeReplyBox = () => {
    setshowReplyBox(false)
  }

  const commentDate = useMemo(() => {
    let result = ''
    const minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const halfamonth = day * 15
    const month = day * 30
    const diffValue = dayjs().diff(dayjs(comment.date))
    const minC = Math.floor(diffValue / minute) // 计算时间差的分，时，天，周，月
    const hourC = Math.floor(diffValue / hour)
    const dayC = Math.floor(diffValue / day)
    const weekC = Math.floor(diffValue / week)
    const monthC = Math.floor(diffValue / month)
    if (monthC >= 1 && monthC <= 3) {
      result = ` ${monthC}月前`
    } else if (weekC >= 1 && weekC <= 3) {
      result = ` ${weekC}周前`
    } else if (dayC >= 1 && dayC <= 6) {
      result = ` ${dayC}天前`
    } else if (hourC >= 1 && hourC <= 23) {
      result = ` ${hourC}小时前`
    } else if (minC >= 1 && minC <= 59) {
      result = ` ${minC}分钟前`
    } else if (diffValue >= 0 && diffValue <= minute) {
      result = '刚刚'
    } else {
      const datetime = new Date()
      datetime.setTime(comment.date)
      const Nyear = datetime.getFullYear()
      const Nmonth = datetime.getMonth() + 1 < 10 ? `0${datetime.getMonth() + 1}` : datetime.getMonth() + 1
      const Ndate = datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate()
      const Nhour = datetime.getHours() < 10 ? `0${datetime.getHours()}` : datetime.getHours()
      const Nminute = datetime.getMinutes() < 10 ? `0${datetime.getMinutes()}` : datetime.getMinutes()
      const Nsecond = datetime.getSeconds() < 10 ? `0${datetime.getSeconds()}` : datetime.getSeconds()
      result = `${Nyear}-${Nmonth}-${Ndate}`
    }
    return result
  }, [comment.date])

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentBox}>
        <div className={styles.avatarBox}>
          <Avatar avatar={comment.avatar} />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.userInfo}>
            <a className={styles.name} href={comment.url} target='_blank' rel='noreferrer'>
              {comment.nickname || '匿名用户'}
            </a>
            {comment.replyId && (
              <span className={styles.replyTo}>
                回复给「
                <span className={styles.replyName}>{replyTo.nickname || '匿名用户'}</span>
                」：
              </span>
            )}
            <span className={styles.date}>{commentDate}</span>
            <span
              className={styles.reply}
              onClick={() => {
                setshowReplyBox(!showReplyBox)
              }}
            >
              <MessageOutlined />
            </span>
          </div>
          <MarkDown content={comment.comment} className={classNames(styles.content, 'commentContent')} />
        </div>
      </div>
      {showReplyBox && (
        <div className={styles.replyBox}>
          <EditBox
            toComment={toComment || comment}
            reply={comment}
            closeReplyBox={closeReplyBox}
            getCommentList={getCommentList}
            addComment={addComment}
          />
        </div>
      )}
    </div>
  )
}

Comment.defaultProps = {
  replyTo: null,
}

export default Comment
