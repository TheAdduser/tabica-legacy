import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { env } from '~/env';

const pb = new PocketBase(env.DATABASE_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return res.status(200).json(authData);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}