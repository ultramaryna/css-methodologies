import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>CSS Methodologies</h1>
    <Link to="/bem/main">Bem</Link>
    <Link to="atomic-design/main">Atomic Design</Link>
  </Layout>
)

export default IndexPage
