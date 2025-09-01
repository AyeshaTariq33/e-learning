import styled from 'styled-components';

export const OurFeaturesSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  padding: 40px;

  
.Container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.Title{
  text-align: center;
  margin-bottom: 120px;
  
  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 40px;
    
    span:first-child {
      color: #2F327D;
    }
    
    span:last-child {
      color: #00CBB8;
      margin-left: 8px;
    }
  }
  
  p {
    font-size: 16px;
    color: #696984;
    max-width: 600px;
    margin: 0 auto;
    line-height: 20px;
  }
}

.Wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 175px;
}

.ImagesWrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Call{
  position: relative;
  z-index: 3;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  
  .Call {
    max-width: 500px;
    height: auto;
    display: block;
  }
}

.BigBlue{
  position: absolute;
  bottom: -55px;
  right: -50px;
  z-index: 1;
  
  .bigBlue {
    max-width: 160px;
    height: auto;
    display: block;
  }
}

.SmallBlue{
  position: absolute;
  top: -50px;
  left: 145px;
  z-index: 2;
  
  .smallBlue {
    max-width: 15px;
    height: auto;
    display: block;
  }
}

.RedCircle{
    position: absolute;
    bottom: -55px;
    right: 105px;
    z-index: 2;
  
  .redCircle {
    max-width: 15px;
    height: auto;
    display: block;
  }
}

.GreenCircle{
  position: absolute;
  top: -50px;
  left: 40px;
  z-index: 2;
  
  .greenCircle {
    max-width: 90px;
    height: auto;
    display: block;
  }
}

.Girl{
  position: absolute;
  bottom: -59px;
  right: -105px;
  z-index: 20;

  img {
    max-width: 200px;
    height: auto;
    display: block;
  }
}

.Boy{
  position: absolute;
  bottom: 113px;
  right: -97px;
  z-index: 20;
  
  img {
    max-width: 180px;
    height: auto;
    display: block;
  }
}

.FeaturesWrapper{
  flex: 1;
  max-width: 400px;

  h2 {
    font-size: 26px;
    font-weight: 600;
    line-height: 38px;
    margin-bottom: 25px;
    
    .design {
      color: #2F327D;
    }
    
    .user-interface {
      color: #00CBB8;
    }
  }
}

.Teams{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  
  .teams {
    max-width: 35px;
    height: auto;
    border-radius: 30px;
    display: block;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
  
  p {
    font-size: 14px;
    color: #4a5568;
    line-height: 24px;
    margin: 0;
  }
}

.TA{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  
  .TA {
    max-width: 35px;
    height: auto;
    border-radius: 30px;
    display: block;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
  
  p {
    font-size: 14px;
    color: #4a5568;
    line-height: 24px;
    margin: 0;
  }
}

.Contact{
  display: flex;
  align-items: center;
  gap: 20px;
  
  .contact {
    max-width: 35px;
    height: auto;
    border-radius: 30px;
    display: block;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
  
  p {
    font-size: 14px;
    color: #696984;
    line-height: 24px;
    margin: 0;
  }
}
`;
