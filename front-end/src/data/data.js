const originalData = [{question:"Which one of these characters is not friends with Harry Potter?",
      answers: [{id: 0, isTrue: true, text:"Draco Malfoy", isActive: false, isSelected: false},
     {id:1, isTrue: false, text:"Ron Weasley", isActive: false, isSelected: false},
    {id: 2, isTrue: false, text:"Neville Longbottom", isActive: false, isSelected: false},
    {id: 3, isTrue: false, text:"Hermione Granger", isActive: false, isSelected: false}]},

      {question:"What is the color of Donald Duck’s bowtie?",
    answers:[ {id:0, isTrue: true, text:"Red", isActive: false, isSelected: false},
        {id:1, isTrue: false, text:"Yellow", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Blue", isActive: false, isSelected: false},
      {id: 3, isTrue: false, text:"White", isActive: false, isSelected: false}]},

      {question:"Which animal does not appear in the Chinese zodiac?",
      answers: [ {id: 0, isTrue: true, text:"Hummingbird", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Rabbit", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Dog", isActive: false, isSelected: false},
      {id: 3, isTrue: false, text:"Dragon", isActive: false, isSelected: false}]},

      {question:"Which country held the 2016 Summer Olympics?",
      answers: [{id: 0, isTrue: true, text:"Brasil", isActive: false, isSelected: false},
     {id:1, isTrue: false, text:"China", isActive: false, isSelected: false},
     {id: 2, isTrue: false, text:"Ireland", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Italy", isActive: false, isSelected: false}]},

      {question:"Which planet is the hottest?",
      answers: [{id: 0, isTrue: true, text:"Venus", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Saturn", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Mercury", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Mars", isActive: false, isSelected: false}]},

      {question:"Who was the only U.S. President to resign?",
      answers: [ {id: 0, isTrue: true, text:"Richard Nixon", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Herbert Hoover", isActive: false, isSelected: false},
     {id: 2, isTrue: false, text:"George W. Bush", isActive: false, isSelected: false},
      {id: 3, isTrue: false, text:"Barack Obama", isActive: false, isSelected: false}]},

      {question:"In Pirates of the Caribbean, what was Captain Jack Sparrow’s ship’s name?",
      answers: [{id: 0, isTrue: true, text:"The Black Pearl", isActive: false, isSelected: false},
     {id:1, isTrue: false, text:"The Black Python", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"The Slytherin", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"The Marauder", isActive: false, isSelected: false}]},

      {question:"According to Forrest Gump, “life was like…”",
      answers: [{id: 0, isTrue: true, text:"A box of chocolates", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"A lollipop", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"A bag of lemons", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"A handful of roses", isActive: false, isSelected: false}]},

      {question:"Which U.S. state is known as the sunflower state?",
      answers: [ {id: 0, isTrue: true, text:"Kansas", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Maine", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Florida", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"California", isActive: false, isSelected: false}]},

      {question:"Which one of these characters isn’t a part of the Friends group?",
      answers: [ {id: 0, isTrue: true, text:"Gunther", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Rachel", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Joey", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Monica", isActive: false, isSelected: false}]},

      {question:"How many bones are there in the human body?",
      answers: [ {id: 0, isTrue: true, text:"206", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"205", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"200", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"203", isActive: false, isSelected: false}]},

      {question:"Fe is the chemical symbol for…",
      answers: [ {id: 0, isTrue: true, text:"Iron", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Fluorine", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Hydrogen", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Zinc", isActive: false, isSelected: false}]},

      {question:"Which planet in our solar system is the largest?",
      answers: [ {id: 0, isTrue: true, text:"Jupiter", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Saturn", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Neptune", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Earth", isActive: false, isSelected: false}]},

      {question:"Which country gifted the Statue of Liberty to the U.S.?",
      answers: [ {id: 0, isTrue: true, text:"France", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Germany", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"China", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Italy", isActive: false, isSelected: false}]},

      {question:"Who painted the Mona Lisa?",
      answers: [ {id: 0, isTrue: true, text:"da Vinci", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Van Gogh", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Picasso", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Monet", isActive: false, isSelected: false}]},

      {question:"What is Sodium Chloride?",
      answers: [ {id: 0, isTrue: true, text:"Salt", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Sugar", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Chlorine", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Bleach", isActive: false, isSelected: false}]},

      {question:"Which astrological sign is a crab?",
      answers: [ {id: 0, isTrue: true, text:"Cancer", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Pisces", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Aquarius", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Virgo", isActive: false, isSelected: false}]},

      {question:"Who, in the Harry Potter series, is Tom Riddle?",
      answers: [ {id: 0, isTrue: true, text:"Voldemort", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Harry’s birth father", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"a professor at Hogwarts", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"a student in Harry’s class", isActive: false, isSelected: false}]},

      {question:"The movie The Social Network is about which social media platform:",
      answers: [ {id: 0, isTrue: true, text:"Facebook", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Myspace", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Instagram", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Twitter", isActive: false, isSelected: false}]},

      {question:"Who wrote the songs for The Lion King? ",
      answers: [ {id: 0, isTrue: true, text:"Elton John", isActive: false, isSelected: false},
      {id:1, isTrue: false, text:"Phil Collins", isActive: false, isSelected: false},
      {id: 2, isTrue: false, text:"Celine Dion", isActive: false, isSelected: false},
       {id: 3, isTrue: false, text:"Stevie Wonder", isActive: false, isSelected: false}]},
      ]

const data = (arrayOfQuestions) => {
  let newArray = []
  let randomNumber = 0
  let i = 0
  while(i < 10){
    randomNumber = Math.floor(Math.random() * 20)
    let randomQuestion = arrayOfQuestions[randomNumber] 
    if(!newArray.includes(randomQuestion)){
      newArray.push(randomQuestion)
      i++
    }
  }
  return newArray
}

 const disorderArray = array => {
   let newArray = []
   let sizeOfArray = array.length
   let i = 0
   while(i < sizeOfArray){
    let randomNumber = Math.floor(Math.random() * sizeOfArray)
    if(!newArray.includes(array[randomNumber])){
      newArray[i] = (array[randomNumber])
      i++
    }
   }
   return newArray
 }

 const arrayAfterAllChanges = array => {
   const fixedArray = array.map(element => {
     element.answers = disorderArray(element.answers)
     return element
   })
   return fixedArray
 }


const fixedData = data(originalData)
const shuffleData = arrayAfterAllChanges(fixedData)

export default shuffleData

