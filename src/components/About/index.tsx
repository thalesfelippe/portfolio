import * as S from './styles';

interface AboutProps {
  scrollToSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ scrollToSection }) => {
  return (
    <S.AboutSection>
      About
      <S.ScrollIndicator onClick={() => scrollToSection('experience')}>
        <S.MouseIndicator />
      </S.ScrollIndicator>
    </S.AboutSection>
  );
};

export default About;
