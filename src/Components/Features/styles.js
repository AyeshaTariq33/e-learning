import styled from 'styled-components';

export const FeaturesSection = styled.section`
  margin-bottom: 80px;
  text-align: center;

  
.Container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.SectionHeader{
  margin-bottom: 80px;
  
  h2 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    margin: 0 0 20px 0;
    
    .all-in-one {
      color: #2F327D;;
    }
    
    .cloud-software {
      color: #00CBB8;
    }
  }
  
  p {
    font-size: 16px;
    color: #2F327D;
    line-height: 20px;
    margin: 0 auto;
    max-width: 600px;
  }
}

.FeaturesFlex{
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.FeatureCard{
    flex: 1;
    max-width: 270px;
    height: 270px;
    text-align: center;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }

.IconWrapper{
  max-width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30px;
  left: 40%;

  img {
  display: block;
  max-width: 60px;
  height: auto;
  border-radius: 100%;
  }
}

.FeatureContent{
margin-top: 40px;
color: #2F327D;

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 20px 0;
    line-height: 24px;
  }
  
  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }
}
`;
