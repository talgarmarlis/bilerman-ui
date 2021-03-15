import React from 'react'

const Tags = () => {
  return (
    <div>
      <div className="font-size-24 font-weight-bold text-default mb-2">Trending tags</div>
      <div className="card bg-light border-0">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center">
            <div className="font-size-21 font-weight-bold text-primary mr-3">Creativity</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Podcasts</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">Space</div>
            <div className="font-size-21 font-weight-bold text-primary mr-3">
              Artificial Intelligence
            </div>
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

export default Tags
