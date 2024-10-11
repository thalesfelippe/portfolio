import styled, { keyframes } from 'styled-components';

export const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: white;
  height: 100vh;
  font-size: 36px;
  position: relative;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(5px);
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

export const ScrollArrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 2px solid #64ffda;
  border-bottom: 2px solid #64ffda;
  transform: rotate(45deg);
  animation: ${bounce} 2s infinite;
`;
