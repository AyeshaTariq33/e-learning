import billingIcon from '../../images/FeaturesSection/billing-icon.png';
import schedulingIcon from '../../images/FeaturesSection/calender.png';
import trackingIcon from '../../images/FeaturesSection/users.png';

import {FeaturesSection} from './styles';

const FeaturesComponent = ({
  mainTitle = "All-In-One",
  highlightTitle = "Cloud Software.",
  description = "TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.",
  feature1Title = "Online Billing, Invoicing, & Contracts",
  feature1Description = "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  feature2Title = "Easy Scheduling & Attendance Tracking",
  feature2Description = "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  feature3Title = "Customer Tracking",
  feature3Description = "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization"
}) => {

  return (
    <FeaturesSection>
      <div className="Container">
        <div className="SectionHeader">
          <h2>
            <span className="all-in-one">{mainTitle}</span>{' '}
            <span className="cloud-software">{highlightTitle}</span>
          </h2>
          <p>{description}</p>
        </div>
        
        <div className="FeaturesFlex">
          <div className="FeatureCard">
            <div className="IconWrapper billing">
              <img src={billingIcon} alt="Billing Icon" />
            </div>
            <div className="FeatureContent">
              <h3>{feature1Title}</h3>
              <p>{feature1Description}</p>
            </div>
          </div>
            
          <div className="FeatureCard">
              <div className="IconWrapper scheduling">
                <img src={schedulingIcon} alt="Scheduling Icon" />
              </div>
              <div className="FeatureContent">
                <h3>{feature2Title}</h3>
                <p>{feature2Description}</p>
              </div>
          </div>
            
          <div className="FeatureCard">
              <div className="IconWrapper tracking">
                <img src={trackingIcon} alt="Customer Tracking Icon" />
              </div>
              <div className="FeatureContent">
                <h3>{feature3Title}</h3>
                <p>{feature3Description}</p>
              </div>
          </div>

        </div>
      </div>
    </FeaturesSection>
  );
};

export default FeaturesComponent;