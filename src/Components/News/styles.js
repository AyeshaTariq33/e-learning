import styled from 'styled-components';

export const NewsSection = styled.section`
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  .Container {
    max-width: 1200px;
    width: 100%;
  }

  .Header {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      font-size: 28px;
      line-height: 32px;
      font-weight: 500;
      color: #2F327D;
      margin-bottom: 12px;
      margin-top: 0;
    }

    .Subtitle {
      font-size: 16px;
      color: #696984;
      margin: 0;
      line-height: 24px;
    }
  }

  .NewsGrid {
    display: flex;
    justify-content: space-between;
  }

  .MainCard {
    max-width: 540px;
    height: auto;

    .imageContainer {
      position: relative;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    
    h3 {
      font-size: 20px;
      font-weight: 500;
      color: #252641;
      margin-bottom: 10px;
      margin-top: 0;
      line-height: 28px;
    }
    
    p {
      margin-bottom: 10px;
      font-size: 14px;
      color: #696984;
      line-height: 22px;
    }
    
    a {
      color: #696984;
      text-decoration: underline;
      font-weight: 400;
      font-size: 12px;
      cursor: pointer;
      transition: color 0.3s ease;
      
      &:hover {
        color: #2F327D;
      }
    }
  }

  .SideCards {
    display: block;
    gap: 24px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
  }

  .SideCard {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 15px;
    max-width: 540px;
    
    .cardImage {
      flex-shrink: 0;
      max-width: 190px;
      position: relative;
      
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 6px;
        display: block;
      }
    }

    .cardContent {
      flex: 1;
      
      h4 {
        font-size: 14px;
        font-weight: 600;
        color: #252641;
        margin-bottom: 8px;
        margin-top: 0;
        line-height: 20px;
      }
      
      p {
        font-size: 12px;
        color: #696984;
        margin: 0;
        line-height: 18px;
      }
    }
  }

  .badge {
    position: absolute;
    bottom: 12px;
    right: 12px;
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    z-index: 1;
    
    &.news {
      background-color: #49BBBD;
      color: white;
    }
    
    &.press-release {
      background-color: #49BBBD;
      color: white;
    }

     hover:news {
     background-color: white;
      color: #49BBBD;
    }
    
    hover:press-release {
      background-color: white;
      color: #49BBBD;
    }
  }

  .badge-news{
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-color: #49BBBD;
    color: white;
    max-width: fit-content;
    margin-bottom: 5px;
    }

    hover:badge-news{
    background-color: white;
      color: #49BBBD;
}
`;