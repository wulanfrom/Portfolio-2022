import React from 'react'
import './FeaturedCardLeft.css'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'

// images
import buttonArrow from '../../resources/featuredPictures/buttonArrow.svg'

export default function FeaturedCardLeft(props) {
    const category = props.category;
    const title = props.title;
    const description = props.desc;
    const img = props.img
    const imgInner = props.imgInner;
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const projectLink = props.link;
    const ProjectCard = styled.div`
    color: #000;
    border-radius: 4px;
    min-height: 470px;
    `

    return (
        <Container className="p-0 feature-card-container">
            <Link className="link-container" to={ projectLink }>
                {/* <Tilt className="Tilt" options={{ scale: 1.00, perspective: 2000, max : 6, speed: 500 }} style={{ width: "100%" }} > */}
                <ProjectCard>
                    <Row className="card-div">
                        <Col md={8} lg={7} className="p-0">
                            <Tilt className="Tilt" options={{ scale: 1.00, perspective: 2000, max : 10, speed: 500 }} style={{ width: "100%" }}>
                                <div className="project-img-container d-flex flex-column align-items-baseline">
                                    <img className="project-img" src={img} />
                                    {/* <img className="Tilt-inner" src={imgInner} /> */}
                                </div>
                            </Tilt>
                        </Col>
                        <Col className="card-text-content" md={4} lg={5}>
                            <div className="d-flex flex-column justify-content-between desc-text" style={{height: "100%"}}>
                                <div className="d-flex category-text">
                                    <p className="mb-1">{category}</p>
                                </div>
                                <div className="underline-category"></div>
                                <div className="mt-auto mb-0">
                                    <h2 className="mb-1 project-featured-title">{title}</h2>
                                    <p className="m-0">{description}</p>
                                    <div className="d-flex mt-4">
                                        <Button className="view-case-button px-3" variant="dark">View Case Study</Button>
                                        <img className="view-arrow" src={buttonArrow} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ProjectCard>
                {/* </Tilt> */}
            </Link>
        </Container>
    )
}
