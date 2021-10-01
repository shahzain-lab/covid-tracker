import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2';
import { GlobalData } from '../../../Model/Context'

function GlobalStatChart() {
    const { dailyData } = useContext(GlobalData);
    
    return (
        <div className="Chart__Container">
    {dailyData.length ? (
        <Line
        className="LineChart"
       data={{

        scaleFontColor: "#FFFFFF" ,
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
         options: { 
          
          scales: {
              yAxes: [{
                  ticks: {
                      fontColor: "green",
                      fontSize: 18,
                      stepSize: 1,
                      beginAtZero: true
                  }
              }],
              xAxes: [{
                  ticks: {
                      fontColor: "purple",
                      fontSize: 14,
                      stepSize: 1,
                      beginAtZero: true
                  }
              }]
          }
      }
       }}
       
    /> ) : null}
        </div>
    )
}

export default GlobalStatChart
