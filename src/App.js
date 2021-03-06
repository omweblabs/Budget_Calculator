import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

const initialExpense = [];

function App() {
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState(initialExpense);
  const [alert, setAleart] = useState({status: false});
  const [edit, setEdit] = useState(false);
  const [id,setId] = useState(0);
  //handle charge
  const handleCharge = (e) => {
    //console.log(`charge: ${e.target.value}`);
    setCharge(e.target.value);
  }
  //handle amount
  const handleAmount = (e) => {
    //console.log(`charge: ${e.target.value}`);
    setAmount(e.target.value);
  }
  // Handle expense alert
  const handleAlert = ({type, text}) => {
    setAleart({ status: true, type:type, text:text });
    setTimeout(() => {
      setAleart({status:false});
    }, 3000);
    
  }
  // Handle expense list
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(charge !== '' && amount > 0){
      if(edit){
        let changeItem = expense.map((item)=>{
          return item.id === id ?{...item, charge, amount}: item
        });
        //console.log(changeItem);
        setExpense(changeItem);
        handleAlert({ type: 'success', text: 'You have successfully Update the data' });
        setEdit(false);
      }else{
        let singleExpense = { id: uuidv4(), charge: charge, amount: amount }
        //console.log(singleExpense);
        setExpense([...expense, singleExpense]);
        handleAlert({ type: 'success', text: 'You have successfully submited the data' });
      }
      setCharge('');
      setAmount('');
    }else{
      handleAlert({ type: 'Failer', text: 'Please fill up the Correct Details' });
    }
  }
  // handle clear all items
  const clearAll = () => {
    //console.log('Clear All Items');
    setExpense([]);
  }
  // handle specific Item Delete
  const deleteIteme = (id) => {
    //console.log(`Item Delete: ${id}`);
    let filtered = expense.filter((item) => (
      item.id !== id
    )); 
    setExpense(filtered);
  }
  // handle specific Item Edit
  const editIteme = (id) => {
    //console.log(`Item Edite: ${id}`);
    let checkid = expense.find((item) => (
        item.id === id
    ));
    //console.log(checkid);
    setCharge(checkid.charge);
    setAmount(checkid.amount);
    setEdit(true);
    setId(id);
  }
  return (
    <>
    {
      (alert.status) && <Alert type={alert.type} text={alert.text}/>
    }
      
      <div className="jumbotron text-center">
        <h1>Budget Calculator</h1>
        <p>React App using Hooks</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 my-0 mx-auto">
            <ExpenseForm 
              charge={charge} 
              amount={amount}
              handleCharge={handleCharge}
              handleAmount={handleAmount}
              handleSubmit={handleSubmit}
              edit={edit}
            />
            <ExpenseList 
              expenses={expense}
              clearAll={clearAll}
              deleteIteme={deleteIteme}
              editIteme={editIteme}
            />
          </div>
        </div>
      </div>
      <div className="jumbotron text-center">
        <h1>Total Spending</h1>
        <p>
          ${
            expense.reduce((accumulator, current) => accumulator + parseInt(current.amount), 0)
          }
        </p>
      </div>
    </>
  );
}

export default App;
