import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import WeatherInformation from './components/WeatherInformation'
import Typography from '@material-ui/core/Typography'

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Grid, Button} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const Footer = (props) => {
  return (
    <div>
      <footer className={props.className}>
        <Typography variant="h6" align="center" gutterBottom>
          Victorious Solutions Ltd
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          This is a simple demonstration of ReactJS website that queries Express server
        </Typography>
      </footer>
    </div>
  )
}

function App(props) {
  
  const classes = useStyles();

  const dispatch = useDispatch();
  const pressure = useSelector( state => state.pressure);
  const { enqueueSnackbar } = useSnackbar();
  
  const dispatchData = (data) => {
    console.log(data);
    console.log('enter')
    dispatch({type: 'REFRESH', payload: data});
    console.log('leave')
  }

  const getData = () => {
       fetch("http://212.47.238.125:8081/readWeather")
      .then(resp => resp.json())
      .then(data => dispatchData(data))
      .catch(error =>  enqueueSnackbar('Problem when trying to fetch data', {variant : 'error'}));
  };

  useEffect(() => {
     getData();
     setInterval(getData.bind(this), 30000)
  });


  return (

    <div className="App">
      <NavBar />

      <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
              Radko's apartment data fetcher
            </Typography>
            <Typography variant="h7" align="center" color="textSecondary" paragraph>

               This website communicates with Node.js server that is a web scrapper of <a href="https://sparon.one.pl/">https://sparon.one.pl/</a>.
               The above website refreshes its data every minute. The current website does it every 30 seconds. If you'd like to get the latest results,
                click the button below.

            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={ () => getData() }>
                    Get latest weather data
                  </Button>
                  
                </Grid>

              </Grid>
              
            </div>
          </Container>
        </div>

      { pressure == null? (null) : (<WeatherInformation/>)}

      <Footer  className={classes.footer} />
    </div>

  );

}

export default App;