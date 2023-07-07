'use client'

import React from 'react'
import styles from '../styles/Page.module.scss'
import useGeneratedData from '@/utilities/useGeneratedData';
import Calendar from '@/components/Calendar/Calendar'
import Header from '@/components/Header/Header';

export default function Home() {

  const [selectedDay, setSelectedDay] = React.useState<Date | null>(null)

  const {month, data, nextMonth, prevMonth} = useGeneratedData()

  return (
    <Header>
      <div className={styles.main}>
        <Calendar
          data={data}
          next={nextMonth}
          prev={prevMonth}
          month={month}
          selectDay={setSelectedDay}
          />
      </div>
    </Header>
  )
}
