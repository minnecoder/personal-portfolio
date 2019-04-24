import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

export default () => (
    <div className="App">
    <Layout>
    <MyJumbo
        body={
          "Here are a collection of all of my blog posts"
        }
        title={"Blog"}
      />
<Container>
    <Row>
        <Col>
        <h2>Blog Posts</h2>
        </Col>
    </Row>
    <Row>
        <Col>
        <div className="blog-entry">
        <h4>Blog Title</h4>
        <h5>Date</h5>
        <p>.... This is where the text for the blog excerpt will go....</p>
        
        </div>
        </Col>
    </Row>
</Container>






    </Layout>
    </div>
)