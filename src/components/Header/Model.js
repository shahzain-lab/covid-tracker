import React, { useContext } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { GlobalData } from '../../Model/Context';
import Progress from '../layout/Progress';

//nativeSelect
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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


export default function ModelCountry() {

  const {countryName, handleCountry} = useContext(GlobalData);

  if(!countryName.length) <Progress />

  const [country, setCountry] = React.useState([]);

  

  return (
      <div>
      <FormControl sx={{ width: 200 , border: 'none', borderRadius: '6px'}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{color: 'white', fontSize: 'bold'}} >Search</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={country}
          onChange={(e) => {
              handleCountry(e.target.value)
              setCountry(e.target.value)
            }}
          style={{color: 'white', fontSize: 'bold'}} 
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {countryName.map((name, i) => (
            <MenuItem
              key={i}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  );
}
