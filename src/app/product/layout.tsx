import ProductPageTracker from '@/components/analytics/ProductPageTracker';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProductPageTracker />
    </>
  );
}
