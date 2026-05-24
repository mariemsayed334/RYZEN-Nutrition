'use client';

import { Award, Target, Users, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-20">
          <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-6">About Evolab Nutrition</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We&apos;re not just a supplement company. We&apos;re a movement dedicated to pushing the boundaries of human
            performance through science-backed nutrition and relentless commitment to quality.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card rounded-3xl p-8 border border-border">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-3xl font-black text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class supplements that empower athletes and fitness enthusiasts to achieve their peak
              performance and transform their bodies through scientifically formulated, premium-quality products.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-8 border border-border">
            <Zap className="w-12 h-12 text-secondary mb-4" />
            <h2 className="text-3xl font-black text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and innovative nutrition brand worldwide, recognized for our unwavering commitment
              to excellence, integrity, and the pursuit of athletic greatness.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'Every product undergoes rigorous testing for purity and potency',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building a global community of passionate athletes and fitness enthusiasts',
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'Committed to continuous improvement and innovation',
              },
              {
                icon: Zap,
                title: 'Performance',
                description: 'Results-driven formulations designed for maximum effectiveness',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-all">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Story */}
        <div className="bg-muted/30 rounded-3xl p-12 border border-border mb-20">
          <h2 className="text-4xl font-black text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded by athletes, for athletes. We started Evolab Nutrition with a simple belief: champions deserve
              better supplements. While the industry was filled with marketing hype, we focused on what really matters —
              science, quality, and results.
            </p>
            <p>
              Every product in our lineup is formulated by our team of nutrition experts and tested in real-world
              conditions by professional athletes. We don&apos;t make compromises, and neither should you.
            </p>
            <p>
              Today, we&apos;re trusted by thousands of athletes worldwide who share our passion for pushing limits and
              achieving greatness. Our commitment to excellence remains unchanged: deliver only the highest quality
              supplements that actually work.
            </p>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { value: '50k+', label: 'Athletes Served' },
            { value: '10+', label: 'Premium Products' },
            { value: '100%', label: 'Lab Tested' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-foreground mb-6">Ready to Join the Movement?</h2>
          <Link
            href="/shop"
            className="group inline-flex items-center justify-center bg-primary hover:bg-accent text-primary-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
          >
            Shop Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
