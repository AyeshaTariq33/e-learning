import react from "react";
import image from '../../../images/ClassManagement/image.png';
import { 
    Section,
    Container,
    ImageWrapper,
    TextWrapper,
} from './styles';

const ClassManagement = () => {
    return (
        <Section>
        <Container>
            <TextWrapper>
                <h2><span>Class Management </span>Tools for Educators </h2>
                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
            </TextWrapper>
            <ImageWrapper>
                <img src={image} alt="Classroom" />
            </ImageWrapper>
        </Container>
    </Section>
    );
};  

export default ClassManagement;
                


