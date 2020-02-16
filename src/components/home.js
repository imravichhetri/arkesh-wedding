import React from 'react'
import PropTypes from 'prop-types'

import Countdown from "../components/countdown";

import KnotImage from "../images/knot.jpg";
import KnotImageSm from "../images/knot_sm.jpg";

import "../components/page_1.scss";

const Home = props => {
  return (
    <>
      {/* <img
        src={KnotImageSm}
        srcSet={`${KnotImageSm} 768w,
          ${KnotImage} 3000w`}
        alt="KnotImage"
        className="knot_image" 
        /> */}
      <div
        className="main_header container"
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0px 1.0875rem 1.45rem`,
        //   paddingTop: 0,
        //   height: "100%"
        // }}
        >
        <span className="prefix_container">
          <span className="prefix">The Wedding of</span>
        </span>
        <h2 className="cursive_text name_header">Aradhana & Mukesh</h2>
        <Countdown />
        {/* <p>Please do come and no mixer-juicer wala gift.</p> */}
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> */}
      </div>
    </>
  )
}

Home.propTypes = {

}

export default Home
