import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Button } from '@mui/material';
import CountryList from './CountryList';
import { Link } from 'react-router-dom';


const AppBarContainer = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.secondary.dark,
}))


function AppbarBox() {
    return (
        <Box sx={{ flexGrow: 1, }}>
          <AppBarContainer position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                  COVIDONA
              </Typography>
              <Link to="/">
              <Button variant="contained" sx={{mr: '5px'}} color="secondary"> Home</Button>
              </Link>
              {/* <LiveHelpIcon /> Help Center */}
              <CountryList />
            
            </Toolbar>
          </AppBarContainer>
        </Box>
      );
}

export default AppbarBox;
