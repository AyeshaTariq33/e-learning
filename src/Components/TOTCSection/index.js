import React from 'react';
import { 
  TotcSection, 
  TotcHeading, 
  TotcDescription, 
  CardsContainer, 
  Card 
} from './styles';
import studentImg from '../../../images/WhatIsTOTC/Students.png';
import instructorImg from '../../../images/WhatIsTOTC/Instructors.png';

const WhatIsTotc = () => {
  return (
    <TotcSection>
      <TotcHeading>
        <span className='What-is'>What is </span><span className='Totc'>TOTC?</span>
      </TotcHeading>
      <TotcDescription>
        TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      </TotcDescription>
      <CardsContainer>
        <Card style={{ backgroundImage: `url(${instructorImg})` }}>
          <div className="content">
            <h3>FOR INSTRUCTORS</h3>
            <button>Start a class today</button>
          </div>
        </Card>
        <Card primary style={{ backgroundImage: `url(${studentImg})` }}>
          <div className="content">
            <h3>FOR STUDENTS</h3>
            <button>Enter access code</button>
          </div>
        </Card>
      </CardsContainer>
    </TotcSection>
  );
};

export default WhatIsTotc;
