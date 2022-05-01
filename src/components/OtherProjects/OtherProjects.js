import React from 'react'
import './OtherProjects.css'

import { Row, Col, Container } from 'react-bootstrap'
import OtherCard from '../OtherCard/OtherCard'

// other projects
import Nft from '../../resources/nftPoster/nft.png'
import ColorArt from '../../resources/colorArt/color.png'
import AsianCHI from '../../resources/asianCHI/asianchi.png'
import GoodFood from '../../resources/goodFood/goodFood.png'
import Kixlab from '../../resources/xDesign/xdesign.png'

export default function OtherProjects() {
    const category = {
        nft: "infographic",
        goodFood: "illustration",
        colorArt: "data visualization",
        asianCHI: "Web development",
        xDesign: "HCI Research"
    }
    const color = { // background color, font color
        goodFood: ["#BFDCC4", "#000000"],
        nft: ["#FCFF76", "#000000"],
        colorArt: ["#6A777E", "#ffffff"],
        asianCHI: ["#00357C", "#ffffff"],
        xDesign: ["#E8E8E8", "#000000"]
    }
    const img = {
        goodFood: GoodFood,
        nft: Nft,
        colorArt: ColorArt,
        asianCHI: AsianCHI,
        xDesign: Kixlab,
    }
    const projectLink = {
        goodFood:"goodFood",
        nft: "nft",
        colorArt: "colorArt",
        asianCHI: "asianCHI",
        xDesign: "kixlab",
    }

  return (
    <div>
        <div className="sub-title my-5">
            <h1>Other Projects I've Worked On <sup className="ml-1 text-black-5">4</sup></h1>
            <p className="section-sub">projects i’ve done on the side.</p>
        </div>
        
        <Container className="p-0">
            <Row>
                <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"XDesign"} link={projectLink.xDesign} img={img.xDesign} category={category.xDesign} bgColor={color.xDesign[0]} textColor={color.xDesign[1]} />
                    </div>
                </Col>
                <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"Good Food that Feels Like Home"} link={projectLink.goodFood} img={img.goodFood} category={category.goodFood} bgColor={color.goodFood[0]} textColor={color.goodFood[1]} />
                    </div>
                </Col>
                <Col className="mb-2"sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"NFT Crypto Art is Changing How Artists Earn, but at What Cost?"} link={projectLink.nft} img={img.nft} category={category.nft} bgColor={color.nft[0]} textColor={color.nft[1]} />
                    </div>
                </Col>
                <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"Color My Influence"} link={projectLink.colorArt} img={img.colorArt} category={category.colorArt} bgColor={color.colorArt[0]} textColor={color.colorArt[1]} />
                    </div>
                </Col>
                <Col className="mb-2" sm={6} md={4} lg={4}>
                    <div className="other-project">
                        <OtherCard title={"AsianCHI Symposium Official Website"} link={projectLink.asianCHI} img={img.asianCHI} category={category.asianCHI} bgColor={color.asianCHI[0]} textColor={color.asianCHI[1]} />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
