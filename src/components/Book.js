import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
    <div>
        <p>Title:{this.props.book.title}</p>
        <button onClick = {()=>this.props.addBookToCart(this.props.book.id)}>Add to Cart</button>
    </div>
    )}
  
}

export default Book;
