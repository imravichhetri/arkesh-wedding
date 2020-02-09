import React, {
  useEffect
} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Countdown from "../components/countdown";
import About from "../components/about"
// import "../components/functions";
import "../components/page_1.scss";
const IndexPage = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    })
  }, [])
  return (
  <Layout>
    <SEO title="Home" />
    {/* <h1
      style={{ fontFamily: 'scriptina'}}>Arie weds Mickey</h1> */}
    <div
      className="main_header"
      >
      <div className="prefix_container">
        <span className="prefix">The Wedding of</span>
      </div>
      <h2 className="cursive_text name_header">Aradhana & Mukesh</h2>
      <Countdown/>
      {/* <p>Please do come and no mixer-juicer wala gift.</p> */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </div>
    <About/>
  </Layout>
)
    }

export default IndexPage
