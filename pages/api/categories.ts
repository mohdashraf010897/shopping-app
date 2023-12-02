// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { categories } from '@/constants/data';
import { CategoriesDataType } from '@/types/api/categories';

export default function handler(req: NextApiRequest, res: NextApiResponse<CategoriesDataType>) {
  res.status(200).json({ categories });
}
