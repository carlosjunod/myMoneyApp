import React, { Component } from 'react';

class StatusBalance extends Component {
  render() {
    return (
        <div id="statusBalance">
            <div id="figure">
                <span>1,000.00</span>
            </div>
            <div id="add">
                <button>Add purchase</button>
            </div>
        </div>
    );
  }
}

export default StatusBalance;
