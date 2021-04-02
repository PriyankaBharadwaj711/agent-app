import React from 'react';
import AgentStatService from '../Services/AgentStatService';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


class AgentStatComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        AgentStatService.getAgetStats('http://localhost:8080/api/agentStat/getTeamStats?teamname=1Group_Admin').then((response) => {
            console.log(response.data)
            this.setState({ users: response.data.data })

        });
    }

    SimpleSelect() {
        const classes = useStyles();
        const [view, setView] = React.useState(1);
        const [site, setSite] = React.useState('');

        const handleChangeView = (event) => {
            setView(event.target.value);
        };

        const handleChangeSite = (event) => {
            setSite(event.target.value);
        };
    }

    render() {
        var { isLoaded, users } = this.state;

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
                            <MenuItem value={1}>All Agents Stats</MenuItem>
                            <MenuItem value={2}>Selected Team Stats</MenuItem>
                        </Select>
                    </FormControl>
                ) : (
                    <div></div>
                )}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Full Name</td>
                            <td>Supervisor</td>
                            <td>StatsDate</td>
                            <td>Team Name</td>
                            <td>Talk Time Secs</td>
                            <td>Hold Time Secs</td>
                            <td>RESERVED TIME SECS</td>
                            <td>RINGTIME SECS</td>
                            <td>BREAKTIME SECS</td>
                            <td>BUSY ON DN TIME_SECS</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr >
                                        <td>{user.FULL_NAME}</td>
                                        <td>{user.SUPERVISOR}</td>
                                        <td>{user.STATS_DATE}</td>
                                        <td>{user.TEAMNAME}</td>
                                        <td>{user.TALKTIME_SECS}</td>
                                        <td>{user.HOLDTIME_SECS}</td>
                                        <td>{user.RESERVEDTIME_SECS}</td>
                                        <td>{user.RINGTIME_SECS}</td>
                                        <td>{user.BREAKTIME_SECS}</td>
                                        <td>{user.BUSYONDNTIME_SECS}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AgentStatComponent;
