import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Technologies from "../components/Technologies"
 
const TechnologiesPage = ({
  data: {
    allStrapiTechnologies: { nodes: technologies },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Technologies technologies={technologies} title="all technologies" />
      </section>
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

export default TechnologiesPage
