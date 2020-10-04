import React from 'react'
import PropTypes from 'prop-types'

import "./when_and_where.scss";
import Card from './card';
import HaldiIcon from "../images/haldi.svg"
import { useStaticQuery, graphql } from 'gatsby';

const WhenAndWhere = props => {
  const data = useStaticQuery(
    graphql`
      query{
        allImageSharp(filter: { sizes: {}, fluid: { originalName: { eq: "dholak_cover.jpeg" } } }) {
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
        site {
          siteMetadata {
            whenAndWhere {
              cards {
                occasion
                when {
                  date
                  time
                }
                where {
                  location
                  mapLocation
                }
              }
            }
          }
        }
      }
    `
  )
  // const coverData = useStaticQuery(graphql`
  //   query DholakCover {
  //     allImageSharp(filter: { sizes: {}, fluid: { originalName: { eq: "dholak_cover.jpeg" } } }) {
  //      nodes {
  //        id
  //        sizes {
  //          base64
  //          tracedSVG
  //          aspectRatio
  //          src
  //          srcSet
  //          srcWebp
  //          srcSetWebp
  //          sizes
  //          originalImg
  //          originalName
  //          presentationWidth
  //          presentationHeight
  //        }
  //      }
  //    }
  //   }
  // `)
  console.log(data, data.allImageSharp.nodes[0].sizes.src, "data")
  return (
    <div
      className="container"
      id="whenAndWhere"
      style={{ marginTop: "5rem"}}
      >
      <h1
        className="cursive_text red_text text_center">
        Place & Time
      </h1>
      <div
        className="when_and_where_content_container"
        style={{ backgroundImage: `url(${data.allImageSharp.nodes[0].sizes.src})`}}
        >
        {
          data.site.siteMetadata.whenAndWhere.cards.map(card=> (
            <div key={card.occassion}>
              <Card {...card}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

WhenAndWhere.propTypes = {

}

export default WhenAndWhere
