const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const Schema = mongoose.Schema
require("dotenv").config()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}
);

const resultSchema ={
  name: String,
  time: Number,
  score: Number
}

const resultadoTotal = new Schema(resultSchema)


const Result = mongoose.model("Result", resultadoTotal)

app.get("/result", (req,res) => {
    Result.find()
    .then((results)=> res.json(results))
    .catch((err) => res.status(400).json("Error: " +err))
})

app.post("/result", (req,res) => {
    const newResult = new Result({
        name: req.body.name,
        time: req.body.time,
        score: req.body.score
    })

    newResult.save()
    .then(result => console.log(result))
    .catch(err => res.status(400).json("Error" + err))
    
})

app.delete("/result/:id", (req, res) => {
  const id = req.params.id;

  Result.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  });
});

app.listen(processe.env.PORT || 5000, function(){
    console.log("server Running")
})