'use client'

import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import type {INote} from '../../types'

const Header = ({children}: {children: React.ReactNode}) => {

  const [value, setValue] = React.useState('')

  const [notes, setNotes] = React.useState<INote[]>([])

  const find = async () => {
    const res = await fetch('/api/findNotes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    const response: {notes: INote[]} = await res.json()
    return response.notes
  }

  React.useEffect(() => {
    if(!!value){
      find().then(data => setNotes(data))
    } else setNotes([])
  },[value])

  return (
    <main>
      <header className={styles.wrapper}>
        <Link href='/'>
          <Image src='/menu.png' alt='menu' width={40} height={40} />
        </Link>
        <div className={styles['input-container']}>
          <input
            type='text'
            placeholder='Поиск заметок..'
            value={value}
            onChange={e => setValue(e.target.value)}
            />
          {!!notes.length && <Image src='/close.png' alt='' width={28} height={28} onClick={() => setValue('')} />}
        </div>
      </header>
      <div className={styles['note-container']}>
        {!!notes.length && notes.map(note =>
          <div key={note._id} className={styles.note}>
            <span>{`${note.day}.${note.month}.${note.year}`}</span>
            <span>Время: {note.time}</span>
            <span>Мастер: {note.master}</span>
            <p>{note.content}</p>
          </div>
          )}
      </div>
      {children}
    </main>
  )
}

export default Header