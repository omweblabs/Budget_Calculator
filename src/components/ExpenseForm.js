import React from 'react'

const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
        <>
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="mr-sm-2">Charge:</label>
                    <input
                        type="text"
                        className="form-control mb-2 mr-sm-2"
                        placeholder="e.g rent"
                        name="charge"
                        id="charge"
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label className="mr-sm-2">Amount:</label>
                    <input
                        type="number"
                        className="form-control  mb-2 mr-sm-2"
                        placeholder="e.g 100"
                        name="amount"
                        id="amount"
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                    {edit ? 'Edit' : 'submit'}
                </button>
            </form>
        </>
    )
}

export default ExpenseForm
