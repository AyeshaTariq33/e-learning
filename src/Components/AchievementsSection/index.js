import React from 'react';

import {
  SuccessSection,
  Container,
  SectionHeader,
  StatsFlex,
  StatItem
} from './styles';

const SuccessComponent = () => {
  return (
    <SuccessSection>
      <Container>
        <SectionHeader>
          <h2>Our Success</h2>
          <p>
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec 
            nam et pharetra gravida. Adipiscing a quis utrices eu ornare tristique vel nisl orci.
          </p>
        </SectionHeader>
        
        <StatsFlex>
          <StatItem>
            <h3>15K+</h3>
            <p>Students</p>
          </StatItem>
          
          <StatItem>
            <h3>75%</h3>
            <p>Total success</p>
          </StatItem>
          
          <StatItem>
            <h3>35</h3>
            <p>Main questions</p>
          </StatItem>
          
          <StatItem>
            <h3>26</h3>
            <p>Chief experts</p>
          </StatItem>
          
          <StatItem>
            <h3>16</h3>
            <p>Years of experience</p>
          </StatItem>
        </StatsFlex>
      </Container>
    </SuccessSection>
  );
};

export default SuccessComponent;