import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "85vh",
    marginTop: "5vh"
  },
}));

export default function ButtonForPlayAgain() {
    const classes = useStyles()
    const playAgain = () => {
        window.location.href="http://localhost:3000"
    }
    return (
        <div>
        <Button variant="contained" color="primary" size="large" onClick={() => playAgain()} className={classes.root} justify = "center">
          Play Again
        </Button>
        </div>
    )
}
