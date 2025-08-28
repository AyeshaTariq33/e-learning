import styled from "styled-components";

export const Section = styled.section`
    margin-bottom: 60px;
    padding: 40px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;
`;

export const LeftContent = styled.div`
    flex: 1;
    max-width: 450px;
`;

export const RightContent = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Badge = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #8b8ba7;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
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
    font-size: 48px;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 30px;
    line-height: 1.2;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #696984;
    line-height: 1.6;
    margin-bottom: 20px;
`;

export const AssessmentText = styled.p`
    font-size: 16px;
    color: #696984;
    margin: 30px 0 20px 0;
`;

export const WriteButton = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;
    background: none;
    border: 2px solid #49BBBD;
    border-radius: 50px;
    padding: 12px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    span {
        color: #49BBBD;
        font-size: 14px;
        font-weight: 500;
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
    font-size: 16px;
    transition: color 0.3s ease;
    
    ${WriteButton}:hover & {
        color: white;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    
    img {
        width: 400px;
        height: 500px;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const TestimonialCard = styled.div`
    position: absolute;
    bottom: -50px;
    right: -100px;
    background: white;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 350px;
    border-left: 4px solid #ff6b6b;
`;

export const TestimonialText = styled.p`
    font-size: 14px;
    color: #696984;
    line-height: 1.6;
    margin-bottom: 20px;
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

export const NavigationButton = styled.button`
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    color: #49BBBD;
    font-size: 20px;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #49BBBD;
        color: white;
        transform: translateY(-50%) scale(1.1);
    }
`;