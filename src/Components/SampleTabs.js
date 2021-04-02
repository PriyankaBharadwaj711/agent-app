import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CustomizedTables from './CustomizedTables';
import Box from '@material-ui/core/Box';
import AgentStatComponent from './AgentStatComponent';
import AdjustmentsComponent from './AdjustmentsComponent';



const tabStyle = {
  default_tab:{
      color: '#2196f3',
      width: '33.3%',
      backgroundColor: '#FFFFFF',
      fontSize: 15
  },
  active_tab:{
      color: '#2196f3',
      width: '33.3%',
      backgroundColor: '#FFFFFF',
      fontSize: 15
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //eaeaf1

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#eaeaf1' }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={tabStyle.active_tab} label="Agent Statistics" {...a11yProps(0)} />
          <Tab style={tabStyle.active_tab} label="Adjustments" {...a11yProps(1)} />
          <Tab style={tabStyle.active_tab} label="Supervisors" {...a11yProps(2)} />
          <Tab style={tabStyle.active_tab} label="History" {...a11yProps(3)} />
          <Tab style={tabStyle.active_tab} label="Name Change" {...a11yProps(4)} />
          <Tab style={tabStyle.active_tab} label="Finalize" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AgentStatComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>

       
      </TabPanel>
      <TabPanel value={value} index={2}>
      <AdjustmentsComponent/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CustomizedTables/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Five
      </TabPanel>
    </div>
  );
}