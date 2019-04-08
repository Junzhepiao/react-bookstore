import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import{connect} from 'react-redux';
import {addToCart} from '../redux/actions'
import {bindActionCreators} from 'redux';

class Book extends Component {
  render() {
    return (
    <div>
        <Card>
            <CardImg top width="58" src="http://placeholdit.imgix.net/~text?txtsize=33&text=318%C3%97180&w=318&h=180" alt="Card image cap"/>
            <CardBody>
                <CardTitle>Title: {this.props.book.title}</CardTitle>
                <CardSubtitle>Author: {this.props.book.author}</CardSubtitle>
                <CardText>{this.props.book.description}</CardText>
        <button onClick = {()=>this.props.addToCart(this.props.book.id)}>Add to Cart</button>
        </CardBody>
        </Card>
    </div>
    )}
  
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addToCart
}, dispatch)
export default connect(null,mapDispatchToProps)(Book);
