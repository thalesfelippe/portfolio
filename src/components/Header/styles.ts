import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(10, 25, 47, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  transition: background-color 0.3s ease;
`;

export const Logo = styled.h1`
  color: #64ffda;
  font-size: 24px;
  font-weight: bold;
`;

export const NavigationWrapper = styled.nav`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const NavItem = styled.div`
  position: relative;
  font-size: 18px;
  margin: 10px 15px 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    color: #ccd6f6;
    text-decoration: none;
    transition: color 0.2s ease;
    font-size: 18px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    &:hover {
      color: #64ffda;
    }

    &.active {
      color: #64ffda;
      font-weight: bold;
    }
  }

  &:hover div {
    opacity: 1;
    transform: translateX(-10px);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  right: 15px;
  background-color: #0a192f;
  color: #64ffda;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 1;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateX(-10px);
  }
`;

export const ActiveIndicator = styled.div<{ activeIndex: number; hoveredIndex: number | null }>`
  position: absolute;
  right: 0;
  width: 4px;
  height: 38px;
  background-color: #64ffda;
  transition: top 0.3s ease;
  z-index: 1;

  top: ${({ activeIndex, hoveredIndex }) =>
    hoveredIndex !== null ? `calc(${hoveredIndex} * 42px)` : `calc(${activeIndex} * 42px)`};
`;

export const Pillar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #64ffda;
`;
