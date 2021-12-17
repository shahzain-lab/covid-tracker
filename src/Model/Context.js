import React, { createContext, useCallback, useEffect, useState } from "react";
import { fetchData, fetchDailyData, fetchCountriesName, fetchCountriesData } from './API';


export const GlobalData = createContext('');

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [countryNames, setCountryNames] = useState([]);
    const [countryData, setCountryData] = useState({});
    const [name, setName] = useState('')

    // for Global data
    useEffect(() => {
      const getFetchedData = async () => {
        const getData = await fetchData();
        setData(getData)
      }
      getFetchedData();
    }, []);



     // for Global data on daily basis
      useEffect(() => {
        const fetchedDailyData = async () => {
          const getData = await fetchDailyData();
          setDailyData(getData)
        }
        fetchedDailyData();
      }, []);



     // for returned countries name
    useEffect(() => {
      const fetchedCountriesName = async () => {
        const getData = await fetchCountriesName();
        setCountryNames(getData)
      }
      fetchedCountriesName();
    }, []);



    //getting country name
    const getCountry = useCallback((country) => {
        setName(country)
    }, []);


     // for  data using countryName
    useEffect(() => {
      if(!name) return
      const fetchedCountriesData = async () => {
        const getData = await fetchCountriesData(name);
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
