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
                sx={{
                    width: '95vw',
                    margin: '0 auto',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap'
                }}
            >
            <h1 class="appbarLogo">swipejobs</h1>
            <UserMenu worker={worker}/>
            </Toolbar>
        </AppBar>
        </>
    )
}
