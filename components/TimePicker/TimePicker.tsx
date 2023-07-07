

import React from 'react'
import styles from './TimePicker.module.scss'
import Wheel from './Wheel/Wheel'

const hours =  ['f','09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19' ,'20','h']
const minutes = ['s','00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55','n']

type TimePickerProps = {
  changeTime: (time: string) => void
}

const TimePicker: React.FC<TimePickerProps> = ({changeTime}) => {

  const [time, setTime] = React.useState('09:00')

  const setHours = (hours: string) => {
    const timeArr = time.split(':')
    timeArr[0] = hours === 'f'  ? '00' : hours ===  'h' ? '20' : hours
    const selectedTime = timeArr.join(':')
    setTime(selectedTime)
    changeTime(selectedTime)
  }

  const setMinutes = (minutes: string) => {
    const timeArr = time.split(':')
    timeArr[1] = minutes === 's' ? '00' : minutes === 'n' ? '55' : minutes
    const selectedTime = timeArr.join(':')
    setTime(selectedTime)
    changeTime(selectedTime)
  }

  return (
    <div className={styles.wrapper}>
      <Wheel values={hours} handler={setHours} />
      <span>:</span>
      <Wheel values={minutes} handler={setMinutes} />
    </div>
  )
}

export default TimePicker