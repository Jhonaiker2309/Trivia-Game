import axios from "axios"
import {compose} from "lodash/fp"
import { makeStyles } from '@material-ui/core/styles'
import Table from "./Table/Table.js"
import ButtonForPlayAgain from "./Button/Button"
import React, {useEffect, useState} from 'react'
require("dotenv").config()

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "40vh",
    marginTop: "200vh"
  },
}));

export default function Score({score, url}) {
    const classes = useStyles()
console.log(url)
    const orderByTime = (arrayOfArrays) => {
        let fixedData = arrayOfArrays.map(array => {
            let newArray = array.sort(function(a,b){
                return a.time - b.time
            })
            return newArray
        })
        return fixedData
    }

    const concatArray = (arrayOfArrays) => {
      let arrayReady = arrayOfArrays.reduce(function(a,b){
          return a.concat(b)
      })
      return arrayReady
    }

    const buildLets = (arrayOfData) =>{
        let array = [[],[],[],[],[],[],[],[],[],[],[]]
        for(let i = 0; i < arrayOfData.length;i++){
            let element = arrayOfData[i]
            let scoreOfElement = element.score
            array[scoreOfElement].push(element)
        }
      return array.reverse()
    }

    const orderData =  (data) => {
        let newArray = []
         for(let i = 0; i < 11; i++){
            data.forEach(element => {
                if(element.score === i){
                   newArray.push(element)
                }
            });
        }
         return newArray
    }

    const composeOfFunctions = compose(concatArray, orderByTime, buildLets, orderData)
    
    const [data, setData] = useState([]) 

// eslint-disable-next-line
                 useEffect(async () => {
                     console.log(url)
                     console.log("epa")
                 await axios.get(process.env.url)
                .then(response => {
                    let dataOfMongoInOrder =  composeOfFunctions(response.data)
                    while(dataOfMongoInOrder.length > 10){
                        axios.delete(url, `/${dataOfMongoInOrder[10]._id}`)
                        dataOfMongoInOrder.pop()
                    }
                    setData(dataOfMongoInOrder)
       })
       .catch(err => console.log(err))   
       // eslint-disable-next-line 
    }, [])

    return (
        <div>
            <Table data={data}/>
            <ButtonForPlayAgain className={classes.root}/>
        </div>
    )
}
