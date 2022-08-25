import { Container } from "react-bootstrap";
import arrow from '../assets/img/about-arrow.svg';
import book from '../assets/img/book-skill.svg';
import avatar from '../assets/img/avatar.png';

export const About = () => {
    return (
        <section className="about" id="about">
            <Container className="about-box">
                <div className="about-header">
                    <h3><span>01. </span>About Me</h3>
                    <img src={arrow} alt="Arrow" />
                </div>
                <div className="about-inner">
                    <div className="inner-info">
                        <p>Hi my name is Thales and I like to create stuff on the internet. My 
                        interest in web development started in 2020, when I saw a friend 
                        working on a project, after an incentive from him I started in the 
                        programming world.</p>
                        <p>Fast forward to today, I had the privilege of working at a technology 
                        start-up called ARTLAB, which focused on being an accelerator 
                        supporting other companies to reach their break even.</p>
                        <p>My focus today is to improve my knowledge and find a new 
                        opportunity to put into practice</p>
                        <p>Here are some technologies I've been working with recently:</p>
                        <ul className="skill-list">
                            <li><img src={book} alt="Book" />HTML5</li>
                            <li><img src={book} alt="Book" />WordPress</li>
                            <li><img src={book} alt="Book" />CSS3</li>
                            <li><img src={book} alt="Book" />TypeScript</li>
                            <li><img src={book} alt="Book" />JavaScript</li>
                            <li><img src={book} alt="Book" />React</li>
                        </ul>
                    </div>
                    <div className="inner-avatar">
                        <div className="avatar-box">
                            <img src={avatar} alt="Avatar" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}