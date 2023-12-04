import { PageDataProvider } from '@/components/contextProviders/PageDataProvider';
import ProductDetailPagePageComponent from '@/components/pages/productDetailPage';
import { ProductPageProps } from '@/types/pages/productPage';
import { fetchCategories, fetchProductBySlug, fetchProducts } from '@/utils/api';
import { GetStaticPaths, GetStaticProps } from 'next';

/*
Using SSG for product details. 
getStaticPaths fetches all product slugs for pre-rendering.
getStaticProps fetches individual product data. 

Benefits: 
1. Fast load times (pre-rendered HTML)
2. Good for SEO (content ready in HTML)
3. Reliable and scalable (pages served from CDN)

If product data changes, 'revalidate' in getStaticProps triggers a rebuild. 
Ideal for many products with infrequent changes.
*/

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();
  const paths = products?.map(({ slug }) => ({ params: { slug: slug } }));
  // Return the paths to be pre-rendered at build time.
  // If no paths are available, return an empty array.
  // For paths not pre-rendered, use 'blocking' fallback.
  // This will server-render on the first request and cache for subsequent ones.
  return { paths: paths ?? [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await fetchProductBySlug(params?.slug as string);

  const products = await fetchProducts();

  const categories = await fetchCategories();

  return {
    props: { product, categories, products },
    revalidate: 1, // In seconds
  };
};

export default function ProductPage(props: ProductPageProps) {
  const { product, categories, products } = props;
  console.log('🚀 ~ file: [slug].tsx:46 ~ ProductPage ~ products:', products);

  if (!product) {
    return null;
  }

  return (
    <PageDataProvider
      initialData={{
        product,
        categories,
        products,
      }}
    >
      <ProductDetailPagePageComponent />
    </PageDataProvider>
  );
}
