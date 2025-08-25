import React from 'react';
import Header from './Components/layout/Header';
import HeroSection from './Components/layout/Hero Section';
import AcievementsSection from './Components/layout/AchievementsSection';
import FeaturesComponent from './Components/layout/Features';
import WhatIsTotc from './Components/layout/TOTCSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AcievementsSection />
      <FeaturesComponent />
      <WhatIsTotc />
    </div>
  );
}

export default App;