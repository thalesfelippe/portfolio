import * as S from './styles';

interface ExperienceProps {
  scrollToSection: (section: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ scrollToSection }) => {
  return (
    <S.ExperienceSection>
      Experiência
      <S.ScrollIndicator>
        <div onClick={() => scrollToSection('services')}>
          <S.ScrollArrow />
        </div>
      </S.ScrollIndicator>
    </S.ExperienceSection>
  );
};

export default Experience;
