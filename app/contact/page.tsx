'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-background min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions about our products? We&apos;re here to help. Reach out to our team anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'support@evolab.com',
                  description: 'We reply within 24 hours',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  value: '+1 (555) 123-4567',
                  description: 'Mon-Fri 9am-6pm EST',
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  value: 'Los Angeles, CA',
                  description: 'United States',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    <p className="font-semibold text-foreground ml-12 mb-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground ml-12">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-3">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-primary hover:bg-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center text-green-700 font-semibold">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-muted/30 rounded-3xl p-12 border border-border">
          <h2 className="text-4xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and digital wallets.',
              },
              {
                q: 'Do you offer international shipping?',
                a: 'Yes! We ship worldwide with flat rate international shipping.',
              },
              {
                q: 'What&apos;s your return policy?',
                a: 'We offer 30-day money-back guarantee on all products.',
              },
              {
                q: 'Are your products vegan?',
                a: 'Some products are vegan. Check product details for dietary info.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
