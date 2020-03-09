import React from 'react'
import PropTypes from 'prop-types'

import "./modal.scss";

const Modal = props => {
  return (
    <div
      className="modal_container">
        <div className="modal_content_container">
         {props.children}
        </div>

    </div>
  )
}

Modal.propTypes = {

}

export default Modal
