import { Button } from '@mui/material'
import React from 'react'

export default function ActionButton(props) {
    const {buttonText} = props
    return (
        <>
            <Button
            variant='contained'
            size='large'
            elevation={0}
            disableRipple={true}>
                {buttonText}
            </Button>
        </>
    )
}
