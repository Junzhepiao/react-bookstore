import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    return (
        <div>
            <ul>
                <li>Title:{this.props.item.title}</li>
                <li>Price:{this.props.item.price}</li>
                <button onClick={()=>this.props.removeBookFromCart(this.props.item.id)}>Remove</button>

            </ul>
        </div>
    )
  }
}

export default CartItem;
