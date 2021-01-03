import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Title from "../components/Title"

const query = graphql`
  {
    allStrapiEducations(sort: { fields: id, order: ASC }) {
      nodes {
        title
        strapiId
        course
      }
    }
  }
`

const Education = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiEducations: { nodes: educations },
  } = data

  const { title, course, strapiId } = educations[0]
  console.log(title, course, strapiId)
  return (
    <div>
      <Title title="Education" />
      {educations.map(education => {
        return (
          <div className="job-desc">
            <FaAngleDoubleRight
              key={educations.strapiId}
              className="job-icon"
            ></FaAngleDoubleRight>
            <p>
              {education.title}, {education.course}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Education
