import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, clearAll, deleteIteme, editIteme }) => {
    return (
        <div className="expenselist-section my-4">
            {
                expenses.map((expense)=>(
                    <div key={expense.id} className="card mb-2">
                        <div className="card-body">
                            <ExpenseItem 
                                expense={expense}
                                deleteIteme={deleteIteme}
                                editIteme={editIteme}
                            />
                        </div>
                    </div>
                ))
            }
        {(expenses.length) > 0 && 
                <button type="button" className="btn btn-danger" onClick={clearAll}>Clear All</button>
        }    
        </div>
    )
}

export default ExpenseList
