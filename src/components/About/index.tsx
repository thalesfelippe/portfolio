import * as S from './styles';

interface AboutProps {
  scrollToSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ scrollToSection }) => {
  return (
    <S.AboutSection>
      About
      <S.ScrollIndicator>
        <div onClick={() => scrollToSection('projects')}>
          <S.ScrollArrow />
        </div>
      </S.ScrollIndicator>
    </S.AboutSection>
  );
};

export default About;
