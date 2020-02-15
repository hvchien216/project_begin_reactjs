import React from 'react';
import './App.css';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Products} />
        <Route path="/products/:id" exact component={Details} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
