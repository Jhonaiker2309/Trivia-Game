import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { compose } from "lodash/fp";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#03254c",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const queryClient = new QueryClient();

 export default function App() {
		return (
			<QueryClientProvider client={queryClient}>
				<TableOfData />
			</QueryClientProvider>
		);
 }

 function TableOfData() {
     const orderByTime = (arrayOfArrays) => {
				let fixedData = arrayOfArrays.map((array) => {
					let newArray = array.sort(function (a, b) {
						return a.time - b.time;
					});
					return newArray;
				});
				return fixedData;
			};

			const concatArray = (arrayOfArrays) => {
				let arrayReady = arrayOfArrays.reduce(function (a, b) {
					return a.concat(b);
				});
				return arrayReady;
			};

			const buildLets = (arrayOfData) => {
				let array = [[], [], [], [], [], [], [], [], [], [], []];
				for (let i = 0; i < arrayOfData.length; i++) {
					let element = arrayOfData[i];
					let scoreOfElement = element.score;
					array[scoreOfElement].push(element);
				}
				return array.reverse();
			};

			const orderData = (data) => {
				let newArray = [];
				for (let i = 0; i < 11; i++) {
					data.forEach((element) => {
						if (element.score === i) {
							newArray.push(element);
						}
					});
				}
				return newArray;
			};

			const composeOfFunctions = compose(
				concatArray,
				orderByTime,
				buildLets,
				orderData,
			);
  const classes = useStyles();
  
        
	let { isLoading, error, data } = useQuery("result", () =>
		fetch(process.env.REACT_APP_BACK_END).then((res) =>
			res.json(),
			),
		);



			if (isLoading) return "Loading...";

			if (error) return "An error has occurred: " + error.message;
			console.log(data);
 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nro</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {composeOfFunctions(data).slice(0,10).map((element, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="center">
                {i + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{element.name}</StyledTableCell>
              <StyledTableCell align="center">{element.score}</StyledTableCell>
              <StyledTableCell align="center">{Math.floor(element.time / 600)}:{Math.floor(element.time / 10) % 60}:{element.time % 10}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}