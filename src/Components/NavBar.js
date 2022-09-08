import { useEffect, useState } from "react";
import { Nav, Navbar, } from "react-bootstrap";
import logo from '../assets/img/home-logo.svg';

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

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""} expanded={expanded}>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <div className="toggler-box">
                    <div className="custom-toggler"></div>
                </div>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('about'); setExpanded(false)}} ><span>01.</span> About</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('experience'); setExpanded(false)}} ><span>02.</span> Experience</Nav.Link>
                    <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('work'); setExpanded(false)}} ><span>03.</span> Work</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('contact'); setExpanded(false)}} ><span>04.</span> Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}