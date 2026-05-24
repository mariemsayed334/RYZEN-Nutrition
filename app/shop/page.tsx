'use client';

import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import { slugify } from '@/lib/utils';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'protein', name: 'Protein' },
    { id: 'amino-acids', name: 'Amino Acids' },
    { id: 'carbohydrates', name: 'Carbohydrates' },
    { id: 'energy-burn', name: 'Energy & Burn' },
    { id: 'vitamins', name: 'Vitamins' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || slugify(product.category) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-4">Our Shop</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Premium supplements engineered for peak performance. Find the perfect product for your fitness goals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-muted-foreground font-semibold">
              <Filter className="w-4 h-4" />
              Filter:
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'bg-muted hover:bg-card border border-border hover:border-primary text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground font-semibold">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-foreground mb-2">No products found</p>
            <p className="text-muted-foreground mb-8">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-accent transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
