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
    console.log(err)
  }
  
}