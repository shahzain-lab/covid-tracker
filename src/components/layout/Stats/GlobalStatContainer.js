import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

//custom CSS
import './style.css';
// dataProvider
import { GlobalData } from '../../../Model/Context';
import Progress from '../Progress';
import CountUp from 'react-countup';
import { Typography } from '@mui/material';


const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22, 
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0, 
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));


function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <BookmarkAddIcon />,
    2: <VerifiedUserIcon />,
    3: <TimelineIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


export default function GlobalStatContainer() {
 
    const {data: { confirmed, recovered, deaths, lastUpdate }} = useContext(GlobalData);
  if(!confirmed){
    return <Progress />
  }
   
  const confirmStat = (
    <>
    <Typography color='textSecondary' gutterBottom>Infected</Typography>
     <Typography varient="h5">
    <CountUp
      start={0}
      end={confirmed.value}
      duration="2.5s"
      separator=","
    />
    </Typography>
    </>
  )

  const recoveredStat = (
    <>
    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
     <Typography varient="h5">
    <CountUp
      start={0}
      end={recovered.value}
      duration="2.5s"
      separator=","
    />
    </Typography>
    </>
  )

  const deathsStat = (
    <>
    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
     <Typography varient="h5">
    <CountUp
      start={0}
      end={deaths.value}
      duration="2.5s"
      separator=","
    />
    </Typography>
    </>
  )

  const steps = [confirmStat, recoveredStat, deathsStat];

  return (
    <Stack sx={{ width: '100%', mt: 10}} spacing={4}>
      <Typography variant="h6" className="lastUpdate">Last update: <span style={{color: 'gray'}}> {new Date(lastUpdate).toDateString()}</span> </Typography>
      <Stepper alternativeLabel  activeStep={2} connector={<ColorlibConnector />}>
        {steps.map((label, i) => (
          <Step key={i} >
            <StepLabel StepIconComponent={ColorlibStepIcon} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
