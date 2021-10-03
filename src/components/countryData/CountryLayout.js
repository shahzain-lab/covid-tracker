import { Typography } from '@mui/material';
import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { GlobalData } from '../../Model/Context'
import Progress from '../layout/Progress';
import styles from './countryLayout.module.css'
import CountryStatBar from './CountryStatBar';
import CardStat from './CurrentStat';

function CountryData() {
    const {countryData } = useContext(GlobalData);
    const {slug} = useParams()
    if(!countryData){return <Progress />}

    return (
        <div className={styles.container}>
          <Typography variant="h4" style={{paddingBottom: '5%', textAlign: 'center', color: 'white'}} >Current state in {slug}</Typography>
          <CardStat />
          <CountryStatBar />
        </div>
    )
}

export default CountryData
