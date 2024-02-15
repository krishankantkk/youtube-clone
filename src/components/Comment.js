import React from 'react'

const Comment = ({comment}) => {
  const {name, text}=comment
  return (
    <div className='my-3 bg-gray-400 rounded'>
         <div className="flex">
      <img
        className="h-8 w-8 "
        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
        alt=""
      />
      <div className="flex flex-col">
      <h2 className="font-bold ">{name}</h2>
      <p>{text}</p>
      </div>
      
    </div>
      
    </div>
  )
}

export default Comment
