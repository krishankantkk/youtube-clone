import React, { useRef } from 'react'
import ButtonItem from './ButtonItem';

const Buttonlist = () => {
  const buttonItem=['all', 'comedy', 'music','movies','kapil sharma','bigboss'];

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