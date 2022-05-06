import React from 'react'
import './ColorArt.css'
import { Container, Row, Col } from 'react-bootstrap'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import nftpng from '../../../resources/colorArt/color.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function ColorArt() {
    const category = "data visualization"
    const projectTitle = "Color My Influence"
    const projectDesc = "Visualizing the Colors used by the Century's Most Influential Painters"
    const role = "Visual Designer, Graphic Designer"
    const sector = "Art"
    const colors = ["#515355", "#fff"]

  return (
    <div className="colorArt-doc">
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={nftpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-art"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">What Colors do the Most Influensial Painters Use?</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>Have you ever wondered what kind fo situation prompts painters to explore and try different colors? I try to answer that questions through analyzing the colors used, amounts of paintings, and size of paintings done by 25 of the most influential painters. From the findings, we can see what color palettes each painter are comfortable with and how their painting ethic is. </p>
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
