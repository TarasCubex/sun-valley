import type { NextApiRequest, NextApiResponse } from 'next'
import {removeNote} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const {id, date} = req.body
  const note = await removeNote(id, date)
  res.status(200).json(note);
}