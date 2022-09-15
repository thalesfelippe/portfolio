import { Container } from "react-bootstrap";

export const Intro = () => {
    return (
        <section className="intro" id="intro">
            <Container className="intro-box">
                <div>
                    <h1 className="blue-text">Hi, my name is</h1>
                </div>
                <div>
                    <h2 className="white-text">Thales Felippe.</h2>
                </div>
                <div>
                    <h3 className="blue-text-light">A Front-End Web Developer.</h3>
                </div>
                <div>
                    <h4 className="white-text-light">I’m a self-taught student, that has been working as a Front-End developer since 2021.</h4>
                </div>
                <div>
                    <button onClick={()=> window.open("https://drive.google.com/file/d/1QxObqz3gsI_BixN9XoAeEbbbSK6a-uGc/view", "_blank")} className="btn btn-blue">Resume</button>
                </div>
            </Container>
        </section>
    )
}