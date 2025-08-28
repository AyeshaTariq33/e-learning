import React from 'react';
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

const OurFeatures = () => {
  return (
    <OurFeaturesSection>
      <Container>
        <Title>
            <h2><span>Our</span><span>Features</span></h2>
            <p>This very extraordinary feature, can make learning activities more efficient</p>
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
                <Girl>
                    <img src={girl} alt="Girl" />
                </Girl>
                <Boy>
                    <img src={boy} alt="Boy" />
                </Boy>
            </ImagesWrapper>
            <FeaturesWrapper>
                <h2><span className='design'>A </span><span className='user-interface'>user interface </span><span className='design'>designed for the classroom</span></h2>
                <Teams>
                    <img src={teams} alt="Teams" className="teams"/>
                    <p>Teachers don't get lost in the grid view and have a dedicated Podium space.</p>
                </Teams>
                <TA>
                    <img src={ta} alt="TA" className="TA"/>
                    <p>TA's and presenters can be moved to the front of the class.</p>
                </TA>
                <Contact>
                    <img src={contact} alt="Contact" className="contact"/>
                    <p>Teachers can easily see all students and class data at one time.</p>
                </Contact>
            </FeaturesWrapper>
        </Wrapper>
        </Container>
    </OurFeaturesSection>
  );
};

export default OurFeatures;