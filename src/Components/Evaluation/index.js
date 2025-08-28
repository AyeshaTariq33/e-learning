import blue from '../../images/Evaluation/blue.png';
import cross from '../../images/Evaluation/cross.png';
import green from '../../images/Evaluation/green.png';
import orange from '../../images/Evaluation/orange.png';
import pink from '../../images/Evaluation/pink.png';
import submit from '../../images/Evaluation/submit.png';
import tick from '../../images/Evaluation/tick.png';
import fort from '../../images/Evaluation/fort.png';

import {
    Evaluations,
    Container,
    Title,
    Wrapper,
    Blue,
    Cross,
    Green,
    Orange,
    Pink,
    Submit,
    Tick,
    Fort,
    SubmitCard,
    Card
} from './styles';

const Evaluation = ({
    questionNumber = "Question 1",
    questionText = "True or false? This play takes place in Italy",
    successMessage = "Your answer was sent successfully",
    title = "Assignments,",
    highlightText = "Quizes,",
    endText = "Tests",
    description = "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook."
}) => {

    return (
        <Evaluations>
            <Container>
                <Wrapper>
                    <Card>
                        <p>{questionNumber}</p>
                        <h2>{questionText}</h2>
                        <Fort>
                            <img src={fort} alt='Fort' />
                        </Fort>
                    </Card>
                    <SubmitCard>
                        <Submit>
                            <img src={submit} alt='Submit' />
                        </Submit>
                        <p>{successMessage}</p>
                    </SubmitCard>
                    <Tick>
                        <img src={tick} alt='Tick' />
                    </Tick>
                    <Cross>
                        <img src={cross} alt='Cross' />
                    </Cross>
                    <Blue>
                        <img src={blue} alt='Blue circle' />
                    </Blue>
                    <Green>
                        <img src={green} alt='Green circle' />
                    </Green>
                    <Orange>
                        <img src={orange} alt='Orange circle' />
                    </Orange>
                    <Pink>
                        <img src={pink} alt='pink circle' />
                    </Pink>
                </Wrapper>
                <Title>
                    <h2>{title} <span>{highlightText} </span>{endText}</h2>
                    <p>{description}</p>
                </Title>
            </Container>
        </Evaluations>
    );
};

export default Evaluation;