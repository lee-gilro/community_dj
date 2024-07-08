import type { NextApiRequest, NextApiResponse } from 'next';

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Logout successful' });
}