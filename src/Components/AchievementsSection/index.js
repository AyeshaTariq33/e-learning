
import { SuccessSection} from './styles';

const SuccessComponent = ({ 
  title = "Our Success",
  description = "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis utrices eu ornare tristique vel nisl orci.",
  studentsCount = "15K+",
  studentsLabel = "Students",
  successRate = "75%",
  successLabel = "Total success",
  questionsCount = "35",
  questionsLabel = "Main questions",
  expertsCount = "26",
  expertsLabel = "Chief experts",
  yearsCount = "16",
  yearsLabel = "Years of experience"
}) => {

  return (
    <SuccessSection>
      <div className='container'>
        <div className="SectionHeader">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        
        <div className="StatsFlex">
          <div className="StatItem">
            <h3>{studentsCount}</h3>
            <p>{studentsLabel}</p>
          </div>
          
          <div className="StatItem">
            <h3>{successRate}</h3>
            <p>{successLabel}</p>
          </div>
          
          <div className="StatItem">
            <h3>{questionsCount}</h3>
            <p>{questionsLabel}</p>
          </div>
          
          <div className="StatItem">
            <h3>{expertsCount}</h3>
            <p>{expertsLabel}</p>
          </div>
          
          <div className="StatItem">
            <h3>{yearsCount}</h3>
            <p>{yearsLabel}</p>
          </div>
        </div>
      </div>
    </SuccessSection>
  );
};

export default SuccessComponent;