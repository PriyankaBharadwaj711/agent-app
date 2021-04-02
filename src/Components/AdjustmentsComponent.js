import React from 'react'
import { useEffect, useState } from 'react';
import AgentStatService from '../Services/AgentStatService';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function AdjustmentsComponent(){
    const [view, setView] = React.useState(1); 
    const handleChangeView = (event) => {
        setView(event.target.value)
        
    };
    return (
        <div>
             <FormControl >
                <InputLabel id="demo-simple-select-label">View</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={view}
                    onChange={handleChangeView}
                >
                    <MenuItem value={1}>Inbound</MenuItem>
                    <MenuItem value={2}>Outbound</MenuItem>
                    <MenuItem value={2}>All Supervisor Types</MenuItem>
                </Select>
            </FormControl>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Supervisor ID</td>
                            <td>Supervisor Name</td>
                            <td>Supervisor Type</td>
                            <td>Acquisition ID</td>
                            <td>Active?</td>
                            
                            
                        </tr>
                    </thead>
                    </table>
        </div>
    )
}

export default AdjustmentsComponent
