import React, { useEffect, useState } from 'react';
import AgentStatService from '../Services/AgentStatService';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor:theme.palette.common.gray,
        color: '#191970',
      },
      body: {
        fontSize: 14,
        color: '#191970',
      },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

 
//old code data from below
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    //table new
    table: {
        maxWidth: 100,
      },
}));

function AgentStatComponent() {
    const [appState, setAppState] = useState({
        users: [],
        loading: true,
    });

    const classes = useStyles();
    const [view, setView] = React.useState(1);
    const [site, setSite] = React.useState('');

    const handleChangeView = (event) => {
        setView(event.target.value)
        
    };

    const handleChangeSite = (event) => {
        setSite(event.target.value)
        
    }

    useEffect(() => {
        console.log('Called Use Affect for view with View :- '+view);
        setAppState({ loading: true });
        if (view == 1) {
            AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname=1Group_Admin').then((response) => {
                console.log(response.data)
                const allUsers = response.data.data;
                setAppState({ loading: false, users: allUsers });
            });
        }
    }, [view]);

    useEffect(() => {
        console.log('Called Use Affect for site with Site :- '+site);
        setAppState({ loading: true });
        // if (site == 1) {
        //     AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname=1Group_Admin').then((response) => {
        //         console.log(response.data)
        //         const allUsers = response.data.data;
        //         setAppState({ loading: false, users: allUsers });
        //     });
        // } else if (site == 2) {
        //     AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname=1Group_CAN_Admin').then((response) => {
        //         console.log(response.data)
        //         const allUsers = response.data.data;
        //         setAppState({ loading: false, users: allUsers });
        //     });
        // } else if (site == 3) {
        //     AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname=TopazBilling').then((response) => {
        //         console.log(response.data)
        //         const allUsers = response.data.data;
        //         setAppState({ loading: false, users: allUsers });
        //     });
        // } else if (site == 4) {
        //     AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname=6Group_Admin').then((response) => {
        //         console.log(response.data)
        //         const allUsers = response.data.data;
        //         setAppState({ loading: false, users: allUsers });
        //     });
        // }
        if (site!=""){
            AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname='+site).then((response) => {
                console.log(response.data)
                const allUsers = response.data.data;
                setAppState({ loading: false, users: allUsers });
            });
        }
        else{
            AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats').then((response) => {
                console.log(response.data)
                const allUsers = response.data.data;
                setAppState({ loading: false, users: allUsers });
            });
        }

    }, [site])



    useEffect((view, site) => {
        console.log('Called Use Affect');
        setAppState({ loading: true });
        // if (view == 0 || view != null) {
        AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats').then((response) => {
            console.log(response.data)
            const allUsers = response.data.data;
            setAppState({ loading: false, users: allUsers });
        });
        // }

    }, [setAppState]);
  

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">View</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={view}
                    onChange={handleChangeView}
                >
                    <MenuItem value={1}>All Agents Stats</MenuItem>
                    <MenuItem value={2}>Selected Team Stats</MenuItem>
                </Select>
            </FormControl>

            {view == 2 ? (
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Site</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={site}
                        onChange={handleChangeSite}
                    >
                        <MenuItem value={"1Group_Admin"}>1Group_Admin</MenuItem>
                        <MenuItem value={"1Group_CAN_Admin"}>1Group_CAN_Admin</MenuItem>
                        <MenuItem value={"TopazBilling"}>TopazBilling</MenuItem>
                        <MenuItem value={"6Group_Admin"}>6Group_Admin</MenuItem>
                    </Select>
                </FormControl>
            ) : (
                null
            )}

            {appState.loading ? (
                // <text>Loading</text>
                null
            ) : (
                <div>
                <Grid container spacing={24}>
                <Grid item xs={4}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                         <TableHead>
                                 <TableRow>
                                     <StyledTableCell align="left">FULL NAME</StyledTableCell>
                                     <StyledTableCell align="left">TEAM</StyledTableCell>
                                     <StyledTableCell align="left">STATS DATE</StyledTableCell>
        
            
                                </TableRow>
                        </TableHead>
                        <TableBody>
                            {appState.users.map(
                                  user => (
                                    <StyledTableRow >
                                    <StyledTableCell align="left">{user.SUPERVISOR}</StyledTableCell>
                                    <StyledTableCell align="left">{user.FULL_NAME}</StyledTableCell>
              
                                    <StyledTableCell align="left">{user.STATS_DATE}</StyledTableCell>
                                    {/* <StyledTableCell>
                                    <CommentIcon onClick={e => handleClickOpen(e,row.id,row.first_name,row.last_time,row.comments)}/>
                                    </StyledTableCell> */}
                                    
                                    </StyledTableRow>
                                ))}
                         </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            
            <Grid item xs={5}>

            
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">TALK TIME SECS</StyledTableCell>
                        <StyledTableCell align="left">HOLD TIME SECS</StyledTableCell>
                        <StyledTableCell align="left">RESERVED TIME SECS</StyledTableCell>
                        <StyledTableCell align="left">RING TIME SECS</StyledTableCell>
                        <StyledTableCell align="left">BREAK TIME SECS</StyledTableCell>
                        <StyledTableCell align="left">BUSY ON TIME SECS</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {appState.users.map(
                                    user => (
                        <StyledTableRow >
                        <StyledTableCell align="left">{user.TALKTIME_SECS}</StyledTableCell>
                        <StyledTableCell align="left">{user.HOLDTIME_SECS}</StyledTableCell> 
                        <StyledTableCell align="left">{user.RESERVEDTIME_SECS}</StyledTableCell>
                        <StyledTableCell align="left">{user.RINGTIME_SECS}</StyledTableCell>
                        <StyledTableCell align="left">{user.BREAKTIME_SECS}</StyledTableCell> 
                        <StyledTableCell align="left">{user.BUSYONDNTIME_SECS}</StyledTableCell>
                        
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer> 
            </Grid>
  
  <Grid>
  <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">COMMENTS                    </StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {appState.users.map(
                                    user => (
                        <StyledTableRow >
                                <StyledTableCell align="left">{user.RESERVEDTIME_SECS}</StyledTableCell>
                        
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer> 
            {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
  </Grid>
  </Grid>
</div>

    
    

            )}

            {/* //     <table className="table table-striped">
            //         <thead>
            //             <tr>
            //                 <td>Full Name</td>
            //                 <td>Supervisor</td>
            //                 <td>StatsDate</td>
            //                 <td>Team Name</td>
            //                 <td>Talk Time Secs</td>
            //                 <td>Hold Time Secs</td>
            //                 <td>RESERVED TIME SECS</td>
            //                 <td>RINGTIME SECS</td>
            //                 <td>BREAKTIME SECS</td>
            //                 <td>BUSY ON DN TIME_SECS</td>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             { */}
            {/* //                 appState.users.map(
            //                     user =>
            //                         <tr >
            //                             <td>{user.FULL_NAME}</td>
            //                             <td>{user.SUPERVISOR}</td>
            //                             <td>{user.STATS_DATE}</td>
            //                             <td>{user.TEAMNAME}</td>
            //                             <td>{user.TALKTIME_SECS}</td>
            //                             <td>{user.HOLDTIME_SECS}</td>
            //                             <td>{user.RESERVEDTIME_SECS}</td>
            //                             <td>{user.RINGTIME_SECS}</td>
            //                             <td>{user.BREAKTIME_SECS}</td>
            //                             <td>{user.BUSYONDNTIME_SECS}</td>
            //                         </tr>
            //                 )
            //             }
            //         </tbody>
            //     </table> */}
             
            
    


        </div>
    )
        }

export default AgentStatComponent;
