'use client'

import React from 'react'
import NoteList from '../NoteList/NoteList'
import type {INote} from '../../types'
import dynamic from "next/dynamic";

const DynamicNoteForm = dynamic(() => import('../NoteForm/NoteForm'), {
  ssr: false,
})

type NoteContainerProps = {
  year: string;
  month: string;
  day: string,
  notes: INote[]
}

const NoteContainer: React.FC<NoteContainerProps> = ({year, month, day, notes}) => {

  const [formInitData, setFormInitData] = React.useState<INote | null>(null)

  const [noteList, setNoteList] = React.useState(notes)

  const addNote = async (data: INote) => {
    const newNoteData = {
      year: data.year,
      day: data.day,
      month: data.month,
      time: data.time,
      master: data.master,
      content: data.content
    }
    const res = await fetch('/api/addNote',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNoteData)
    })
    const response: {notes: INote[]} = await res.json()
    setNoteList(response.notes)
  }

  const updateNote = async ( data: INote) => {
    const res = await fetch('/api/updateNote',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response: {notes: INote[]} = await res.json()
    setNoteList(response.notes)
  }

  return (
    <div>
      <button
        type='button'
        onClick={() => setFormInitData({
          _id: '',
          year: year,
          day: day,
          month: month,
          time: '',
          master: '',
          content: ''
        })}
      >
        Open
      </button>
      {!!formInitData && <DynamicNoteForm
        basicData={formInitData}
        actionCb={formInitData._id === '' ? addNote : updateNote}
        handleClose={() => setFormInitData(null)}
        />}
      <NoteList
        notes={noteList}
        date={{year, month, day}}
        updateData={(data) => setNoteList(data)}
        editNote={(data) => setFormInitData({
          _id: data._id,
          year: data.year,
          day: data.day,
          month: data.month,
          time: data.time,
          master: data.master,
          content: data.content
        })}
        />
    </div>
  )
}

export default NoteContainer