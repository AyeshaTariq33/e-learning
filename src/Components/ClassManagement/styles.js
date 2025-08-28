import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 40px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ImageWrapper = styled.div`

     img {
        object-fit: cover;
        display: block;
        max-width: 545px;
        height: auto;
    }
`;

export const TextWrapper = styled.div`
    max-width: 450px;
    position: relative;

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
        line-height: 45px;
        font-weight: 600;
        max-width: 350px;
        color: #2F327D; 
    }

    span {
        color: #00CBB8;
    }

    p {
        line-height: 25px;
        font-size: 16px;
        margin: 0;
        letter-spacing: 0.5px;
        word-spacing: 1px;
        text-align: justify;
        color: #696984;
    }
`;
