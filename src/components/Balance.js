import React, { Component } from 'react';
import SingleItem from './SingleItem';

class Balance extends Component {

  render() {
    return (
      <ul>
          {Object.keys(this.props.actualState).map(key => <SingleItem key={key} details={this.props.actualState[key]} keyval={key} removeItem={this.props.removeItem}/>)}

      </ul>
    );
  }
}


export default Balance;
