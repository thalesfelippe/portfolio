import { Container } from "react-bootstrap";
import levelup from '../assets/img/LevelUp-AppLandingPage.png';
import virtualpokedex from '../assets/img/VirtualPokedex.png';
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { BsArrowUpLeftSquareFill } from "react-icons/bs";

export const Work = () => {
    return (
        <section className="work" id="work">
            <Container className="work-box">
                <div className="work-header">
                    <h3><span>03. </span>Some Things I’ve Built</h3>
                </div>
                <ul className="work-list">
                    <li className="featured-work-right">
                        <div className="work-content-right">
                            <div>
                                <p className="work-overline-right">Featured Project</p>
                                <h3 className="work-title-right">
                                    <a href="https://thalesfelippe.github.io/LevelUp-app-page/" alt="Website">Level Up APP</a>
                                </h3>
                                <div className="work-description-right">
                                    <p>Level Up is a project developed thinking about responsiveness and the use of dark-mode</p>
                                </div>
                                <ul className="technology-list-right">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links-right">
                                    <a href="https://github.com/thalesfelippe/LevelUp-app-page" alt="GitHub"><BsGithub/></a>
                                    <a href="https://thalesfelippe.github.io/LevelUp-app-page/" alt="Website"><BsArrowUpRightSquareFill/></a>
                                </div>
                            </div>
                        </div>
                        <div className="work-image-right">
                            <a href="https://thalesfelippe.github.io/LevelUp-app-page/" alt="Website">
                                <div className="image-project-right">
                                    <img src={levelup} alt="Project Image" />
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="work-list">
                    <li className="featured-work-left">
                        <div className="work-content-left">
                            <div>
                                <p className="work-overline-left">Featured Project</p>
                                <h3 className="work-title-left">
                                    <a href="https://thalesfelippe.github.io/PokedexJS/" alt="Website">Virtual Pokedex</a>
                                </h3>
                                <div className="work-description-left">
                                    <p>Pokedex JS was developed from scratch in order to improve knowledge in JavaScript and CSS, using a pokemon api</p>
                                </div>
                                <ul className="technology-list-left">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links-left">
                                    <a href="https://thalesfelippe.github.io/PokedexJS/" alt="Website"><BsArrowUpLeftSquareFill/></a>
                                    <a href="https://github.com/thalesfelippe/PokedexJS" alt="GitHub"><BsGithub/></a>
                                </div>
                            </div>
                        </div>
                        <div className="work-image-left">
                            <a href="https://thalesfelippe.github.io/PokedexJS/" alt="Website">
                                <div className="image-project-left">
                                    <img src={virtualpokedex} alt="project image" />
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    )
}