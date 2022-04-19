import React from 'react'
import './OtherProjects.css'

import { Row, Col, Container } from 'react-bootstrap'

export default function OtherProjects() {
  return (
    <div>
        <div className="d-flex my-5">
            <h1>Other Projects I've Worked On</h1>
            <h5 className="ml-1 text-black-50">5</h5>
        </div>
        
        <Container className="p-0">
            <Row>
                <Col xs={12} md={6} lg={3}>
                    <div className="other-project"></div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <div className="other-project"></div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <div className="other-project"></div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <div className="other-project"></div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
