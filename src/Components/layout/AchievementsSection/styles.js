import styled from 'styled-components';

export const SuccessSection = styled.section`
  margin-bottom: 100px;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionHeader = styled.div`
  margin-bottom: 60px;
  
  h2 {
    font-size: 42px;
    font-weight: 600;
    color: black;
    margin: 0 0 20px 0;
    line-height: 46px;
  }
  
  p {
    font-size: 14px;
    color: #252525e3;
    line-height: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const StatsFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;
`;

export const StatItem = styled.div`
  flex: 1;
  max-width: 150px;
  
  h3 {
    font-size: 56px;
    line-height: 60px;
    font-weight: 300;
    background: linear-gradient(to right, #136CB5, #49BBBD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    font-size: 18px;
    color: #333;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }
`;