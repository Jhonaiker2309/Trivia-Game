import React from 'react'
import Chronometer from "../../components/Chronometer/Chronometer"
import Card from "../../components/Card/Card"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: "#03254c",
    padding: "2vh",
    "& h1": {
        color: "white"
    },
    height: "100%"
},
  chronometer: {
      color: "white"
  }
});

export default function FullCard({clockWorking,result, url, changeTime, ready, activateButtons,nextQuestion,numberOfCurrentQuestion}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <Chronometer className={classes.chronometer} changeTime={changeTime} clockWorking={clockWorking} />
        <Card result={result} url={url} ready={ready} activateButtons ={activateButtons} nextQuestion={nextQuestion} numberOfCurrentQuestion={numberOfCurrentQuestion}/>
        </div>
    )
}
