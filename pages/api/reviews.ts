// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { reviews } from '@/constants/data';
import { ReviewsDataType } from '@/types/api/reviews';

export default function handler(req: NextApiRequest, res: NextApiResponse<ReviewsDataType>) {
  const productId = req.query.productId;
  const filteredReviews = productId
    ? reviews.filter(review => review.productId === productId)
    : reviews;
  res.status(200).json({ reviews: filteredReviews });
}
