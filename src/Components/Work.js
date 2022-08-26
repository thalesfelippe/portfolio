import { Container } from "react-bootstrap";
import netflix from '../assets/img/NetflixClone.png';
import virtualpokedex from '../assets/img/VirtualPokedex.png';
import expensetracker from '../assets/img/Dragonfinance.png';
import levelup from '../assets/img/LevelUp-AppLandingPage.png';
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
                                    <a href="https://netflixclone774.netlify.app/" alt="Website">Netflix Clone</a>
                                </h3>
                                <div className="work-description-right">
                                    <p>A clone of Netflix made in React with the implementation of the TMDB Api for movie and series information</p>
                                </div>
                                <ul className="technology-list-right">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                </ul>
                                <div className="work-links-right">
                                    <a href="https://github.com/thalesfelippe/netflixClone" alt="GitHub"><BsGithub/></a>
                                    <a href="https://netflixclone774.netlify.app/" alt="Website"><BsArrowUpRightSquareFill/></a>
                                </div>
                            </div>
                        </div>
                        <div className="work-image-right">
                            <a href="https://netflixclone774.netlify.app/" alt="Website">
                                <div className="image-project-right">
                                    <img src={netflix} alt="Project" />
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
                                    <p>Pokedex JS was developed from scratch in order to improve knowledge in JavaScript and CSS using a pokemon api</p>
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
                                    <img src={virtualpokedex} alt="project" />
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className="work-list">
                    <li className="featured-work-right">
                        <div className="work-content-right">
                            <div>
                                <p className="work-overline-right">Featured Project</p>
                                <h3 className="work-title-right">
                                    <a href="https://dragonfinance.netlify.app/" alt="Website">Expense Tracker</a>
                                </h3>
                                <div className="work-description-right">
                                    <p>The personal finance system was developed with the aim of improving knowledge in React and Typescript</p>
                                </div>
                                <ul className="technology-list-right">
                                    <li>React</li>
                                    <li>Typescript</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links-right">
                                    <a href="https://github.com/thalesfelippe/expense-tracker" alt="GitHub"><BsGithub/></a>
                                    <a href="https://dragonfinance.netlify.app/" alt="Website"><BsArrowUpRightSquareFill/></a>
                                </div>
                            </div>
                        </div>
                        <div className="work-image-right">
                            <a href="https://dragonfinance.netlify.app/" alt="Website">
                                <div className="image-project-right">
                                    <img src={expensetracker} alt="Project" />
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
                                    <a href="https://thalesfelippe.github.io/LevelUp-app-page/" alt="Website">LevelUp APP</a>
                                </h3>
                                <div className="work-description-left">
                                    <p>Level Up is a project developed thinking about responsiveness and the use of dark-mode</p>
                                </div>
                                <ul className="technology-list-left">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                </ul>
                                <div className="work-links-left">
                                    <a href="https://thalesfelippe.github.io/LevelUp-app-page/" alt="Website"><BsArrowUpLeftSquareFill/></a>
                                    <a href="https://github.com/thalesfelippe/LevelUp-app-page" alt="GitHub"><BsGithub/></a>
                                </div>
                            </div>
                        </div>
                        <div className="work-image-left">
                            <a href="https://thalesfelippe.github.io/LevelUp-app-page/" alt="Website">
                                <div className="image-project-left">
                                    <img src={levelup} alt="project" />
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    )
}