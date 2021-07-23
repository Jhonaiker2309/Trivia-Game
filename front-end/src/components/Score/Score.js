import { makeStyles } from '@material-ui/core/styles'
import Table from "./Table/Table.js"
import ButtonForPlayAgain from "./ButtonForPlayAgain/Button"
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "40vh",
    marginTop: "200vh"
  },
}));

export default function Score() {
    const classes = useStyles()

    return (
			<div>
				<Table />
				<ButtonForPlayAgain className={classes.root} />
			</div>
		);
}
