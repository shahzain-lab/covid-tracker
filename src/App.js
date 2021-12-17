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

const Home= () => (
   <>
   <Header />
   <div className={styles.layout}>
   <Layout />
   </div>
   </>
)

const App = () => {
     return(
     <div className={styles.container}>
          <AppbarBox />
        <Routes>
               <Route path="/" element={<Home />} />
               <Route path=":slug" element={<CountryData />}/>
               {/* NOT FOUND */}
               <Route path="*" element={<PagenotFound />} />
       </Routes>
         <Footer />
      </div>
     )
 }

export default App;
