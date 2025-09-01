import image from '../../images/Discussion/image.png';
import {Section} from './styles';

const Discussion = ({
    title = "One-on-One",
    highlightText = "Discussions",
    description = "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
    buttonText = "See more features"
}) => {

    return (
        <Section>
        <div className="Container">
            <div className="Wrapper">
                <div className="ImageWrapper">
                    <img src={image} alt="call" />
                </div>
                <div className="TextWrapper">
                    <h2>{title} <span>{highlightText}</span></h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="Button">
                <p>{buttonText}</p>
            </div>
        </div>
    </Section>
    );
};  

export default Discussion;