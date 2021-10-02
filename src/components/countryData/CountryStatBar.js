import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalData } from '../../Model/Context';

function CountryStatBar() {
    const {countryData: {confirmed, recovered, deaths}} = useContext(GlobalData);
    if(!confirmed){return null}

    return (
        <div>
            <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
        </div>
    )
}

export default CountryStatBar
