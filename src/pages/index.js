import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Technologies from "../components/Technologies"
import Blogs from "../components/Blogs"
export default ({data}) => {
  const {
    allStrapiTechnologies: { nodes: technologies },
  } = data
  console.log("TECHNOLOGIES", data)
  return (
    <Layout>
      <Hero />
      {/* <Services/> */}
      <Jobs />
      <Technologies technologies={technologies} title="Technologies" showLink/>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiTechnologies {
      nodes {
        id
        Description
        title
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
