import styled from 'styled-components';

export const TotcSection = styled.section`
  text-align: center;
  padding: 0 20px;
  color: #333;
  margin-bottom: 60px;
`;

export const TotcHeading = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #1E1E1E;
    .Totc {
        color: #49BBBD;
    }
    .What-is {
        color: #2F327D;
    }
`;

export const TotcDescription = styled.p`
  max-width: 700px;
  word-spacing: 1.5px;
  letter-spacing: 1px;
  margin: 0 auto 50px auto;
  font-size: 14px;
  line-height: 18px;
  color: #696984;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: center;

    h3 {
      font-size: 22px;
      margin-bottom: 15px;
      font-weight: 500;
    }

    button {
      background: ${props => props.primary ? '#49BBBD' : 'transparent'};
      border: ${props => props.primary ? 'none' : '1px solid white'};
      padding: 12px 25px;
      border-radius: 50px;
      font-size: 16px;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: white;
        color: ${props => props.primary ? '#49BBBD' : '#333'};
      }
    }
  }
`;
