import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/page_1.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1
      style={{ fontFamily: 'scriptina'}}>Arie weds Mickey</h1> */}
    <div
      className="main_header"
      >
      <span className="prefix">The Wedding of</span>
      <h2 className="cursive_text name_header">Aradhana & Mukesh</h2>
      <p>Please do come and no mixer-juicer wala gift.</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}

    </div>
  </Layout>
)

export default IndexPage
