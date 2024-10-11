import * as S from './styles';

interface AboutProps {
  scrollToSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ scrollToSection }) => {
  return (
    <S.AboutSection>
      <S.TextContainer>
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor front-end...</p>
      </S.TextContainer>
      <S.ScrollIndicator>
        <div onClick={() => scrollToSection('projects')}>
          <S.ScrollArrow />
        </div>
      </S.ScrollIndicator>
    </S.AboutSection>
  );
};

export default About;
