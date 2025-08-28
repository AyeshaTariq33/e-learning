import styled from "styled-components";

export const Section = styled.section`
    margin-bottom: 60px;
    padding: 40px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;


export const LeftContent = styled.div`
    max-width: 450px;
`;

export const RightContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Badge = styled.div`
    font-size: 12px;
    font-weight: 100;
    color: #8b8ba7;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 20px 50px;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        left: -50px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 2px;
        background-color: #8b8ba7;
    }
`;

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: #2F327D;
    margin-bottom: 30px;
    line-height: 40px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #696984;
    line-height: 24px;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
`;

export const AssessmentText = styled.p`
    font-size: 16px;
    color: #696984;
    margin: 30px 0 20px 0;
    line-height: 24px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;
    background: none;
    border: 1px solid #49BBBD;
    border-radius: 50px;
    padding: 12px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    span {
        color: #49BBBD;
        font-size: 14px;
        font-weight: 100;
    }
    
    &:hover {
        background-color: #49BBBD;
        
        span {
            color: white;
        }
    }
`;

export const ArrowIcon = styled.div`
    color: #49BBBD;
    font-size: 18px;
    transition: color 0.3s ease;
    
    ${Button}:hover & {
        color: white;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 220px;
    
    img {
        max-width: 300px;
        height: auto;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const TestimonialCard = styled.div`
    position: absolute;
    top: 265px;
    right: 120px;
    background: white;
    border-radius: 7px;
    padding: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    width: 350px;
    border-left: 8px solid #ff6b6b;
`;

export const TestimonialText = styled.p`
    font-size: 12px;
    color: #696984;
    line-height: 20px;
    margin-bottom: 20px;
    letter-spacing: 0;
    word-spacing: 1px;
`;

export const AuthorName = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #2F327D;
    margin-bottom: 10px;
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const Star = styled.span`
    color: ${props => props.filled ? '#ffc107' : '#e0e0e0'};
    font-size: 16px;
`;

export const ReviewCount = styled.span`
    font-size: 12px;
    color: #8b8ba7;
    margin-left: 10px;
`;

export const Flag = styled.div`
    display: flex;
`;


export const Wrapper = styled.div`
    display: flex;
`;


export const NavigationButton = styled.button`
    position: absolute;
    right: 195px;
    top: 175px;
    background: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    color: #49BBBD;
    font-size: 20px;
    transition: all 0.3s ease;
    padding: 6px 15px;
    
    &:hover {
        background-color: #49BBBD;
        color: white;
        transform: translateY(-50%) scale(1.1);
    }
`;