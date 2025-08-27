import react from "react";
import background from '../../../images/Tools/background.png';
import blueCircle from '../../../images/Tools/blueCircle.png';
import girl from '../../../images/Tools/girl.png';
import greenCircle from '../../../images/Tools/greenCircle.png';
import hand from '../../../images/Tools/hand.png';
import info from '../../../images/Tools/Info.png';
import peachCircle from '../../../images/Tools/peachCircle.png';
import redCircle from '../../../images/Tools/redCircle.png';
import user from '../../../images/Tools/user.png';
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

const Tools = () => {
    return (
        <ToolsSection>
        <Container>
            <TextWrapper>
                <Hand>
                    <img src={hand} alt="Hand" className="hand"/>
                </Hand>
                <h2><span>Tools </span><span>For Teachers And Learners</span></h2>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
            </TextWrapper>
            <ImageWrapper>
                <Background>
                    <img src={background} alt="Background" className="background"/>
                </Background>
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
                <User>
                    <img src={user} alt="User" className="user"/>
                </User>
                <Info>
                    <img src={info} alt="Info" className="info"/>
                </Info>
                <Girl>
                    <img src={girl} alt="Girl" />
                </Girl>
            </ImageWrapper>
        </Container>
    </ToolsSection>
    );
};  

export default Tools;
                


