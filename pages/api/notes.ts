import type { NextApiRequest, NextApiResponse } from 'next'
import {getNotesByMonth} from '../../lib/mongo/notes'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const month = req.body
  const customers = await getNotesByMonth(month.toString())
  res.status(200).json(customers);
}