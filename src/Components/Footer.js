import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-box">
                <div className="footer-socials">
                    <a href="https://github.com/thalesfelippe/" alt="GitHub"><BsGithub/></a>
                    <a href="https://github.com/thalesfelippe/" alt="GitHub"><BsLinkedin/></a>
                </div>
                <div className="footer-copyright">
                    <p><a href="https://github.com/thalesfelippe">© 2022 Built by Thales Felippe.</a></p>
                </div>
            </Container>
        </footer>
    )
}