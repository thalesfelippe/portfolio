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
                    <button className="btn btn-blue">Say Hi</button>
                </div>
            </Container>
        </section>
    )
}