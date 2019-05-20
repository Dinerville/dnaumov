import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#203040`,
      marginBottom: `1.45rem`,
      width:"23%",
      height:"100%",
      float: "left",
      position: "fixed",

    }
    }


  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#ababab`,
            textDecoration: `none`,
          }}

          hoverstyle={{
            color: `#ffffff`
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <p
        style={{
          color: `#ababab`,
          textDecoration: `none`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
      </p>
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
