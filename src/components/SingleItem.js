import React, { Component } from 'react';

class singleItem extends Component {
  render() {

    return (
        <li className="item">
            <div className="buttons col-item">
                <span className="del" onClick={this.props.removeItem(this.props.keyval)}>delete</span>
                <span className="edit">edit</span>
            </div>
            <div className="item-title col-item">
                {this.props.details.title}
            </div>
            <div className="item-desc col-item">
                {this.props.details.desc}
            </div>
            <div className="item-cat col-item">
                {this.props.details.cat}
            </div>
            <div className="item-price col-item">
                {this.props.details.price}
            </div>


        </li>
    );
  }
}


export default singleItem;
