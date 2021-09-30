import React from 'react';
import styles  from './App.module.css';
import { AppbarBox, Header, Layout } from './components'


const App = () => {
     return(
     <div className={styles.container}>
       <AppbarBox />
       <Header />
       <div className={styles.layout}>
       <Layout />
       </div>
       </div>
     )
 }

export default App;
