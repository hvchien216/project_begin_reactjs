import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    state = {
    }
    render() {
        return (
            <div>
                Cart
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartPropsFromStore: state.cart
    }
}


const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Cart);