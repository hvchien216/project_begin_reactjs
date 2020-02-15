import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Typography, Button } from '@material-ui/core';
class Details extends Component {
    state = {
        product: {},
        loading: true
    }

    componentDidMount() {
        axios.get(`http://kmin-academy-shopping-cart-api.herokuapp.com/products/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    product: res.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { loading, product } = this.state;
        const { id, name, price, src } = product;
        // const { id, name, price, imgSrc, classes } = this.props;
        return (
            <div>
                {
                    loading ? <Box><CircularProgress size={40}></CircularProgress></Box>
                        : (
                            <Box m={2} width="25%" p={3} boxShadow={3} height="400px">
                                <img style={{
                                    maxWidth: "100%",
                                    minHeight: "200px",
                                    background: "grey",
                                    width: "100%",

                                }} src={src} />
                                <Typography variant="h4" color="primary">{name}</Typography>
                                <Typography variant="h6">{price}</Typography>
                                <Button variant="contained" color="primary">Add</Button>
                                <Button style={{ border: "1px solid black" }} variant="outline" color="primary">Details</Button>
                            </Box >
                        )
                }
            </div>
        );
    }
}

export default Details
    ;