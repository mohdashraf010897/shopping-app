// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { categories } from '@/constants/data';
import { Category } from '@/types/dataSource';

type Data = {
  categories: Category[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ categories });
}
