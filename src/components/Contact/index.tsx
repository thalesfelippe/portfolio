import React, { useRef, useState } from 'react';
import * as S from './styles';
import { BsFillSendFill, BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_xwtksc8',
          'template_mvgvu6e',
          form.current,
          'He-RoP9IkrL_lDwhr'
        )
        .then(
          () => {
            setIsSent(true);
            form.current?.reset();
          },
          (error) => {
            console.error('Erro ao enviar o e-mail:', error);
          }
        );
    }
  };

  return (
    <S.ContactSection>
      <S.ContactWrapper>
        <S.ContactInfo>
          <S.ContactTitleEffect>
            <S.ContactTitle>Contact</S.ContactTitle>
          </S.ContactTitleEffect>
          <S.ContactSubTitle>Do you need a custom website or application?</S.ContactSubTitle>
          <S.ContactSubTitle>Do you want to bring an idea to life or solve problems in your project?</S.ContactSubTitle>
          <S.ContactSubTitle>Leave your message and tell me more about what you need!</S.ContactSubTitle>
          <S.ContactButton
            href="https://wa.link/ayjl3y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp />
            Contact via WhatsApp
          </S.ContactButton>
        </S.ContactInfo>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.FormGroup>
            <S.Label htmlFor="name">Name</S.Label>
            <S.Input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="email">E-mail</S.Label>
            <S.Input
              type="email"
              name="email"
              id="email"
              placeholder="Your e-mail"
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="message">Message</S.Label>
            <S.Textarea
              name="message"
              id="message"
              placeholder="Your message"
              required
            ></S.Textarea>
          </S.FormGroup>

          <S.Button type="submit">
            <BsFillSendFill />
            <span>Send message</span>
          </S.Button>

          {isSent && <S.SuccessMessage>E-mail enviado com sucesso!</S.SuccessMessage>}
        </S.Form>
      </S.ContactWrapper>
    </S.ContactSection>
  );
};

export default Contact;
