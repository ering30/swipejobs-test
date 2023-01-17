import React from 'react'
import { Stack } from '@mui/material'

export default function DetailBanner(props) {
    const {jobDistance, jobHourlyRate} = props
    return (
        <div style={{background: "#00d9a9"}}>
            <Stack 
                direction='row' 
                sx={
                    {margin: '0 auto', 
                    width:'90%', 
                    justifyContent: 'space-between'
                    }
                }
            >
            <h6>Distance</h6>
            <h6>Hourly Rate</h6>
            </Stack>
            <Stack 
                direction='row' 
                sx={
                    {margin: '0 auto', 
                    width:'90%', 
                    justifyContent: 'space-between'
                    }
                }
            >
            <h3>{jobDistance}</h3>
            <h3>{jobHourlyRate}</h3>
            </Stack>
        </div>
    )
}
