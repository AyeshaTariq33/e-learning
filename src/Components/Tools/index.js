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
import {ToolsSection} from './styles';

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
            <div className="Container">
                <div className="TextWrapper">
                    {showHand && (
                        <div className="Hand">
                            <img src={hand} alt="Hand" className="hand"/>
                        </div>
                    )}
                    <h2><span>{titleFirstPart}</span><span>{titleSecondPart}</span></h2>
                    <p>{description}</p>
                </div>
                <div className="ImageWrapper">
                    <div className="Background">
                        <img src={background} alt="Background" className="background"/>
                    </div>
                    {showDecorations && (
                        <>
                            <div className="BlueCircle">
                                <img src={blueCircle} alt="Blue Circle" className="blueCircle"/>
                            </div>  
                            <div className="GreenCircle">
                                <img src={greenCircle} alt="Green Circle" className="greenCircle"/>
                            </div>
                            <div className="PeachCircle">
                                <img src={peachCircle} alt="Peach Circle" className="peachCircle"/>
                            </div>
                            <div className="RedCircle">
                                <img src={redCircle} alt="Red Circle" className="redCircle"/>
                            </div>
                        </>
                    )}
                    <div className="User" 
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
                    </div>
                    <div className="Info"
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
                    </div>
                    {showGirl && (
                        <div className="Girl"
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
                        </div>
                    )}
                </div>
            </div>
        </ToolsSection>
    );
};  

export default Tools;