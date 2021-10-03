import React, { useContext } from 'react';
import { GlobalData } from '../../Model/Context';
import Progress from '../layout/Progress';

//nativeSelect
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function CountryList() {

  const {countryNames, getCountry} = useContext(GlobalData);
 

  return (
      <div>
      <FormControl sx={{ width: 200 , border: 'none', borderRadius: '6px'}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{color: 'white', fontSize: 'bold'}} >Search</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          defaultValue=''
          onChange={(e) => {
              getCountry(e.target.value)
            }}
          style={{color: 'white', fontSize: 'bold'}} 
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {countryNames.length ? countryNames.map((name, i) => (
            <MenuItem
              key={i}
              value={name}
            >
              <Link to={`/country/${name}`}>{name}</Link>
            </MenuItem>
          )): <Progress />}
        </Select>
      </FormControl>

    </div>
  );
}
