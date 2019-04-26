import React from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './myButton.css'

// ########## PROPS INPUT ###############
// text: the text displayed in the button
// URL: the link the button goes to

const MyButton = ({ URL, text }) => (
  <Col sm={6}>
    <a href={URL} target="_blank" rel="noopener noreferrer">
      <div className="button_styles text-center">{text}</div>
    </a>
  </Col>
)

export default MyButton

MyButton.propTypes = {
  URL: PropTypes.string,
  text: PropTypes.string,
}
