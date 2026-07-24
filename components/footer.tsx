'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Shop', href: '/shop' },
        { label: 'Categories', href: '/shop' },
        { label: 'New Arrivals', href: '/shop' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/contact' },
        { label: 'Returns', href: '#' },
        { label: 'Shipping', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-black mb-4">Ryzen Nutrition</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium supplements for peak performance. Science-backed, quality-tested, results-driven.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+4915771515938" className="text-foreground hover:text-primary transition-colors">
                  +49 157 71515938
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground">Rückertstraße 12, 22089 Hamburg</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-primary">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Ryzen Nutrition. All rights reserved. Engineered for champions.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-muted hover:bg-primary text-foreground hover:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
