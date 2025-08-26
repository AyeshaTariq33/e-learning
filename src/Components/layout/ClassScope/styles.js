import styled from 'styled-components';

export const ClassScopeSection = styled.section`
    margin-bottom: 80px;
    overflow: hidden;
    position: relative;
    padding: 40px;
`;

export const ScopeContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 30px;
`;

export const ScopeText = styled.div`
  flex: 1;
  z-index: 10;
  position: relative;
  max-width: 600px;

  
  h2 {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 20px;
    font-weight: 500;
    
    .normal-class {
      color: #2F327D;
    }
    
    .totc-class {
      color: #00CBB8;
    }
  }
  
  p {
    font-size: 15px;
    line-height: 22px;
    color: #696984;
    margin-bottom: 20px;
    max-width: 500px;
    word-spacing: 1.5px;
    letter-spacing: 1px;
  }
  
  a {
    color: #696984;
    text-decoration: underline;
    font-weight: 100;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2F327D;
    }
  }
`;

export const ScopePlayVideo = styled.div`
  position: relative;
`;

export const ClassRoom = styled.div`
  position: relative;
  z-index: 5;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  .classroom {
    width: 100%;
    height: auto;
    display: block;
    max-width: 470px;
    border-radius: 20px;
  }
`;

export const BlueShape = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 1;
  
  .blue-shape {
    max-width: 120px;
    height: auto;
    display: block;
  }
`;

export const GreenShape = styled.div`
  position: absolute;
  bottom: -15px;
  right: -20px;
  z-index: 1;
  
  .green-shape {
   max-width: 100px;
   height: auto;
   display: block;
  }
`;

export const GreenCircleBig = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  z-index: 1;
  
  .green-circle {
    max-width: 40px;
    height: auto;
  }
`;

export const GreenCircleSmall = styled.div`
  position: absolute;
  top: 148px;
  left: 505px;
  z-index: 1;
  
  .green-circle {
  max-width: 20px;
  height: auto;
  display: block;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
  
  .play-button {
    max-width: 100px;
    height: auto;
    display: block;
  }
`;