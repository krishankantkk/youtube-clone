import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appslice';

const Header = () => {
  const dispatch=useDispatch();
const handletogglemenu=()=>{
  
  dispatch(toggleMenu());

}
  return (
    <div className='flex justify-between mt-2 mx-4 shadow-lg '>
        <div className='flex '>
            <img className='w-8 h-8 cursor-pointer' onClick={()=>handletogglemenu()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="hambericon" />
            <img className='w-8 h-9 mx-2 ' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png" alt="youtube icon" />

        </div>
        <div>
            <input type="text" className='border rounded-l-full'/>
            <button className='border rounded-r-full bg-gray-100 w-16'>search</button>

        </div>
        <div>
            <img className="w-8 h-8 mr-4" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="user-image" />
        </div>

      
    </div>
  )
}

export default Header
