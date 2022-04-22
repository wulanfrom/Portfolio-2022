import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

// icons
import Behance from '../../resources/icons/behance.svg'
import Dribbble from '../../resources/icons/Vector-1.svg'
import LinkedIn from '../../resources/icons/Vector-2.svg'
import Email from '../../resources/icons/Vector-3.svg'
import Github from '../../resources/icons/Vector.svg'

export default function Footer() {
  return (
    <Container>
        <div className="footer-div px-5 py-4">
            <Row>
                <Col sm={7} className="d-flex align-items-center justify-content-center">
                    <div className="text-white main-contact">
                        <h1>Interested in working together? Lets chat over coffee ☕️</h1>
                    </div>
                </Col>
                <Col sm={5} className="d-flex justify-content-center align-items-center">
                    <div>
                        <img className="me-3" src={Email} />
                        <img className="me-3" src={Behance} />   
                        <img className="me-3" src={Dribbble} />
                        <img className="me-3" src={LinkedIn} />
                        <img className="me-3" src={Github} />
                    </div>
                </Col>
            </Row>
        </div>
        <div className="text-center my-2">
            <p className="copyright-text text-secondary">Copyright 2022. Developed and Designed by wulanfrom with ❤️</p>
        </div>
    </Container>
  )
}
