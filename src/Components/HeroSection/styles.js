import styled from 'styled-components';

export const HeroContainer = styled.div`
    background-color: #49BBBD;
    padding: 0 20px;
    border-bottom-left-radius: 80% 130px;
    border-bottom-right-radius: 80% 130px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    gap: 145px;
    overflow: hidden; 
    position: relative;

    
.HeroContent{
    max-width: 500px;
    color: white;
    align-self: center; 
    
    h2 {
        font-size: 42px;
        line-height: 50px;
        margin-bottom: 40px;
        
        span {
            color: #ff8400d4;
        }
    }
    
    p {
        font-size: 18px;
        line-height: 22px;
        font-weight: 100;
        margin-bottom: 30px;
    }
}

HeroButtonsContainer{
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 50px;
    flex-wrap: wrap;
}

.JoinForFreeButton{
    background-color: #FFFFFF4D;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: #FFFFFF66;
    }
}

.VideoButton{
    background: transparent;
    border: none;
    color: #292929ee;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 100;
    
    img {
        display: block;
        max-width: 45px;
        height: auto;
    }
    
    &:hover {
        opacity: 0.8;
    }
}

.HeroImages{
    position: relative;
    justify-content: center;
    
    img {
        max-width: 400px;
        width: 100%;
        height: auto;
        display: block;
        z-index: 1;
    }
}

.HeroContainerClipped{
    background-color: #49BBBD;
    padding: 60px 20px 100px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 100px;
    min-height: 90vh;
    position: relative;
    clip-path: ellipse(100% 100% at 50% 0%);
}

.HeroImagesClipped{
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
}
    
.HeroGirl{
    position: relative;
    
    img {
        max-width: 450px;
        width: 100%;
        height: auto;
        display: block;
    }
}

.AssistedStudentsCount{
    position: absolute;
    top: 35%;
    left: -15%;
    background: rgba(255, 255, 255, 0.59); 
    backdrop-filter: blur(10px);
    padding: 7px 15px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 3;
    
    img {
        width: 30px;
        height: 30px;
        max-width: none;
        border-radius: 7px
    }
    
    .content {
        h4 {
            margin: 0;
            font-size: 16px;
            color: #333;
            font-weight: 200;
        }
        
        p {
            margin: 0;
            font-size: 12px;
            color: #666;
        }
    }
}

.Logistics{
    position: absolute;
    top: 15%;
    left: 70%;
    z-index: 3;
    
    img {
        width: 80px;
        height: auto;
        max-width: none;
    }
}

.ClassSchedule{
    position: absolute;
    top: 62%;
    left: -16%;
    background: rgba(255, 255, 255, 0.7); 
    backdrop-filter: blur(10px);
    padding: 12px 15px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 3;
    
    .top-section {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    img {
        width: 40px;
        height: 40px;
        max-width: none;
    }
    
    .content {
        h4 {
            font-size: 14px;
            color: #333;
            font-weight: 400;
        }
        
        p {
            font-size: 12px;
            color: #666;
        }
    }
    
    button {
        background: #D8587E; 
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 20px; 
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.3s ease;
        max-width: fit-content;
        align-self: center;
        
        &:hover {
            background: white;
            color: #D8587E;
            font-weight: 600;
            border: 1px solid #D8587E;
        }
    }
}

.AdmissionStatus{
    position: absolute;
    top: 50%;
    left: 59%;
    background: rgba(255, 255, 255, 0.7); 
    backdrop-filter: blur(10px);
    padding: 10px 15px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 3;
    min-width: 235px;
    
    img {
        width: 30px;
        height: 30px;
        max-width: none;
        border-radius: 7px
    }
    
    .content {
        h4 {
            font-size: 14px;
            color: #333;
            font-weight: 400;
        }
        
        p {
            font-size: 12px;
            color: #666;
        }
    }
}
`;
