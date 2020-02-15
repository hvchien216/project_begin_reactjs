import React, { Component } from 'react';
import { Box, Grid, CircularProgress, Button } from "@material-ui/core";
import Product from '../Product';
import axios from 'axios';
class Products extends Component {
    state = {
        proudcts: [],
        page: 1,
        page_size: 6,
        desc: 0
    }
    componentDidMount() {
        axios
            .get("http://kmin-academy-shopping-cart-api.herokuapp.com/products")
            .then(res => {
                this.setState({
                    proudcts: res.data
                })
            })
            .catch(err => console.log(err));
    }
    handleSortPrice = (val) => {
        this.setState({
            desc: val
        })
    }
    handleChangePage = (val) => {
        this.setState({
            page: val
        })
    }
    render() {
        const { proudcts, page, page_size, desc } = this.state;
        const pagination = [];
        for (let i = 0; i < Math.ceil(proudcts.length / page_size); i++) {
            pagination.push(<Button variant={page === i + 1 ? "contained" : "outline"} color="secondary" onClick={() => this.handleChangePage(i + 1)}>{i + 1}</Button>);
        }

        return (
            <Grid container>
                <Grid item md={3}>
                    <Box boxShadow={1} minHeight="100vh" height="100%">
                        <Button variant="contained" onClick={() => this.handleSortPrice(1)} > Tang dan</Button>
                        <Button variant="contained" onClick={() => this.handleSortPrice(-1)} >Giam dan</Button>
                    </Box>
                </Grid>
                <Grid item md={9}>
                    <Box display="flex" flexWrap="wrap">
                        {proudcts.length > 0
                            ? [...proudcts]
                                .sort((a, b) => { return desc * (a.price - b.price) })
                                .splice((page - 1) * page_size, page_size)
                                .map((ele, index) => {
                                    return (
                                        <Product key={index} name={ele.name} id={ele.id} price={ele.price} imgSrc={ele.src} ></Product>
                                    )
                                })
                            : <CircularProgress size={40} />
                        }
                    </Box>
                    <Box mb={3}>{pagination}</Box>
                </Grid>
            </Grid>
        );
    }
}

export default Products;