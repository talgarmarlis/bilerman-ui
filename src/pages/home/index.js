import React from 'react'
import Banner from "./banner";
import Latest from "./latest";
import Topics from "./topics";
import Tags from "./tags";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="row">
        <div className="col-xl-7 col-lg-12">
          <Latest />
        </div>
        <div className="col-xl-5 col-lg-12">
          <Topics />
          <Tags />
        </div>
      </div>
    </div>
  )
}

export default Home
