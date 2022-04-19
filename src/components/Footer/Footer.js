import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <Container>
        <div className="footer-div px-5 py-4">
            <Row>
                <Col sm={8} className="d-flex align-items-center justify-content-center">
                    <div className="text-white main-contact">
                        <h1>Interested in working together? Lets chat over coffee</h1>
                    </div>
                </Col>
                <Col sm={4}>
                    {/* <h1 className="text-white">hello</h1> */}
                </Col>
            </Row>
        </div>
    </Container>
  )
}
