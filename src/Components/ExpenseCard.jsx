

// ExpenseCard.jsx
import React, { useState } from 'react';

function ExpenseCard({ categoryName, addExpenseToCategory }) {
    const [newExpense, setNewExpense] = useState('');

    const handleInputChange = (event) => {
        setNewExpense(event.target.value);
    };

    const handleAddExpense = (event) => {
        event.preventDefault();
        if (newExpense.length > 0) {
            addExpenseToCategory(categoryName, parseFloat(newExpense));
            setNewExpense('');
        }
        else {
            alert('Please enter an expense amount.');
        }
    };

    return (
        <div className="rounded-lg shadow-md overflow-hidden text-white bg-gray-700 h-40 w-full hover:border border-white ">

            <div className="p-4">

                <h2 className="text-xl font-bold tracking-tight text-gray-300">{categoryName}</h2>
                <form onSubmit={handleAddExpense}>
                    <div className="flex items-center mt-4">
                        <input
                            type="number"
                            value={newExpense}
                            onChange={handleInputChange}
                            placeholder="Enter expense amount"
                            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500  hover:border "
                        />
                        <button
                            className="ml-4 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border border-white"
                        >
                            Add
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default ExpenseCard;