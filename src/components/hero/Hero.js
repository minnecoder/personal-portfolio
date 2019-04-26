import React from 'react'
import { Jumbotron } from 'react-bootstrap'

// import custom styles
import './hero.css'

const jumboStyles = {
  backgroundColor: '#fff',
  paddingLeft: '1rem',
}
const Hero = () => (
  <Jumbotron style={jumboStyles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hi, I'm Sean Parkin. I am a web developer with a passion for learning</h1>
      <br />
      <h3>
        Right now I'm using Javascript, while learning about React.js and Gatsby.js to make websites that are
        interactive and fast.
      </h3>
      <p>
        Do you have a project that you'd like to discuss?
        <br />
        Let's talk{' '}
        <a href="mailto:sdparkin@gmail.com">
          <span style={{ color: '#18a4e0' }}>sdparkin@gmail.com</span>
        </a>
      </p>
    </div>
  </Jumbotron>
)

export default Hero
