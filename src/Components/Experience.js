import { Container } from "react-bootstrap";
import arrow from '../assets/img/experience-arrow.svg';
import devchar from '../assets/img/dev-char.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillBagFill } from "react-icons/bs";

export const Experience = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="experience" id="experience">
            <Container className="experience-box">
                <div className="experience-header">
                    <img src={arrow} alt="Arrow" />
                    <h3><span>02. </span>Experience</h3>
                </div>
                <div className="experience-inner">
                    <Carousel responsive={responsive}>
                        <div className="experience-card">
                            <div className="experience-card-info">
                                <img src={devchar} alt="Developer Character" />
                                <h3>ARTLAB - <span>Front-End Jr</span></h3>
                                <h6>Feb 2021 - Oct 2021</h6>
                            </div>
                            <ul className="experience-card-list">
                                <li><BsFillBagFill/> Developed and maintained code for in-house 
                                    and client websites primarily using HTML, 
                                    CSS, JavaScript, and jQuery.</li>
                                <li><BsFillBagFill/> I worked in collaboration with designers, 
                                    management and marketing team to find 
                                    better solutions for our products.</li>
                                <li><BsFillBagFill/> Manually tested sites in various browsers 
                                    and mobile devices to ensure cross-browser 
                                    compatibility and responsiveness.</li>
                                <li><BsFillBagFill/> I worked with designers and other 
                                    developers to ensure thoughtful and 
                                    coherent user experiences.</li>
                            </ul>
                        </div>
                    </Carousel>
                </div>
            </Container>
        </section>
    )
}