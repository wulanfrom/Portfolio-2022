import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './OtherCard.css'
import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'

export default function OtherCard(props) {
    const category = props.category;
    const title = props.title;
    const img = props.img
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    console.log("bgColor ", bgColor);
    console.log("textColor ", textColor);
    const OtherCardContainer = styled.div`
    color: ${textColor};
    background-color: ${bgColor};
    overflow: hidden;
    border-radius: 12px;
    height: 350px;
    `

    return (
        <Container className="p-0 other-card-container">
            <Tilt className="Tilt" options={{ scale: 1.01, perspective: 1500, max : 10, speed: 500 }} style={{ height: 350, width: "100%" }} >
                <OtherCardContainer>
                    <div className="desc-row-other">
                        <p className="m-0 category-text-other">{category}</p>
                        <p className="m-0 title-text-other">{title}</p>
                    </div>
                    <div className="img-other-container">
                        <div className="project-img-other-container p-0">
                            <img className="project-img-other" src={img} />
                        </div>
                    </div>
                </OtherCardContainer>
            </Tilt>
        </Container>
  )
}
