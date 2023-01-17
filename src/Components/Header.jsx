import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import UserMenu from './UserMenu';
import '../App.css';

export default function Header() {
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
                    width: '98vw',
                    margin: '0 auto',
                    justifyContent: 'space-between',
                }}
            >
            <h1 >Swipejobs</h1>
            <UserMenu />
            </Toolbar>
        </AppBar>
        </>
    )
}
