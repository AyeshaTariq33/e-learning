import styled from "styled-components";

export const Evaluations = styled.div`
    width: 100%;
    padding:  40px 40px 40px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

.Container{
    padding: 0 20px;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.Title{
  text-align: left;
  margin-bottom: 120px;
  
  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 40px;
    max-width: 215px;
    color: #2F327D;
    
    span {
      color: #00CBB8;
    }
  }
  
  p {
    font-size: 15px;
    color: #696984;
    max-width: 400px;
    margin: 0 auto;
    line-height: 24px;
    letter-spacing: 0;
    word-spacing: 1.5px;
  }
}

.Wrapper{
   display: flex;
    justify-content: center;
    align-items: center;
    gap: 175px;
    flex-wrap: wrap;
    position: relative;
}

.Card{
    background: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);    
    border-radius: 10px;
    padding: 30px;
    max-width: 400px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: 50px;
    p {
        font-size: 12px;
        color: #717FB0;
        margin-bottom: 10px;
        font-weight: 500;
        max-width: max-content;
        background: #CDD8FF;
        padding: 4px 10px;
        border-radius: 35px;
    }

    h2 {
        font-size: 24px;
    color: #2F327D;
    margin-bottom: 40px;
    line-height: 34px;
    font-weight: 600;
    display: flex;
    text-align: left;
    }
    
}
.Fort{
    

    img {
        max-width: 400px;
        border-radius: 20px;
    }
}

.SubmitCard{
    background: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    left: 370px;
    transform: translateX(-50%);
    z-index: 3;
    width: 236px;
    gap: 10px;

    p {
        font-size: 14px;
        color: #41BE90;
        font-weight: 600;
    }
}

.Submit{
    border-radius: 50%;
    img {
        max-width: 60px;
        height: auto;
        display: block;
    }
}

.Tick{
    position: absolute;
    top: 16px;
    right: -30px;
    z-index: 7;

    img {
        max-width: 60px;
        border-radius: 100%;
    }
}

.Cross{
    position: absolute;
    top: -15px;
    right: 15px;
    z-index: 4;

    img {
        max-width: 60px;
        border-radius: 100%;
    }
}

.Blue{
    position: absolute;
    top: -20px;
    left: -40px;
    z-index: 1;

    img {
        max-width: 80px;
        display: block;
        height: auto;
    }
}

.Green{
    position: absolute;
    bottom: 0px;
    left: -10px;
    z-index: 1;

    img {
        max-width: 15px;
        display: block;
        height: auto;
    }
}

.Orange{
    position: absolute;
    top: -35px;
    left: 55px;
    z-index: 1;

    img {
        max-width: 15px;
        display: block;
        height: auto;
    }
}

.Pink{
    position: absolute;
    top: 215px;
    right: -55px;
    z-index: 1;

    img {
        max-width: 12px;
        display: block;
        height: auto;
    }
}
`;
