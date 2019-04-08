import React, { Component } from 'react';
import CartItemsList from './CartItemsList';
import {connect} from 'react-redux'

class Cart extends Component {
  render() {
    let booksInCart = this.props.books.filter(book=>book.inCart)

    // let listOfCartItems = this.props.booksInCart.map(item=><CartItem key={item.id} item={item} removeBookFromCart={this.props.removeBookFromCart}/>)
    let theTotal = booksInCart.filter(book=> book.inCart).reduce((total,book)=> total + book.price,0)
     return (
    //     <div> {listOfCartItems}
    //     Total: {theTotal}</div>
    <div><CartItemsList cartItems={booksInCart}/>
      Total: {theTotal}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  books:state.books
})
export default connect(mapStateToProps)(Cart);
