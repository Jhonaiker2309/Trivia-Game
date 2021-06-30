import React from 'react'
import Chronometer from "../../components/Chronometer/Chronometer"
import Card from "../../components/Card/Card"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: "180vh",
}});

export default function FullCard({changeTime, ready, activateButtons,nextQuestion,numberOfCurrentQuestion}) {
    const classes = useStyles()
    return (
        <div>
        <div className={classes.root}>
        <Chronometer changeTime={changeTime} />
        </div>
        <Card ready ={ready} activateButtons ={activateButtons} nextQuestion={nextQuestion} numberOfCurrentQuestion={numberOfCurrentQuestion}/>
        </div>
    )
}
