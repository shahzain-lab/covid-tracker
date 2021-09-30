import React, { createContext, useEffect, useState } from "react";
import { fetchData, fetchDailyData } from './API';


export const GlobalData = createContext('');

export const GlobalProvider = ({children}) => {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([])

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
    
    return(
        <GlobalData.Provider value={{data, dailyData}}>
            {children}
        </GlobalData.Provider>
    )
}
