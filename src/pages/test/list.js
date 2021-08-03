import React from 'react'
import Question from "./question";

const List = ({questions}) => {
  return (
    <div>
      <div className="row">
        {questions.map((question, index) => <div className="col-12"><Question question={question} color={index%2 === 0 ? "primary" : "info"} /></div>)}
      </div>
    </div>
  )
}

export default List
