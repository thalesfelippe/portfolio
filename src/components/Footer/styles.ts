import styled from 'styled-components';

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #64ffdaad;
  color: white;
  height: 30vh;
  font-size: 36px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FooterTextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CoffeeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 36px;
    color: #DCB497;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    width: 10px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    animation: steam 2s infinite ease-in-out;
  }

  &::after {
    left: 10px;
    animation-delay: 1s;
  }

  @keyframes steam {
    0% {
      transform: translateY(0);
      opacity: 0.7;
    }
    50% {
      opacity: 0.9;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
`;


export const FooterSmallText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0;

  a {
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
      font-size: 26px;
      color: #0a192f;
    }
  }
`;

export const FooterSocialCircle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: 0.3s;

  &:hover {
    border-color: #0a192f;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;