import * as S from './styles';

interface HomeProps {
  scrollToSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  return (
    <S.HomeSection>
      <S.TextContainer>
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor front-end...</p>
      </S.TextContainer>
      <S.ScrollIndicator>
        <div onClick={() => scrollToSection('about')}>
          <S.ScrollArrow />
        </div>
      </S.ScrollIndicator>
    </S.HomeSection>
  );
};

export default Home;