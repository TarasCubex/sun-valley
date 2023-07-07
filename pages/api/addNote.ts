import type { NextApiRequest, NextApiResponse } from 'next'
import {addNote} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  const note = await addNote(data)
  res.status(200).json(note);
}