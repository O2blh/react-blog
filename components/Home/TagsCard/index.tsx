import React from 'react'
import classNames from 'classnames'
import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const TagsCard = () => {
  const tags = ['react', 'vue', 'Html', 'JavaScript', 'Css', 'Webpack', '正则表达式']
  return (
    <div className={classNames(cardStyles.card, styles.tags)}>
      {tags.map((tag) => {
        return (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default TagsCard
