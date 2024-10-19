import * as S from './styles';

interface ExperienceProps {
  scrollToSection: (section: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ scrollToSection }) => {
  return (
    <S.ExperienceSection>
      Experiência
      <S.ScrollIndicator onClick={() => scrollToSection('services')}>
        <S.MouseIndicator />
      </S.ScrollIndicator>
    </S.ExperienceSection>
  );
};

export default Experience;
