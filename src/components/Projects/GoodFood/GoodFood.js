import React from 'react'
import './GoodFood.css'
import { Container, Row, Col } from 'react-bootstrap'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import nftpng from '../../../resources/goodFood/goodFood.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function GoodFood() {
    const category = "ILLUSTRATION // Digital Art"
    const projectTitle = "Good Food that Feels Like Home"
    const projectDesc = "Drawing Indonesian Food as homes"
    const role = "Illustrator"
    const sector = "Food, Houses"
    const colors = ["#B8D4BD", "#000"]
  return (
    <div className="nftPoster-doc">
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={nftpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-gf"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">How does Food Remind you of Home?</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>This drawing was created as a project for KAIST ID221 Information Design, Small Multiples project. The drawing shows a village where each house represents an Indonesian traditional food to represent how a home is usually associated with a dish, hence the name, “Good Food that Feels like Home”. The food chosen are traditional Indonesian food, since those are the food that makes me feel at home.</p>
                    </Col>
                </Row>
            </Container>
       </div>

       <Divider height={72} />

        {/* Footer */}
        <ProjectFooter next={wheelOnProject} prev={someWeatherProject}/>
    </div>
  )
}
