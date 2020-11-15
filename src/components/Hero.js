import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <articile className="hero-info"></articile>
        <div>
          <div className="underline"></div>
          <h1>i'm Rejeess</h1>
          <h4>UI Developer</h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
          <SocialLinks />
        </div>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
