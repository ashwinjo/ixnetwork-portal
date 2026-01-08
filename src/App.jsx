import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsIxNetwork from './components/WhatIsIxNetwork';
import Foundation from './components/Foundation';
import Anatomy from './components/Anatomy';
import Resources from './components/Resources';
import Footer from './components/Footer';
import ApiReference from './components/ApiReference';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-obsidian-0 text-obsidian-textPrimary">
      {currentView === 'home' ? (
        <>
          <main>
            <Hero onNavigate={setCurrentView} />
            <WhatIsIxNetwork />
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
    </div>
  );
}

export default App;
