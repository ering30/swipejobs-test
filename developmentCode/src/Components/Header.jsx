import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import UserMenu from './UserMenu';
import '../App.css';

export default function Header(props) {
    const { worker } = props
    return (
        <>
        <AppBar 
            class="appbar" 
            elevation={0} 
            sx={{
                backgroundColor: 'black',
            }}>
            <Toolbar 
                class="appbarWrapper" 
            >
            <h1 class="appbarItem">swipejobs</h1>
            <UserMenu class="appbarItem" worker={worker}/>
            </Toolbar>
        </AppBar>
        </>
    )
}
