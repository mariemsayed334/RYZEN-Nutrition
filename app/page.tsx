'use client';

import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Flame, Activity, Target } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-1 w-8 bg-primary rounded-full" />
                <span className="text-primary font-bold text-sm uppercase tracking-widest">Peak Performance</span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight tracking-tight">
                Fuel Your
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Power
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Science-backed supplements engineered for champions. Push your limits, break your records, transform your body.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
                >
                  Shop Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-16">
                {[
                  { value: '10+', label: 'Products' },
                  { value: '50k+', label: 'Athletes' },
                  { value: '100%', label: 'Pure' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl">
              <Image
                src="/images/ryzen%20all.jpg"
                alt="Ryzen Nutrition all supplements"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-4">Why Champions Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formulated with scientific precision. Tested for purity. Trusted by athletes worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: 'Peak Performance',
                description: 'Scientifically formulated to maximize your athletic potential',
              },
              {
                icon: Flame,
                title: 'Premium Quality',
                description: 'Lab-tested ingredients for guaranteed purity and potency',
              },
              {
                icon: Target,
                title: 'Results Driven',
                description: 'See measurable improvements in strength and endurance',
              },
              {
                icon: Zap,
                title: 'Fast Acting',
                description: 'Quick absorption formula for immediate energy boost',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Icon className="w-16 h-16 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-32 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-1.5 w-10 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <span className="text-primary font-black text-xs uppercase tracking-widest">Best Sellers</span>
              </div>
              <h2 className="text-6xl lg:text-7xl font-black text-foreground mb-4 uppercase tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Power Up Your Performance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Engineered for champions. Trusted by athletes worldwide. Our most powerful supplements in one collection.
              </p>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-black px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1 uppercase tracking-wider text-sm"
            >
              View All <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Find exactly what you need for your fitness goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Protein', icon: '💪', slug: 'protein' },
              { name: 'Amino Acids', icon: '🧬', slug: 'amino-acids' },
              { name: 'Carbohydrates', icon: '⚡', slug: 'carbohydrates' },
              { name: 'Energy & Burn', icon: '🔥', slug: 'energy-burn' },
              { name: 'Vitamins', icon: '💊', slug: 'vitamins' },
            ].map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 h-full cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6">Ready to Dominate?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of athletes who&apos;ve transformed their performance with our premium supplements.
          </p>
          <Link
            href="/shop"
            className="group inline-flex items-center justify-center bg-primary hover:bg-accent text-primary-foreground px-10 py-4 rounded-lg font-bold uppercase tracking-wider text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
          >
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
