'use client';

import { ProductCard } from '@/components/product-card';
import { products, categories } from '@/data/products';
import { slugify } from '@/lib/utils';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = categories.find((c) => c.id === slug);
  const categoryProducts = products.filter((p) => slugify(p.category) === slug);

  if (!category) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">Category Not Found</h1>
          <Link href="/shop" className="text-primary font-bold hover:text-secondary">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shop
        </Link>

        <div className="mb-12">
          <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-4">{category.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{category.description}</p>
        </div>

        {/* Category Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Science-Backed',
              description: 'Formulated with research-backed ingredients for optimal results',
            },
            {
              title: 'Lab-Tested',
              description: 'Every product is tested for purity and potency',
            },
            {
              title: 'Performance Proven',
              description: 'Used by professional athletes and trainers worldwide',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300"
            >
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <div>
          <h2 className="text-3xl font-black text-foreground mb-8">
            {categoryProducts.length} Product{categoryProducts.length !== 1 ? 's' : ''}
          </h2>

          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-foreground mb-2">No products in this category</p>
              <Link href="/shop" className="text-primary font-bold hover:text-secondary">
                Explore other categories
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
