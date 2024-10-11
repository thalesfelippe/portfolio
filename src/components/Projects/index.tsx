import * as S from './styles';

interface ProjectsProps {
  scrollToSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ scrollToSection }) => {
  return (
    <S.ProjectsSection>
      Projetos
      <S.ScrollIndicator>
        <div onClick={() => scrollToSection('experience')}>
          <S.ScrollArrow />
        </div>
      </S.ScrollIndicator>
    </S.ProjectsSection>
  );
};

export default Projects;
