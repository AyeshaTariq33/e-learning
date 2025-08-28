import React from 'react';
import Header from './Components/layout/Header';
import HeroSection from './Components/layout/Hero Section';
import AcievementsSection from './Components/layout/AchievementsSection';
import FeaturesComponent from './Components/layout/Features';
import WhatIsTotc from './Components/layout/TOTCSection';
import ClassScope from './Components/layout/ClassScope';
import OurFeatures from './Components/layout/OurFeatures';
import Tools from './Components/layout/Tools';
import Evaluation from './Components/layout/Evaluation';
import ClassManagement from './Components/layout/ClassManagement';
import Discussion from './Components/layout/Discussion';

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
      <Evaluation />
      <ClassManagement />
      <Discussion />
    </div>
  );
}

export default App;