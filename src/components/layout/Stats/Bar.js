
import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Bar.module.css';



function BarContainer () {
  
  // const {confirmed, recovered, deaths} = useContext(GlobalData)
  // if(!confirmed){
  //   return null
  // }

  return (
    <div className={styles.container}>
    <Card sx={{ maxWidth: 250, ml: 5 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 250, ml: 5 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 250, ml: 5 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>

       {/* <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
          
        }}
        options={{
          scales: {
            xAxes: [{
              gridLines: {
                color: '#101020'
              }
            }],
            yAxes: [{
              gridLines: {
                color: '#101020'
              }
            }]
          },
          responsive: true,
          legend: { display: false },
        
        }}
      /> */}
     
    </div>
  )
}
export default BarContainer;