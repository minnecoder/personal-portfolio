import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout/Layout'
import MyJumbo from '../components/myJumbo/MyJumbo'
import ProjectCard from '../components/portProjectCard/ProjectCard'
import './index.css'

/* ######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

// TODO: Make this into an array with objects and map through them instead down below.
const projects = ({ data }) => {
  const images = data.allFile.edges
  const projectList = data.allProjectsJson.edges

  return (
    <div className="App">
      <Layout>
        {/* ########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
        <MyJumbo title="Projects Portfolio" body="I think the best way of learning is by building Stuff." />
        <hr />

        {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

        <Container style={{ marginTop: '2.5rem' }}>
          {/* /Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app */}

          {projectList.map(({ node }) => {
            const image = images.find(n => n.node.relativePath === `portfolio/${node.img}`)
            const imgSrc = image.node.childImageSharp.fluid.src
            return (
              <Row key={node.title}>
                <Col>
                  <ProjectCard
                    imageSrcPath={imgSrc}
                    title={node.title}
                    date={node.date}
                    description={node.decription}
                    sourceURL={node.sourceURL}
                    hostedURL={node.hostedURL}
                  />
                </Col>
              </Row>
            )
          })}
        </Container>
      </Layout>
    </div>
  )
}
export default projects

projects.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/portfolio/.*.(png|gif|jpeg|jpg)/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          img
          date
          decription
          sourceURL
          hostedURL
        }
      }
    }
  }
`
