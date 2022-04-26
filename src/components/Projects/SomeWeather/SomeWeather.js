import React from 'react'
import './SomeWeather.css'
import { Container, Row, Col } from 'react-bootstrap'

import someWeatherpng from '../../../resources/some-weather.png'
import ProjectHero from '../ProjectHero/ProjectHero'

export default function SomeWeather() {
  const category = "UX DESIGN // APP DESIGN"
  const projectTitle = "Some(섬) Weather"
  const projectDesc = "Integrating environmental awareness to everyday weather apps."
  const role = "UI/UX Designer, UX Researcher, Ideation, discovery, prototyping, UX Copywriting"
  const sector = "Weather App, Sustainability, Expenses Management"
  const colors = ["#4CDCB1", "#000"]

  return (
    <div className="someWeather-doc">
      <ProjectHero bgColor={colors[0]} textColor={colors[1]} heroImg={someWeatherpng} category={category} title={projectTitle} desc={projectDesc} role={role} sector={sector}/>

      <div className="project-content">
          <Container></Container>
      </div>

    </div>
  )
}
