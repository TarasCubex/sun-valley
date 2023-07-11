'use client'

import React from 'react'
import ReactDOM from "react-dom";
import styles from './NoteForm.module.scss'
import createPortalDiv from '@/utilities/createPortalDiv'
import TimePicker from '../TimePicker/TimePicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    if(!!content && !!master) setError('')
  },[content, master])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if(!master){
      setError('Пожалуйста, укажите мастера')
      return
    }
    if(!content){
      setError('Пожалуйста, добавьте заметку')
      return
    }
    const data = {
      _id: basicData._id,
      year: basicData.year,
      day: basicData.day,
      month: basicData.month,
      time: time,
      master: master,
      content: content
    }
    toast.promise( actionCb(data),{
      pending: 'Подождите',
      success: 'Готово!',
      error: 'Ошибка (',
      }
      )
    toast.onChange((payload) => {
      if(payload.status === 'removed') handleClose(false)
    })
  }

  const close = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    handleClose(false)
  }


  return ReactDOM.createPortal(
    <div className={styles['form-wrapper']} onClick={(e) => close(e)}>
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
      <form className={styles.form} onSubmit={e => handleSubmit(e)} onClick={e => e.stopPropagation()}>
        <h3>{ !!basicData._id ?  'Редактировать запись' : 'Новая запись' }</h3>
        <div className={styles.container}>
          <div className={styles.master}>
            <h3>Мастер: </h3>
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
          <TimePicker timeValue={time} changeTime={setTime} />
        </div>
        <textarea
          className={styles.area}
          placeholder='Текст'
          value={content}
          onChange={e => setContent(e.target.value)}
          />
          {/* {!!error && <p className={styles.error}>{error}</p>} */}
        <button type='submit' className={styles.btn} disabled={!!error}>Готово</button>
    </form>
    </div>,
    portal
  )
}

export default NoteForm