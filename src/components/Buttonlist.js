import React, { useRef } from 'react'
import ButtonItem from './ButtonItem';

const Buttonlist = () => {
  const buttonItem=['new Video', 'Comedy', 'Music','Movies','Game','Bollywood','Bigboss','Cricket','Cooking','Education','Engineering','Business', ];

  return (
    <div  className='flex'>
      {
        buttonItem.map((item, index)=>(
          <ButtonItem key={index} name={item} />
        ))
      }

      
    </div>
  )
}

export default Buttonlist;