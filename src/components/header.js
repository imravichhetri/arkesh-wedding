import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import "./header.scss";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.85rem 1.0875rem`,
        display: 'flex',
        justifyContent: `flex-end`
      }}
    >
      <h5 style={{ margin: "0 2rem" }}>
        <Link
          to="/"
          className="link_class"
          >
          Home
        </Link>
      </h5>
      <h5 style={{ margin: "0 2rem" }}>
        <Link
          to="/"
          className="link_class"
          >
          About
        </Link>
      </h5>
      <h5 style={{ margin: "0 2rem" }}>
        <Link
          to="/"
          className="link_class"
        >
          Groom & Bride
        </Link>
      </h5>
      <h5 style={{ margin: "0 2rem" }}>
        <Link
          to="/"
          className="link_class"
        >
          When & Where
        </Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
