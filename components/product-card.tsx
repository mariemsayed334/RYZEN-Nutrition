'use client';

import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3">
      <Link
        href={`/product/${encodeURIComponent(product.slug)}`}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-10"
      />

      {/* Gradient Border Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl" />
      </div>

      {/* Image Container */}
      <div className="relative h-80 bg-gradient-to-br from-muted/80 to-muted overflow-hidden">
        {product.flavors[0]?.image && (
          <img
            src={product.flavors[0].image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
          />
        )}
        {product.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/50 animate-pulse">
            FEATURED
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col bg-gradient-to-br from-card to-card/80 relative z-20">
        {/* Category Badge */}
        <div className="inline-flex w-fit mb-3">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-1.5 rounded-lg border border-primary/30 group-hover:border-primary/60 group-hover:bg-gradient-to-r group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 uppercase tracking-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>

        {/* Flavors */}
        <div className="mb-6">
          <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">Flavors:</p>
          <div className="flex flex-wrap gap-2">
            {product.flavors.slice(0, 2).map((flavor) => (
              <span
                key={flavor.id}
                className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-secondary/30 to-primary/20 text-secondary border border-secondary/40 font-semibold group-hover:border-secondary/70 group-hover:from-secondary/40 group-hover:to-primary/30 transition-all"
              >
                {flavor.name}
              </span>
            ))}
            {product.flavors.length > 2 && (
              <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-muted-foreground font-semibold">
                +{product.flavors.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border/50">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className={`relative z-20 flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 ${
              isAdded
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/50'
                : 'bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary hover:shadow-lg hover:shadow-primary/50 text-primary-foreground'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {isAdded ? 'Added!' : 'Add'}
          </button>
          <button className="relative z-20 p-3 rounded-lg border border-border hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group/heart">
            <Star className="w-4 h-4 text-muted-foreground group-hover/heart:text-secondary group-hover/heart:scale-125 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}
