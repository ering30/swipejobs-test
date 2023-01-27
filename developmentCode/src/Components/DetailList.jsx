import React from 'react'
import { 
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    IconButton, 
    Divider
} from '@mui/material'
import { 
    CalendarMonth, 
    ChevronRight, 
    Person,
} from '@mui/icons-material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

export default function DetailList(props) {
    const { job } = props
    const shiftsList = (job.shifts) 
    const reqsList = (job.requirements)

    return (
        <div>
                <ListItem>
                    <ListItemAvatar>
                        <CalendarMonth />
                    </ListItemAvatar>
                    <ListItemText 
                        primary="Shift Dates"
                        secondary={
                            <div>
                                {shiftsList.map(item => <div key={item}>{item}</div>)}
                            </div>
                        }
                    />
                    
                </ListItem>
                <Divider variant="middle" />
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="see location">
                        <ChevronRight />
                        </IconButton>
                    }
                    >
                    <ListItemAvatar>
                        <LocationOnOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText 
                        primary="Location"
                        secondary={
                            <div>
                                <div>{job.location}</div>
                                <div>{job.jobDistance} from your location</div>
                            </div>
                        }
                    />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <ListItemAvatar>
                        <HandymanOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText 
                        primary="Requirements"
                        secondary={
                            <div>
                                {reqsList.map(item => <div key={item}>{item}</div>)}
                            </div>
                        }
                    />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <ListItemAvatar>
                        <Person />
                    </ListItemAvatar>
                    <ListItemText 
                        primary="Report To"
                        secondary={`${job.jobContact.Name}: ${job.jobContact.Contact}`}/>
                </ListItem>
        </div>
    )
}
