import { useState } from 'react'
import QuizApp from './Components/QuizApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      
    <QuizApp />
     
    </div>
    </>
  )
}

export default App
