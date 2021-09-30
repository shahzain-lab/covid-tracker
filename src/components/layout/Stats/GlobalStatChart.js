import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2';
import { GlobalData } from '../../../Model/Context'

function GlobalStatChart() {
    const { dailyData } = useContext(GlobalData);
    console.log(dailyData, 'con')
    return (
        <div>
    {dailyData.length ? (
        <Line
       data={{
         labels: dailyData.map(({ date }) => date),
         datasets: [{
           data: dailyData.map(({confirmed}) => confirmed),
           label: 'Infected',
           borderColor: "#3333ff",
           fill: true,
         } , {
          data: dailyData.map(({deaths}) => deaths),
          label: 'Deaths',
          borderColor: "red",
          backgroundColor: "rgba(255,0,0,0.5)",
          fill: true,
         }],
       }}
    /> ) : console.log("not")}
        </div>
    )
}

export default GlobalStatChart
