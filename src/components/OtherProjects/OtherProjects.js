import React from 'react'
import './OtherProjects.css'

import { Row, Col, Container } from 'react-bootstrap'
import OtherCard from '../OtherCard/OtherCard'

// other projects
import Nft from '../../resources/nft.png'
import ColorArt from '../../resources/color.png'
import AsianCHI from '../../resources/asianchi.png'
import GoodFood from '../../resources/goodFood.png'

export default function OtherProjects() {
    const category = {
        nft: "infographic",
        goodFood: "illustration",
        colorArt: "data visualization",
        asianCHI: "Web development"
    }
    const color = {
        goodFood: ["#BFDCC4", "#000000"],
        nft: ["#FCFF76", "#000000"],
        colorArt: ["#6A777E", "#ffffff"],
        asianCHI: ["#00357C", "#ffffff"]
    }
    const img = {
        goodFood: GoodFood,
        nft: Nft,
        colorArt: ColorArt,
        asianCHI: AsianCHI,
    }

  return (
    <div>
        <div className="d-flex my-5">
            <h1>Other Projects I've Worked On</h1>
            <h5 className="ml-1 text-black-50">5</h5>
        </div>
        
        <Container className="p-0">
            <Row>
                <Col sm={6} md={4} lg={3}>
                    <div className="other-project">
                        <OtherCard title={"Good Food that Feels Like Home"} img={img.goodFood} category={category.goodFood} bgColor={color.goodFood[0]} textColor={color.goodFood[1]} />
                    </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <div className="other-project">
                        <OtherCard title={"NFT Crypto Art is Changing How Artists Earn, but at What Cost?"} img={img.nft} category={category.nft} bgColor={color.nft[0]} textColor={color.nft[1]} />
                    </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <div className="other-project">
                        <OtherCard title={"Color My Influence"} img={img.colorArt} category={category.colorArt} bgColor={color.colorArt[0]} textColor={color.colorArt[1]} />
                    </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <div className="other-project">
                        <OtherCard title={"AsianCHI Symposium Official Website"} img={img.asianCHI} category={category.asianCHI} bgColor={color.asianCHI[0]} textColor={color.asianCHI[1]} />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
