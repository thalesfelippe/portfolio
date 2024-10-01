import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0a192f;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #64ffda;
  font-size: 24px;
  margin-right: 40px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.a`
  color: #8892b0;
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #64ffda;
  }
`;
