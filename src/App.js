import React from 'react';
import styles  from './App.module.css';
import {
    AppbarBox,
    CountryData,
    Header,
    Layout,
    Footer 
   } from './components';

// react-router
import { Routes, Route } from 'react-router-dom';
import PagenotFound from './components/PagenotFound';


const App = () => {
     return(
     <div className={styles.container}>
          <AppbarBox />
           <Header />
           <div className={styles.layout}>
        <Routes>
               <Route path="/" element={<Layout />} />
               <Route path=":slug" element={<CountryData />}/>
               {/* NOT FOUND */}
               <Route path="*" element={<PagenotFound />} />
       </Routes>
          </div>
         <Footer />
      </div>
     )
 }

export default App;
