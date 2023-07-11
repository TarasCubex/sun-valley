

import styles from '../../styles/DayPage.module.scss'
import type {INote} from '../../types'
import Header from '../Header/Header'
import NoteContainer from '@/components/NoteContainer/NoteContainer'

//export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getDayData( day: string, month: string, year: string){
  const data = {
    day,
    month,
    year
  }
  console.log('MAKING REQUEST')
  const url = `${process.env.siteURL}/api/getNotesByDay`
  const res = await fetch(url,{
    method: 'POST',
    //cache: 'no-store',
    next: { revalidate: 0 },
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const resData = await res.json()
  console.log('resdata: ',resData)
  return resData
}

const DayPageComponent = async ({params:{day}}: {params:{day: string}}) => {


  const arr = day.split('.').map(el => Number(el).toString())
  const date = {
    day: arr[0],
    month: arr[1],
    year: arr[2]
  }

  //const {notes}: {notes: INote[]} = await getDayData(date.day, date.month, date.year)
  const {note}: {note: any} = await getDayData(date.day, date.month, date.year)

  console.log('note: ',note)

  return (
    <Header>
      <div className={styles.wrapper}>
        {/* <NoteContainer
          year={date.year}
          month={date.month}
          day={date.day}
          notes={notes}
          /> */}
          <h1>{note}</h1>
      </div>
    </Header>
  )
}

export default  DayPageComponent
