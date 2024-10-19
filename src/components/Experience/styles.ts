import styled, { keyframes } from 'styled-components';

export const ExperienceSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: white;
  height: 100vh;
  font-size: 36px;
  position: relative;
`;

const wheelAnimation = keyframes`
  to {
    opacity: 0;
    top: 25px;
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MouseIndicator = styled.div`
  width: 30px;
  height: 45px;
  border: 2px solid #64ffda;
  border-radius: 60px;
  position: relative;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #64ffda;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheelAnimation} 2s infinite;
  }
`;
