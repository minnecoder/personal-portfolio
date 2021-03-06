import React from 'react'
import Layout from '../components/layout/Layout'

import Hero from '../components/hero/Hero'
import Summary from '../components/summary/Summary'

// import bootstrap styles
import '../bootstrap/css/bootstrap.min.css'

// import my custom styles
import './index.css'

const index = () => (
  <div className="App">
    <Layout>
      <Hero />
      <hr />
      <Summary />
      <hr />
    </Layout>
  </div>
)
export default index
