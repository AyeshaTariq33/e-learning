import React from 'react';
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

const Header = () => {
  return (
    <NavContainer>
        <Logo src={logoImage} alt="TOTC Logo" />
          <NavMenu>
              <NavItem>
                <a href="#home">Home</a>
              </NavItem>
              <NavItem>
                <a href="#courses">Courses</a>
              </NavItem>
              <NavItem>
                <a href="#careers">Careers</a>
              </NavItem>
              <NavItem>
                <a href="#blog">Blog</a>
              </NavItem>
              <NavItem>
                <a href="#about">About Us</a>
              </NavItem>
              <ButtonGroup>
              <LoginButton>Login</LoginButton>
              <SignUpButton>Sign Up</SignUpButton>
          </ButtonGroup>
          </NavMenu>
    </NavContainer>
  );
};

export default Header;