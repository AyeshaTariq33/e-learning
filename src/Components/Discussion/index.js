import image from '../../images/Discussion/image.png';
import { 
    Section,
    Container,
    ImageWrapper,
    TextWrapper,
    Button,
    Wrapper
} from './styles';

const Discussion = ({
    title = "One-on-One",
    highlightText = "Discussions",
    description = "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
    buttonText = "See more features"
}) => {

    return (
        <Section>
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <img src={image} alt="call" />
                </ImageWrapper>
                <TextWrapper>
                    <h2>{title} <span>{highlightText}</span></h2>
                    <p>{description}</p>
                </TextWrapper>
            </Wrapper>
            <Button>
                <p>{buttonText}</p>
            </Button>
        </Container>
    </Section>
    );
};  

export default Discussion;