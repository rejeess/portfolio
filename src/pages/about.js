import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Title from "../components/Title"
import Image from "gatsby-image"
import Education from "../components/Education"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, intro, image } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{intro}</p>
          </article>
          <article className="about-text">
            <Education />
            
          </article>
         
        </div>
        <Link to="/hobbies" className="btn center-btn">
            Hobbies
          </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        intro
        id
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

export default About
