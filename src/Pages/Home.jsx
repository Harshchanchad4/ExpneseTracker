import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedCategories from '../Components/SelectedCategories';
import { v4 as uuid } from 'uuid';

function Home({ categories, addCategory, removeCategory }) {
  const [newCategoryName, setNewCategoryName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNewCategoryName(event.target.value);
  };

  const handleAddCategory = (event) => {
    event.preventDefault();

    if (newCategoryName.trim().length === 0) {
      alert('Please enter a category name.');
      return;
    }

    if (categories.some(category => category.name === newCategoryName)) {
      alert('Category already exists.');
      return;
    }

    const newCategory = {
      id: uuid(),
      name: newCategoryName
    };

    addCategory(newCategory);
    setNewCategoryName('');
  };

  const clickHandler = () => {
    navigate('/showCategory');
  };

  const deleteHandler = (id) => {
    removeCategory(id);
  };

  return (
    <div className="w-full min-h-screen flex items-center bg-gray-900 flex-col shadow-md px-4 py-5">
      <h2 className="text-4xl font-bold  text-gray-300 m-10">Add Category</h2>



      <form onSubmit={handleAddCategory} className='w-[75%] '>


        <div className="flex justify-center items-center mb-2 max-sm:flex-col max-sm:gap-4">

          <div className='flex justify-center items-center'>

            <input
              type="text"
              value={newCategoryName}
              onChange={handleInputChange}
              placeholder="Enter category name"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white bg-gray-700"
            />
            <button
              type="submit"
              className="ml-4 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border border-white"

            >
              Add
            </button>

          </div>
          <button
            type="button"
            className="m-10 w-[150px] px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border border-white"

            onClick={clickHandler}
          >
            Finish
          </button>


        </div>


      </form>


      <h1 className='text-3xl font-bold text-white m-10'>Your selected Categories</h1>
      <div className='flex w-screen flex-wrap justify-center items-center gap-2'>
        {
          categories.map((elem) => (<SelectedCategories key={elem.id} elem={elem} deleteHandler={deleteHandler} />))
        }
      </div>

      <button
        type="button"
        className="m-10 w-[150px] px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border border-white"

        onClick={clickHandler}
      >
        Finish
      </button>
    </div>


  );
}

export default Home;