import React,{useEffect} from 'react';
import {FormControl,NativeSelect} from '@material-ui/core' ;
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';
import { useState } from 'react';


export const CountryPicker = ({handleCountryChange}) => {

  const [fetchedCountry , setFetchedCountry] = useState([])
  useEffect(() => {

    const fetchAPI = async () => {
       setFetchedCountry( await fetchCountries())
    }

    fetchAPI();

  },[setFetchedCountry]);
  return ( 
    <div>
      <FormControl className={styles.FormControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {fetchedCountry.map((country , i) => <option key = {i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </div>
  )
}
