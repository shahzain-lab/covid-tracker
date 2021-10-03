import React from 'react';
import styles  from './App.module.css';
import { AppbarBox, CountryData, Header, Layout } from './components'
import Footer from './components/Footer/Footer';

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
               <Route path="/country/:slug" element={<CountryData />}/>
               {/* NOT FOUND */}
               <Route path="*" element={<PagenotFound />} />
               <Route path="/country/:*" element={<PagenotFound />} />
       </Routes>
          </div>
         <Footer />
      </div>
     )
 }

export default App;
