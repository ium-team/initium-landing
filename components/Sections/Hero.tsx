import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { PlayCircle, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();

  // Reusing the smooth scroll logic for the CTA
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (!element) return;
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative pt-32 pb-40 overflow-hidden">
      
      {/* Vibrant Background Blobs (CSS) - Updated Colors (No Green) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Container - Higher Z-Index to sit over 3D Canvas */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg mb-8 hover:scale-105 transition-transform cursor-default"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-wide uppercase">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1] break-keep"
        >
          {t.hero.titleLine1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 drop-shadow-sm">
            {t.hero.titleLine2}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium break-keep"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full group bg-gradient-to-r from-brand-600 to-indigo-700 hover:from-brand-500 hover:to-indigo-600 border-none shadow-brand-500/30"
              onClick={scrollToPricing}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full bg-white/80 hover:bg-white border-white/50 backdrop-blur-md shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/30 group"
              onClick={() => setShowVideo(true)}
            >
              <span className="relative flex h-5 w-5 mr-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></span>
                 <PlayCircle className="relative inline-flex rounded-full h-5 w-5 text-indigo-600 group-hover:text-indigo-500" />
              </span>
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Abstract UI Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 60, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.3 }}
          className="mt-20 mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-xl relative z-20"
        >
           {/* Reflection shine */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none z-20"></div>

           {/* Fake browser chrome */}
           <div className="h-10 bg-white/60 border-b border-white/20 flex items-center px-4 gap-2 backdrop-blur-md">
             <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm"></div>
             <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"></div>
             <div className="w-3 h-3 rounded-full bg-blue-400 shadow-sm"></div>
             <div className="ml-4 h-6 bg-slate-100/50 rounded-md w-96 border border-white/30 flex items-center px-3 text-xs text-slate-400">
                {t.hero.uiUrl}
             </div>
           </div>
           
           {/* Abstract Content Representation */}
           <div className="aspect-[16/9] bg-gradient-to-br from-slate-50/50 to-indigo-50/30 flex items-center justify-center relative">
               <div className="absolute inset-0 grid grid-cols-12 gap-6 p-8 opacity-60">
                   {/* Left Sidebar */}
                   <div className="col-span-2 bg-white/60 rounded-xl shadow-sm border border-white/50 h-full backdrop-blur-sm"></div>
                   {/* Main Content */}
                   <div className="col-span-7 flex flex-col gap-6">
                       <div className="h-32 bg-white/80 rounded-xl shadow-sm border border-white/50 backdrop-blur-md flex items-center justify-center">
                          <div className="w-3/4 h-2 bg-slate-200 rounded-full mb-2"></div>
                          <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                       </div>
                       <div className="flex-1 bg-white/60 rounded-xl shadow-sm border border-white/50 backdrop-blur-sm relative overflow-hidden">
                          {/* Code lines */}
                          <div className="p-4 space-y-2">
                             <div className="w-full h-2 bg-slate-200/50 rounded animate-pulse"></div>
                             <div className="w-5/6 h-2 bg-slate-200/50 rounded animate-pulse delay-75"></div>
                             <div className="w-4/6 h-2 bg-slate-200/50 rounded animate-pulse delay-150"></div>
                          </div>
                       </div>
                   </div>
                   {/* Right Sidebar */}
                   <div className="col-span-3 bg-white/60 rounded-xl shadow-sm border border-white/50 h-full backdrop-blur-sm"></div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                 <span className="px-6 py-3 bg-black/5 rounded-full backdrop-blur-md border border-white/20 text-slate-500 font-semibold shadow-inner">
                    {t.hero.uiTag}
                 </span>
               </div>
           </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-lg"
            onClick={() => setShowVideo(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-black rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl aspect-video relative ring-4 ring-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white hover:text-rose-400 z-10 bg-black/50 p-2 rounded-full transition-colors"
              >
                <X />
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Gradient for Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};