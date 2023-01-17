import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UserMenu from './UserMenu';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: '#000000',
        color: 'white',
    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto',
    }
}))
export default function Header() {
    const classes = useStyles();
    return (
        <>
        <AppBar class="appbar" position="static" elevation={0} >
            <Toolbar className={classes.appbarWrapper} >
            <h1 >Swipejobs</h1>
            <UserMenu />
            </Toolbar>
        </AppBar>
        </>
    )
}
