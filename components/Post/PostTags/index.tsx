import React from 'react'
import styles from './style.module.css'

interface IProps {
  tags: Array<string>
}

const PostTags: React.FC<IProps> = ({ tags }) => {
  return (
    <div className={styles.articleTags}>
      {tags.map((tag) => {
        return (
          <span className={styles.tag} key={tag}>
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default PostTags
