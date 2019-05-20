import React from "react"
import { Link } from "gatsby"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

  </Layout>
)

export default IndexPage
