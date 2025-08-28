import React, { useState } from 'react';
import bigBlue from '../../images/OurFeatures/BigBlueCircle.png';
import call from '../../images/OurFeatures/Call.png';
import greenCircle from '../../images/OurFeatures/GreenCircle.png';
import redCircle from '../../images/OurFeatures/RedCircle.png';
import smallBlue from '../../images/OurFeatures/SmallBlueCircle.png';
import girl from '../../images/OurFeatures/Girl.png';
import boy from '../../images/OurFeatures/Boy.png';
import ta from '../../images/OurFeatures/TA.png';
import teams from '../../images/OurFeatures/Teams.png';
import contact from '../../images/OurFeatures/Contact.png';

import {
    OurFeaturesSection,
    Container,
    Title,
    Wrapper,
    ImagesWrapper,
    FeaturesWrapper,
    BigBlue,
    SmallBlue,
    RedCircle,
    GreenCircle,
    Call,
    Teams,
    TA,
    Contact,
    Girl,
    Boy
} from './styles';

const OurFeatures = ({
    titleFirstPart = "Our",
    titleSecondPart = "Features",
    description = "This very extraordinary feature, can make learning activities more efficient",
    mainHeadingPart1 = "A ",
    mainHeadingHighlight = "user interface ",
    mainHeadingPart2 = "designed for the classroom",
    teamsFeatureText = "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    taFeatureText = "TA's and presenters can be moved to the front of the class.",
    contactFeatureText = "Teachers can easily see all students and class data at one time.",
    showGirl = true,
    showBoy = true,
    onFeatureClick
}) => {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [hoveredFeature, setHoveredFeature] = useState(null);

    const handleFeatureClick = (featureType) => {
        setSelectedFeature(featureType);
        if (onFeatureClick) {
            onFeatureClick(featureType);
        }
    };

    const handleFeatureHover = (featureType) => {
        setHoveredFeature(featureType);
    };

    const handleFeatureLeave = () => {
        setHoveredFeature(null);
    };

    return (
        <OurFeaturesSection>
            <Container>
                <Title>
                    <h2><span>{titleFirstPart}</span><span>{titleSecondPart}</span></h2>
                    <p>{description}</p>
                </Title>
                <Wrapper>
                    <ImagesWrapper>
                        <BigBlue>
                            <img src={bigBlue} alt="Big Blue Circle" className="bigBlue"/>
                        </BigBlue>
                        <SmallBlue>
                            <img src={smallBlue} alt="Small Blue Circle" className="smallBlue"/>
                        </SmallBlue>
                        <RedCircle>
                            <img src={redCircle} alt="Red Circle" className="redCircle"/> 
                        </RedCircle>  
                        <GreenCircle>
                            <img src={greenCircle} alt="Green Circle" className="greenCircle"/>
                        </GreenCircle>
                        <Call>
                            <img src={call} alt="Call" className="Call"/>
                        </Call>
                        {showGirl && (
                            <Girl>
                                <img src={girl} alt="Girl" />
                            </Girl>
                        )}
                        {showBoy && (
                            <Boy>
                                <img src={boy} alt="Boy" />
                            </Boy>
                        )}
                    </ImagesWrapper>
                    <FeaturesWrapper>
                        <h2>
                            <span className='design'>{mainHeadingPart1}</span>
                            <span className='user-interface'>{mainHeadingHighlight}</span>
                            <span className='design'>{mainHeadingPart2}</span>
                        </h2>
                        <Teams 
                            onClick={() => handleFeatureClick('teams')}
                            onMouseEnter={() => handleFeatureHover('teams')}
                            onMouseLeave={handleFeatureLeave}
                            style={{
                                opacity: selectedFeature && selectedFeature !== 'teams' ? 0.6 : 1,
                                transform: hoveredFeature === 'teams' ? 'scale(1.02)' : 'scale(1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <img src={teams} alt="Teams" className="teams"/>
                            <p>{teamsFeatureText}</p>
                        </Teams>
                        <TA 
                            onClick={() => handleFeatureClick('ta')}
                            onMouseEnter={() => handleFeatureHover('ta')}
                            onMouseLeave={handleFeatureLeave}
                            style={{
                                opacity: selectedFeature && selectedFeature !== 'ta' ? 0.6 : 1,
                                transform: hoveredFeature === 'ta' ? 'scale(1.02)' : 'scale(1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <img src={ta} alt="TA" className="TA"/>
                            <p>{taFeatureText}</p>
                        </TA>
                        <Contact 
                            onClick={() => handleFeatureClick('contact')}
                            onMouseEnter={() => handleFeatureHover('contact')}
                            onMouseLeave={handleFeatureLeave}
                            style={{
                                opacity: selectedFeature && selectedFeature !== 'contact' ? 0.6 : 1,
                                transform: hoveredFeature === 'contact' ? 'scale(1.02)' : 'scale(1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <img src={contact} alt="Contact" className="contact"/>
                            <p>{contactFeatureText}</p>
                        </Contact>
                    </FeaturesWrapper>
                </Wrapper>
            </Container>
        </OurFeaturesSection>
    );
};

export default OurFeatures;