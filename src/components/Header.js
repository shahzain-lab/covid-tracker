import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px 0",
    width: "100%",overflow:'hidden',
  },
  paper: {
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img:{
      width: '80%',height: '80%'
  },
  img1: {
      width: "230px",
      marginLeft: '170px'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={6}>
          <img className={classes.img}  src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-red-covid-19-bacteria-isolated-on-transparent-background-3d-rendering-of-png-image_5340587.jpg" alt="Covid-19" />
        </Grid>
        <Grid item xs={6}>
          <img className={classes.img1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKxL9kEdFRmKHm0V5X5kdEkaDruJgygfynlA&usqp=CAU" alt="icon"/>
          <h2 style={{textAlign:'center',color: '#707B7C '}}>We are in this together and will get through <br />this together</h2>
          <h4 style={{marginTop:'80px',textAlign:'center',color:'#7F8C8D',letterSpacing: '2px',lineHeight:'25px'}}>COVID-19 affects different people in different ways.<br /> Most infected people will develop mild to moderate <br /> illness and recover without hospitalization.
</h4>
        </Grid>
      
      </Grid>
    </div>
  );
}