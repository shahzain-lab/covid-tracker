import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { GlobalData } from '../../Model/Context'
import Progress from '../layout/Progress';
import CountUp from 'react-countup';
import styles from './countryLayout.module.css';

export default function MultiActionAreaCard() {
  
    const {countryData: {confirmed, recovered, deaths, lastUpdate} } = useContext(GlobalData);
    if(!confirmed){return <Progress />}
 
    return (
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom:'5%'}}>
    <Card className={styles.conCard} sx={{ maxWidth: 300, minWidth: 200, background: 'none', color: 'white' }}>
      <CardActionArea>
      
         <Typography variant="h6" >
           Infected
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <CountUp
      start={0}
      end={confirmed.value}
      duration="2.5s"
      separator=","
    />
          </Typography>
          <Typography variant="body2" >
          {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" >
          Number of confirmed cases
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    <Card className={styles.recCard}  sx={{ maxWidth: 300,minWidth: 200, background: 'none', color: 'white'  }}>
      <CardActionArea>
       <Typography variant="h6" >
            Recovered
          </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <CountUp
      start={0}
      end={recovered.value}
      duration="2.5s"
      separator=","
    />
          </Typography>
          <Typography variant="body2" >
          {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" >
          Number of recovered cases
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    <Card className={styles.deathCard}  sx={{ maxWidth: 300, minWidth: 200, background: 'none', color: 'white'  }}>
      <CardActionArea>
       <Typography variant="h6" >
            Deaths
          </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <CountUp
      start={0}
      end={deaths.value}
      duration="2.5s"
      separator=","
    />
          </Typography>
          <Typography variant="body2" >
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" >
          Number of deaths
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
  );
}
