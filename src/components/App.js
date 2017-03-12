import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
    <div className='mainApp'>
        <Header />
        <Footer />
    </div>
    );
  }
}

export default App;
