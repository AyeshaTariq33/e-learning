import React from 'react';
import heroButton from '../../../images/Hero/hero-button.png';
import heroGirl from '../../../images/Hero/hero-girl.png';
import calender from '../../../images/Hero/calender.png';
import logistics from '../../../images/Hero/Logistics.png';
import classTeacher from '../../../images/Hero/class-teacher.png';
import admissionStatus from '../../../images/Hero/Mail.png';

import {
  HeroContainer,
  HeroContent,
  HeroImages,
  HeroButtonsContainer,
  JoinForFreeButton,
  VideoButton,
  HeroGirl,
  AssistedStudentsCount,
  Logistics,
  ClassSchedule,
  AdmissionStatus
} from './styles';

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroContent>
          <h2><span>Studying</span> Online is now much easier</h2>
          <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
          <HeroButtonsContainer>
            <JoinForFreeButton>
              Join for free
            </JoinForFreeButton>
            <VideoButton>
              <img src={heroButton} alt='Play'/>
              Watch how it works
            </VideoButton>
          </HeroButtonsContainer>
        </HeroContent>

        <HeroImages>
            <HeroGirl>
              <img src={heroGirl} alt='Hero'/>
            </HeroGirl>
            <AssistedStudentsCount>
              <img src={calender} alt='Calendar'/> 
              <div className="content">
                <h4>250k</h4>
                <p>Assisted Student</p>
              </div>
            </AssistedStudentsCount>
            <Logistics>
              <img src={logistics} alt='Logistics'/>
            </Logistics>
            <ClassSchedule>
                <div className="top-section">
                    <img src={classTeacher} alt='Teacher'/> 
                    <div className="content">
                        <h4>User Experience Class</h4>
                        <p>Today at 12.00 PM</p>
                    </div>
                </div>
                <button>Join Now</button>
            </ClassSchedule>
            <AdmissionStatus>
              <img src={admissionStatus} alt='Mail'/> 
              <div className="content">
                <h4>Congratulations</h4>
                <p>Your admission completed</p>
              </div>
            </AdmissionStatus>
        </HeroImages>
    </HeroContainer>
  );
};

export default HeroSection;