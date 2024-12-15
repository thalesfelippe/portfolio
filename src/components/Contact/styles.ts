import styled, { keyframes } from 'styled-components';

const shineEffect = keyframes`
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 100%;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: white;
  height: 70vh;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ContactTitleEffect = styled.div`
  border: 2px solid #52e0c0;
  border-radius: 24px;
  margin-left: -5px;
  padding: 5px 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg, rgb(82 224 192 / 0%), rgb(255 255 255 / 20%), rgb(82 224 192 / 0%));
  background-size: 200%;
  animation: ${shineEffect} 3s infinite ease-in-out;
`;

export const ContactTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  color: #52e0c0;
`;

export const ContactSubTitle = styled.p`
  font-size: 18px;
  color: #8892b0;
`;

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #64ffda;
  color: #0a192f;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #52e0c0;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #1e293b;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  min-height: 100px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #64ffda;
  color: #0a192f;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #52e0c0;
  }
`;

export const SuccessMessage = styled.p`
  color: #64ffda;
  font-weight: bold;
  text-align: center;
`;
