import { Card, CardActions, CardContent, CardMedia } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ActionButton from './ActionButton'
import DetailBanner from './DetailBanner'
import DetailList from './DetailList'
import '../App.css';

export default function JobCard(props) {
    const { jobCompany, jobTitle } = props
    return (
        <Card sx={{
            bgcolor: "#ffffff",
            mt: '2%',
            margin: '5% auto 5% auto',
            width: '95%',
            borderRadius: '5px',
        }} elevation={0}>
            <CardMedia 
                component="img"
                height="140"
                image={`url(${process.env.PUBLIC_URL + '/assets/placeholderimg.png'})`}
            />
            <CardContent >
                <h4>{jobTitle}</h4>
                <h5>{jobCompany}</h5>
            </CardContent>
            <DetailBanner jobDistance="test" jobHourlyRate="test" />
            <DetailList />
            <CardActions >
                <Stack 
                    direction="row" 
                    sx={{
                        margin: '0 auto', 
                        width:'100%', 
                        pt:'5%', 
                        pb: '5%', 
                        justifyContent:'space-evenly' 
                    }}
                >
                    <ActionButton buttonText="No, Thanks" buttonTheme="secondary"/>
                    <ActionButton buttonText="I'll take it" buttonTheme="primary"/>
                </Stack>
            </CardActions>
        </Card>
    )
}
