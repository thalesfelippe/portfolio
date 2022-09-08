import { Container } from "react-bootstrap";

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container className="contact-box">
                <div className="contact-header">
                    <h3><span>04. </span>Reach me out</h3>
                </div>
                <div className="contact-inner">
                    <h4>I'm looking for new opportunities, if 
                    you're interested, feel free to say hi</h4>
                    <a className="btn btn-blue" href="mailto:thales.dev.flp@gmail.com" target="_blank" rel="noreferrer" alt="Email" onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&to=thales.dev.flp@gmail.com&su=I%20arrived%20through%20your%20portfolio&body=Hi&bcc=&tf=cm", "Popup")}>Say Hi</a>
                </div>
            </Container>
        </section>
    )
}