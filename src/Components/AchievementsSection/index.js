import React, { useState } from 'react';

import {
  SuccessSection,
  Container,
  SectionHeader,
  StatsFlex,
  StatItem
} from './styles';

const SuccessComponent = ({ 
  title = "Our Success",
  description = "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis utrices eu ornare tristique vel nisl orci.",
  studentsCount = "15K+",
  studentsLabel = "Students",
  successRate = "75%",
  successLabel = "Total success",
  questionsCount = "35",
  questionsLabel = "Main questions",
  expertsCount = "26",
  expertsLabel = "Chief experts",
  yearsCount = "16",
  yearsLabel = "Years of experience"
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SuccessSection>
      <Container>
        <SectionHeader>
          <h2>{title}</h2>
          <p>{description}</p>
        </SectionHeader>
        
        <StatsFlex>
          <StatItem>
            <h3>{studentsCount}</h3>
            <p>{studentsLabel}</p>
          </StatItem>
          
          <StatItem>
            <h3>{successRate}</h3>
            <p>{successLabel}</p>
          </StatItem>
          
          <StatItem>
            <h3>{questionsCount}</h3>
            <p>{questionsLabel}</p>
          </StatItem>
          
          <StatItem>
            <h3>{expertsCount}</h3>
            <p>{expertsLabel}</p>
          </StatItem>
          
          <StatItem>
            <h3>{yearsCount}</h3>
            <p>{yearsLabel}</p>
          </StatItem>
        </StatsFlex>
      </Container>
    </SuccessSection>
  );
};

export default SuccessComponent;