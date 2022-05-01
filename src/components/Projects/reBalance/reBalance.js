import React from 'react'
import './reBalance.css'
import { Container, Row, Col } from 'react-bootstrap'
import FigmaEmbed from 'react-figma-embed';

// images
import rebalancepng from '../../../resources/reBalance/reBalance.png'
import reBalanceMoodboard from '../../../resources/reBalance/rb-hero-img.png'
import rbType1 from '../../../resources/reBalance/rb-type-1.png'
import rbFeature1 from '../../../resources/reBalance/rb-feature-1.png'
import rbFeature2 from '../../../resources/reBalance/rb-feature-2.png'
import rbFeature3 from '../../../resources/reBalance/rb-feature-3.png'
import rbPaper from '../../../resources/reBalance/rb-paper-prototype.png'
import beforeAfter from '../../../resources/reBalance/beforeAfter.png'
import implementation from '../../../resources/implementation-placeholder.png'
import rbClosing from '../../../resources/reBalance/rb-closing.png'


// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function reBalance() {
  const category = "SYSTEM DESIGN // WEB DEVELOPMENT"
  const projectTitle = "reBalance"
  const projectDesc = "How might we help people keep a balanced mental, physical, and social health?"
  const role = "UI/UX Designer, UX Researcher, UX Copywriting, Web Designer, Front End Developer"
  const sector = "Data Visualization, Health Tracking &Management"
  const colors = ["#6CAFE5", "#000"]

  return (
    <div>
        <div className="reBalance-doc">
            <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={rebalancepng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>

            <div className="project-content">
                {/* Overview */}
                <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">Maintain your health in every aspect of your life.</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                    <p>Maintaining a good, balanced health is important but difficult. People often do not have a clear sense of what is healthy, and where to improve from. In order to help people who are failing to maintain a balanced life, we present reBalance, a health data visualization system that allows exploration of one’s own data with multiple visualization. In addition, the edit mode in reBalance assists users in defining their own definition of being healthy through choosing one’s own metrics.</p>
                    <Divider height={32} />
                    <h6>🏆 This work was published in HCI Korea 2022</h6>
                    </Col>
                </Row>
                </Container>

                <Divider height={72} />

                <Container>
                  <div className="img-giant">
                      <img className="opening-image" src={ reBalanceMoodboard }></img>
                  </div>
                </Container>

                <Divider height={120} />

                {/* Feature */}
                <div className="wireframe-container py-5">
                <Container className="Single-Column-Container mb-3">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Features</p>
                        <p className="Section-title">reBalance</p>
                        <p>reBalance consists of two modes, namely the exploration mode for exploring the data with multiple visualizations, and the edit mode for setting individual metrics and goals.</p>
                    </div>
                    </div>
                </div>
                </Container>
                <Container className="Two-Column-Container">
                    <Row>
                        <Col lg={6}>
                            <div>
                              <img className="mb-2" src={rbType1} />
                              <p className="idea-tagline"><b>The Exploration Mode</b>, which is the default, allows users to read and interact with the graphs to extract insights.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                          <div>
                            <img className="mb-2" src={rbType1} />
                            <p className="idea-tagline mb-2"><b>The edit mode</b> allows the users to set their own metric and goals.</p>
                          </div>
                        </Col>
                    </Row>
                </Container>

                <Divider height={120} />

                <Container>
                    <Row>
                    <Col>
                        <div></div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                          <p className="Section-title">Know your overall health status and set goals.</p>
                          <p>Know your current health status and see how far you are from your goals.</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={rbFeature1}></img>
                </Container>

                <Divider height={120} />

                <Container>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">See how you’ve performed this week.</p>
                        <p>You can check your overall trend this week and assess how you can improve.</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={rbFeature2}></img>
                </Container>

                <Divider height={120} />
                
                <Container>
                    <Row>
                    <Col md={5} lg={6}>
                    </Col>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Take concrete steps to achieving your ideal health.</p>
                        <p>See which aspects are affecting your health negatively.</p>
                        </div>
                    </Col>
                    </Row>
                </Container>
                <Divider height={48} />
                <Container className="img-giant">
                    <img className="opening-image" src={rbFeature3}></img>
                </Container>
                </div>

                <Divider height={72} />

                {/* Process */}
                <Container>
                  <Row>
                      <Col>
                          <div>
                            <div className="Section-line-rb"></div>
                            <p className="Section-type">PROCESS</p>
                            <p className="Section-title">Getting to know our users</p>
                          </div>
                      </Col>
                      <Col>
                      </Col>
                      </Row>
                      <Row>
                      <Col md={7} lg={6}>
                          <div>
                            <p>To understand the needs in maintaining a good, balanced health, we conducted needfinding interviews with those who aim to live a more balanced, healthy life but are seeing themselves failing at the moment. During the interview, we asked the interviewees to define “being healthy and asked them to draw a health triangle by reflecting on their lives. We also asked questions related to their current efforts in maintaining their health or becoming healthier, and the information they would prefer to receive to become healthier. The interviewees mentioned that although data collected from their lives are everywhere, looking at the raw values does not give them good enough insights on their current health status and where to improve.</p>
                          </div>
                      </Col>
                      <Col md={5} lg={6}>
                          <p>📈 Objectively understand their health status.</p>
                          <p>✍ Come up with their own definition or metric of a healthy life.</p>
                          <p>🥗 Live a more healthy life by identifying directions to improve their lifestyle.</p>
                      </Col>
                  </Row>
                </Container>

                <Divider height={120} />

                {/* Design Goals */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">Direction</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={7} lg={6}>
                        <div>
                        <p className="Section-title">Design Goals</p>
                        <p>Based on the observations, we came up with two design goals to support key features of our system:</p>
                        </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>🆕 Give users starting points for improvement</p>
                        <p>🧐 Explore one’s own definition of health</p>
                    </Col>
                </Row>
                </Container>

                <Divider height={120} />

                {/* Paper prototype */}
                <Container>
                  <Row>
                      <Col>
                          <div>
                            <div className="Section-line-rb"></div>
                            <p className="Section-type">PROTOTYPING</p>
                            <p className="Section-title">Paper Prototyping</p>
                            <div>
                              <p>At this stage, we filtered visualizations that were not viable to implement and ones that wouldn’t suit the task. To organize the tasks into one system, we divided them into their own pages, but at this stage, we were still writing out what kinds of operations would be possible, layout, and the disadvantages and advantages of each page to consider later when designing the final prototype.</p>
                            </div>
                          </div>
                      </Col>
                      <Col md={5} lg={6}>
                          <div>
                            <img style={{ width: "100%" }} src={rbPaper} />
                          </div>
                      </Col>
                  </Row>
                  <Row>
                    <img src={ beforeAfter } />
                  </Row>
                </Container>

                <Divider height={120} />

                <div className="wireframe-container py-5">
                  {/* Wireframes */}
                  <Container>
                      <Row>
                          <Col md={4} lg={4}>
                          <div>
                          <div>
                          <div className="Section-line-rb"></div>
                          <p className="Section-type">Prototyping</p>
                          <p className="Section-title">Low-fi prototyping</p>
                          <p>We moved our designs to Figma in order to create a more concrete design system and implement interactions such as clicking and zooming in.</p>
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

                  <Divider height={120} />
                  
                  {/* hi-fi prototyping */}
                  <Container className="Single-Column-Container">
                    <div>
                        <div>
                        <div>
                            <div className="Section-line-rb"></div>
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

                {/* Result */}
                <Container className="Single-Column-Container">
                <div>
                    <div>
                    <div>
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">RESULT</p>
                        <p className="Section-title">Watch reBalance in Action</p>
                        <p className="mb-4">We created a short video of reBalance.</p>
                    </div>
                    </div>
                </div>
                  <img className="opening-image" src={reBalanceMoodboard}></img>
                </Container>

                <Divider height={120} />

                {/* Direction */}
                <Container className="Two-Column-Container">
                <Row>
                    <Col>
                        <div>
                        <div className="Section-line-rb"></div>
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
                        <div className="Section-line-rb"></div>
                        <p className="Section-type">AFTERNOTE</p>
                        <p className="Section-title">Reflection & Thank You</p>
                        <p>Thank you to Professor Euicheon Lee and the TAs of CS492 for your mentoring throughout the project’s completion. And thank you to my teammates for your hard work and being such a fun bunch to work with!</p>
                    </div>
                    </div>
                </div>
                </Container>

                <Divider height={120} />

                <Container>
                <div className="img-giant">
                    <img className="opening-image" src={rbClosing}></img>
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
