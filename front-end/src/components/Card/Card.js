import React from 'react';
import {Link} from "react-router-dom"
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
  root: {
    width: "100vh",
    height: "55vh",
    background:"#FFB602"
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration:"none"
  },
  inactive: {
    background: '#C7FF30',
    width:"45vh",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: "#84B307",
    },
  },
  correct: {
    background: '#004CFF',
    width:"45vh",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: "#004CFF",
    },
  },
  fail: {
    background: '#FF1001',
    width:"45vh",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    '&:hover': {
      background: "#FF1001",
    }
  },
  question: {
    color: "#343F56",
    textSize: "24px"
  }
});



export default function MediaCard({ready, numberOfCurrentQuestion, nextQuestion, activateButtons}) {

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
  }

  const classes = useStyles();

  return (
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
      {data[numberOfCurrentQuestion].answers.map(answer => (
        
        <Grid item xs={6}>
        <Link to="/score" className={classes.link} onClick={e => disableLink(ready, e)}>
        <Button className={returnClass(answer)} onClick={()=> activateButtons(answer.id)}>{answer.text}</Button>
        </Link>
        </Grid>
      ))}
      </Grid>
      </CardActions>

    </Card>
    </div>
  );
}