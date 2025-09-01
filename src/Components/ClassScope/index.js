import {ClassScopeSection} from './styles';

import classroom from '../../images/ClassScope/classroom.png';
import blueShape from '../../images/ClassScope/BlueShape.png';
import greenCircle from '../../images/ClassScope/GreenCircle.png';
import greenShape from '../../images/ClassScope/GreenShape.png';
import playButton from '../../images/ClassScope/play-button.png';

const ClassScope = ({
  normalText = "Everything you can do in a physical classroom, ",
  highlightText = "you can do with TOTC",
  description = "TOTC's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.",
  linkText = "Learn More"
}) => {

  return (
    <ClassScopeSection>
        <div className="ScopeContent">
            <div className="ScopeText">
                <h2><span className='normal-class'>{normalText}</span><span className='totc-class'>{highlightText}</span></h2>
                <p>{description}</p>
                <a>{linkText}</a>
            </div>
            <div className="GreenCircleBig">
                <img src={greenCircle} alt="Green Circle" className='green-circle'/>
            </div>
            <div className="GreenCircleSmall">
                <img src={greenCircle} alt="Green Circle" className='green-circle'/>
            </div>
            <div className="ScopePlayVideo">
                <div className="ClassRoom">
                    <img src={classroom} alt="Classroom" className='classroom'/>
                </div>
                <div className="BlueShape">
                    <img src={blueShape} alt="Blue Shape" className='blue-shape'/>
                </div>
                <div className="GreenShape">
                    <img src={greenShape} alt="Green Shape" className='green-shape'/>
                </div>
                <div className="PlayButton">
                    <img src={playButton} alt="Play Button" className='play-button'/>
                </div>
            </div>
        </div>
    </ClassScopeSection>
  );
};

export default ClassScope;