import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import{connect} from 'react-redux';
import {removeFromCart} from '../redux/actions'
import {bindActionCreators} from 'redux';

class CartItem extends Component {
  render() {
    return (
        <div>
        <Card>
            <CardImg top width="58" src="http://placeholdit.imgix.net/~text?txtsize=33&text=318%C3%97180&w=318&h=180" alt="Card image cap"/>
            <CardBody>
                <CardTitle>Title: {this.props.book.title}</CardTitle>
                <CardSubtitle>Price:{this.props.book.price}</CardSubtitle>
        <button onClick = {()=>this.props.removeFromCart(this.props.book.id)}>Remove</button>
        </CardBody>
        </Card>
    </div>


    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeFromCart
}, dispatch)
export default connect(null,mapDispatchToProps)(CartItem);
