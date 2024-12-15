import * as S from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillCupFill, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <S.FooterSection>
      <S.Container>
        <S.FooterTextBox>
          <S.CoffeeWrapper>
            <BsFillCupFill />
          </S.CoffeeWrapper>
          <S.FooterSmallText>
            Building, learning, and evolving every step of the way.
          </S.FooterSmallText>
        </S.FooterTextBox>

        <S.FooterSocialMedia>
          <a href="https://github.com/thales-felippe" target="_blank" rel="noopener noreferrer">
            <S.FooterSocialCircle>
              <FaGithub />
            </S.FooterSocialCircle>
          </a>
          
          <a href="https://www.linkedin.com/in/thales-felippe/" target="_blank" rel="noopener noreferrer">
            <S.FooterSocialCircle>
              <FaLinkedin />
            </S.FooterSocialCircle>
          </a>

          <a href="mailto:thales.dev.flp@gmail.com" target="_blank" rel="noopener noreferrer">
            <S.FooterSocialCircle>
              <MdEmail />
            </S.FooterSocialCircle>
          </a>

          <a href="https://wa.link/ayjl3y" target="_blank" rel="noopener noreferrer">
            <S.FooterSocialCircle>
              <BsWhatsapp />
            </S.FooterSocialCircle>
          </a>
          
        </S.FooterSocialMedia>
        <S.FooterCopyright>
          © 2024 Thales Felippe. All rights reserved.
        </S.FooterCopyright>
      </S.Container>
    </S.FooterSection>
  );
};

export default Footer;
