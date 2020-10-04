/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {
  useEffect,
  useState,
  useCallback
} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Helmet
} from "react-helmet";
import KnotImage from "../images/knot.jpg";
import KnotImageSm from "../images/knot_sm.jpg";
import MessageImage from "../images/message_icon.svg";

import Header from "./header"
import Modal from "./modal"
import "./layout.scss"

const Layout = ({ children }) => {
  const [showInstructions, setShowInstructions] = useState(false)
  const [showMessages, setShowMessages] = useState(false)

  const data = useStaticQuery(graphql`
    query Gallery {
      site {
        siteMetadata {
          title
          messages {
            text
            author
            langCode
          }
        }
      }
    }
  `)


  const [openModal, setOpenModal] = useState(false)
  
  const _messageOnClickHandler = useCallback(
    () => {
      setOpenModal(state=>true);
      setShowMessages(state => true)
    },
    [openModal],
  )

  const _onModalClose = useCallback(
    () => {
      setOpenModal(false)
      setShowMessages(false)
      setShowInstructions(false)
    },
    [],
  )


  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true)
      setShowInstructions(true)
    }, 2000);
  }, [])

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Arya&display=swap" rel="stylesheet"></link>
      </Helmet>
      {openModal && (
          <Modal>
            <div className="main_modal_container">
            <span className="close_button cursor_pointer" onClick={_onModalClose}>X</span>
            {
              showMessages && data.site.siteMetadata.messages.map( message => (
                <div key={message.text}>
                  <p className={`message ${message.langCode}_message`}>{message.text} &nbsp; { message.author? ` - ${message.author} `: `` }</p>
                </div>
              ))
            }
            {showInstructions && (
              <>
                <h4>PLEASE NOTE</h4>
                <ul>
                  <li className="align_left">Due to COVID-19, Authorities have put a limit of max 100 guests for a wedding.</li>
                  <li className="align_left">We would have loved to invite you personally, but we are also bound by the rules imposed by the Govt.</li>
                  <li className="align_left">Hence, those invited to the wedding will receive a call from Chhetri family personally.</li>
                  <li className="align_left">Wearing a mask is compulsory for the attendees of the wedding.</li>
                </ul>
              </>
            )}
            </div>
            <div className="enquiry_container">For any enquiry call +91-7017872344</div>
          </Modal>
      )}
      <img src={MessageImage} className="message_icon" alt="Message Icon" onClick={_messageOnClickHandler}/>
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
        <footer className="full_width">
          <div className="text_center">
          © {new Date().getFullYear()}, By Chhetri Parivar
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
