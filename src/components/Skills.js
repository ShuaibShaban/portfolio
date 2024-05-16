// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import  Wordpress  from "../assets/img/wordpress.png";
import CSS from "../assets/img/css.png"
import Figma from "../assets/img/figma.png"
import Git from "../assets/img/git.png"
import javascript from "../assets/img/javascript.png"
import Html from "../assets/img/html.png"
import postgres from "../assets/img/postgres.png"
import postman from "../assets/img/postman.png"
import rails from "../assets/img/rails.png"
import slack from "../assets/img/slack.png"
import ruby from "../assets/img/ruby.png"
import React from "../assets/img/react.png"
import zoom from "../assets/img/zoom.webp"
import meet from "../assets/img/meet.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>In the skills section of my portfolio, I showcase my proficiency in HTML, CSS, JavaScript, React.js, Node Express TailwindCSS and my current focus on learning Nextjs and Perfecting my Node.js Express skills. With HTML, I excel in writing clean and semantic markup, implementing accessibility guidelines, and ensuring responsiveness across devices. CSS is another area of expertise, where I have gained experience in crafting visually captivating designs that adapt flawlessly to various screen sizes. This includes leveraging CSS3 features, incorporating animations, and employing advanced layout techniques.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identityh</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div> */}
                            <div className="item">
                                <img src={Wordpress} alt="Image" />
                                <h5>Word press</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={Git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>javascript</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>postgres</h5>
                            </div>
                            <div className="item">
                                <img src={postman} alt="Image" />
                                <h5>postman</h5>
                            </div>
                            <div className="item">
                                <img src={ruby} alt="Image" />
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={rails} alt="Image" />
                                <h5>rails</h5>
                            </div>
                            <div className="item">
                                <img src={slack} alt="Image" />
                                <h5>slack</h5>
                            </div>
                            <div className="item">
                                <img src={zoom} alt="Image" />
                                <h5>zoom</h5>
                            </div>
                            <div className="item">
                                <img src={meet} alt="Image" />
                                <h5>meet</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}