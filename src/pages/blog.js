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
        title={"Blog Posts"}
      />







    </Layout>
    </div>
)