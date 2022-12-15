import React from 'react'
import { CssBaseline, Grid } from "@material-ui/core";
import Header from '../../Components/header/Header';
import Lists from '../../Components/lists/List';

const Home = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <Lists />
                </Grid>
                <Grid item xs={12} md={8}>
                    {/* <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home