import React from 'react'
import { useState } from 'react'

function QuizApp() {

  const questions = ["What is the Capital of India ? ",
   "Powerhouse of Cell ?", 
   "Aureolin is a shade of what color ?"]

  const answers = ["Delhi", "Mitochondria", "Yellow", ]

  const [points, setPoints] = useState(0)
  const [quesNo, setQuesNo] = useState(0)

  const [question, setQuestion] = useState(questions[quesNo])
 
  // const [answer, setAnswer] = useState(answers[quesNo])

  const totalQuestions = 3
  const [header, setHeader] = useState(`Question ${quesNo + 1} out of ${totalQuestions} remaining`)

  const options = {
    0 : ["Delhi", "West-Bengal", "Kerala"],
    1 : ["Mitochondria", "Abdomen", "Allele"],
    2 : ["Red", "Yellow", "Green"],
    // 3 : ["Thanks for Playing"]
  }


  const [status1, setStatus1] = useState("flex")
  const [status2, setStatus2] = useState("flex-col")


  const handlePoints = (e) => {
    // e.preventDefault()
    
    console.log(quesNo);
    console.log(points);


    console.log(e.target.value)
    console.log(answers[quesNo]);
 
    if (e.target.value === answers[quesNo]) {

        setPoints((data) => (data + 1))
    
    }

    // setQuesNo(quesNo + 1)
    // setQuestion(questions[quesNo + 1])
    if (quesNo < questions.length - 1) {

      const nextQuesNo = quesNo + 1

      setQuesNo(nextQuesNo)
      setQuestion(questions[nextQuesNo])
     
      setHeader(`Question ${nextQuesNo + 1} out of ${totalQuestions} remaining`)
      dis = "flex"

    } else {
      // console.log("Game Over")
      // setQuestion("Game Over")
      setHeader("Congratulations 🎉 !! Your Quiz is Over")
      // setQuestion(`Your Score are as follows ${points}`)
       //Here slight changes to reflet the state of points correctly..
      setQuestion(`Your Score is ${points + (e.target.value === answers[quesNo] ? 1 : 0)} out of ${totalQuestions}`);
      setStatus1("hidden")
      setStatus2("hidden")
    }
   
  }

  return (
    <div className='flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] justify-center'>

    <div className="flex h-100vh items-center justify-center">
      <h1 className='text-white font-mono font-bold text-6xl mt-10'>QUIZ</h1>
    </div>

    <div className='flex items-center justify-center mt-10'>
        <h2 className='text-black font-bold text-2xl'>{header}</h2>
    </div>

      <div className='flex items-center justify-center'>
        <h2 className='text-white font-mono text-xl font-bold mt-5'>{question}</h2>
      </div>

      <div className= {`${status1} ${status2} justify-center items-center mt-5`}>
       {options[quesNo].map((data, index) => (   
         <button className="text-black font-serif border-2 h-10 border-white m-2 w-60 hover:bg-gradient-to-r from-indigo-500 " key={index} value={data} onClick={handlePoints} >
          {data}
        </button>

       ))}

      </div>
{/* 
     <div>
      <p>{points}</p>
     </div>
       */}
    </div>
  )
}

export default QuizApp
// The state of points wasnt updating immediately because of asynchronus nature of JS Hence we could use the useEffect hook 

//quiz-app-snowy-rho.vercel.app --> Link to application deployed on vercel