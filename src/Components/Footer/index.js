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

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <FooterSection>
      <Container>
        <LogoSection>
          <Logo src={logo} alt="TOTC Logo" />
          <LogoText>
            <span>Virtual Class</span>
            <span>for Zoom</span>
          </LogoText>
        </LogoSection>

        <NewsletterSection>
          <NewsletterTitle>Subscribe to get our Newsletter</NewsletterTitle>
          <EmailForm onSubmit={handleSubmit}>
            <EmailInput
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubscribeButton type="submit">
              Subscribe
            </SubscribeButton>
          </EmailForm>
        </NewsletterSection>

        <LinksSection>
          <FooterLinks>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms & Conditions</FooterLink>
          </FooterLinks>
        </LinksSection>

        <Copyright>
          © 2021 Class Technologies Inc.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;