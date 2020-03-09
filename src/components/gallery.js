import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import "./gallery.scss";

const Gallery = props => {
  const data = useStaticQuery(graphql`
    query Galleries {
      allImageSharp(filter: {sizes: {}, fluid: {src: {regex: "/arkesh/"}}}) {
        nodes {
          id
          sizes {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          } 
        }
      }
    }
  `)
  return (
    <div className="container" id="gallery">
      {
        data.allImageSharp.nodes.map( (imageObj, index) => {
          return (
            <div className="image" key={imageObj.path}>
              <Img sizes={imageObj.sizes} alt="image 1" className="image" title={`Gallery Image ${index+1}`}/>
            </div>
          )
        })
      }
    </div>
  )
}

Gallery.propTypes = {

}

export default Gallery
