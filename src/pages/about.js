import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({
  data:{
    about: {nodes},
  },
}) => {
  const {title, intro, image} = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img"/>
          <article className="about-text">
            <Title title={title}/>
            <p>{intro}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    about:allStrapiAbout {
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
