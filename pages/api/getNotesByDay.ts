import type { NextApiRequest, NextApiResponse } from 'next'
import {getNotesByDay} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const {day, month, year} = req.body
  const notes = await getNotesByDay(day, month, year)
  //const note = new Date().toLocaleString()
  //res.setHeader('Cache-Control', 'no-store')
  res.status(200).json(notes);
}