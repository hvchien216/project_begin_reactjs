import React from 'react';
import './App.css';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  cart: [
    {
      id: 0,
      name: "AO PHONG WHITE",
      price: 20,
      size: "S",
      quantity: "2"
    }
  ]
}

const reducer = (state = initialState, action) => {
  return state;
}

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Products} />
          <Route path="/products/:id" exact component={Details} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
