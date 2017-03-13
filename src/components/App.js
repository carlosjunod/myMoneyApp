import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Balance from './Balance';
import Aside from './Aside';
import AddExpense from './AddExpense';
import StatusBalance from './StatusBalance';
// import logo from './logo.svg';
import './css/App.css';

class App extends Component {
constructor(){
    super();

        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.state = {
            elementsList: {},
        };
    }
    addItem(item){
        //update empty state
        const items = {...this.state.elementsList};
        // set state
        const timestamp = Date.now();
        items[`order-${timestamp}`] = item;
        this.setState({elementsList: items})
        console.log(items);
    }

    // removeItem = (key) => {
    //     console.log('entering to deletemode');
    //     console.log(key);
    //     const items = {...this.state.items};
    //     delete items[key];
    //     this.setState({elementsList: items})
    // };

    removeItem(index) {
        //     console.log('entering to deletemode');
        //     console.log(key);
        this.setState((prevState) => ({
            elementsList: prevState.elementsList.filter((_, i) => i !== index)
        }));
    }



    render() {
    return (
    <div className='mainApp'>
        <Aside />
        <div className='app-main'>
            <div className='header-content-wrapper'>
                <Header />
                <StatusBalance />
                <AddExpense addItem={this.addItem} />
                <div className='contents'>
                    <Balance actualState={this.state.elementsList} removeItem={this.removeItem}/>
                </div>
            </div>
            <Footer />
        </div>
    </div>
    );
    }
}

export default App;
