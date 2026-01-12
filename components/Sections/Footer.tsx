import React from 'react';
import { Box, Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <footer className="bg-slate-900 text-slate-300 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-600 p-1.5 rounded">
                <Box className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">Initium</span>
            </div>
            <p className="text-slate-400 text-sm break-keep">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#features" 
                    onClick={(e) => scrollToSection(e, 'features')}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {t.header.features}
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    onClick={(e) => scrollToSection(e, 'pricing')}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {t.header.pricing}
                  </a>
                </li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">{t.footer.links.changelog}</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">{t.footer.links.docs}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-400 transition-colors">{t.footer.links.about}</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">{t.footer.links.careers}</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">{t.footer.links.blog}</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">{t.footer.links.contact}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};