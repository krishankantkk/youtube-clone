import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../utils/chatSlice';
import { RandomNameGenerate, makeRandomMessage } from '../utils/Helper';
const LiveChats = () => {
  const [liveMessage, setLiveMessage]=useState("");
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(themeFromStore ? "bg-white" : "bg-black");

const dispatch=useDispatch();
const Chatmessages=useSelector((store)=>store.chat.messages);

useEffect(()=>{
const interval=setInterval(()=>{
  dispatch(addMessages({
    name:RandomNameGenerate(),
    text:makeRandomMessage(26)
  }))
},2000)
return ()=>clearInterval(interval);
},[]);




  useEffect(() => {
    if (themeFromStore) {
      setThemeState("bg-white");
    } else {
      setThemeState("bg-black");
    }
  }, [themeFromStore]);

  return (
    <div >
       <div className={`w-full h-[470px] border overflow-y-scroll flex flex-col-reverse rounded-lg ${theme}`}>  {
            
            Chatmessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} text={c.text} />
            ))
          }</div>
     <form className='w-full p-2 ml-2 border-black'
     onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessages({
          name: "krishan kant",
          text: liveMessage,
        })
      );
      setLiveMessage("");
     }}
     
     >
      <input 
      className='px-2 w-96 h-10 border-1 border border-black'
      placeholder='type your Message'
      value={liveMessage}
      onChange={(e)=>{
        setLiveMessage(e.target.value);
      }}
      />

   <button className='px-2 mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>send</button>
     </form>
   
     
    </div>
  );
};

export default LiveChats;
