import React from 'react'

const Topics = () => {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center">
        <div className="my-1 mr-3 font-size-32 flex-shrink-0">
          <i className="fe fe-activity" />
        </div>
        <div>
          <div className="font-size-24 font-weight-bold text-default">Hot topics</div>
        </div>
      </div>
      <div className="card bg-light border-0">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center">
            <div className="font-size-21 font-weight-bold text-primary mr-3">Creativity</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Podcasts</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Space</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Artificial Intelligence</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Book Excerpts</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Data Science</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">UX</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Books</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Javascript</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topics
