import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Game.css"

const useStyles = makeStyles({
  active: {
    background: '#F54748',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  inactive: {
    background: '#FB9300',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  question: {
    color: "#343F56"
  }
});

export default function Game({data, changeStateOfButtons}) {
    const classes = useStyles()
    return (
        <div>
            {data.map((datum,i) => (
            <div>
            <h1 key={i} className={classes.question}>{datum.question}</h1>
            {datum.answers.map((answer, j) => (
            <Button key={j} variant="contained" className={`${answer.isActive ? classes.active : classes.inactive}`} onClick={()=> changeStateOfButtons(datum.id, answer.id) }>
             {answer.text}
             </Button>))}
            </div>))}

        <Link onClick={e => (!10) ? e.preventDefault() : null} to={`/game`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
        </div>
    )
}


