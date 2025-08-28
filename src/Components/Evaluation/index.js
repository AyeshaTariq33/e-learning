import React from 'react';
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

const Evaluation = () => {
  return (
    <Evaluations>
      <Container>
            <Wrapper>
                <Card>
                    <p>Question 1</p>
                    <h2>True or false? This play takes place in Italy</h2>
                    <Fort>
                        <img src={fort} alt='Fort' />
                    </Fort>
                </Card>
                <SubmitCard>
                    <Submit>
                        <img src={submit} alt='Submit' />
                    </Submit>
                    <p>Your answer was sent successfully</p>
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
            <h2>Assignments, <span>Quizes, </span>Tests</h2>
            <p>Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
        </Title>
        </Container>
    </Evaluations>
  );
};

export default Evaluation;