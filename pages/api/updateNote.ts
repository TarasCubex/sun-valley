import type { NextApiRequest, NextApiResponse } from 'next'
import {updateNote} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  const note = await updateNote(data)
  res.status(200).json(note);
}