import { products } from '@/constants/data';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const foundProduct = products.find(product => product.slug === slug);
  res.status(200).json({ product: foundProduct });
}
