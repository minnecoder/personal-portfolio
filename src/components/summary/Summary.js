import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../fontawesome/css/all.min.css'
import './summary.css'

const Summary = () => (
  <Container className="content" fluid>
    <h3>My Current Tech Stack:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-js hover_effect" />
        <br />
        <span>JavaScript</span>
      </Col>
      <Col>
        <i className="fab fa-react hover_effect" />
        <br />
        <span>React.js</span>
      </Col>
      <Col>
        <i className="fab fa-html5 hover_effect" />
        <br />
        <span>HTML5</span>
      </Col>
      <Col>
        <i className="fab fa-css3-alt hover_effect" />
        <br />
        <span>CSS3</span>
      </Col>
      <Col>
        <i className="fab fa-sass hover_effect" />
        <br />
        <span>Sass</span>
      </Col>
    </Row>
    <br />

    <h4 className="goal_text text-center">
      Part of being a web developer is that you will always be learning. I have taken this to heart and have been
      dabbling in a few other technologies. They are listed below:
    </h4>
    <Row style={{ marginTop: '1.8rem' }}>
      <Col>
        <h4 className="hover_effect">Gatsby</h4>
        <p>
          GatsbyJS is a static site generator that uses React. Even though Gatsby does use React, the files that are
          output are HTML, CSS, and JS files. One of the points for Gatsby is that the websites that made with Gatsby
          are very fast. If you didn't know this website is built with Gatsby
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">NodeJS</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, modi reiciendis. Placeat quia facilis neque,
          corporis ullam maiores eaque quos autem voluptatibus, minus totam animi quo sint ea, atque sit?
        </p>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <h4 className="hover_effect">MongoDB</h4>
        <p>MongoDB is a non-relational database that uses documents that are layed out like JSON objects.</p>
      </Col>
      <Col>
        <h4 className="hover_effect">APIs</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi odio illum accusamus eum optio
          voluptatum corporis beatae impedit, molestias maxime obcaecati totam maiores eius voluptate ex animi minus
          aperiam!
        </p>
      </Col>
    </Row>
    <br />
    <h4 className="goal_text text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem praesentium tenetur blanditiis repellendus
      facilis maiores ducimus cumque, nesciunt nulla non ad excepturi magni eveniet voluptatum numquam libero error
      mollitia.
    </h4>
  </Container>
)

export default Summary
