'use client'

import React from 'react'
import styles from '../../styles/Test.module.scss'

import TimePicker from '../../components/TimePicker/TimePicker'


const Test = () => {

  const [time, setTime] = React.useState('12:00')

  console.log(time)

  return (
    <div className={styles.wrap}>
      <TimePicker timeValue={time} changeTime={setTime}/>
    </div>
  )
}

export default Test