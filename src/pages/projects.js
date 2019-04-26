import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout/Layout'
import MyJumbo from '../components/myJumbo/MyJumbo'
import ProjectCard from '../components/portProjectCard/ProjectCard'

import './index.css'

import projectData from '../data/projects.json'

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

const projects = () => (
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
        {projectData.map(project => (
          <Row>
            <Col>
              <ProjectCard
                imageSrcPath={project.img}
                title={project.title}
                date={project.date}
                description={project.decription}
                sourceURL={project.sourceURL}
                hostedURL={project.hostedURL}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </Layout>
  </div>
)
export default projects
