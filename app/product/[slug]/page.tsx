'use client';

import { products } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { slugify } from '@/lib/utils';

export default function ProductPage() {
  const params = useParams();
  const rawSlug = params.slug as string;
  const slug = decodeURIComponent(rawSlug);
  
  const product = products.find((p) => slugify(p.slug) === slugify(slug));
  const [selectedFlavor, setSelectedFlavor] = useState(product?.flavors[0]);

  if (!product) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">Product Not Found</h1>
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
        {/* Navigation */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div>
            <div className="sticky top-32">
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl overflow-hidden mb-6 aspect-square flex items-center justify-center border border-border p-4">
                {selectedFlavor?.image && (
                  <img
                    src={selectedFlavor.image}
                    alt={selectedFlavor.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                )}
              </div>

              {/* Flavor Selector */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Available Flavors
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor.id}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedFlavor?.id === flavor.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      <div className="font-bold text-sm text-foreground text-center">
                        {flavor.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Category */}
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
              {product.category.replace('-', ' ')}
            </span>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-black text-foreground mb-4">{product.name}</h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Key Benefits */}
            {product.keyBenefits && (
              <div className="mb-10">
                <h3 className="text-lg font-bold text-foreground mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Options */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-10 border border-border">
              <p className="text-muted-foreground leading-relaxed">
                Select a flavor and review the product details. Use the buttons on this page to explore the product and see related items.
              </p>
            </div>

            {/* How to Use */}
            <div className="bg-card rounded-2xl p-8 mb-10 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
              <p className="text-muted-foreground leading-relaxed">{product.howToUse}</p>
            </div>

            {/* Additional Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {product.ingredients && (
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                    Ingredients
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.ingredients}</p>
                </div>
              )}

              {product.storage && (
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                    Storage
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.storage}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-20 border-t border-border">
          <h2 className="text-4xl font-black text-foreground mb-12">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${slugify(relatedProduct.slug)}`}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                    {relatedProduct.flavors[0]?.image && (
                      <img
                        src={relatedProduct.flavors[0].image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
