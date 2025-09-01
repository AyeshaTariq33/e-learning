import blue from '../../images/Evaluation/blue.png';
import cross from '../../images/Evaluation/cross.png';
import green from '../../images/Evaluation/green.png';
import orange from '../../images/Evaluation/orange.png';
import pink from '../../images/Evaluation/pink.png';
import submit from '../../images/Evaluation/submit.png';
import tick from '../../images/Evaluation/tick.png';
import fort from '../../images/Evaluation/fort.png';

import {Evaluations} from './styles';

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
            <div className="Container">
                <div className="Wrapper">
                    <div className="Card">
                        <p>{questionNumber}</p>
                        <h2>{questionText}</h2>
                        <div className="Fort">
                            <img src={fort} alt='Fort' />
                        </div>
                    </div>
                    <div className="SubmitCard">
                        <div className="Submit">
                            <img src={submit} alt='Submit' />
                        </div>
                        <p>{successMessage}</p>
                    </div>
                    <div className="Tick">
                        <img src={tick} alt='Tick' />
                    </div>
                    <div className="Cross">
                        <img src={cross} alt='Cross' />
                    </div>
                    <div className="Blue">
                        <img src={blue} alt='Blue circle' />
                    </div>
                    <div className="Green">
                        <img src={green} alt='Green circle' />
                    </div>
                    <div className="Orange">
                        <img src={orange} alt='Orange circle' />
                    </div>
                    <div className="Pink">
                        <img src={pink} alt='pink circle' />
                    </div>
                </div>
                <div className="Title">
                    <h2>{title} <span>{highlightText} </span>{endText}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Evaluations>
    );
};

export default Evaluation;