import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout/Layout'
import '../pages/index.css'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet title={`Sean Parkin - ${post.frontmatter.title}`} />
      <div className="blogPost">
        <Link to="/blog" className="linkButton">
          Back to Blogs
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>

        <div className="blogPostContent" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.object,
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
