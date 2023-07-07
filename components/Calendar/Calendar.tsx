'use client'

import React from 'react'
import styles from './Calendar.module.scss'
import Image from 'next/image'

import type {IDayData} from '../../types'

import Day from './Day/Day'

const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
const monthArr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]

type CalendarProps = {
  data: IDayData[],
  next: () => void,
  prev: () => void,
  month: number;
  selectDay: React.Dispatch<React.SetStateAction<Date | null>>
}

const Calendar: React.FC<CalendarProps> = ({data, next, prev, month, selectDay}) => {

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toDateString()

  return (
    <div className={styles.container}>
      <div className={styles['month-container']}>
        <Image src='/arrow.png' alt='' width={24} height={24} onClick={prev} />
        <p>{monthArr[month] + ' ' + 2023}</p>
        <Image src='/arrow.png' alt='' width={24} height={24} onClick={next} />
      </div>
      <div className={styles['days-container']}>
        {days.map(d =>
          <div key={d}>
            <p>{d}</p>
          </div>
          )}
      </div>
      <div className={styles.wrapper}>
        {data.map(el =>
          <Day
            key={el.date.toString()}
            value={el}
            today={el.date.toDateString() === today}
            currentMonth={el.date.getMonth() !== month}
            selectDay={selectDay}
          />
          )}
      </div>
    </div>
  )
}

export default Calendar