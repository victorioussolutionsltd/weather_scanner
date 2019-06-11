import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minHeight: 200
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(room, outside, date, time) {
  id += 1;
  return { id, room, outside, date, time };
}

const rows = [
  createData(30, 25, new Date().toDateString(), new Date().toLocaleTimeString() ),

];

function WeatherInformation(props) {
  const { classes } = props;

  return (

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Temperature in the room</TableCell>
            <TableCell align="right">Temperature outside</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.room}</TableCell>
              <TableCell align="right">{row.outside}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
 
    
  );
}

WeatherInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherInformation);
