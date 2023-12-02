// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@/constants/data';
import { Product } from '@/types/dataSource';

type Data = {
  products: Product[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const categoryId = req.query.categoryId;
  const filteredProducts = categoryId
    ? products.filter(product => product.categoryId === categoryId)
    : products;
  res.status(200).json({ products: filteredProducts });
}
