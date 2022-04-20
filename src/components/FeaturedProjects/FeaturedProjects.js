import React from 'react'

import Divider from '../Divider/Divider'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

// directory to images
import CeeyaImage from '../../resources/ceeya-project.png'


export default function FeaturedProjects() {
  const descriptions = {
    ceeya: "Ceeya.io’s Search Website Design, from conceptualization to implementation.",
  }
  const category = {
    ceeya: "Web Development // UX Design",
  }
  const images = {
    ceeya: CeeyaImage,
  }

  const colors = {
    ceeya: ["#424242", "#ffffff"]
  }

  return (
    <div>
        <div className="d-flex my-5">
            <h1>Featured Projects</h1>
            <h5 className="ml-1 text-black-50">5</h5>
        </div>

        <div className="project">
          <FeaturedCard category={category.ceeya} title={"Ceeya Search"} desc={descriptions.ceeya} img={images.ceeya} bgColor={colors.ceeya[0]} textColor={colors.ceeya[1]}/>
        </div>

        <Divider height={'20px'}/>

        <div className="project">

        </div>

        <Divider height={'20px'}/>

        <div className="project">

        </div>

        <Divider height={'20px'}/>

        <div className="project">

        </div>

        <Divider height={'20px'}/>
    </div>
  )
}
