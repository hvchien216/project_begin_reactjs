import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Typography, Button, TextField } from '@material-ui/core';
class Details extends Component {
    state = {
        product: {},
        loading: true,
        size: '',
        quantity: 0
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

    handleAddToCart = () => {
        console.log(this.state.quantity);
    }

    handleSelectSize = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    handleChangeQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }
    render() {
        const { loading, product } = this.state;
        const { id, name, price, src, size } = product;
        // const { id, name, price, imgSrc, classes } = this.props;
        return (
            <div>
                {
                    loading ? <Box><CircularProgress size={40}></CircularProgress></Box>
                        : (
                            <Box display="flex" width="100%" height="100%">
                                <Box m={2} width="25%" p={3} boxShadow={3} height="400px">
                                    <img style={{
                                        maxWidth: "100%",
                                        minHeight: "200px",
                                        background: "grey",
                                        width: "100%",

                                    }} src={src} />
                                    <Typography variant="h4" color="primary">{name}</Typography>
                                    <Typography variant="h6">{price}</Typography>
                                </Box >
                                <Box>
                                    {size.map(s => {
                                        return (
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="sizes"
                                                    value={s}
                                                    onClick={this.handleSelectSize}
                                                />
                                                {s}
                                            </label>
                                        )
                                    })}
                                    <Box width="200px" my={3}>
                                        <TextField type="numeber" onChange={this.handleChangeQuantity}></TextField>
                                    </Box>
                                    <Button variant="contained" color="primary" onClick={this.handleAddToCart}>Add</Button>
                                </Box>
                            </Box>
                        )
                }
            </div>
        );
    }
}

export default Details
    ;