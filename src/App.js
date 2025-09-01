import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AcievementsSection from './Components/AchievementsSection';
import FeaturesComponent from './Components/Features';
import WhatIsTotc from './Components/TOTCSection';
import ClassScope from './Components/ClassScope';
import OurFeatures from './Components/OurFeatures';
import Tools from './Components/Tools';
import Evaluation from './Components/Evaluation';
import ClassManagement from './Components/ClassManagement';
import Discussion from './Components/Discussion';
import Testimonial from './Components/Testimonials';
import Footer from './Components/Footer';
 

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
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;