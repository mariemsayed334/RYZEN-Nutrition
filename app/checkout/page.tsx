'use client';

import { ShoppingCart, ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  const subtotal = 149.99;
  const shipping = 10.0;
  const tax = (subtotal + shipping) * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-background min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/shop"
            className="text-primary hover:text-secondary font-bold mb-6 inline-block transition-colors"
          >
            ← Back to Shop
          </Link>
          <h1 className="text-5xl lg:text-6xl font-black text-foreground">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-black text-foreground mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />

                  <div className="grid sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-black text-foreground mb-6 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Cardholder Name"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />

                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 text-base ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-primary hover:bg-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {submitted ? 'Order Placed!' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-black text-foreground mb-6">Order Summary</h2>

              {/* Product */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">Premium Supplements</h3>
                    <p className="text-sm text-muted-foreground">1x Bundle</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-foreground">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span className="font-semibold text-foreground">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-black text-foreground">Total</span>
                <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8 p-4 bg-primary/10 rounded-lg">
                <div className="flex gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground font-semibold">Free Returns</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground font-semibold">Fast Shipping</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground font-semibold">Secure Payment</span>
                </div>
              </div>

              <Link
                href="/shop"
                className="block text-center text-primary hover:text-secondary font-bold text-sm transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
