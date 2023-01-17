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

export default function DetailList() {
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
                            <div>Shift 1</div>
                            <div>Shift 2</div>
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
                            <div>Address</div>
                            <div>Distance</div>
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
                            <div>item 1</div>
                            <div>item 2</div>
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
                    secondary="Name & Contact Details"/>
                </ListItem>
        </div>
    )
}
