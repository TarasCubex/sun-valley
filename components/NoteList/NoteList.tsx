import React from 'react'
import styles from './NoteList.module.scss'
import Image from 'next/image'
import type {INote} from '../../types'

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

const NoteList: React.FC<NoteListProps> = ({notes, date, updateData, editNote}) => {

  const deleteNote = async (id: string) => {
    const data = {
      id,
      date
    }
    const res = await fetch('/api/deleteNote',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response: {notes: INote[]} = await res.json()
    updateData(response.notes)
  }


  return (
    <div className={styles.wrapper}>
      <h3>{`${date.day}.${date.month}.${date.year}`}</h3>
      {notes.map(note =>
      <div key={note.content} className={styles.note}>
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
    </div>
  )
}

export default NoteList