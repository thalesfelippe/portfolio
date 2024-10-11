import styled, { keyframes } from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #0a192f;
  height: 100vh;
  position: relative;
`;

export const TextContainer = styled.div`
  color: #ccd6f6;
  margin-bottom: 40px;
  
  h2 {
    font-size: 36px;
    color: #64ffda;
  }

  p {
    font-size: 18px;
  }
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
