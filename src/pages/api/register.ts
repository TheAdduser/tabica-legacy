import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import { env } from '~/env';

const pb = new PocketBase(env.POCKETBASE_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, username } = req.body;

  try {
    const user = await pb.collection('users').create({
      email,
      password,
      username,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}