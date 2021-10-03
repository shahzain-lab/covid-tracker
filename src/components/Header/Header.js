import { Typography } from '@mui/material'
import React from 'react';
import Button from '@mui/material/Button';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import styles from  './Header.module.css';


function Header() {
    return (
        <div className={styles.header}>
            <Typography variant="h2" color="white" ><span className={styles.mainHeading}>Covid-19</span> Tracker App</Typography>
            <Typography variant="h6" color="white" style={{marginLeft: '3%',letterSpacing: '2px', }}> See the Realtime Worldwide <span className={styles.mainHeading}>Covid-19</span> situation!</Typography> 
            <ul className={styles.list}>
                <li>Wear a mask</li>
                <li>Clean your hands</li>
                <li>Keep a safe distance</li>
                </ul>
           <Button variant="contained" style={{backgroundColor: '#7b1fa2', marginLeft: '5%'}}>Help Center <ArrowRightAltIcon/></Button>

        </div>
    )
}

export default Header
