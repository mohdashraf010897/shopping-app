import Breadcrumbs from '@/components/common/BreadCrumbs';
import React from 'react';
import ProductDetail from './ProductDetail';
import { usePageDataProvider } from '@/utils/hooks/usePageDataProviderContext';

const ProductDetailPagePageComponent: React.FC = () => {
  const { product, categories } = usePageDataProvider();

  const category = categories?.find(cat => cat.id === product?.categoryId);

  if (!product) {
    return null;
  }
  return (
    <div className="p-8">
      <Breadcrumbs />
      <ProductDetail {...product} category={category?.title ?? ''} />
    </div>
  );
};

export default ProductDetailPagePageComponent;
