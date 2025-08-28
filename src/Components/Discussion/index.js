import react from "react";
import image from '../../../images/Discussion/image.png';
import { 
    Section,
    Container,
    ImageWrapper,
    TextWrapper,
    Button,
    Wrapper
} from './styles';

const Discussion = () => {
    return (
        <Section>
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <img src={image} alt="call" />
                </ImageWrapper>
                <TextWrapper>
                    <h2>One-on-One <span>Discussions</span></h2>
                    <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                </TextWrapper>
            </Wrapper>
            <Button>
                <p>See more features</p>
            </Button>
        </Container>
    </Section>
    );
};  

export default Discussion;
                


