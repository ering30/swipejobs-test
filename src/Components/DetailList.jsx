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
    const shiftsList = (job.Shifts) 
    const reqsList = (job.Requirements)

    console.log(shiftsList, "shifts list");
    console.log('requirements', reqsList);
    

    const showList = (list) => {
        list.map(item => {
            return <div>{item}</div>
        })
    }

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
                            {() => showList(shiftsList)}
                        </div>
                    }/>
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
                            <div>{job.Location}</div>
                            <div>{job.jobDistance} from your</div>
                        </div>
                    }/>
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
                            {() => showList(reqsList)}
                        </div>
                    }/>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <ListItemAvatar>
                        <Person />
                    </ListItemAvatar>
                    <ListItemText 
                    primary="Report To"
                    secondary={`${job.JobContact.Name}: ${job.JobContact.Contact}`}/>
                </ListItem>
        </div>
    )
}
