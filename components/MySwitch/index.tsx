import classNames from 'classnames'
import React, { useState } from 'react'

import styles from './index.module.css'

interface IProps {
  onChange: (value: boolean) => void
}

const MySwitch: React.FC<IProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className={styles.mySwitch}>
      <div
        className={classNames(styles.ball, checked ? styles.ballRight : styles.ballLeft)}
        onClick={() => {
          setChecked(!checked)
          onChange(!checked)
        }}
      />
    </div>
  )
}

export default MySwitch
