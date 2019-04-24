import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hi, I'm Sean Parkin. I am a web developer looking to level up my skills</h1>
      <br />
      <h3>
        Right now I'm using Javascript, while learning about React.js and Gatsby.js to
        make websites that "responsive" and faster.
      </h3>
      <p>Do you have a project that you'd like to discuss?<br/>
        Let's talk{" "}
        <a href="mailto:sdparkin@gmail.com">
          <span style={{ color: "blueviolet" }}>sdparkin@gmail.com</span>
        </a>
      </p>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
