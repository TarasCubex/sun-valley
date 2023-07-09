'use client'

import React from 'react'
import styles from '../styles/Page.module.scss'
import useGeneratedData from '@/utilities/useGeneratedData';
import Calendar from '@/components/Calendar/Calendar'
import Header from '@/components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const {month, data, nextMonth, prevMonth} = useGeneratedData()

  return (
    <Header>
      <div className={styles.main}>
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
        <Calendar
          data={data}
          next={nextMonth}
          prev={prevMonth}
          month={month}
          />
      </div>
    </Header>
  )
}
