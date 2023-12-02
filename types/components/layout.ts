import { Category } from '../dataSource';

export type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  categories?: Category[];
};
