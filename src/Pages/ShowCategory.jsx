
// ShowCategory.jsx
import React from 'react';
import ExpenseCard from '../Components/ExpenseCard';
import { useNavigate } from 'react-router-dom';

function ShowCategory({ categories, setExpenses, expenses }) {
  let navigate = useNavigate();
  const addExpenseToCategory = (categoryName, amount) => {
    setExpenses(prevExpenses => ({
      ...prevExpenses,
      [categoryName]: (prevExpenses[categoryName] || 0) + amount
    }));
  };

  const clickHandler = () => {
    navigate('/chart');
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full shadow-md px-4 py-5">
        {categories.map((category) => (
          <ExpenseCard
            key={category.id}
            categoryName={category.name}
            addExpenseToCategory={addExpenseToCategory}
          />
        ))}
      </div>
      <button
        className="ml-4 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border border-white"
        onClick={clickHandler}>Finish
      </button>

      
    </div>
  );
}

export default ShowCategory;