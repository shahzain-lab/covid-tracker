import { Typography } from '@mui/material';
import React from 'react';
import GlobalStatContainer from './Stats/GlobalStatContainer';
import styles from './Layout.module.css';
import GlobalStatChart from './Stats/GlobalStatChart';

function Layout() {
    return (
        <div className={styles.container}>
            <Typography variant="h4" className={styles.statHeading}>The <span className={styles.mainHeading}>Covid-19</span> Global stats</Typography>
            <GlobalStatContainer />
            <GlobalStatChart />
        </div>
    )
}

export default Layout
