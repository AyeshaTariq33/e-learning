import React, { useState } from 'react';
import {TotcSection} from './styles';
import studentImg from '../../images/WhatIsTOTC/Students.png';
import instructorImg from '../../images/WhatIsTOTC/Instructors.png';

const WhatIsTotc = ({
  headingFirstPart = "What is ",
  headingSecondPart = "TOTC?",
  description = "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
  instructorCardTitle = "FOR INSTRUCTORS",
  instructorButtonText = "Start a class today",
  studentCardTitle = "FOR STUDENTS",
  studentButtonText = "Enter access code",
  onInstructorClick,
  onStudentClick
}) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleInstructorClick = () => {
    setSelectedCard('instructor');
    if (onInstructorClick) {
      onInstructorClick();
    }
  };

  const handleStudentClick = () => {
    setSelectedCard('student');
    if (onStudentClick) {
      onStudentClick();
    }
  };

  const handleCardHover = (cardType) => {
    setHoveredCard(cardType);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <TotcSection>
      <div className="TotcHeading">
        <span className='What-is'>{headingFirstPart}</span><span className='Totc'>{headingSecondPart}</span>
      </div>
      <div className="TotcDescription">
        {description}
      </div>
      <div className="CardsContainer">
        <div className="Card"
          style={{ 
            backgroundImage: `url(${instructorImg})`,
            transform: hoveredCard === 'instructor' ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            opacity: selectedCard && selectedCard !== 'instructor' ? 0.8 : 1
          }}
          onMouseEnter={() => handleCardHover('instructor')}
          onMouseLeave={handleCardLeave}
        >
          <div className="content">
            <h3>{instructorCardTitle}</h3>
            <button onClick={handleInstructorClick}>{instructorButtonText}</button>
          </div>
        </div>
        <div className="Card"
          primary 
          style={{ 
            backgroundImage: `url(${studentImg})`,
            transform: hoveredCard === 'student' ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            opacity: selectedCard && selectedCard !== 'student' ? 0.8 : 1
          }}
          onMouseEnter={() => handleCardHover('student')}
          onMouseLeave={handleCardLeave}
        >
          <div className="content">
            <h3>{studentCardTitle}</h3>
            <button onClick={handleStudentClick}>{studentButtonText}</button>
          </div>
        </div>
      </div>
    </TotcSection>
  );
};

export default WhatIsTotc;