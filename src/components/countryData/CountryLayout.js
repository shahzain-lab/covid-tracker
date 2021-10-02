import { Typography } from '@mui/material';
import React, { useContext } from 'react'
import { GlobalData } from '../../Model/Context'
import Progress from '../layout/Progress';
import styles from './countryLayout.module.css'
import CountryStatBar from './CountryStatBar';
import CardStat from './CurrentStat';

function CountryData() {
    const {countryData,name } = useContext(GlobalData);
    if(!countryData){return <Progress />}

    return (
        <div className={styles.container}>
          <Typography variant="h4" style={{paddingBottom: '5%', textAlign: 'center', color: 'white'}} >Current state in {name}</Typography>
          <CardStat />
          <CountryStatBar />
        </div>
    )
}

export default CountryData
