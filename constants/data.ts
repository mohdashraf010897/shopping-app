/* eslint-disable max-len */
// This file serves as a mock database,
// providing static data for categories, products, and reviews.

import { Category, Product, ProductReview } from '@/types/dataSource';

export const categories: Category[] = [
  {
    id: 'cat1',
    title: 'Dairy, Bread & Eggs',
    imageURL: 'https://transvelo.github.io/freshcart/assets/images/category-dairy-bread-eggs.jpeg',
  },
  {
    id: 'cat2',
    title: 'Snacks & Munchies',
    imageURL: 'https://transvelo.github.io/freshcart/assets/images/category-snack-munchies.jpeg',
  },
  {
    id: 'cat3',
    title: 'Fruits & Vegetables',
    imageURL:
      'https://freshcart.madrasthemes.com/gutenberg/wp-content/uploads/2019/05/product-img-17-600x600.jpeg',
  },
  {
    id: 'cat4',
    title: 'Cold Drinks & Juices',
    imageURL: 'https://transvelo.github.io/freshcart/assets/images/category-tea-coffee-drinks.jpeg',
  },
  {
    id: 'cat5',
    title: 'Breakfast & Instant Food',
    imageURL: 'https://transvelo.github.io/freshcart/assets/images/category-instant-food.jpeg',
  },
  {
    id: 'cat6',
    title: 'Bakery & Biscuits',
    imageURL: 'https://transvelo.github.io/freshcart/assets/images/category-bakery-biscuits.jpeg',
  },
  {
    id: 'cat7',
    title: 'Chicken, Meat & Fish',
    // Add imageURL here
  },
];

export const products: Product[] = [
  {
    id: 'prod1',
    name: 'Amul Butter – 500 g',
    categoryId: 'cat1',
    price: 199,
    sale: false,
    rating: 4,
  },
  {
    id: 'prod2',
    name: 'Beatroot',
    categoryId: 'cat3',
    price: 40,
    sale: false,
    rating: 5,
  },
  {
    id: 'prod3',
    name: 'Blueberry Greek Yogurt',
    categoryId: 'cat1',
    price: 150,
    discountedPrice: 120,
    sale: true,
    rating: 3,
  },
  {
    id: 'prod4',
    name: 'Whole Wheat Bread',
    categoryId: 'cat1',
    price: 60,
    sale: false,
    rating: 4,
  },
  {
    id: 'prod5',
    name: 'Organic Eggs',
    categoryId: 'cat1',
    price: 80,
    discountedPrice: 60,
    sale: true,
    rating: 5,
  },
  {
    id: 'prod6',
    name: 'Almond Milk',
    categoryId: 'cat4',
    price: 200,
    sale: false,
    rating: 4,
  },
  {
    id: 'prod7',
    name: 'Oatmeal Cookies',
    categoryId: 'cat6',
    price: 120,
    discountedPrice: 90,
    sale: true,
    rating: 4,
  },
  // More products...
];

export const reviews: ProductReview[] = [
  {
    productId: 'prod1',
    reviews: [
      {
        rating: 4,
        comment: 'Great taste!',
        author: 'John Doe',
        date: '2022-01-01',
      },
    ],
  },
  {
    productId: 'prod2',
    reviews: [
      {
        rating: 5,
        comment: 'Fresh and juicy!',
        author: 'Jane Doe',
        date: '2022-01-02',
      },
    ],
  },
  {
    productId: 'prod3',
    reviews: [
      {
        rating: 3,
        comment: 'Could be better.',
        author: 'John Smith',
        date: '2022-01-03',
      },
    ],
  },
  {
    productId: 'prod4',
    reviews: [
      {
        rating: 4,
        comment: 'Healthy and delicious.',
        author: 'Jane Smith',
        date: '2022-01-04',
      },
    ],
  },
  {
    productId: 'prod5',
    reviews: [
      {
        rating: 5,
        comment: 'Best eggs ever!',
        author: 'John Doe',
        date: '2022-01-05',
      },
    ],
  },
  {
    productId: 'prod6',
    reviews: [
      {
        rating: 4,
        comment: 'Good for health.',
        author: 'Jane Doe',
        date: '2022-01-06',
      },
    ],
  },
  {
    productId: 'prod7',
    reviews: [
      {
        rating: 4,
        comment: 'Yummy cookies!',
        author: 'John Smith',
        date: '2022-01-07',
      },
    ],
  },
  // More reviews...
];
