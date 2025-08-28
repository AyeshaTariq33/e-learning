import React, { useState } from "react";
import background from '../../images/Tools/background.png';
import blueCircle from '../../images/Tools/blueCircle.png';
import girl from '../../images/Tools/girl.png';
import greenCircle from '../../images/Tools/greenCircle.png';
import hand from '../../images/Tools/hand.png';
import info from '../../images/Tools/Info.png';
import peachCircle from '../../images/Tools/peachCircle.png';
import redCircle from '../../images/Tools/redCircle.png';
import user from '../../images/Tools/user.png';
import { 
    ToolsSection,
    Container,
    ImageWrapper,
    TextWrapper,
    Background,
    BlueCircle,
    GreenCircle,
    PeachCircle,
    RedCircle,
    User,
    Info,
    Hand,
    Girl
} from './styles';

const Tools = ({
    titleFirstPart = "Tools ",
    titleSecondPart = "For Teachers And Learners",
    description = "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
    showHand = true,
    showGirl = true,
    showDecorations = true,
    onImageClick
}) => {
    const [selectedElement, setSelectedElement] = useState(null);
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleElementClick = (elementType) => {
        setSelectedElement(elementType);
        if (onImageClick) {
            onImageClick(elementType);
        }
    };

    const handleElementHover = (elementType) => {
        setHoveredElement(elementType);
    };

    const handleElementLeave = () => {
        setHoveredElement(null);
    };

    return (
        <ToolsSection>
            <Container>
                <TextWrapper>
                    {showHand && (
                        <Hand>
                            <img src={hand} alt="Hand" className="hand"/>
                        </Hand>
                    )}
                    <h2><span>{titleFirstPart}</span><span>{titleSecondPart}</span></h2>
                    <p>{description}</p>
                </TextWrapper>
                <ImageWrapper>
                    <Background>
                        <img src={background} alt="Background" className="background"/>
                    </Background>
                    {showDecorations && (
                        <>
                            <BlueCircle>
                                <img src={blueCircle} alt="Blue Circle" className="blueCircle"/>
                            </BlueCircle>  
                            <GreenCircle>
                                <img src={greenCircle} alt="Green Circle" className="greenCircle"/>
                            </GreenCircle>
                            <PeachCircle>
                                <img src={peachCircle} alt="Peach Circle" className="peachCircle"/>
                            </PeachCircle>
                            <RedCircle>
                                <img src={redCircle} alt="Red Circle" className="redCircle"/>
                            </RedCircle>
                        </>
                    )}
                    <User 
                        onClick={() => handleElementClick('user')}
                        onMouseEnter={() => handleElementHover('user')}
                        onMouseLeave={handleElementLeave}
                        style={{
                            transform: hoveredElement === 'user' ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            opacity: selectedElement && selectedElement !== 'user' ? 0.7 : 1
                        }}
                    >
                        <img src={user} alt="User" className="user"/>
                    </User>
                    <Info 
                        onClick={() => handleElementClick('info')}
                        onMouseEnter={() => handleElementHover('info')}
                        onMouseLeave={handleElementLeave}
                        style={{
                            transform: hoveredElement === 'info' ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            opacity: selectedElement && selectedElement !== 'info' ? 0.7 : 1
                        }}
                    >
                        <img src={info} alt="Info" className="info"/>
                    </Info>
                    {showGirl && (
                        <Girl 
                            onClick={() => handleElementClick('girl')}
                            onMouseEnter={() => handleElementHover('girl')}
                            onMouseLeave={handleElementLeave}
                            style={{
                                transform: hoveredElement === 'girl' ? 'scale(1.02)' : 'scale(1)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                opacity: selectedElement && selectedElement !== 'girl' ? 0.7 : 1
                            }}
                        >
                            <img src={girl} alt="Girl" />
                        </Girl>
                    )}
                </ImageWrapper>
            </Container>
        </ToolsSection>
    );
};  

export default Tools;