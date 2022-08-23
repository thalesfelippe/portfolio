import { useEffect, useState } from "react";
import { Nav, Navbar, } from "react-bootstrap";
import logo from '../assets/img/21-avatar.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} ><span>01.</span> About</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')} ><span>02.</span> Experience</Nav.Link>
                    <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')} ><span>03.</span> Work</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')} ><span>04.</span> Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}