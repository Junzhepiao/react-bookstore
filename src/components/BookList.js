import React, { Component } from 'react';
import {connect} from 'react-redux';
import Book from './Book';

 class BookList extends Component {


    // handleChange = e =>{
    //     let{name, value}=e.target
    //     this.setState({[name]:value})
    // }
  render() {
      console.log('props in booklist', this.props)
     let listOfBooks= this.props.books.map(book=><Book key={book.id} book={book} />)
        //.filter(book=>book[this.state.type].includes(this.state.filterPhrase))
        // .map(book=><Book key={book.id} book={book} />)
    return (
    <div>
    {/* <input type="text" name="filterPhrase" onChange={this.handleChange} value={this.state.filterPharse}/>
    <select name="type" onChange={this.handleChange} value={this.state.type}>
    <option value="title">Title</option>
    <option value="author">Author</option>
    </select> */}

    <div>{listOfBooks}</div>
    </div>
        )

  }
}




const mapStateToProps = state =>({
    books: state.books
})

export default connect(mapStateToProps)(BookList);
