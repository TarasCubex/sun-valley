

import React from 'react'
import { GetServerSideProps } from 'next'
import styles from '../../styles/DayPage.module.scss'
import type {INote} from '../../types'
import Header from '../../components/Header/Header'
import NoteContainer from '@/components/NoteContainer/NoteContainer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DayPage = ({day}: {day: string}) => {

  const [notes, setNotes] = React.useState<INote[]>([])


  React.useEffect(() => {
    const arr = day.split('.').map(el => Number(el).toString())
    const date = {
      day: arr[0],
      month: arr[1],
      year: arr[2]
    }
    const url = `${process.env.siteURL}/api/getNotesByDay`
    const getNotes = async () => {
      const res = await fetch(url,{
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(date),
      })
      const resData: {notes: INote[]} = await res.json()
      setNotes(resData.notes)
    }
    toast.promise( getNotes(),{
      pending: 'Загрузка..',
      success: 'Готово!',
      error: 'Ошибка ('
    })
  },[day])



  return (
    <Header>
      <ToastContainer
          position="bottom-left"
          autoClose={700}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      <div className={styles.wrapper}>
        {notes && <NoteContainer
          year={day.split('.').map(el => Number(el).toString())[2]}
          month={day.split('.').map(el => Number(el).toString())[1]}
          day={day.split('.').map(el => Number(el).toString())[0]}
          notes={notes}
          />}
      </div>
    </Header>
  )
}

export default DayPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const day = context.query.day!;
    return {
      props: {
        day
      },
    };
};




// import React from 'react'
// import styles from '../../styles/DayPage.module.scss'
// import type {INote} from '../../types'
// import Header from '../../components/Header/Header'
// import NoteContainer from '@/components/NoteContainer/NoteContainer'
// import axios from 'axios'

// import DayPageComponent from '@/components/DayPage/DayPageComponent'

// //export const dynamic = 'force-dynamic'
// //export const revalidate = 10

// async function getDayData( day: string, month: string, year: string){
//   const data = {
//     day,
//     month,
//     year
//   }
//   const url = `${process.env.siteURL}/api/getNotesByDay`
//   const res = await fetch(url,{
//     method: 'POST',
//     cache: 'no-store',
//     //next: { revalidate: 0 },
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data),
//   })
//   const resData = await res.json()
//   return resData
// }

// const DayPage = async ({params:{day}}: {params:{day: string}}) => {


//   const arr = day.split('.').map(el => Number(el).toString())
//   const date = {
//     day: arr[0],
//     month: arr[1],
//     year: arr[2]
//   }

//   const {notes}: {notes: INote[]} = await getDayData(date.day, date.month, date.year)
//   //const {note}: {note: any} = await getDayData(date.day, date.month, date.year)



//   return (
//     <Header>
//       <div className={styles.wrapper}>
//         {notes && <NoteContainer
//           year={date.year}
//           month={date.month}
//           day={date.day}
//           notes={notes}
//           />}
//       </div>
//     </Header>
//   )
// }

// export default DayPage