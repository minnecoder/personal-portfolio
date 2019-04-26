import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './myJumbo.css'

/* ########### PROPS ########## 
title: The title of the jumbotron
body: The body of the Jumbotron
body2: 
*/
const myjumboStyles = {
  backgroundColor: '#fff',
}

const MyJumbo = ({ title, body, body2 }) => (
  <Jumbotron fluid className="myjumbo" style={myjumboStyles}>
    <div className="myjumbo_content">
      <h1>{title}</h1>
      <span>
        <p>{body}</p>
      </span>
      <span>
        <p>{body2}</p>
      </span>
    </div>
  </Jumbotron>
)

export default MyJumbo

MyJumbo.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  body2: PropTypes.string,
}
