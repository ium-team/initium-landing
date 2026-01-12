import React from 'react';
import { Button } from '../UI/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.plans[0].name,
      price: "$0",
      description: t.pricing.plans[0].description,
      features: t.pricing.plans[0].features,
      cta: t.pricing.plans[0].cta,
      buttonVariant: "outline" as const
    },
    {
      name: t.pricing.plans[1].name,
      price: "$29",
      description: t.pricing.plans[1].description,
      features: t.pricing.plans[1].features,
      cta: t.pricing.plans[1].cta,
      recommended: true,
      buttonVariant: "primary" as const
    },
    {
      name: t.pricing.plans[2].name,
      price: "$99",
      description: t.pricing.plans[2].description,
      features: t.pricing.plans[2].features,
      cta: t.pricing.plans[2].cta,
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.pricing.title}</h2>
          <p className="text-slate-600">{t.pricing.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.recommended 
                  ? 'bg-white shadow-2xl ring-2 ring-brand-500 scale-105 z-10' 
                  : 'bg-white shadow-lg border border-slate-100'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {t.pricing.mostPopular}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-slate-500">{t.pricing.month}</span>}
                </div>
                <p className="mt-4 text-sm text-slate-600 break-keep">{plan.description}</p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant={plan.buttonVariant} className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};