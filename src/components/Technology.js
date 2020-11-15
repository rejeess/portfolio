import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Technology = ({ Description, title, image, index }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{Description}</p>
      </div>
    </article>
  )
}

Technology.propTypes = {}

export default Technology
