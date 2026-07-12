import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Layout, 
  ShoppingCart, 
  Boxes, 
  Star,
  ArrowUpRight
} from 'lucide-react';

export type Currency = 'XAF' | 'USD';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  priceXAF: string;
  priceUSD: string;
  startingFrom?: boolean;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  recommendedFor: string;
  badge?: string;
  glowColor: string;
  borderColor: string;
}

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'corporate',
    name: 'Corporate Website',
    description: 'Perfect for small businesses, agencies, and professionals aiming to build a credible online presence.',
    icon: Layout,
    priceXAF: '150,000 XAF',
    priceUSD: '$500',
    recommendedFor: 'Startups, consulting firms, portfolios, and local retail stores.',
    glowColor: 'rgba(59, 130, 246, 0.08)',
    borderColor: 'rgba(59, 130, 246, 0.25)',
    features: [
      'Domain Registration & Hosting (1 Year)',
      'Up to 5 Pages with custom layout templates',
      'Responsive mobile-first coding structure',
      'Professional business email suite (3 addresses)',
      'Basic SEO keyword indexing set',
      'Contact form & direct WhatsApp messaging',
      'Basic training & 1-Month dedicated support SLA'
    ],
    ctaText: 'Launch Corporate Portal'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Website',
    description: 'The ultimate storefront solution to scale sales, track analytics, and dominate direct-to-consumer pipelines.',
    icon: ShoppingCart,
    priceXAF: '350,000 XAF',
    priceUSD: '$1,190',
    isPopular: true,
    badge: 'Revenue Accelerator',
    recommendedFor: 'D2C brands, online boutiques, digital products, and scaling merchants.',
    glowColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    features: [
      'Everything included in Corporate',
      'Direct online shop with visual checkout systems',
      'Dynamic inventory & product catalog (up to 100 items)',
      'Secure Mobile Money (Momo/Orange), Visa & Stripe setup',
      'Self-service automated admin dashboard controls',
      'Google Analytics & pixel tracking integration',
      'Advanced on-page SEO schema optimization',
      '1-Month free technical maintenance coverage'
    ],
    ctaText: 'Scale Storefront Today'
  },
  {
    id: 'custom',
    name: 'Custom Enterprise Suite',
    description: 'Tailored, hyper-scalable systems engineered from scratch to fulfill complex operational requirements.',
    icon: Boxes,
    priceXAF: 'Custom',
    priceUSD: 'Custom',
    startingFrom: true,
    recommendedFor: 'Medium-to-large businesses, SaaS companies, fintechs, and medical portals.',
    glowColor: 'rgba(6, 182, 212, 0.08)',
    borderColor: 'rgba(6, 182, 212, 0.25)',
    features: [
      'Custom web applications (React, Next.js, Node.js)',
      'Mobile application deployments (iOS & Android)',
      'Advanced Database schemas & real-time synchronization',
      'Proprietary AI assistants & automated workflow pipelines',
      'Admin roles, permission controls & member logins',
      'Third-party external API & ERP software syncing',
      'Elite penetration testing security hardening',
      'Dedicated account representative & 3-Month SLA'
    ],
    ctaText: 'Co-Create Custom System'
  }
];

interface PricingCardsProps {
  currency: Currency;
  setView?: (view: any) => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ currency, setView }) => {
  const handleCtaClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(contactEl, { offset: -90 });
      } else {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (setView) {
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center w-full">
      {pricingPlansData.map((plan, index) => {
        const Icon = plan.icon;
        const price = currency === 'XAF' ? plan.priceXAF : plan.priceUSD;
        const isPopular = plan.isPopular;

        return (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col h-full rounded-3xl p-8 transition-all duration-500 relative select-none ${
              isPopular 
                ? 'bg-gradient-to-br from-[#1f39c4] to-[#8b1dca] text-white shadow-[0_20px_50px_rgba(31,57,196,0.25)] md:scale-105 z-10' 
                : 'bg-white border border-slate-200/60 shadow-[0_15px_35px_rgba(0,0,0,0.02)] hover:border-indigo-100 hover:shadow-[0_20px_45px_rgba(99,102,241,0.06)] text-slate-700'
            }`}
            id={`pricing-card-${plan.id}`}
          >
            {/* Popular Badge banner overlay */}
            {isPopular && (
              <div className="absolute top-6 right-6 bg-white text-[#4A47FF] text-xs font-sans font-bold py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-sm z-10">
                <Star className="w-3.5 h-3.5 fill-current text-[#4A47FF]" />
                <span>{plan.badge || 'Most Popular'}</span>
              </div>
            )}

            <div className="space-y-6 flex-grow flex flex-col justify-between h-full">
              <div className="space-y-6">
                {/* Header Stacked Vertically */}
                <div className="text-left">
                  {/* Icon container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border mb-5 ${
                    isPopular 
                      ? 'bg-white/10 border-white/10 text-white' 
                      : plan.id === 'custom'
                        ? 'bg-purple-50 border border-purple-100 text-purple-600'
                        : 'bg-slate-100 border border-slate-200 text-[#1f39c4]'
                  }`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  
                  {/* Title and Badge Target */}
                  <div className="space-y-1.5">
                    <h3 className={`font-display text-[20px] sm:text-[22px] font-black leading-tight ${
                      isPopular ? 'text-white' : 'text-slate-900'
                    }`}>
                      {plan.name}
                    </h3>
                    <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider block ${
                      isPopular ? 'text-indigo-100/70' : 'text-slate-500'
                    }`}>
                      For: {plan.id === 'custom' ? 'Complex Systems' : plan.id === 'ecommerce' ? 'Online Shops' : 'Brand Presence'}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px ${isPopular ? 'bg-white/15' : 'bg-slate-200/60'}`} />

                {/* Price layout */}
                <div className="text-left space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-3xl sm:text-4xl font-black tracking-tight ${
                      isPopular ? 'text-white' : 'text-[#1f39c4]'
                    }`}>
                      {price}
                    </span>
                  </div>
                  <p className={`font-sans text-xs font-normal leading-relaxed ${
                    isPopular ? 'text-indigo-100/90' : 'text-slate-500'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div className={`h-px ${isPopular ? 'bg-white/15' : 'bg-slate-200/60'}`} />

                {/* Features lists */}
                <div className="text-left space-y-3">
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-widest block ${
                    isPopular ? 'text-indigo-100/80' : 'text-slate-500'
                  }`}>
                    Included Deliverables
                  </span>
                  <ul className="space-y-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular 
                            ? 'bg-white text-[#1f39c4]' 
                            : plan.id === 'custom'
                              ? 'bg-purple-600 text-white'
                              : 'bg-blue-600 text-white'
                        }`}>
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className={`font-sans text-xs sm:text-[13px] leading-tight ${
                          isPopular ? 'text-white/95' : 'text-slate-600'
                        }`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer / CTA block */}
              <div className="space-y-4 pt-6">
                <div className={`text-left p-3.5 rounded-lg border ${
                  isPopular 
                    ? 'bg-white/10 border-white/10 text-white' 
                    : 'bg-slate-50 border border-slate-200/60'
                }`}>
                  <span className={`font-mono text-[8.5px] uppercase font-bold tracking-wider block mb-1 ${
                    isPopular ? 'text-indigo-100/80' : 'text-slate-400'
                  }`}>
                    IDEAL AUDIENCE
                  </span>
                  <p className={`font-sans text-[11px] leading-normal ${
                    isPopular ? 'text-indigo-50/95' : 'text-slate-600'
                  }`}>
                    {plan.recommendedFor}
                  </p>
                </div>

                <button
                  onClick={handleCtaClick}
                  className={`group relative w-full py-3.5 rounded-2xl font-sans text-sm font-bold tracking-wide transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-white text-blue-700 hover:bg-slate-50 shadow-md'
                      : 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/50'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
