import React from 'react';
import Header from './Components/layout/Header';
import HeroSection from './Components/layout/Hero Section';
import AcievementsSection from './Components/layout/AchievementsSection';
import FeaturesComponent from './Components/layout/Features';
import WhatIsTotc from './Components/layout/TOTCSection';
import ClassScope from './Components/layout/ClassScope';
import OurFeatures from './Components/layout/OurFeatures';
import Tools from './Components/layout/Tools';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AcievementsSection />
      <FeaturesComponent />
      <WhatIsTotc />
      <ClassScope />
      <OurFeatures />
      <Tools />
    </div>
  );
}

export default App;