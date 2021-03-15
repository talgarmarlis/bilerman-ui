import React from 'react'
import Banner from './banner'
import Latest from './latest'
import Topics from './topics'
import Tags from './tags'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <Latest />
        </div>
        <div className="d-none col-lg-5 col-md-12">
          <Topics />
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default Home
