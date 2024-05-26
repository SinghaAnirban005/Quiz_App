import React from 'react'
import { useState } from 'react'

function QuizApp() {

  const questions = ["What is the Capital of India ? ",
   "Powerhouse of Cell ?", 
   "Aureolin is a shade of what color?"]

  const answers = ["Delhi", "Mitochondria", "Yellow"]

  // const [count, setCount] = useState()
  const [points, setPoints] = useState(0)
  const [quesNo, setQuesNo] = useState(0)
  const [question, setQuestion] = useState(questions[quesNo])
  // const [answer, setAnswer] = useState(answers[quesNo])

  const totalQuestions = 3

  const options = {
    0 : ["Delhi", "West-Bengal", "Kerala"],
    1 : ["Mitochondria", "Abdomen", "Allele"],
    2 : ["Red", "Yellow", "Green"]
  }

  // const handleClick = (e) => {
  //   e.preventDefault()

  //   // if(quesNo === question.length - 1){
  //   //   alert('Finished')
  //   // }
  // }

  const handlePoints = (e) => {
    // e.preventDefault()
    
    console.log(quesNo);
    console.log(points);

    // if (quesNo === questions.length - 1) {
    //   console.log("Game Over");
    // }

    console.log(e.target.value)
    console.log(answers[quesNo]);
 
    if (e.target.value === answers[quesNo]){

        setPoints((data) => (data + 1))
    
    }

    // setQuesNo(quesNo + 1)
    // setQuestion(questions[quesNo + 1])
    if (quesNo < questions.length - 1) {

      const nextQuesNo = quesNo + 1

      setQuesNo(nextQuesNo)
      setQuestion(questions[nextQuesNo])

    } else {
      console.log("Game Over")
      // You might want to add more logic here to show final score or reset the game
    }
   
  }

  return (
    <div>
      <div>
        {question}
      </div>

      <div>

       {options[quesNo].map((data, index) => (
        <button key={index} value={data} onClick={handlePoints} >
          {data}
        </button>
       ))}

      </div>

      <div>
        <p>{points}</p>
      </div>

     
      
    </div>
  )
}

export default QuizApp
