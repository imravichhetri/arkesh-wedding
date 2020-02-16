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
      className="top_nav_container"
    >
      <h5>
        <a
          href="/"
          className="link_class"
          >
          Home
        </a>
      </h5>
      <h5>
      <a
        href="#about"
        className="link_class"
        >
        About
      </a>
      </h5>
      <h5>
        <Link
          to="/"
          className="link_class"
        >
          Groom & Bride
        </Link>
      </h5>
      <h5>
        <a
          href="#whenAndWhere"
          className="link_class"
        >
          When & Where
        </a>
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
