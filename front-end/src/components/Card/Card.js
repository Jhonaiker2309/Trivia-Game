import React from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import data from "../../data/data"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./Card.css"

const useStyles = makeStyles({
  container: {
  background: "#1905a0"
  },
  root: {
    width: "100vh",
    height: "65vh",
    background:"white",
    
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration:"none"
  },
  inactive: {
    background: '#FFA900',
    width:"45vh",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: "#FF7600",
    },
  },
  correct: {
    background: '#79D70F',
    width:"45vh",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: "#79D70F",
    },
  },
  fail: {
    backgroundColor:"#D32626",
    width:"45vh",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    '&:hover': {
      background: "#D32626",
    }
  },
  question: {
    color: "#343F56",
    textSize: "24px"
  },
  button: {
    marginLeft: "40vh",
    marginTop: "1vh"
  }
});



export default function MediaCard({result, url,ready, numberOfCurrentQuestion, nextQuestion, activateButtons}) {

  const returnClass = (answer) => {
  if(answer.isActive && answer.isTrue){
    return classes.correct
  }
  else if(answer.isActive){
    return classes.fail
  }
  else {
    return classes.inactive
  }
}

  const disableLink = (ready, e) => {
    if(!ready){
      e.preventDefault()
    }
    else {
      axios.post(process.env.REACT_APP_BACK_END, result);
    }
  }

  const classes = useStyles();

  return (
    <div classes={classes.container}>
    <div className="container">
    
    <Card className={classes.root}>
      <CardActionArea>
          <Typography gutterBottom variant="h6" component="h2" align="center">
            {numberOfCurrentQuestion + 1}/10
          </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {data[numberOfCurrentQuestion].question}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={4}>
      {data[numberOfCurrentQuestion].answers.map((answer, i) => (
        
        <Grid item xs={6} key={i}>
        
        <Button className={returnClass(answer)} onClick={()=> activateButtons(answer.id, numberOfCurrentQuestion)}>{answer.text}</Button>

        </Grid>
      ))}
      </Grid>

      </CardActions>
      <Link to="/score" className={classes.link} onClick={e => disableLink(ready, e)}>
      <Button variant={ready ? "contained": "outlined"} color="primary" size="large" className={classes.button} >
        Enviar
      </Button>
      </Link>
        
    </Card>
    </div>
    </div>
  );
}