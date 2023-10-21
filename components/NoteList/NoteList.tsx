import React from 'react'
import styles from './NoteList.module.scss'
import Image from 'next/image'
import type {INote} from '../../types'
import classnames from 'classnames'

type NoteListProps = {
  notes: INote[];
  date: {
    year: string;
    month: string;
    day: string;
  },
  updateData: React.Dispatch<React.SetStateAction<INote[]>>,
  editNote: (data: INote) => void
}

const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

const NoteList: React.FC<NoteListProps> = ({notes, date, updateData, editNote}) => {

  const [master1List, setMaster1List] = React.useState<INote[]>([])
  const [master2List, setMaster2List] = React.useState<INote[]>([])

  React.useEffect(() => {
    const arr1 = notes.filter(el => el.master === 'Катя')
    const arr2 = notes.filter(el => el.master === 'Лена')
    setMaster1List(arr1)
    setMaster2List(arr2)
  },[notes])

  const setHeight = (from: string, to: string) => {
    const startTime = from.split(':').map(el => Number(el))
    const endTime = to.split(':').map(el => Number(el))
    const marginTop = startTime[0]*60 + startTime[1] - 8*60
    const height = endTime[0]*60 + endTime[1] - (startTime[0]*60 + startTime[1])
    return {marginTop, height}
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.hours}>
          {hours.map(el =>
            <p key={el}>
              <span>{el}</span>
            </p>
            )}
        </div>
      <div className={styles.container}>
        <div className={styles['master-1']}>
          {master1List.map(note =>
              <div
                key={note.content}
                style={{top: setHeight(note.time.from, note.time.to).marginTop, height: setHeight(note.time.from, note.time.to).height}}
                className={styles.content}
                onClick={() => editNote(note)}
                >
                  <div>
                    <p>
                      {`${note.time.from} - ${note.time.to}`}
                    </p>
                    <p>{note.content}</p>
                  </div>
              </div>
          )}
        </div>
        <div className={styles['master-2']}>
          {master2List.map(note =>
              <div
                key={note.content}
                style={{top: setHeight(note.time.from, note.time.to).marginTop, height: setHeight(note.time.from, note.time.to).height}}
                className={styles.content}
                onClick={() => editNote(note)}
                >
                  <div>
                    <p>
                      {`${note.time.from} - ${note.time.to}`}
                    </p>
                    <p>{note.content}</p>
                  </div>
              </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NoteList

{/* <div className={styles.wrapper}>
      {notes.map(note =>
      <div key={note.content} className={getNoteClname(note.master)}>
        <div className={styles.container}>
          <p>Время: {note.time}</p>
          <p>Мастер: {note.master}</p>
        </div>
        <div className={styles['btn-container']}>
          <Image src='/edit.png' alt='' width={24} height={24} onClick={() => editNote(note)}/>
          <Image src='/delete.png'  alt='' width={24} height={24} onClick={() => deleteNote(note._id)}/>
        </div>
        <div className={styles.content}>
          {note.content}
        </div>
      </div>
      )}
    </div> */

      // const deleteNote = async (id: string) => {
  //   const data = {
  //     id,
  //     date
  //   }
  //   const res = await fetch('/api/deleteNote',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   const response: {notes: INote[]} = await res.json()
  //   updateData(response.notes)
  // }

  }