import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Technologies from "../components/Technologies"
// import Blogs from "../components/Blogs"
export default ({data}) => {
  const {
    allStrapiTechnologies: { nodes: technologies },
  } = data
  console.log("TECHNOLOGIES", data)
  return (
    <Layout>
      <Hero />
      <Jobs />
      <Technologies technologies={technologies} title="Recent Technologies" showLink/>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiTechnologies(filter: {recent: {eq: true}}) {
      nodes {
        id
        title
        Description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

