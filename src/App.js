import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { useState, useEffect } from "react";
import StatPage from './Components/StatPage';
import Tab from './Components/Tab';
import SimpleTabs from './Components/SampleTabs'
import ButtonAppBar from './Components/NavBarComponent'
import { Box, Card } from '@material-ui/core';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Home"
    }

  }
  setSelected = (tab) => { this.setState({ selected: tab }); }


  render() {
    return (
      <div className='App md-6'>
        {/* <SimpleTabs/> */}
        <ButtonAppBar />
        <Box m={5}>
          <Card>
            <SimpleTabs />
          </Card>
        </Box>

        {/* <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs> */}


      </div>


    );
  }
}


export default App;
