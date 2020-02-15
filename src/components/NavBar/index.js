import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Typography, Icon, Box } from '@material-ui/core';
export default function NavBar() {
    const styleLink = {
        textDecoration: "none",
        color: "#fff"
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Icon >menu</Icon>
                    </IconButton>
                    <Typography variant="h6" >
                        News
                    </Typography>
                    <Box ml="auto">
                        <Button color="inherit"><Link style={styleLink} to="/">Products</Link></Button>
                        <Button color="inherit"><Link style={styleLink} to="/details">Details</Link></Button>
                        <Button color="inherit"><Link style={styleLink} to="/cart">Cart</Link></Button>
                    </Box>
                </Toolbar>
            </AppBar>



        </div>
    )
}