import React from 'react';
import styles  from './App.module.css';
import { AppbarBox, Header, Layout } from './components'
import Footer from './components/Footer/Footer';


const App = () => {
     return(
     <div className={styles.container}>
       <AppbarBox />
       <Header />
       <div className={styles.layout}>
       {/* <CountryData /> */}
       <Layout />
       </div>
       <Footer />
       </div>
     )
 }

export default App;
