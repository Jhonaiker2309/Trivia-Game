import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import "./Home.css"

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "25%",
    marginTop: "2vh"
  },
}));


export default function Home({changeName, name}) {

  const classes = useStyles()
 

  return (
    <div className="Home">
    <form  noValidate autoComplete="off">
      <TextField label="User" value={name} onChange={e => changeName(e.target.value)}/> <br/>
      <Link onClick={e => (!name ) ? e.preventDefault() : null} to={`/card`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" className={classes.root}>
          Start
        </Button>
      </Link>
      
    </form>
    </div>
  );
}