/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import KnotImage from "../images/knot.jpg";
import KnotImageSm from "../images/knot_sm.jpg";

import Header from "./header"
import "./layout.scss"

console.log(KnotImage, "image")
console.log(KnotImageSm, "image sm")
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <img
        src={KnotImageSm}
        srcSet={`${KnotImageSm} 768w,
           ${KnotImage} 3000w`}
      alt="KnotImage" 
      className="knot_image"/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          height: "100%"
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, By Chhetri Parivar
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
