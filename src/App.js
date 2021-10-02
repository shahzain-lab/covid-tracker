import React from 'react';
import styles  from './App.module.css';
import { AppbarBox } from './components'
import CountryData from './components/countryData/CountryLayout';


const App = () => {
     return(
     <div className={styles.container}>
       <AppbarBox />
       {/* <Header /> */}
       <div className={styles.layout}>
       <CountryData />
       {/* <Layout /> */}
       </div>
       {/* <Footer /> */}
       </div>
     )
 }

export default App;
