import React from 'react';
import { useDispatch } from 'react-redux';
import {setSearchKey} from '../utils/searchSelectedSlice';
const ButtonItem = ({ name }) => {

  
  const dispatch=useDispatch();

  const handlesSearch=()=>{
    dispatch(setSearchKey(name));
  }
  return (
    <div className='mt-3 px-2'>
      <button onClick={()=>handlesSearch(name)} className="bg-black text-white hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded">
        {name}
      </button>
    </div>
  );
}

export default ButtonItem;
