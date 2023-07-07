'use client'

import React from 'react'
import ReactDOM from "react-dom";
import styles from './NoteForm.module.scss'
import createPortalDiv from '@/utilities/createPortalDiv'
import TimePicker from '../TimePicker/TimePicker';

import type {INote} from '../../types'

type NoteFormProps = {
  basicData: INote,
  handleClose: React.Dispatch<React.SetStateAction<boolean>>,
  actionCb: (data:INote) => Promise<void>
}

const portal = createPortalDiv()

const NoteForm: React.FC<NoteFormProps> = ({ basicData, handleClose, actionCb}) => {

  const [master, setMaster] = React.useState(basicData.master)
  const [time, setTime] = React.useState(basicData.time)
  const [content, setContent] = React.useState(basicData.content)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const data = {
      _id: basicData._id,
      year: basicData.year,
      day: basicData.day,
      month: basicData.month,
      time: time,
      master: master,
      content: content
    }
    await actionCb(data)
    handleClose(false)
  }

  const close = () => {
    handleClose(false)
  }

  return ReactDOM.createPortal(
    <div className={styles['form-wrapper']} onClick={() => close()}>
      <form className={styles.form} onSubmit={e => handleSubmit(e)} onClick={e => e.stopPropagation()}>
        <h3>{ !!basicData._id ?  'Редактировать запись' : 'Новая запись' }</h3>
        <div className={styles.container}>
          <div className={styles.master}>
            <p>Мастер: </p>
            <div className={styles['radio-container']}>
              <input
                type='radio'
                name='master'
                id='master-1'
                className={styles.radio}
                value='Катя'
                checked={master === 'Катя'}
                onChange={e => setMaster(e.target.value)}
                />
              <label htmlFor='master-1'>Катя</label>
            </div>
            <div className={styles['radio-container']}>
              <input
                type='radio'
                name='master'
                id='master-2'
                className={styles.radio}
                value='Лена'
                checked={master === 'Лена'}
                onChange={e => setMaster(e.target.value)}
                />
              <label htmlFor='master-2'>Лена</label>
            </div>
          </div>
          <TimePicker changeTime={setTime} />
        </div>
        {/* <input
          type='text'
          className={styles.input}
          placeholder='Время'
          value={time}
          onChange={e => setTime(e.target.value)}
          /> */}
        <textarea
          className={styles.area}
          placeholder='Текст'
          value={content}
          onChange={e => setContent(e.target.value)}
          />
        <button type='submit' className={styles.btn}>Готово</button>
    </form>
    </div>,
    portal
  )
}

export default NoteForm