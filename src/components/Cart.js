import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    let listOfCartItems = this.props.booksInCart.map(item=><CartItem key={item.id} item={item} removeBookFromCart={this.props.removeBookFromCart}/>)
    let theTotal = this.props.booksInCart.reduce((total,item)=> total + item.price,0)
    return (
        <div> {listOfCartItems}
        Total: {theTotal}</div>
    )
  }
}

export default Cart;
