import React from 'react';
import { 
  ClassScopeSection, 
  ScopeContent, 
  ScopeText,
  ScopePlayVideo,
  ClassRoom,
  BlueShape,
  GreenShape,
  GreenCircleBig,
  GreenCircleSmall,
  PlayButton       
} from './styles';

import classroom from '../../../images/ClassScope/classroom.png';
import blueShape from '../../../images/ClassScope/BlueShape.png';
import greenCircle from '../../../images/ClassScope/GreenCircle.png';
import greenShape from '../../../images/ClassScope/GreenShape.png';
import playButton from '../../../images/ClassScope/play-button.png';


const ClassScope = () => {
  return (
    <ClassScopeSection>
        <ScopeContent>
            <ScopeText>
                <h2><span className='normal-class'>Everything you can do in a physical classroom, </span><span className='totc-class'>you can do with TOTC</span></h2>
                <p>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a>Learn More</a>
            </ScopeText>
            <GreenCircleBig>
                <img src={greenCircle} alt="Green Circle" className='green-circle'/>
            </GreenCircleBig>
            <GreenCircleSmall>
                <img src={greenCircle} alt="Green Circle" className='green-circle'/>
            </GreenCircleSmall>
            <ScopePlayVideo>
                <ClassRoom>
                    <img src={classroom} alt="Classroom" className='classroom'/>
                </ClassRoom>
                <BlueShape>
                    <img src={blueShape} alt="Blue Shape" className='blue-shape'/>
                </BlueShape>
                <GreenShape>
                    <img src={greenShape} alt="Green Shape" className='green-shape'/>
                </GreenShape>
                <PlayButton>
                    <img src={playButton} alt="Play Button" className='play-button'/>
                </PlayButton>
            </ScopePlayVideo>
        </ScopeContent>
    </ClassScopeSection>
  );
};

export default ClassScope;