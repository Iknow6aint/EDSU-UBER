import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';
import { type } from '@testing-library/user-event/dist/type';


const Lists = ({ places }) => {
    const classes = useStyles();
    const [types, setTypes] = useState("restuarants");
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Resturants, Hotels & Attractions around You</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setTypes(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Ratting</InputLabel>
                <Select value={type} onChange={(e) => setTypes(e.target.value)}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid key={i} item xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Lists