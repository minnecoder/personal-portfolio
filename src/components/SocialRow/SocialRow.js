import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './socialRow.css'

const SocialRow = () => (
  <Row className="jumbo_social text-center">
    <Col>
      <a style={{ color: '#000' }} href="https://www.github.com/minnecoder" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: '#000' }}
        href="https://www.linkedin.com/in/seanparkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>
    <Col>
      <a style={{ color: '#000' }} href="https://twitter.com/minnecoder" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter hover_effect" />
      </a>
    </Col>

    <Col>
      <a
        style={{ color: '#000' }}
        href="https://www.instagram.com/minnecoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram hover_effect" />
      </a>
    </Col>

    <Col>
      <a
        style={{ color: '#000' }}
        className="hover_effect"
        href="https://www.hackerrank.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-hackerrank hover_effect" />
      </a>
    </Col>
    <Col>
      <a style={{ color: '#000' }} href="https://angel.co/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-angellist hover_effect" />
      </a>
    </Col>
  </Row>
)
export default SocialRow
