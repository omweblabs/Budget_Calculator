import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, deleteIteme, editIteme}) => {
    const {id, charge, amount} = expense;
    return (
        <div className="row">
            <div className="col-sm-4">
                <span className="charge-name">{charge}</span>
            </div>
            <div className="col-sm-4">
                <span className="charge-amount">${amount}</span>
            </div>
            <div className="col-sm-4">
                <button type="button" className="btn" onClick={()=>editIteme(id)}>
                    <MdEdit />
                </button>
                <button type="button" className="btn" onClick={()=>deleteIteme(id)}>
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

export default ExpenseItem
