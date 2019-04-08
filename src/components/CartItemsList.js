import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'

class CartItemsList extends Component {
    render() {
        let booksInCart =this.props.books.filter(book => book.inCart).map(book=><CartItem key={book.id} book={book}/>)

       return (

      <div>{booksInCart}</div>
      )
    }
  }
  const mapStateToProps = state =>({
      books:state.books
  })
  export default connect(mapStateToProps)(CartItemsList);
  