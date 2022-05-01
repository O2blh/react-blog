import React from 'react'
import Card from '@/components/Card'

import styles from './style.module.css'

const TagsCard = ({ tags }) => {
  return (
    <Card className={styles.card}>
      {tags.map((tag) => {
        return (
          <div key={tag._id} className={styles.tag}>
            {tag.tag}
          </div>
        )
      })}
    </Card>
  )
}

export default TagsCard
