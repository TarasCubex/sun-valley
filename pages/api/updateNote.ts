import type { NextApiRequest, NextApiResponse } from 'next'
import {updateNote} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  const result = await updateNote(data)
  if(!result.validateError){
    res.status(200).json({notes: result.notes});
  }
  else res.status(400).json({err: result.validateError})
}