import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.Logo>Thales.dev</S.Logo>
        <S.NavLinks>
          <S.NavLink href="#about">About</S.NavLink>
          <S.NavLink href="#projects">Projects</S.NavLink>
          <S.NavLink href="#experience">Experience</S.NavLink>
          <S.NavLink href="#contact">Contact</S.NavLink>
        </S.NavLinks>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
