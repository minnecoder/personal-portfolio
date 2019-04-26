import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './projectCard.css'
import MyButton from '../myButton/MyButton'

// Props:
// imageSrcPath: the path to the image used
// title: The title of the card/App
// date: The date of the card
// description: Short description of the card
// sourceURL: URL to the source code of the project
// hostedURL: URL to the hosted version of the app

const ProjectCard = ({ imageSrcPath, title, date, description, sourceURL, hostedURL }) => (
  <div className="project_container">
    <Row>
      <Col>
        <img src={imageSrcPath} alt="Smiley face" style={{ maxWidth: '100%' }} />
      </Col>
      <Col>
        <h4>
          {title}
          <br />
          <small>{date}</small>
        </h4>

        <p>{description}</p>

        <Row>
          <MyButton text="Source Code" URL={sourceURL} />
          <MyButton text="Hosted App" URL={hostedURL} />
        </Row>
      </Col>
    </Row>
  </div>
)

export default ProjectCard

ProjectCard.propTypes = {
  imageSrcPath: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  sourceURL: PropTypes.string,
  hostedURL: PropTypes.string,
}
