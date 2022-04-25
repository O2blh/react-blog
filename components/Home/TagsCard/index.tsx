import React from 'react'
import classNames from 'classnames'
import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const TagsCard = ({ tags }) => {
  return (
    <div className={classNames(cardStyles.card, styles.tags)}>
      {tags.map((tag) => {
        return (
          <div key={tag._id} className={styles.tag}>
            {tag.tag}
          </div>
        )
      })}
    </div>
  )
}

export default TagsCard
