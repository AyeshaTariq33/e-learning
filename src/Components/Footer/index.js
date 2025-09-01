import React, { useState } from 'react';
import logo from '../../images/Footer/Logo.svg';
import {FooterSection} from './styles';

const Footer = ({
  logoText1 = "Virtual Class",
  logoText2 = "for Zoom",
  newsletterTitle = "Subscribe to get our Newsletter",
  emailPlaceholder = "Your Email",
  subscribeButtonText = "Subscribe",
  link1Text = "Careers",
  link1Href = "/careers",
  link2Text = "Privacy Policy",
  link2Href = "/privacy",
  link3Text = "Terms & Conditions",
  link3Href = "/terms",
  copyrightText = "© 2021 Class Technologies Inc."
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <FooterSection>
      <div className="Container">
        <div className="LogoSection">
          <img className="Logo" src={logo} alt="TOTC Logo" />
          <div className="LogoText">
            <span>{logoText1}</span>
            <span>{logoText2}</span>
          </div>
        </div>

        <div className="NewsletterSection">
          <div className="NewsletterTitle">
            {newsletterTitle}
          </div>
          <div className="EmailForm" onSubmit={handleSubmit}>
            <div className="EmailInput"
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="SubscribeButton" type="submit">
              {subscribeButtonText}
            </div>
          </div>
        </div>

        <div className="LinksSection">
          <div className="FooterLinkss">
            <div className="FooterLink" href={link1Href}>{link1Text}</div>
            <div className="FooterLink" href={link2Href}>{link2Text}</div>
            <div className="FooterLink" href={link3Href}>{link3Text}</div>
          </div>
        </div>

        <div className="Copyright">
          {copyrightText}
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;