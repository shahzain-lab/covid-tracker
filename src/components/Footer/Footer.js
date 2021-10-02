import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    const date = new Date().getFullYear(); 

    return (
        <div className={styles.container}>
            <div className={styles.vl}>
            <h2>COVIDONA</h2>
            <p>Copyrights {date}&copy;</p>
            </div>
            <div className={styles.links}>
                <a href="https://github.com/shahzain-lab" target="_blank" rel="noreferrer">@Github</a>
                <a href="https://www.linkedin.com/in/syed-zainulabideen009900" target="_blank" rel="noreferrer">@LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer
