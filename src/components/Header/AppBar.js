import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Button } from '@mui/material';
import ModelCountry from './Model';


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
              <Button variant="contained" sx={{mr: '5px'}} color="secondary"><LiveHelpIcon /> Help Center </Button>
              <ModelCountry />
            
            </Toolbar>
          </AppBarContainer>
        </Box>
      );
}

export default AppbarBox;
