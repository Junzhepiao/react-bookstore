import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import Cart from './components/Cart';
import axios from 'axios';
class App extends Component {
  state={
    books: []
  }

  booksInCart = ()=> this.state.books.filter(book => book.inCart)

  componentDidMount(){
      fetch(`http://localhost:8000/books`)
        .then(res => res.json())
        .then(books => this.setState({books}))
  }

  addBookToCart = id =>{
    axios.patch(`http://localhost:8000/books/cart/add/${id}`)
      .then(res=>{
        let theOtherBooks = this.state.books.filter(book => book.id !== id)
        let orderedBooks=[...theOtherBooks,...res.data].sort((a, b)=>a.id >b.id)
        this.setState({books:orderedBooks})
      })
  }

  removeBookFromCart = id =>{
    axios.patch(`http://localhost:8000/books/cart/remove/${id}`)
      .then(res=>{
        let theOtherBooks = this.state.books.filter(book => book.id !== id)
        let orderedBooks= [...theOtherBooks,...res.data].sort((a,b)=>a.id >b.id)
        this.setState({books:orderedBooks})
      })
  }

  render() {
    return (
    <div className="App">
    <NavBar/>
      <div className="row">
        <div className="col text-center text-lg">Book List
        <div><BookList books={this.state.books} addBookToCart={this.addBookToCart}/></div>
        </div>
        <div className="col text-center text-lg">Cart
        <div><Cart booksInCart={this.booksInCart()} removeBookFromCart={this.removeBookFromCart}/></div>
        </div>
        <div></div>
      </div>
    </div>
    )
  }
}

export default App;
