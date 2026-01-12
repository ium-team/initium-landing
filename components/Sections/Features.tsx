import React from 'react';
import { RefreshCw, Users, Cpu, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.features.list[0].title,
      description: t.features.list[0].description,
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      gradient: "from-indigo-50 to-blue-50"
    },
    {
      title: t.features.list[1].title,
      description: t.features.list[1].description,
      icon: <Users className="w-6 h-6 text-brand-600" />,
      gradient: "from-brand-50 to-purple-50"
    },
    {
      title: t.features.list[2].title,
      description: t.features.list[2].description,
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      gradient: "from-purple-50 to-pink-50"
    },
    {
      title: t.features.list[3].title,
      description: t.features.list[3].description,
      icon: <GitMerge className="w-6 h-6 text-orange-600" />,
      gradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 break-keep">
            {t.features.heading} <span className="text-brand-600">{t.features.headingHighlight}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto break-keep">
            {t.features.subHeading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl -z-10`}></div>
              
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 break-keep">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed break-keep">{feature.description}</p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Visual Showcase Section */}
        <div className="mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-slate-900 mb-6 break-keep">
                        {t.features.showcaseTitle} <br/>
                        <span className="text-indigo-600">{t.features.showcaseTitleHighlight}</span>
                    </h3>
                    <p className="text-slate-600 mb-8 text-lg break-keep">
                        {t.features.showcaseDesc}
                    </p>
                    <ul className="space-y-4">
                        {t.features.showcaseList.map((item: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Simulated Screenshot */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-2xl opacity-20 blur-xl"></div>
                    <div className="relative rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden aspect-[4/3]">
                        {/* Placeholder UI for Sync Feature */}
                        <div className="flex h-full">
                             <div className="w-1/3 border-r border-slate-100 bg-slate-50 p-4">
                                 <div className="h-4 w-20 bg-slate-200 rounded mb-4"></div>
                                 <div className="space-y-2">
                                     <div className="h-2 w-full bg-slate-200 rounded"></div>
                                     <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                                     <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                                 </div>
                             </div>
                             <div className="w-2/3 p-6 flex flex-col justify-center items-center relative">
                                 {/* Connection Lines */}
                                 <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                     <path d="M50 100 C 150 100, 150 200, 250 200" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                                 </svg>
                                 <div className="bg-white border border-indigo-100 shadow-lg p-4 rounded-lg w-48 mb-8 z-10">
                                     <div className="text-xs font-bold text-indigo-600 mb-2">{t.features.uiUserTable}</div>
                                     <div className="space-y-1">
                                         <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                                         <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                                     </div>
                                 </div>
                                 <div className="bg-white border border-brand-100 shadow-lg p-4 rounded-lg w-48 z-10">
                                     <div className="text-xs font-bold text-brand-600 mb-2">{t.features.uiApi}</div>
                                     <div className="space-y-1">
                                         <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};