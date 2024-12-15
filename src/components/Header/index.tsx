import * as S from './styles';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSetActive = (index: number) => {
    setActiveIndex(index);
    setHoveredIndex(null);
  };

  return (
    <S.HeaderContainer>
      <S.Logo>Thales Felippe</S.Logo>
      <S.NavigationWrapper>
        <S.Navigation>
          <S.NavItem
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.Tooltip onClick={() => {
              scrollToSection('home');
              handleSetActive(0);
            }}>
              Home
            </S.Tooltip>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              spyThrottle={100}
              onSetActive={() => handleSetActive(0)}
              className={activeIndex === 0 ? 'active' : ''}
              onClick={() => {
                scrollToSection('home');
                handleSetActive(0);
              }}
            >
              00.
            </Link>
          </S.NavItem>

          <S.NavItem
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.Tooltip onClick={() => {
              scrollToSection('about');
              handleSetActive(1);
            }}>
              About
            </S.Tooltip>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              spyThrottle={100}
              onSetActive={() => handleSetActive(1)}
              onClick={() => {
                scrollToSection('about');
                handleSetActive(1);
              }}
            >
              01.
            </Link>
          </S.NavItem>

          <S.NavItem
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.Tooltip onClick={() => {
              scrollToSection('experience');
              handleSetActive(2);
            }}>
              Experience
            </S.Tooltip>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              spyThrottle={100}
              onSetActive={() => handleSetActive(2)}
              onClick={() => {
                scrollToSection('experience');
                handleSetActive(2);
              }}
            >
              02.
            </Link>
          </S.NavItem>

          <S.NavItem
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.Tooltip onClick={() => {
              scrollToSection('projects');
              handleSetActive(3);
            }}>
              Services
            </S.Tooltip>
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              spyThrottle={100}
              onSetActive={() => handleSetActive(3)}
              onClick={() => {
                scrollToSection('services');
                handleSetActive(3);
              }}
            >
              03.
            </Link>
          </S.NavItem>

          <S.NavItem
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <S.Tooltip onClick={() => {
              scrollToSection('contact');
              handleSetActive(4);
            }}>
              Contact
            </S.Tooltip>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              spyThrottle={100}
              onSetActive={() => handleSetActive(4)}
              onClick={() => {
                scrollToSection('contact');
                handleSetActive(4);
              }}
            >
              04.
            </Link>
          </S.NavItem>

          <S.ActiveIndicator activeIndex={activeIndex} hoveredIndex={hoveredIndex} />
        </S.Navigation>
        <S.Pillar />
      </S.NavigationWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
