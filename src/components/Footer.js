import React from 'react'

const Footer = ({name}) => {
    return (
        <div className='footer d-flex justify-content-center align-items-center '>
            <p className='opacity-75'>made with love by {name}</p>
        </div>
    )
}

export default Footer