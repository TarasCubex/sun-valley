
import React from 'react'
import styles from '../../styles/DayPage.module.scss'
import type {INote} from '../../types'
import Header from '../../components/Header/Header'
import NoteContainer from '@/components/NoteContainer/NoteContainer'

async function getDayData( day: string, month: string, year: string){
  const data = {
    day,
    month,
    year
  }
  const url = `${process.env.siteURL}/api/getNotesByDay`
  const res = await fetch(url,{
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const resData = await res.json()
  return resData
}

const DayPage = async ({params:{day}}: {params:{day: string}}) => {


  const arr = day.split('.').map(el => Number(el).toString())
  const date = {
    day: arr[0],
    month: arr[1],
    year: arr[2]
  }

  const {notes}: {notes: INote[]} = await getDayData(date.day, date.month, date.year)

  return (
    <Header>
      <div className={styles.wrapper}>
        <NoteContainer
          year={date.year}
          month={date.month}
          day={date.day}
          notes={notes}
          />
      </div>
    </Header>
  )
}

export default DayPage