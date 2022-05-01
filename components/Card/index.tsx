import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

const Card = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>
}

export default Card
