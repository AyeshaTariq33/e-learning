import React from 'react';
import billingIcon from '../../../images/FeaturesSection/billing-icon.png';
import schedulingIcon from '../../../images/FeaturesSection/calender.png';
import trackingIcon from '../../../images/FeaturesSection/users.png';

import {
  FeaturesSection,
  Container,  
  SectionHeader,
  FeaturesFlex,
  FeatureCard,
  IconWrapper,
  FeatureContent
} from './styles';

const FeaturesComponent = () => {
  return (
    <FeaturesSection>
      <Container>
        <SectionHeader>
          <h2>
            <span className="all-in-one">All-In-One</span>{' '}
            <span className="cloud-software">Cloud Software.</span>
          </h2>
          <p>
            TOTC is one powerful online software suite that combines all the tools 
            needed to run a successful school or office.
          </p>
        </SectionHeader>
        
        <FeaturesFlex>
          <FeatureCard>
            <IconWrapper className="billing">
              <img src={billingIcon} alt="Billing Icon" />
            </IconWrapper>
            <FeatureContent>
              <h3>
                Online Billing,<br />
                Invoicing, & Contracts
              </h3>
              <p>
                Simple and secure control of your organization's financial and legal 
                transactions. Send customized invoices and contracts
              </p>
            </FeatureContent>
          </FeatureCard>
            
          <FeatureCard>
              <IconWrapper className="scheduling">
                <img src={schedulingIcon} alt="Scheduling Icon" />
              </IconWrapper>
              <FeatureContent>
                <h3>
                  Easy Scheduling &<br />
                  Attendance Tracking
                </h3>
                <p>
                  Schedule and reserve classrooms at one campus or multiple campuses. 
                  Keep detailed records of student attendance
                </p>
              </FeatureContent>
          </FeatureCard>
            
          <FeatureCard>
              <IconWrapper className="tracking">
                <img src={trackingIcon} alt="Customer Tracking Icon" />
              </IconWrapper>
              <FeatureContent>
                <h3>Customer Tracking</h3>
                <p>
                  Automate and track emails to individuals or groups. Skilline's 
                  built-in system helps organize your organization
                </p>
              </FeatureContent>
          </FeatureCard>

        </FeaturesFlex>
      </Container>
    </FeaturesSection>
  );
};

export default FeaturesComponent;