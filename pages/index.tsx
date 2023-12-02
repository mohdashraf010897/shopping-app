import { DataProvider } from '@/components/common/DataProvider';
import { fetchCategories, fetchProducts, fetchReviews } from '@/utils/api';
import HomePageComponent from '@/components/pages/home';

import { HomePageProps } from '@/types/pages/homepage';
import { GetServerSideProps } from 'next';

function HomePage({ products, categories, reviews }: HomePageProps) {
  return (
    <DataProvider initialData={{ products, categories, reviews }}>
      <HomePageComponent />
    </DataProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const reviews = await fetchReviews();

  return {
    props: {
      categories,
      products,
      reviews,
    },
  };
};

export default HomePage;
