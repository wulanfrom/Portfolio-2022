import React from 'react'
import './FeaturedProjects.css'

import Divider from '../Divider/Divider'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

// featured projects
import CeeyaImage from '../../resources/ceeya-project.png'
import SomeWeatherImage from '../../resources/some-weather.png'
import ReBalanceImage from '../../resources/reBalance.png'
import WheelOn from '../../resources/wheelOn.png'

// other projects
import Nft from '../../resources/nft.png'
import ColorArt from '../../resources/color.png'
import AsianCHI from '../../resources/asianchi.png'
import GoodFood from '../../resources/goodFood.png'



export default function FeaturedProjects() {
  const descriptions = {
    ceeya: "Ceeya.io’s Search Website Design, from conceptualization to implementation.",
    someWeather: "Integrating environmental awareness to everyday weather apps.",
    reBalance: "Helping manage your emotional, physical, and social health.",
    wheelOn: "Assisting users with moving disabilities through online means.",
  }
  const category = {
    ceeya: "Web Development // UX Design",
    someWeather: "UX design // App design",
    reBalance: "SYSTEM DESIGN // WEB DEVELOPMENT",
    wheelOn: "SYSTEM DESIGN // WEB DEVELOPMENT",
    nft: "infographic",
    goodFood: "illustration",
  }
  const images = {
    ceeya: CeeyaImage,
    someWeather: SomeWeatherImage,
    reBalance: ReBalanceImage,
    wheelOn: WheelOn,
    nft: Nft,
    colorArt: ColorArt,
    asianCHI: AsianCHI,
    goodFood: GoodFood
  }

  const colors = {
    ceeya: ["#424242", "#ffffff"],
    someWeather: ["#4CDCB1", "#000000"],
    reBalance: ["#6CAFE5", "#000000"],
    wheelOn: ["#FAB82D", "#000000"],
  }

  const projectLinks = {
    ceeya: "ceeya",
    someWeather: "someWeather",
    reBalance: "reBalance",
    wheelOn: "wheelOn"
  }

  return (
    <div>
        <div className="d-flex my-5">
            <h1>Featured Projects</h1>
            <h5 className="ml-1 text-black-50">5</h5>
        </div>

        {/* <div className="project"> */}
          <FeaturedCard category={category.ceeya} link={projectLinks.ceeya} title={"Ceeya Search"} desc={descriptions.ceeya} img={images.ceeya} bgColor={colors.ceeya[0]} textColor={colors.ceeya[1]}/>
        {/* </div>/ */}

        <Divider height={'20px'}/>

        {/* <div className="project"> */}
          <FeaturedCard category={category.someWeather} link={projectLinks.someWeather} title={"Some(섬) Weather"} desc={descriptions.someWeather} img={images.someWeather} bgColor={colors.someWeather[0]} textColor={colors.someWeather[1]}/>
        {/* </div> */}

        <Divider height={'20px'}/>

        {/* <div className="project"> */}
          <FeaturedCard category={category.reBalance} link={projectLinks.reBalance} title={"reBalance"} desc={descriptions.reBalance} img={images.reBalance} bgColor={colors.reBalance[0]} textColor={colors.reBalance[1]}/>
        {/* </div> */}

        <Divider height={'20px'}/>

        {/* <div className="project"> */}
        <FeaturedCard category={category.wheelOn} link={projectLinks.wheelOn} title={"WheelOn"} desc={descriptions.wheelOn} img={images.wheelOn} bgColor={colors.wheelOn[0]} textColor={colors.wheelOn[1]}/>
        {/* </div> */}

        <Divider height={'20px'}/>
    </div>
  )
}
