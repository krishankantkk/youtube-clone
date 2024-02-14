import React from 'react';

const ButtonItem = ({ name }) => {
  
  return (
    <div className='mt-3 px-2'>
      <button className="bg-black text-white hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded">
        {name}
      </button>
    </div>
  );
}

export default ButtonItem;
