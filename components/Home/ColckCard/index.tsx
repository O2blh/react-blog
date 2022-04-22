import React, { useEffect, useReducer, useRef, useState } from 'react'
import dayjs from 'dayjs'

import cardStyles from '@/styles/card.module.css'
import classNames from 'classnames'
import styles from './style.module.css'

const useForceUpdate = function () {
  const [, forceUpdate] = useReducer((count) => count + 1, 0)
  return forceUpdate
}

const ColckCard = () => {
  const fordeUpdate = useForceUpdate()
  const [secondHandDeg, setSecondHandDeg] = useState(-90)
  const [minuiteHandDeg, setMinuteHandDeg] = useState(-90)
  const [hourHandDeg, setHourHandDeg] = useState(-90)
  useEffect(() => {
    const second = dayjs().second()
    const secondDeg = Math.floor((360 * second) / 60)
    setSecondHandDeg(secondDeg - 90)
    const minute = dayjs().minute()
    const minuteDeg = Math.floor((360 * minute) / 60)
    setMinuteHandDeg(minuteDeg - 90)
    const hour = dayjs().hour()

    const hourDeg = Math.floor((360 * hour) / 24)
    setHourHandDeg(hourDeg - 90)
    const timer = setTimeout(() => {
      fordeUpdate()
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div className={cardStyles.card}>
      <div className={styles.rim}>
        <div className={classNames(styles.scale, styles.scale0)} />
        <div className={classNames(styles.scale, styles.scale1)} />
        <div className={classNames(styles.scale, styles.scale2)} />
        <div className={classNames(styles.scale, styles.scale3)} />
        <div className={styles.center} />
        <div className={styles.hourHand} style={{ transform: `translateY(-50%) rotate(${hourHandDeg}deg)` }} />
        <div className={styles.minuteHand} style={{ transform: `translateY(-50%) rotate(${minuiteHandDeg}deg)` }} />
        <div className={styles.secondHand} style={{ transform: `translateY(-50%) rotate(${secondHandDeg}deg)` }} />
      </div>
    </div>
  )
}

export default ColckCard
