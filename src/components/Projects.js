import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import prjscr1 from "../assets/img/prjscr1.png";
import Project2 from "../assets/img/Project2.png";
import Project3 from "../assets/img/Project3.png";
import ecommerce from "../assets/img/ecommerce.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../components/back.css'



export const Projects = () => {

  const projects = [

    {
      id: "1",
      title: "Pet's website",
      description: "Design & Development",
      imgUrl: Project2,
      linkUrl: "https://relaxed-swan-675437.netlify.app/",
    },
    {
      id: "2",
      title: "Books Website",
      description: "Design & Development",
      imgUrl: Project3,
      linkUrl: "https://ubiquitous-manatee-cc6e00.netlify.app/",
    },
    {
      id: "3",
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: ecommerce,
      linkUrl: "https://ecommerce-iota-self.vercel.app/",
    },
    {
      id: "4",
      title: "Cocktail website",
      description: "Design & Development",
      imgUrl: prjscr1,
      linkUrl: "https://phase-1-final-project.vercel.app/",
    },
    {
      // title: "Business Startup",
      // description: "Design & Development",
      // imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my portfolio, I showcase notable web development projects including a fully functional e-commerce website (React, CSS, Node js and MongoDB), a Cocktail DB App (HTML, CSS and javaScript), a Books Website (React.js, CSS and Ruby On Rails), a responsive portfolio website (HTML, CSS, JavaScript), and a Pets website(React.js, API and TailwindCSS). These projects showcase my expertise in web development, demonstrating my ability to create engaging and functional applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>In my portfolio, I showcase notable web development projects, including a fully functional e-commerce website using (React.js, Nodejs, MongoDB and CSS) with product listings, shopping cart, and secure payments. I also created a React.js Books Application that enables users to keep track of the books they read and write awesome reviews on individual books. Additionally, I built a task manager (React.js) with prioritization, due dates, and task status. I designed a responsive portfolio website (React.js, Tailwindcss, Redux and Bootstrap) with smooth scrolling and interactive animations. These projects demonstrate my web development skills and ability to create engaging applications.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>For more details, please check out my Git hub <a href="https://github.com/ShuaibShaban"><img src={navIcon3} className="w-{80} h-{80}" alt="Git hub" /></a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right " src={colorSharp2}></img>
    </section>
  )
}
