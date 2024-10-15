import * as S from './styles';

interface ServicesProps {
  scrollToSection: (section: string) => void;
}

const Services: React.FC<ServicesProps> = ({ scrollToSection }) => {
  return (
    <S.ServicesSection>
      Services
      <S.ScrollIndicator>
        <div onClick={() => scrollToSection('experience')}>
          <S.ScrollArrow />
        </div>
      </S.ScrollIndicator>
    </S.ServicesSection>
  );
};

export default Services;
