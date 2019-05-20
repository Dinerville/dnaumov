import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UsefulLinks = () => (
  <Layout>
    <SEO title="Useful links" keywords={[`gatsby`, `application`, `react`]} />
    <a href={"https://www.youtube.com/watch?v=_uQrJ0TkZlc"} target={"_blank"}>Python course</a>
  </Layout>
)

export default UsefulLinks
