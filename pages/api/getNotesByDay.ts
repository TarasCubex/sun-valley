import type { NextApiRequest, NextApiResponse } from 'next'
import {getNotesByDay} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const {day, month, year} = req.body
  const note = await getNotesByDay(day, month, year)
  res.status(200).json(note);
}