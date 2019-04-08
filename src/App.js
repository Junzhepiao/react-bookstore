import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import Cart from './components/Cart';
class App extends Component {
  render() {
    return (
    <div className="App">
    <NavBar/>
      <div className="row">
        <div className="col text-center text-lg">Book List
        <div><BookList /></div>
        </div>
        <div className="col text-center text-lg">Cart
        <div><Cart /></div>
        </div>
        <div></div>
      </div>
    </div>
    )
  }
}

export default App;
