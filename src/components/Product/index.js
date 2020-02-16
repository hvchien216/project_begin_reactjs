import React, { Component } from 'react';
import { Box, Typography, Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const styles = {
    product: {
        "& img": {
            maxWidth: "100%",
            minHeight: "200px",
            background: "grey",
            width: "100%",

        }
    }
}
class Product extends Component {
    state = {
        size: '',
        quantity: 0
    }
    handleAddToCart = () => {
        console.log(this.props.id);
    }

    render() {
        const { id, name, price, imgSrc, classes } = this.props;
        return (
            <Box m={2} width="25%" p={3} className={classes.product} boxShadow={3}>
                <Link to={`products/${id}`} ><img src={imgSrc} /></Link>
                <Typography variant="h4" color="primary">{name}</Typography>
                <Typography variant="h6">{price}</Typography>
                <Button variant="contained" color="primary" onClick={this.handleAddToCart}>Add</Button>
                <Button style={{ border: "1px solid black" }} variant="outline" color="primary">Details</Button>
            </Box >
        );
    }
}

export default withStyles(styles)(Product);