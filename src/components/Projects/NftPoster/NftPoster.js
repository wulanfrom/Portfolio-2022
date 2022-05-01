import React from 'react'
import './NftPoster.css'
import { Container, Row, Col } from 'react-bootstrap'

// components
import ProjectHero from '../ProjectHero/ProjectHero'
import Divider from '../../Divider/Divider'
import ProjectFooter from '../../ProjectFooter/ProjectFooter'

// images
import nftpng from '../../../resources/nftPoster/nft.png'

// next projects
import someWeatherProject from '../../../resources/someWeather/someWeatherMoodboard.png'
import wheelOnProject from '../../../resources/wheelOn/wo-hero-img.png'

export default function NftPoster() {
    const category = "INFOGRAPHIC"
    const projectTitle = "NFT Crypto Art is Changing How Artists Earn, but At What Cost?"
    const projectDesc = "Understanding the Pros and Cons of NFT"
    const role = "Visual Designer, Graphic Designer"
    const sector = "Information Design"
    const colors = ["#F8FB75", "#000"]
  return (
    <div className="nftPoster-doc">
        <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={nftpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>
    
        <div className="project-content">
            {/* Overview */}
            <Container>
                <Row>
                <Col>
                    <div>
                        <div className="Section-line-nft"></div>
                        <p className="Section-type">overview</p>
                    </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6}>
                    <div>
                        <p className="Section-title">Understanding the Pros and Cons of NFT</p>
                    </div>
                    </Col>
                    <Col md={5} lg={6}>
                        <p>This was an infographic I made to better understand the pros and conts of the merging NFT technology, especially for artists and how it could revolutionize how they earn.</p>
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
