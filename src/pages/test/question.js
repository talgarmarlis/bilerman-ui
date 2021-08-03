import React from 'react'

const Question = ({question, color}) => {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <div>
          <div className="h-100 pt-5 pb-5 text-center">
            <i className={`fe fe-alert-circle font-size-50 bg-${color}`} />
            <div>{question.user}</div>
          </div>
          <div className="d-flex mb-1">
            <div className="text-uppercase font-weight-bold text-dark mr-auto">{question.title}</div>
          </div>
          <div className="d-flex mb-2">
            <div className="text-gray-4">{question.message}</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Question
