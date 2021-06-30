import React from 'react';
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import "./Home.css"



export default function Home({changeName, name}) {
 

  return (
    <div className="Home">
    <form  noValidate autoComplete="off">
      <TextField label="Standard" value={name} onChange={e => changeName(e.target.value)}/> <br/>
      <Link onClick={e => (!name ) ? e.preventDefault() : null} to={`/card`}>
        <button className={'button mt-20'} type="submit">Sign In</button>
      </Link>
      
    </form>
    </div>
  );
}