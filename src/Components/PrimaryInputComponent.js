import React from 'react';
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

export default function SimpleSelect() {
    const classes = useStyles();
    const [view, setView] = React.useState(1);
    const [site, setSite] = React.useState('');

    const handleChangeView = (event) => {
        setView(event.target.value);
    };

    const handleChangeSite = (event) => {
        setSite(event.target.value);
    };

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

        </div>
    );
}
