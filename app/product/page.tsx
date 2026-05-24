'use client';

import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';

export default function ProductIndexPage() {
  return (
    <div className="bg-background min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-4">All Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse every product in the store and click any card to view its details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
