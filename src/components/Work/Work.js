import React from 'react'
import {Container} from 'react-bootstrap'
import Divider from '../Divider/Divider'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'
import OtherProjects from '../OtherProjects/OtherProjects'
import Publications from '../Publications/Publications'
import './Work.css'

export default function Work() {
  return (
    <Container>
        <div className="hero-image d-flex align-items-center justify-content-center">
            <h1>Hello world</h1>
        </div>

        <div id="featured-projects">
            <FeaturedProjects />
        </div>

        <div id="other-projects">
            <OtherProjects />
        </div>

        <div id="publications">
            <Publications />
        </div>

        <Divider height={'72px'}/>
    </Container>
  )
}
