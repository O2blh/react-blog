import React from 'react'

import styles from './style.module.css'

const Placeholder = ({ msgCount }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {msgCount ? (
        <div className={styles.hasMsg}>{msgCount}条评论</div>
      ) : (
        <div className={styles.noMsg}>暂时没有评论&nbsp;~</div>
      )}
    </>
  )
}

export default Placeholder
