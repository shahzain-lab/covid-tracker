import React, { createContext, useEffect, useState } from "react";
import { fetchData, fetchDailyData, fetchCountries } from './API';


export const GlobalData = createContext('');

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [countryName, setCountryName] = useState([])

    useEffect(() => {
      const getFetchedData = async () => {
        const getData = await fetchData();
        setData(getData)
      }
      getFetchedData();
    }, []);

      useEffect(() => {
        const fetchedDailyData = async () => {
          const getData = await fetchDailyData();
          setDailyData(getData)
        }
        fetchedDailyData();
      }, []);

    
    useEffect(() => {
      const fetchedCountriesName = async () => {
        const getData = await fetchCountries();
        setCountryName(getData)
      }
      fetchedCountriesName();
    }, []);

    const handleCountry = (country) => {
      console.log(country)
    };
    
    return(
        <GlobalData.Provider value={{data, dailyData, countryName, handleCountry}}>
            {children}
        </GlobalData.Provider>
    )
}
