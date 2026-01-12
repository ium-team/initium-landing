import React from 'react';
import { BackgroundScene } from './components/Three/BackgroundScene';
import { Header } from './components/Sections/Header';
import { Hero } from './components/Sections/Hero';
import { Features } from './components/Sections/Features';
import { Pricing } from './components/Sections/Pricing';
import { FAQ } from './components/Sections/FAQ';
import { Footer } from './components/Sections/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
        {/* 3D Background Layer */}
        <BackgroundScene />
        
        {/* Content Layer */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
