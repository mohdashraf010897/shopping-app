import { ProductPageProps } from '@/types/pages/productPage';
import { fetchProductBySlug, fetchProducts } from '@/utils/api';
import { GetStaticPaths, GetStaticProps } from 'next';

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
  console.log('🚀 ~ file: [slug].tsx:16 ~ constgetStaticProps:GetStaticProps= ~ params:', params);
  const product = await fetchProductBySlug(params?.slug as string);

  return {
    props: { product },
    revalidate: 1, // In seconds
  };
};

export default function ProductPage(props: ProductPageProps) {
  const { product } = props;

  if (!product) {
    return null;
  }

  console.log('🚀 ~ file: [slug].tsx:27 ~ ProductPage ~ product:', product);
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageURL} alt={product.name} />
      <p>{product.discountedPrice ?? product.price}</p>
    </div>
  );
}
