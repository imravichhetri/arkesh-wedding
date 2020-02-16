import React from 'react'
import PropTypes from 'prop-types'

import "./card.scss"
const Card = props => {
  return (
    <div
      className="card_container"
      >
      <h3 className="text_center">
        {props.occasion}
      </h3>
      <p>
        {props.when.date}
      </p>
      <p>
        {props.when.time}
      </p>
      <br/>
      <p>
          {props.where.location}
      </p>
      <span>
        <a href={props.where.mapLocation}>
          SEE MAP
        </a>
      </span>
    </div>
  )
}

Card.propTypes = {

}

export default Card
