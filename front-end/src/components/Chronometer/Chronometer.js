import React, {useState, useEffect} from 'react'
import "./Chronometer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chronometer: {
      color: "white"
  }
});

export default function Chronometer({changeTime, clockWorking}) {
    const classes = useStyles()
    const[time,setTime] = useState(0)

useEffect(() => {
    
    changeTime(time)
    // eslint-disable-next-line
}, [time])

if(clockWorking){
setTimeout(()=> {
  setTime(time + 1)
}, 100)
}

    
    return (
        <h1 className={classes.Chronometer} color="white">
            {Math.floor(time / 600)}:{Math.floor(time / 10) % 60}:{time % 10}
        </h1>
    )
}
