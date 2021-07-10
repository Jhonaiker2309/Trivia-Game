import React, {useState, useEffect} from 'react'
import dataImported from "./data/data"
import Score from "./components/Score/Score"
import FullCard from "./components/FullCard/FullCard"
import Home from "./components/Home/Home"
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom"

require("dotenv").config()

    

export default function App() {
    const url = process.env.URL;
    const [clockWorking, setClockWorking] = useState(true)
    const [name, setName] = useState("")
    const [data, setData] = useState(dataImported)
    const [score, setScore] = useState(0)
    const [numberOfCurrentQuestion, setNumberOfCurrentQuestion] = useState(0)
    const [ready, setReady] = useState(false)
    const [time, setTime] = useState(0)
    const [result, setResult] = useState({
      name: "",
      time: 0,
      score: 0,
      _id: ""
    })

    useEffect( () => {

        setResult({...result,name: name, time: time, score: score})
        // eslint-disable-next-line 
    }, [ name, score])


    const changeName = (e) => {
    setName(e)
  }


   const nextQuestion = () => {
    if(numberOfCurrentQuestion !== 9){
      setNumberOfCurrentQuestion(numberOfCurrentQuestion + 1)
    }
    else{
      setReady(true)
    }
  }



  const activateButtons =  (idOfAnswer, number) => {
    
    let currentQuestion = data[numberOfCurrentQuestion] 
    let answers = currentQuestion.answers
    let activeAnswers = answers.map(answer =>{
      if(answer.id === idOfAnswer){
        answer.isSelected = true
      }      
      answer.isActive = true
      return answer
    })
    currentQuestion.answers = activeAnswers
    data[currentQuestion] = currentQuestion

  setData(data)

  setTimeout(() => {
    nextQuestion()
  }, 600);
  
    getResultOfGame()
    if(numberOfCurrentQuestion === 9){
      setClockWorking(false)
    }

  }

  const getResultOfGame =  () => {
     let points = 0
     let allAnswers = data.map(question => {
      return question.answers
    })
    
    for(let i = 0; i < allAnswers.length; i++){
     // eslint-disable-next-line 
      allAnswers[i].forEach(answer => {
        if(answer.isTrue === true && answer.isSelected === true){          
          points++
        }
      })
    }
    setScore(points)
  }

  const changeTime = (time) => {
    setTime(time)
  }




 return (
        <div>
             <Router>
        <Switch>
          <Route exact path="/">
            <Home changeName={changeName} name={name}/>
          </Route>
          <Route path="/card">
            <FullCard clockWorking={clockWorking} result={result} url={url} changeTime ={changeTime} ready = {ready} activateButtons = {activateButtons}  nextQuestion={nextQuestion} numberOfCurrentQuestion={numberOfCurrentQuestion}/>
          </Route>
          <Route path="/score">
            <Score url={url} score={score}/>
          </Route>


        </Switch>
    </Router>
        </div>
    )

}
