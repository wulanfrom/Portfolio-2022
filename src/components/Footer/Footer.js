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
    <div>
        <div className="footer-div m-0 p-0 px-5 py-5">
            <Container>
                <Row>
                    <Col sm={8} md={7} lg={7} className="d-flex align-items-center justify-content-center">
                        <div className="text-white main-contact">
                            <h1>Interested in working together? Lets chat over coffee ☕️</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="footer-responsive mt-3">
                    <Col sm={8} md={7} lg={7} className="d-flex align-items-center">
                        <div>
                            <img className="social-icon me-3 mb-2" src={Email} />
                            <img className="social-icon me-3 mb-2" src={Behance} />   
                            <img className="social-icon me-3 mb-2" src={Dribbble} />
                            <img className="social-icon me-3 mb-2" src={LinkedIn} />
                            <img className="social-icon me-3 mb-2" src={Github} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="text-center my-2">
            <p className="copyright-text text-secondary">Copyright 2022. Developed and Designed by wulanfrom with ❤️</p>
        </div>
    </div>
  )
}
