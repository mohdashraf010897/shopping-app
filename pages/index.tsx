import { fetchCategories, fetchProducts, fetchReviews } from '@/utils/api';
import HomePageComponent from '@/components/pages/home';

import { HomePageProps } from '@/types/pages/homepage';
import { GetServerSideProps } from 'next';
import { PageDataProvider } from '@/components/contextProviders/PageDataProvider';

function HomePage(props: HomePageProps) {
  return (
    <PageDataProvider
      initialData={{
        ...props,
      }}
    >
      <HomePageComponent />
    </PageDataProvider>
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
