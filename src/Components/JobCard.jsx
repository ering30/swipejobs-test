import { Card, CardActions, CardContent, CardMedia } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ActionButton from './ActionButton'
import DetailBanner from './DetailBanner'
import DetailList from './DetailList'
import '../App.css';

export default function JobCard(props) {
    const { callbacks, job } = props

    const {
        handleAccept,
        handleReject,
    } = callbacks || {}

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
                image={job.imageURL}
            />
            <CardContent >
                <h4>{job.jobTitle}</h4>
                <h5>{job.jobCompany}</h5>
            </CardContent>
            <DetailBanner jobDistance={job.jobDistance} jobHourlyRate={job.jobHourlyRate} />
            <DetailList job={job}/>
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
                    <ActionButton
                        callbacks={{
                            // buttonAction: () => handleReject(), // in useJobs callbacks
                        }}
                        buttonText="No, Thanks" 
                        buttonClass="btn btn-outline-secondary btn-lg" 
                    />
                    <ActionButton 
                        callbacks={{
                            // buttonAction: () => handleAccept(), // in useJobs callbacks
                        }}
                        buttonText="I'll take it" 
                        buttonClass="btn btn-dark btn-lg"
                        />
                </Stack>
            </CardActions>
        </Card>
    )
}
