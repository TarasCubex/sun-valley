import type { NextApiRequest, NextApiResponse } from 'next'
import {getCustomers} from '../../lib/mongo/customers'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const customers = await getCustomers()
  res.status(200).json(customers);
}