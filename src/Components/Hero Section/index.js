import React, { useState } from 'react';
import heroButton from '../../images/Hero/hero-button.png';
import heroGirl from '../../images/Hero/hero-girl.png';
import calender from '../../images/Hero/calender.png';
import logistics from '../../images/Hero/Logistics.png';
import classTeacher from '../../images/Hero/class-teacher.png';
import admissionStatus from '../../images/Hero/Mail.png';

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

const HeroSection = ({ 
  title = "Studying", 
  highlightText = "Online is now much easier",
  description = "TOTC is an interesting platform that will teach you in more an interactive way",
  joinButtonText = "Join for free",
  videoButtonText = "Watch how it works",
  studentCount = "250k",
  studentCountLabel = "Assisted Student",
  className = "User Experience Class",
  classTime = "Today at 12.00 PM",
  joinNowText = "Join Now",
  congratsTitle = "Congratulations",
  congratsMessage = "Your admission completed",
  onJoinClick,
  onVideoClick,
  onClassJoinClick
}) => {
  const [isJoining, setIsJoining] = useState(false);
  const [showCongrats, setShowCongrats] = useState(true);

  const handleJoinClick = () => {
    setIsJoining(true);
    if (onJoinClick) {
      onJoinClick();
    }
    setTimeout(() => setIsJoining(false), 2000);
  };

  const handleVideoClick = () => {
    if (onVideoClick) {
      onVideoClick();
    }
  };

  const handleClassJoinClick = () => {
    if (onClassJoinClick) {
      onClassJoinClick();
    }
  };

  return (
    <HeroContainer>
        <HeroContent>
          <h2><span>{title}</span> {highlightText}</h2>
          <p>{description}</p>
          <HeroButtonsContainer>
            <JoinForFreeButton onClick={handleJoinClick} disabled={isJoining}>
              {isJoining ? 'Joining...' : joinButtonText}
            </JoinForFreeButton>
            <VideoButton onClick={handleVideoClick}>
              <img src={heroButton} alt='Play'/>
              {videoButtonText}
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
                <h4>{studentCount}</h4>
                <p>{studentCountLabel}</p>
              </div>
            </AssistedStudentsCount>
            <Logistics>
              <img src={logistics} alt='Logistics'/>
            </Logistics>
            <ClassSchedule>
                <div className="top-section">
                    <img src={classTeacher} alt='Teacher'/> 
                    <div className="content">
                        <h4>{className}</h4>
                        <p>{classTime}</p>
                    </div>
                </div>
                <button onClick={handleClassJoinClick}>{joinNowText}</button>
            </ClassSchedule>
            {showCongrats && (
              <AdmissionStatus>
                <img src={admissionStatus} alt='Mail'/> 
                <div className="content">
                  <h4>{congratsTitle}</h4>
                  <p>{congratsMessage}</p>
                </div>
              </AdmissionStatus>
            )}
        </HeroImages>
    </HeroContainer>
  );
};

export default HeroSection;