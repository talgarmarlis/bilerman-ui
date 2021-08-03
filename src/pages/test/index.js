import React, {useState} from 'react'
import List from "./list";
import QuestionForm from "./form";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  const add = (q) => {
    setQuestions([...questions, q]);
  }
  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <List questions={questions} />
        </div>
        <div className="col-sm-4">
          <QuestionForm addToList={add} />
        </div>
      </div>
    </div>
  )
}

export default Home
