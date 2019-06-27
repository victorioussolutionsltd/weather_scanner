import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';

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


  const temperature = useSelector( state => state.temperature );
  const pressure = useSelector( state => state.pressure);

  return (

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Temperature in the room (°C)</TableCell>
            <TableCell align="right">Temperature outside (°C)</TableCell>
            <TableCell align="right">Pressure (hPa)</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="right">{temperature.inside}</TableCell>
              <TableCell align="right">{temperature.outside}</TableCell>
              <TableCell align="right">{pressure}</TableCell>
              <TableCell align="right">{new Date().toLocaleTimeString()}</TableCell>
              <TableCell align="right">{new Date().toDateString()}</TableCell>
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
