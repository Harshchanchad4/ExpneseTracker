
// SelectedCategories.jsx
import React from 'react';
import { MdDelete } from "react-icons/md";

const SelectedCategories = ({ elem, deleteHandler }) => {
  return (
    <div className='flex h-20 w-96 m-2  border-slate-500 border rounded hover:bg-gray-800 hover:border-white'>
      <div className='border-2 border-gray-900 rounded p-4 w-full h-full flex justify-between items-center '>
        <div className='text-gray-300 font-semibold'>
          {elem.name}
        </div>
        <button onClick={() => deleteHandler(elem.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default SelectedCategories;
