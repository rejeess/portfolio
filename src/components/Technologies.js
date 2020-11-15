import React from "react"
import Title from "./Title"
import Technology from "./Technology"
import { Link } from "gatsby"
import { FaSearchLocation } from "react-icons/fa"
const Technologies = ({ technologies, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {technologies.map((technology, index) => {
          return <Technology key={technology.id} index={index} {...technology} />
        })}
      </div>
      {showLink && (
        <Link to="/technologies" className="btn center-btn">
          technologies
        </Link>
      )}
    </section>
  )
}

export default Technologies
