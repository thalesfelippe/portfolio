import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-box">
                <div className="footer-socials">
                    <a href="https://github.com/thalesfelippe/" target="_blank" rel="noreferrer" alt="GitHub"><BsGithub/></a>
                    <a href="mailto:thales.dev.flp@gmail.com" target="_blank" rel="noreferrer" alt="Email" onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&to=thales.dev.flp@gmail.com&su=I%20arrived%20through%20your%20portfolio&body=Hi&bcc=&tf=cm", "Popup")}><BsFillEnvelopeFill/></a>
                    <a href="https://www.linkedin.com/in/thales-felippe/" target="_blank" rel="noreferrer" alt="Linkedin"><BsLinkedin/></a>
                </div>
                <div className="footer-copyright">
                    <p><a href="https://github.com/thalesfelippe" target="_blank" rel="noreferrer" alt="Copyright">© 2022 Built by Thales Felippe.</a></p>
                </div>
            </Container>
        </footer>
    )
}