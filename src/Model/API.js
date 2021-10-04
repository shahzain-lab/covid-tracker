import axios from 'axios';

const api = 'https://covid19.mathdro.id/api';


export const fetchData = async () => {
  try{
    const {data} = await axios.get(api);
    return data
  }catch(err) { 
    console.log(err.message);
  }
}

export const fetchDailyData = async () => {
  try{
const { data } = await axios.get(`${api}/daily`);
  const modifyData = data.map(dailyData => ({
    confirmed: dailyData.confirmed.total,
    recovered: dailyData.recovered.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }))
  return modifyData;
  }catch(err) {
    console.log(err.meassage)
  }
  
}


export const fetchCountriesName = async () => {
  try{
    const { data: {countries} } = await axios.get(`${api}/countries`);
    const getCountryName = countries.map(country => country.name)
    return getCountryName;
  }catch (err) {
    console.log(err.message)
  }
}

export const fetchCountriesData = async (country) => {
  try{
    const { data } = await axios.get(`${api}/countries/${country}`);
    return data
  } catch(err) {
    console.log(err.message)
  }
}

