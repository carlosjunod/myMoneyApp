import React, { Component } from 'react';

class AddExpense extends Component {
    // constructor(){
    //     super();
    //     this.addAExpense = this.addAExpense.bind(this)
    // }

    addAExpense(event){
        event.preventDefault();

        const expenseItem = {
            title: this.title.value,
            price: this.price.value,
            cat: this.cat.value,
            desc: this.desc.value,
        }
        this.props.addItem(expenseItem)
        this.addItemForm.reset();
    }


    render() {
    return (
      <form id="add-expense" ref={(input) => this.addItemForm = input} onSubmit={(e) => this.addAExpense(e)} >
          <input id="title-expense"type="text" placeholder="Add a title here (eg. Wallmart)" ref={(input) => {this.title = input}}/>
          <input id="price-expense"type="text" placeholder="Add the value (eg. $5.00)" ref={(input) => {this.price= input}}/>
          <select ref={(input) => {this.cat= input}}>
              <option>Groceries</option>
              <option>Gadgets</option>
              <option>Entertinment</option>
              <option>Services</option>
              <option>Others</option>
          </select>
          <textarea id="description" ref={(input) => {this.desc= input}}></textarea>
          <button type="submit">Add Expense</button>
      </form>
    );
  }
}

export default AddExpense;
