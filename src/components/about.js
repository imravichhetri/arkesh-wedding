import React from 'react'
import PropTypes from 'prop-types'

import BrideGroomAboutImage from "../images/bride_groom_about.jpg"
import "./about.scss"
const About = props => {
  return (
    <div id="about" className="container">
      <div
        className="about_image_container"
        >
        <img
          src={BrideGroomAboutImage}
          alt="BrideGroomAboutImage"
          />
      </div>
      <div
        className="about_content_container text_center">
        <span className="subheading ">Cordially request the pleasure of your company on the joyous occasion of our wedding <br/></span>
        <h2 className="cursive_text name">Aradhana <span>&amp;</span> Mukesh</h2>
          <span className="icon flaticon-rose-variant-outline-with-vines"></span>
          <span className="subheading">On</span>
          <p className="time"><span style={{fontSize:"0.9em"}}>October | 25th | 2020</span></p>
      </div>
    </div>
  )
}

About.propTypes = {

}

export default About
