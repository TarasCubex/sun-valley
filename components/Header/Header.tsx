'use client'

import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import type {INote} from '../../types'
import {prettifyDateString} from '@/utilities/prettifyDateString'

const Header = ({children}: {children: React.ReactNode}) => {

  const [value, setValue] = React.useState('')
  const [notes, setNotes] = React.useState<INote[]>([])
  const [isEmpty, setIsEmpty] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const find = React.useCallback(async () => {
    const res = await fetch('/api/findNotes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    const response: {notes: INote[]} = await res.json()
    if(response.notes.length === 0) setIsEmpty(true)
    return response.notes
  },[value])

  const handleCloseSearch = () => {
    setValue('')
    setIsEmpty(false)
  }

  React.useEffect(() => {
    const findData = async () => {
      setLoading(true)
      return find().then(data => {
        setNotes(data)
        setLoading(false)
      })
    }
    let timeout: ReturnType<typeof setTimeout> | null = null;
    if(!!value){
      timeout = setTimeout(findData, 1000);
    } else {
      setNotes([])
      setIsEmpty(false)
    }
    return () => {
      if(timeout)clearTimeout(timeout)
    };
  },[value, find])

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
            //onBlur={handleCloseSearch}
            />
          {loading ?  <Image src='/loading.gif' alt='' width={24} height={24} /> :
          !!value ?  <Image src='/close.png' alt='' width={28} height={28} onClick={handleCloseSearch} /> : null
          }
        </div>
      </header>
      <div className={styles['note-container']}>
        {(!!notes.length && !isEmpty) ? notes.map(note =>
          <div key={note._id} className={styles.note}>
            <span>{prettifyDateString(note.day, note.month, note.year)}</span>
            <span>Время: {`${note.time.from} - ${note.time.to}`}</span>
            <span>Мастер: {note.master}</span>
            <p>{note.content}</p>
          </div>
          ) : isEmpty  ?
          <h2 className={styles.notfound} >Заметок не найдено ...</h2> : null
        }
      </div>
      {children}
    </main>
  )
}

export default Header