import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout/Layout'
import MyJumbo from '../components/myJumbo/MyJumbo'
import MyButton from '../components/myButton/MyButton'

import '../fontawesome/css/all.min.css'
import './index.css'

const BlogPage = ({ data }) => (
  <div className="App">
    <Layout>
      <MyJumbo body="Here are a collection of all of my blog posts" title="Blog" />
      <Container>
        <Row>
          <Col>
            <h2>Blog Posts</h2>
          </Col>
        </Row>
        {data.allMarkdownRemark.edges.map(blog => (
          <Row>
            <Col>
              <div className="blog-entry" key={blog.node.id}>
                <h4>
                  <Link to={blog.node.frontmatter.path}>{blog.node.frontmatter.title}</Link>
                </h4>
                <h5>{blog.node.frontmatter.date}</h5>
                <div dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </Layout>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          html
          id
          excerpt(pruneLength: 500)
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
export default BlogPage
