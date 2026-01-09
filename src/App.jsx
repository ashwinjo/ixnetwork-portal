import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Foundation from './components/Foundation';
import Anatomy from './components/Anatomy';
import Resources from './components/Resources';
import Footer from './components/Footer';
import ApiReference from './components/ApiReference';
import { ArrowUp } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-0 text-obsidian-textPrimary">
      {currentView === 'home' ? (
        <>
          <main>
            <Header onNavigate={setCurrentView} />
            <Hero onNavigate={setCurrentView} />
            <Foundation />
            <Anatomy />
            <Resources />
          </main>
          <Footer />
        </>
      ) : (
        <main>
          <Header onNavigate={setCurrentView} />
          <ApiReference />
        </main>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-obsidian-1 border border-obsidian-accent/30 rounded-full text-obsidian-accent shadow-[0_0_20px_rgba(0,242,255,0.1)] hover:bg-obsidian-accent hover:text-obsidian-0 transition-all duration-300 z-50 animate-fade-in group"
          aria-label="Back to Top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}

export default App;
