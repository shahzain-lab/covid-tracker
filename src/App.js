import React from 'react';
import {fetchData} from './api';
import styles  from './App.module.css';
import {Cards,Chart,CountryPicker} from './components';
import Header from './components/Header'


class App extends React.Component{

  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData})
  }

  handleCountryChange =async (country) => {

    const fetchedData = await fetchData(country); 

    this.setState({data : fetchedData, country:country})
  }

  render() {
    const { data,country } = this.state
    return(
    <div className={styles.container}>
      <Header />
    <Cards data={data}/>
    <CountryPicker handleCountryChange={this.handleCountryChange}/>
    {/* <Chart data={data} country={country}/> */}
    </div>
    )
  }
}

export default App;