import React from "react";
import fillData from "./fillData";
import type {INote, IDayData} from '../types'

const useGeneratedData = () => {
  const defaultDate = new Date()
  defaultDate.setDate(1)
  const firstDay = React.useRef(defaultDate)

  const [month, setMonth] = React.useState(firstDay.current.getMonth())

  const nextMonth = ()=>{
    const day = firstDay.current
    const month = day.getMonth() === 11 ? 0: day.getMonth()+1
    const year = day.getMonth() === 11 ? day.getFullYear() +1 : day.getFullYear()
    day.setDate(1)
    day.setMonth(month)
    day.setFullYear(year)
    setMonth(day.getMonth())
  }

  const prevMonth = ()=>{
    const day = firstDay.current
    const month = day.getMonth() === 0 ? 11 : day.getMonth()-1
    const year = day.getMonth() === 0 ? day.getFullYear() -1 : day.getFullYear()
    day.setDate(1)
    day.setMonth(month)
    day.setFullYear(year)
    setMonth(day.getMonth())
  }

  const [data, setData] = React.useState<IDayData[]>([])

  const FetchData = React.useCallback(async () => {
    const notes = await fetch('/api/notes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(month+1)
    })
    return await notes.json()
  },[month])

  React.useEffect(() => {
    FetchData().then((res: {notes: INote[]}) => {
      const generatedData = fillData(firstDay.current).map(el => {return {
        date: el,
        notes: res.notes.filter(note => note.day === el.getDate().toString() && (+note.month -1) === el.getMonth())
      }})
      setData(generatedData)
    })
  },[month, FetchData])


  const addNote = async() => {
    const note =  await (await fetch('/api/addNote')).json().then(note => console.log(note))
  }

  return {month,data, nextMonth, prevMonth}
}

export default useGeneratedData