import image from '../../images/ClassManagement/image.png';

import { 
    Section,
    Container,
    ImageWrapper,
    TextWrapper,
} from './styles';

const ClassManagement = ({
    title = "Class Management",
    subtitle = "Tools for Educators",
    description = "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
}) => {
    
    return (
        <Section>
        <Container>
            <TextWrapper>
                <h2><span>{title} </span>{subtitle} </h2>
                <p>{description}</p>
            </TextWrapper>
            <ImageWrapper>
                <img src={image} alt="Classroom" />
            </ImageWrapper>
        </Container>
    </Section>
    );
};  

export default ClassManagement;