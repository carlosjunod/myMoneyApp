import React, { Component } from 'react';

class singleItem extends Component {
    constructor(){
        super();
        this.removeThis = this.removeThis.bind(this);
    }

    removeThis(){
        this.props.removeItem(this.props.keyval)
        console.log('-------------- reached');
        console.log(this.props.keyval);
    }

    render() {


    return (
        <li className="item">
            <div className="buttons col-item">
                <span className="del" onClick={(e) => this.removeThis(e)}>delete</span>
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
