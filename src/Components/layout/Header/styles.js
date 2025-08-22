import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #49BBBD;
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 70px;
  height: auto;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  align-items: center;
`;

export const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const LoginButton = styled.button`
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
`;

export const SignUpButton = styled.button`
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
`;