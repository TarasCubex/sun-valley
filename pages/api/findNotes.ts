import type { NextApiRequest, NextApiResponse } from 'next'
import {findNotes} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const str = req.body
  const note = await findNotes(str)
  res.status(200).json(note);
}