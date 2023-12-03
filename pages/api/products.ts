// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@/constants/data';
import { ProductsDataType } from '@/types/api/products';

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductsDataType>) {
  res.status(200).json({ products });
}
