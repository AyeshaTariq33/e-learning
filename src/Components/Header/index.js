import React, { useState } from 'react';
import logoImage from '../../images/Navbar/Logo.svg'; 

import {
  NavContainer,
  Logo,
  NavMenu,
  NavItem,
  ButtonGroup,
  LoginButton,
  SignUpButton
} from './styles';

const Header = ({
  homeText = "Home",
  homeHref = "#home",
  coursesText = "Courses",
  coursesHref = "#courses",
  careersText = "Careers",
  careersHref = "#careers",
  blogText = "Blog",
  blogHref = "#blog",
  aboutText = "About Us",
  aboutHref = "#about",
  loginButtonText = "Login",
  signUpButtonText = "Sign Up"
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <NavContainer>
        <Logo src={logoImage} alt="TOTC Logo" />
          <NavMenu>
              <NavItem>
                <a href={homeHref}>{homeText}</a>
              </NavItem>
              <NavItem>
                <a href={coursesHref}>{coursesText}</a>
              </NavItem>
              <NavItem>
                <a href={careersHref}>{careersText}</a>
              </NavItem>
              <NavItem>
                <a href={blogHref}>{blogText}</a>
              </NavItem>
              <NavItem>
                <a href={aboutHref}>{aboutText}</a>
              </NavItem>
              <ButtonGroup>
              <LoginButton>{loginButtonText}</LoginButton>
              <SignUpButton>{signUpButtonText}</SignUpButton>
          </ButtonGroup>
          </NavMenu>
    </NavContainer>
  );
};

export default Header;