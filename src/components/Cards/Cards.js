import React from 'react'
import {Card,CardContent,Grid,Typography} from "@material-ui/core"
import cx from 'classnames'
import styles from './Cards.module.css';
import CountUp from 'react-countup'


function Cards ({data: {confirmed,recovered,deaths,lastUpdate}}) {
  
  if(!confirmed){
    return "loading..."
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center"> 
      <Grid item component={Card}  className={cx(styles.card,styles.infected)}>
        <CardContent >
          <Typography color='textSecondary' gutterBottom>Infected</Typography>
          <Typography varient="h5">
            <CountUp 
              start={0}
              end={confirmed.value}
              duration="2.5s"
              separator=","
            />
            </Typography>
  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography varient="body2">Active Casses</Typography>
        </CardContent>

      </Grid>
      <Grid item component={Card}  className={cx(styles.card,styles.recovered)}>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>Recovered</Typography>
          <Typography varient="h5">
            <CountUp 
              start={0}
              end={recovered.value}
              duration="2.5s"
              separator=","
            />
            </Typography>
  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography varient="body2">number of recovered people</Typography>
        </CardContent>

      </Grid>
      <Grid item component={Card}  className={cx(styles.card,styles.deaths)}>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>Deaths</Typography>
          <Typography varient="h5">
            <CountUp 
              start={0}
              end={deaths.value}
              duration="2.5s"
              separator=","
            />
            </Typography>
  <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography varient="body2">number of deaths</Typography>
        </CardContent>

      </Grid>
      </Grid>
    </div>
  )
}
export default Cards;