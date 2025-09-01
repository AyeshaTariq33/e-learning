import logoImage from '../../images/Navbar/Logo.svg'; 

import {NavContainer} from './styles';

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

  return (
    <NavContainer>
        <div className="Logo" src={logoImage} alt="TOTC Logo" />
          <div className="NavMenu">
              <div className="NavItem">
                <a href={homeHref}>{homeText}</a>
              </div>
              <div className="NavItem">
                <a href={coursesHref}>{coursesText}</a>
              </div>
              <div className="NavItem">
                <a href={careersHref}>{careersText}</a>
              </div>
              <div className="NavItem">
                <a href={blogHref}>{blogText}</a>
              </div>
              <div className="NavItem">
                <a href={aboutHref}>{aboutText}</a>
              </div>
              <div className="ButtonGroup">
              <div className="LoginButton">
                {loginButtonText}
              </div>
              <div className="SignUpButton">
                {signUpButtonText}
              </div>
          </div>
          </div>
    </NavContainer>
  );
};

export default Header;