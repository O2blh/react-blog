import React, { useCallback, useMemo } from 'react'
import { Popover } from 'antd'
import { emojiPeople, emojiNature, emojiSymbol, emojiFood } from '@/constants/siteInfo'

import styles from './style.module.css'

const Emoji = ({ emojiClickCallback }) => {
  const emojiClick = useCallback(
    (e) => {
      emojiClickCallback(e.target.textContent)
    },
    [emojiClickCallback],
  )

  const toEmojiArray = useCallback((emojiStr) => {
    const emojiArray = []
    const regex = /\uD83C[\uD000-\uDFFF](\uFE0F)?|\uD83D[\uD000-\uDFFF](\uFE0F)?|[\u2000-\u2FFF](\uFE0F)?/g
    const arr = emojiStr.match(regex)
    for (let i = 0; i < arr.length; i += 1) {
      emojiArray.push(arr[i])
    }
    return emojiArray
  }, [])

  const wrapEmoji = useCallback(
    (emojiStr) => {
      const emojiArray = toEmojiArray(emojiStr)
      const wrapEmojiArray = emojiArray.map((emoji, index) => {
        return (
          <span className={styles.emoji} title={emoji} key={index} onClick={emojiClick}>
            {emoji}
          </span>
        )
      })
      return wrapEmojiArray
    },
    [toEmojiArray, emojiClick],
  )

  const wrapEmojiPeople = useMemo(() => wrapEmoji(emojiPeople), [wrapEmoji])
  const wrapEmojiNature = useMemo(() => wrapEmoji(emojiNature), [wrapEmoji])
  const wrapEmojiSymbol = useMemo(() => wrapEmoji(emojiSymbol), [wrapEmoji])
  const wrapEmojiFood = useMemo(() => wrapEmoji(emojiFood), [wrapEmoji])

  const emojiData = [
    {
      emojiStr: wrapEmojiPeople,
      show: '😜',
    },
    {
      emojiStr: wrapEmojiNature,
      show: '✉️',
    },
    {
      emojiStr: wrapEmojiSymbol,
      show: '🆗',
    },
    {
      emojiStr: wrapEmojiFood,
      show: '🍎',
    },
  ]

  return (
    <>
      {emojiData.map((item, index) => {
        return (
          <Popover
            key={index}
            className={styles.emojiBtn}
            overlayClassName={styles.emojiContent}
            placement='bottom'
            content={item.emojiStr}
            trigger='click'
          >
            <div>{item.show}</div>
          </Popover>
        )
      })}
    </>
  )
}

export default Emoji
