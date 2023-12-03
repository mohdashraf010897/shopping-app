import { fetchCategories, fetchProducts, fetchReviews } from '@/utils/api';
import HomePageComponent from '@/components/pages/home';

import { HomePageProps } from '@/types/pages/homepage';
import { GetServerSideProps } from 'next';
import { GlobalDataProvider } from '@/components/contextProviders/GlobalDataProvider';

function HomePage(props: HomePageProps) {
  return (
    <GlobalDataProvider
      initialData={{
        ...props,
      }}
    >
      <HomePageComponent />
    </GlobalDataProvider>
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
