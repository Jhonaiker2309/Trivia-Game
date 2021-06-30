
import React, { Component } from "react";
import data from "./data/data"
import Score from "./components/Score/Score"
import FullCard from "./components/FullCard/FullCard"
import Game from "./components/Game/Game"
import Home from "./components/Home/Home"
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";


export default class App extends Component {
  state = {
    name: "",
    data:[],
    score:0,
    numberOfCurrentQuestion: 0,
    ready: false,
    time:0
  }

    componentDidMount (){
    let currentQuestion =   data[0]
    this.setState({data, currentQuestion})

  }

  changeName = (e) => {
    this.setState({name: e})
  }


  changeStateOfButtons = (idOfQuestion, idOfAnswer) => {
    let data = this.state.data
    let questionOfArray = data.find(question => question.id === idOfQuestion)
    let positionOfQuestionInArray = data.indexOf(questionOfArray)
    let answers = questionOfArray.answers
    let AnswersAfterChanges = answers.map(answer => {
      if(answer.id === idOfAnswer){
        answer.isActive = true
      } else {
        answer.isActive = false
      }
      return answer
    })

    questionOfArray.answers = AnswersAfterChanges
    
    data[positionOfQuestionInArray] = questionOfArray

    this.setState({data})
    this.changeNumberOfActives()

  }

  nextQuestion = () => {
    let numberOfCurrentQuestion = this.state.numberOfCurrentQuestion   
    numberOfCurrentQuestion++
    this.setState({numberOfCurrentQuestion})    
  }

  goToTheOtherPage = () => {
    window.location.href = "http://localhost:3000/card"
  }

  activateButtons = (idOfAnswer) => {
    let data = this.state.data
    let numberOfCurrentQuestion = this.state.numberOfCurrentQuestion
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

  this.setState({data})
  setTimeout(() => {
    this.nextQuestion()
  }, 600);
  
    this.getResultOfGame()

  
  if(this.state.numberOfCurrentQuestion === 8){
    this.setState({ready : true})
  }
  }

  getResultOfGame =  () => {
     let score = 0
     let data = this.state.data
     let allAnswers = data.map(question => {
      return question.answers
    })
    
    for(let i = 0; i < allAnswers.length; i++){
     // eslint-disable-next-line 
      allAnswers[i].forEach(answer => {
        if(answer.isTrue === true && answer.isSelected === true){          
          score++
        }
      })
    }
    this.setState({score})
    console.log(this.state.score)
  }

  changeTime = (time) => {
    this.setState({time})
    console.log(this.state.time)   
  }


  render() {
    return (
      <div>
            <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home changeName={this.changeName} name={this.state.name}/>
          </Route>
          <Route path="/card">
            <FullCard changeTime ={this.changeTime} ready = {this.state.ready} activateButtons = {this.activateButtons}  nextQuestion={this.nextQuestion} numberOfCurrentQuestion={this.state.numberOfCurrentQuestion}/>
          </Route>
          <Route path="/score">
            <Score score={this.state.score} />
          </Route>
          <Route path="/game">
            <Game data={this.state.data} changeStateOfButtons={this.changeStateOfButtons}/>
          </Route>


        </Switch>
      </div>
    </Router>
      </div>
    )
  }
}