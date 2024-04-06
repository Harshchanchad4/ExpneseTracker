


// App.jsx
import React, { useState } from 'react';
import Home from './Pages/Home';
import ShowCategory from './Pages/ShowCategory';
import ChartData from './Pages/ChartData';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function App() {
  const [categories, setCategories] = useState([]); // Initial state for categories
  const [expenses, setExpenses] = useState({});


  const addCategory = (newCategory) => {
    const categoryWithId = { ...newCategory, id: uuid() }; // Add id property to newCategory
    setCategories([...categories, categoryWithId]); // Add new category to the state

    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [categoryWithId.name]: 0 // Use categoryWithId.name as the key
    }));
  };

  const removeCategory = (id) => {
    const updatedCategories = categories.filter(elem => elem.id !== id);
    setCategories(updatedCategories);
  };

  return (
    <div className='h-screen w-screen text-center bg-gray-900 overflow-x-hidden text-white'>
      <NavBar className='w-full' />
      <Routes>
        <Route path="/" element={<Home categories={categories} addCategory={addCategory} removeCategory={removeCategory} />} />
        <Route path="/showCategory" element={<ShowCategory categories={categories} setExpenses={setExpenses} expenses={expenses}  />} />
        <Route path="/chart" element={<ChartData expenses={expenses} />} />
      </Routes>
    </div>
  );
}

export default App;
