import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>Sean Parkin</h3>
          <p style={{ color: "blueviolet", fontSize: "1.3rem" }}>
            <a href="mailto:sdparkin@gmail.com">
          <span style={{ color: "blueviolet" }}>sdparkin@gmail.com</span>
        </a>
          </p>
          <br />
          <p style={{ fontSize: "1.3rem" }}>
            I'm a great developer that loves to code. I can help you grow your
            next product.
          </p>
        </Col>
      </Row>
      

      {/* TODO: Make use of the SocialRow component to make the below icons obsolete */}

      <Row className="footer_social text-center">
        <Col>
          <a
            href="https://github.com/minnecoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/seanparkin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://twitter.com/minnecoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram hover_effect" />
          </a>
        </Col>

       
        <Col>
          <a href="https://angel.co/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-angellist hover_effect" />
          </a>
        </Col>
      </Row>
      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Sean Parkin © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">
            {" "}
            <span className="blueViolet">& Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
