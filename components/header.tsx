'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Zap } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-black text-foreground hidden sm:inline">
              <span className="text-primary">Evolab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary font-semibold transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/checkout"
              className="hidden sm:flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-semibold text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/checkout"
                className="px-4 py-2 bg-primary hover:bg-accent text-primary-foreground rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                Cart
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
