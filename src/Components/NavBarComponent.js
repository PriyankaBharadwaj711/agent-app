import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#292D38' }}>
        <Toolbar>
        <Box display='flex' flexGrow={1}>
            <img src={"https://employeeportal.cs.odu.edu/images/MAP_Logo.png"} className={classes.logo} alt="logo" />
        </Box>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">REPORTS</Button>
          <Button color="inherit">AGENT STATS</Button>
          <Button color="inherit">ADP</Button>
          <Button color="inherit">PIPKINS</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}