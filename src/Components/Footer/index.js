import React, { useState } from 'react';
import logo from '../../images/Footer/Logo.svg';
import {
  FooterSection,
  Container,
  LogoSection,
  Logo,
  LogoText,
  NewsletterSection,
  NewsletterTitle,
  EmailForm,
  EmailInput,
  SubscribeButton,
  LinksSection,
  FooterLinks,
  FooterLink,
  Copyright
} from './styles';

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
      <Container>
        <LogoSection>
          <Logo src={logo} alt="TOTC Logo" />
          <LogoText>
            <span>{logoText1}</span>
            <span>{logoText2}</span>
          </LogoText>
        </LogoSection>

        <NewsletterSection>
          <NewsletterTitle>{newsletterTitle}</NewsletterTitle>
          <EmailForm onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit">
              {subscribeButtonText}
            </SubscribeButton>
          </EmailForm>
        </NewsletterSection>

        <LinksSection>
          <FooterLinks>
            <FooterLink href={link1Href}>{link1Text}</FooterLink>
            <FooterLink href={link2Href}>{link2Text}</FooterLink>
            <FooterLink href={link3Href}>{link3Text}</FooterLink>
          </FooterLinks>
        </LinksSection>

        <Copyright>
          {copyrightText}
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;