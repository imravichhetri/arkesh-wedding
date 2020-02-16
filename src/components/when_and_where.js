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

  return (
    <div
      style={{marginTop:"5rem"}}
      className="container"
      id="whenAndWhere">
      <h1
        className="cursive_text red_text text_center">
        Place & Time
      </h1>
      <div
        className="when_and_where_content_container"
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
