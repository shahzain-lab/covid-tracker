import React, { createContext, useEffect, useState } from "react";
import { fetchData, fetchDailyData, fetchCountriesName, fetchCountriesData } from './API';


export const GlobalData = createContext('');

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [countryNames, setCountryNames] = useState([]);
    const [countryData, setCountryData] = useState({});
    const [name, setName] = useState('')

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
        const getData = await fetchCountriesName();
        setCountryNames(getData)
      }
      fetchedCountriesName();
    }, []);



    const getCountry = (country) => {
        setName(country)
    };



    useEffect(() => {
      if(!name) return
      const fetchedCountriesData = async () => {
        const getData = await fetchCountriesData(name)
        setCountryData(getData);
      }
      fetchedCountriesData()
    }, [name]);

    
    return(
        <GlobalData.Provider value={{
          data,
          dailyData,
          countryNames,
          getCountry,
          countryData,
          name
            }}
            >
            {children}
        </GlobalData.Provider>
    )
}
