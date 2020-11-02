import axios from 'axios';

const api = 'https://covid19.mathdro.id/api';

export const fetchData =async (country) => { 
  let changeAbleApi = api;
  if(country) {
    changeAbleApi = `${api}/countries/${country}`
  }

  try {
    const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeAbleApi)
  return {confirmed,recovered,deaths,lastUpdate}

  } catch (error) {
    console.log(error)
  }
 }

export const fetchDailyData =async () => {
  try {
    const { data } = await axios.get(`${api}/daily`);
  const modifyData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }))
  return modifyData;
  } catch (error) {
    console.log(error)
  }
}

export const  fetchCountries =async () => {
  try {
    const {data:{ countries }} = await axios.get(`${api}/countries`);

    return countries.map((country) => country.name)
  } catch (error) {
    console.log(error)
  }

}