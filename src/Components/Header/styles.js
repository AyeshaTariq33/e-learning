import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #49BBBD;
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;

  
.Logo{
  max-width: 70px;
  height: auto;
  cursor: pointer;
}

.NavMenu{
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  align-items: center;
}

.NavItem{
  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }
}

.ButtonGroup{
  display: flex;
  gap: 12px;
}

.LoginButton{
  background-color: white;
  color: black;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #38b2ac;
  }
}

.SignUpButton{
  background-color: #FFFFFF4D;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f3f4f6;
  }
}
`;