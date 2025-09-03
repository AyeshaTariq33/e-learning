import styled from "styled-components";

export const ExploreSection = styled.section`
  
  width: 100%;
  position: relative;
  margin-bottom: 100px;
  padding: 100px 0 60px 0;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;

  color: #000000DE;

 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: #ebf5ff;
    border-bottom-right-radius: 60px;
    z-index: -1;
  }


  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }

  .SectionHeader {
    margin-bottom: 60px;
    
    h2 {
      font-size: 42px;
      font-weight: 600;
      margin: 0 0 20px 0;
      line-height: 46px;
    }
    
    p {
      font-size: 14px;
      line-height: 20px;
      max-width: 600px;
      color: #0000008A;
    }
  }

  .link {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 10px;
    font-weight: bold;
    margin-bottom: 240px;

    img {
      max-width: 20px;
      height: auto;
      display: block;
    }

    .info {
      display: flex;
      gap: 10px;
      align-items: center; 
      
      a {
        color: #00BCD4;
        text-decoration: none;
        font-weight: 400;
      }
      
      .arrow {
        font-size: 20px;
        font-weight: 700;
        padding-bottom: 3px;
      }
    }
  }

  .bookRack {
    margin-bottom: 40px;
    position: relative;
  }

  .courseBooks {
    max-width: 100px;
    height: auto;
    position: relative;
  }

  .shelf {
    position: relative;
    max-width: 1150px;
    height: auto;
    margin-left: 10px;

    img {
      width: 100%;
      display: block;
    }
  }

.books {
    display: flex;
    justify-content: center;
    gap: 10px;
    position: absolute;
    bottom: 15px; 
    left: 10px;
}

.books .btn {
    border: none;
    color: white;
    padding: 4px 6px;
    width: 35px;
    height: 200px;
    border-radius: 12px;
    transform: rotate(-10.02deg);
    writing-mode: vertical-rl;
    text-orientation: sideways;
    position: absolute;
    top: 23px;
    z-index: 3;
    font-size: 12px;
    cursor: pointer;
}

/* Default positions for shelf1 */
.books .btn-orange {
    background-color: #FF6F00;
    left: 32px;
}

.books .btn-pink {
    background-color: #E91E63;
    left: 142px;
}

.books .btn-brown {
    background-color: #8D6E63;
    left: 252px;
}

.books .btn-yellow {
    background-color: #FFC107;
    left: 362px;
}

.books .btn-dblue {
    background-color: #1976D2;
    left: 472px;
}

.books .btn-lblue {
    background-color: #03A9F4;
    left: 582px;
}

.books .btn-ocean {
    background-color: #006064;
    left: 692px; 
}

.books2 .btn-dblue {
    left: 833px;
}

.books2 .btn-lblue {
    left: 943px;
}

.books2 .btn-ocean {
    left: 1053px;
}

/* Shelf3 specific positioning - card3 is after orange */
.books3 .btn-pink {
    left: 503px;
}

.books3 .btn-brown {
    left: 613px;
}

.books3 .btn-yellow {
    left: 723px;
}

.books3 .btn-dblue {
    left: 833px;
}

.books3 .btn-lblue {
    left: 943px;
}

.books3 .btn-ocean {
    left: 1053px;
}



.card {
  width: 350px;
  display: flex;
  align-items: center;
  border: 2px solid #00BCD4;
  background-color: white;
  border-radius: 26px;
  overflow: hidden;
  padding: 10px;
  height: 250px;
  justify-content: space-between;
}

.card-image {
  position: relative;
  max-width: 150px;

  img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
}

.card-content {
max-width: 160px; 

h3 {
  font-size: 14px;
  margin-bottom: 6px;
}

p {
  color: #666;
  font-size: 12px;
  margin-bottom: 10px;
}
}
.rating-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.stars {
  color: #f4a300;
}

.price {
  font-size: 14px;
  font-weight: bold;
}

.explore-btn {
    padding: 8px 48px;
    border: 1px solid #00bcd4;
    background: white;
    color: #00bcd4;
    border-radius: 6px;
    cursor: pointer;
}

`;