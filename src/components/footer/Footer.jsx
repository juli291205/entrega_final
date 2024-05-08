import { Box } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    return (
        <Box
            style={{
                background: 'black',
                height: '60px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <span>Designed and built by Jose Julian</span>
        </Box>
    )
}

export default Footer
