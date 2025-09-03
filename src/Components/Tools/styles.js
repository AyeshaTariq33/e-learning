import styled from "styled-components";

export const ToolsSection = styled.section`
    width: 100%;
    padding: 0;

    
.Container{
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 145px;
}

.ImageWrapper{
    flex: 1;
    max-width: 600px;
    height: 500px;
    position: relative;
}

.TextWrapper{
    max-width: 450px;
    position: relative;

    h2 {
        font-size: 30px;
        margin-bottom: 30px;
        line-height: 45px;
        font-weight: 600;
        max-width: 350px;
    }

    h2 span:first-child {
        color: #00CBB8;
    }

    h2 span:last-child {
        color: #2F327D; 
    }

    p {
        line-height: 25px;
        font-size: 16px;
        margin: 0;
        letter-spacing: 0.5px;
        word-spacing: 1px;
        text-align: justify;
    }
}

.Background{
    position: absolute;
    top: 80px;
    left: 100px;
    z-index: 0;

    img {
        object-fit: cover;
        display: block;
        max-width: 425px;
        height: auto;
    }
}

.BlueCircle{
    position: absolute;
    bottom: 100px;
    right: 25px;
    z-index: 2;

    img {
        max-width: 15px;
        height: auto;
        display: block;
    }
}

.GreenCircle{
    position: absolute;
    top: 20px;
    right: 160px;
    z-index: 2;
    
    img {
        max-width: 15px;
        height: auto;
        display: block;
    }
}

.PeachCircle{
    position: absolute;
    bottom: 160px;
    left: 80px;
    z-index: 2;

    img {
        max-width: 15px;
        height: auto;
        display: block;
    }
}

.RedCircle{
    position: absolute;
    top: 85px;
    right: 130px;
    z-index: 2;
    
    img {
        max-width: 160px;
        height: auto;
        display: block;
    }
}

.User{
    position: absolute;
    top: 115px;
    right: -40px;
    z-index: 2;
    
    img {
        max-width: 130px;
        height: auto;
        display: block;
    }
}

.Info{
    position: absolute;
    top: 70px;
    left: 95px;
    z-index: 2;

    
    img {
        max-width: 130px;
        height: auto;
        display: block;
    }
}

.Hand{
    position: absolute;
    top: 115px;
    right: 137px;
    z-index: 1;

    img {
        max-width: 25px;
        height: auto;
        display: block;
    }
}

.Girl{
    position: absolute;
    bottom: 50px;
    right: 65px;
    z-index: 8;

    img {
        max-width: 270px;
        height: auto;
        object-fit: cover;
        display: block;
    }
}
`;
