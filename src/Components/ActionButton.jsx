import React from 'react'


export default function ActionButton(props) {
    const { 
        callbacks: {
            buttonAction,
        },
        buttonText, 
        buttonClass 
    } = props

    return (
        <>
            <button 
                class={buttonClass}
                onClick={buttonAction}
            >
                {buttonText}
            </button>
        </>
    )
}
