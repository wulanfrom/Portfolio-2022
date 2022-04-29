import React from 'react'
import './WheelOn.css'
import { Container, Row, Col } from 'react-bootstrap'
import FigmaEmbed from 'react-figma-embed';

// images
import wheelonpng from '../../../resources/wheelOn.png'
import wheelOnMoodboard from '../../../resources/wo-hero-img.png'
import woFeature1 from '../../../resources/WO-feature-1.png'
import woFeature2 from '../../../resources/WO-feature-2.png'
import woFeature3 from '../../../resources/WO-feature-3.png'
import woIdea1 from '../../../resources/wo-idea-1.png'
import woIdea2 from '../../../resources/wo-idea-2.png'
import woIdea3 from '../../../resources/wo-idea-3.png'
import woPersona from '../../../resources/WO-persona.png'
import implementation from '../../../resources/implementation-placeholder.png'
import woClosing from '../../../resources/WO-closing.png'


// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// next projects
import someWeatherProject from '../../../resources/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wo-hero-img.png'

export default function WheelOn() {
    const category = "SYSTEM DESIGN // WEB DEVELOPMENT"
    const projectTitle = "WheelOn"
    const projectDesc = "Assisting users with moving disabilities through online means."
    const role = "Project Manager, UI/UX Designer, UX Researcher, Web Designer, Front-End Developer"
    const sector = "Mobility Disability, Travel Assistant, Social Network"
    const colors = ["#FAB82D", "#000"]

  return (
    <div>
        <div className="wheelOn-doc">
            <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={wheelonpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>

            <div className="project-content">
                {/* Overview */}
                <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">Go Anywhere with your Wheelchair</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                    <p>When people think of helping people with mobility disabilities, it’s usually through physical help, such as escorting them or helping them through existing facilities. However, due to the COVID pandemic, it’s becoming quite hard for people to meet face-to-face, as well as come in contact with each other. Because of this, our team set out to create an online solution to provide assistance for people with mobility disabilities. This website was a semester long project for our Intro to HCI course.</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={72} />

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={ wheelOnMoodboard }></img>
                </div>
                </Container>

                <Divider height={120} />

                {/* Feature */}
                <div className="wireframe-container py-5">
                <Container>
                    <Row>
                    <Col>
                        <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Features</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">A hub of information to help people with mobility restrictions move around</p>
                        <p>In the homepage, we provide a soft transition to our routes, rate, and forum feature.</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={woFeature1}></img>
                </Container>

                <Divider height={120} />

                <Container>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Ask people for help and advice in the Forums Page.</p>
                        <p>Ask a community of people who are going through the same struggles.</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={woFeature2}></img>
                </Container>

                <Divider height={120} />
                
                <Container>
                    <Row>
                    <Col md={5} lg={6}>
                    </Col>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Find accessible Routes to your destination.</p>
                        <p>Know which routes and landmarks can help you get to your destination through user-curated routes.</p>
                        </div>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={woFeature3}></img>
                </Container>
                </div>

                <Divider height={72} />

                {/* Process */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Process</p>
                        <p className="Section-title">How can we help our users?</p>
                        <p>To identify problems faced by our target users, we conducted interviews with 7 users, ranging from the permanently immobile to those who had temporary injuries, through Zoom. We asked them questions about their daily life and recent traveling experiences in order to gauge what kinds of problems they face during their daily life. From this, we synthesized a persona that represents the struggles our target users face.</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={woPersona}></img>
                </div>
                </Container>

                <Divider height={120} />

                {/* Direction */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Direction</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Core ‘How Might We’ Questions</p>
                        <p>Based on the observations, we identified three core ‘How Might We’ questions to guide us in designing the website:</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>🗺️ HMW encourage our users to still travel even while they adapt to a physically restrictive lifestyle?</p>
                        <p>❓ HMW make it easier for users to ask and receive help when they travel?</p>
                        <p>💨 HMW make the journey quicker for our users?</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={120} />

                {/* Process */}
                <div className="wireframe-container py-5">
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">IDEATION</p>
                        <p className="Section-title">Brainstorming Possible Solutions</p>
                        <p className="mb-4">Our team got together and ideated 10 ideas for each design goal. Through a process of selection, we chose the top 3 solutions:</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Container className="Two-Column-Container-Second">
                    <Row>
                        <Col>
                            <div>
                                <p className="idea-tagline mb-2">📍 Show popular routes taken by people to a certain place, to serve as reference for users when they travel.</p>
                                <p>By showing the general route preferences of people who have or had similar circumstances to theirs, our users will be able to plan their travel more easily.</p>
                            </div>
                        </Col>
                        <Col>
                            <img src={woIdea1} />
                        </Col>
                    </Row>
                    <Divider height={72} />
                    <Row>
                        <Col>
                        <img src={woIdea2} />
                        </Col>
                        <Col>
                            <div>
                                <p className="idea-tagline mb-2">💬 Let users share and receive advice or experiences for users to interact, much like a forum website.</p>
                                <p>A person who recently had to use mobility support needs to do a lot of adjusting. Before they can start going out and traveling again, they need to learn how to do so from other people.</p>
                            </div>
                        </Col>
                    </Row>
                    <Divider height={72} />
                    <Row>
                        <Col>
                        <img src={woIdea3} />
                        </Col>
                        <Col>
                            <div>
                                <p className="idea-tagline mb-2">📍 ⭐ Quantify user-friendliness of places through comments and ratings of various users depending on several factors.</p>
                                <p>Users refer to their friends or the Internet regarding the friendliness of certain places to disabled people. Additionally, they can also leave their own comments and ratings to help other users.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Divider height={120} />

                {/* Wireframes */}
                <Container>
                    <Row>
                        <Col md={4} lg={4}>
                        <div>
                        <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Low-fi prototyping</p>
                        <p className="Section-title">Wireframes</p>
                        <p>We began with individual paper prototypes, then collaboratively discussed ideas to decide on the final design and moved to figma to create interactive low-fi prototypes. In this stage, focused on the task interconnectedness and flow of events instead of the visual colors. We simulated the hover and clicking interactions.</p>
                        </div>
                    </div>
                        </Col>
                        <Col md={8} lg={8}>
                        <div className="img-giant">
                            <FigmaEmbed url="https://www.figma.com/proto/8ZgKAPh6JBJKGhvZUYMDpF/HCI_final_project?kind=&node-id=87%3A1180&page-id=0%3A1&scaling=contain&starting-point-node-id=87%3A1180" />
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div>

                <Divider height={120} />

                {/* Iteration */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Iteration</p>
                        <p className="Section-title">Results from the User Pilot</p>
                        <p>After our mid- project presentation, we received a lot of feedback from our peers, in which they highlighted three main concerns:</p>
                    </div>
                    <div className="px-4 mx-4">
                        <div>
                        <p className="list-main-point">📄 The lack of connection between the activities and articles</p>
                        <ul className="list-item-points">
                            <li>“I dont understand why I’m being shown this article when the tips tell me to do something else.”</li>
                        </ul>
                        </div>
                        <Divider height={24} />
                        <div>
                        <p className="list-main-point">😪 Lack of drive to do the tasks</p>
                        <ul className="list-item-points">
                            <li>“I understand why I need to do the tasks, but I’m not really motivated to do so since I don’t get that much from doing them.”</li>
                        </ul>
                        </div>
                        <Divider height={24} />
                        <div>
                        <p className="list-main-point">🗣 Lack of means to track users’ sincerity in performing the tasks</p>
                        <ul className="list-item-points">
                            <li>“How can you make sure that the users don’t just get the reward without doing tasks?”</li>
                        </ul>
                        </div>
                    </div>
                    <Divider height={24} />
                    <p>From the feedback, our team decided to discard the article feature and brainstorm new ideas on how to motivate users as well as making them more environmentally aware.</p>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                {/* Result */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">RESULT</p>
                        <p className="Section-title">Design System</p>
                        <p className="mb-4">We created a design system to best brand WheelOn.</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={wheelOnMoodboard}></img>
                </div>
                </Container>

                <Divider height={120} />

                {/* hifi prototyping */}
                <div className="wireframe-container py-5">
                    <Container className="Single-Column-Container">
                    <div>
                        <div>
                        <div>
                            <div className="Section-line-wo"></div>
                            <p className="Section-type">HI-FI PROTOTYPING</p>
                            <p className="Section-title">Web Implementation</p>
                            <p>We built the database with Google Firebase and implemented the website using HTML/CSS/Javascript, with styling assistance from Bootstrap.</p>
                        </div>
                        </div>
                    </div>
                    </Container>

                    <Container>
                    <div className="img-giant">
                        <img className="opening-image" src={implementation}></img>
                    </div>
                    </Container>
                </div>

                <Divider height={120} />

                {/* Direction */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">Results</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Impact</p>
                        <p>This project can open up doors to possible solutions to ...</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>🌱 Motivate users to do small, environmentally-friendly actions in their everyday lives</p>
                        <p>💥 Help make users understand the impact of their small actions</p>
                        <p>🧐 Understand complex weather information at a glance</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={120} />

                {/* Process */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-wo"></div>
                        <p className="Section-type">AFTERNOTE</p>
                        <p className="Section-title">Reflection & Thank You</p>
                        <p>This project was made possible thanks to the mentorship of Professor Juho Kim and the TAs of KAIST CS374 Intro to Human-Computer Interaction. I would like to give my deepest thanks to all involved, our users who gave us great insights, and to our friends and family for the constant support. Biggest thanks of all to my teammates for the constant support and hard work!</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={woClosing}></img>
                </div>
                </Container>

                <Divider height={72} />
            </div>

            {/* Footer */}
            <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
            </div>
    </div>
  )
}
