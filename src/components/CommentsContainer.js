import React from 'react';
import Comment from './Comment'; 
const commentsData = [
  {
    name: "John Doe",
    text: "This is the first comment.",
    replies: [
      {
        name: "Alice",
        text: "I agree with John.",
        replies: [
          {
            name: "Bob",
            text: "Me too!",
            replies: [],
          },
        ],
      },
      {
        name: "Charlie",
        text: "I have a different opinion.",
        replies: [
          {
            name: "David",
            text: "What's your opinion?",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Jane Smith",
    text: "Nice post!",
    replies: [],
  },
  {
    name: "Eve",
    text: "Interesting discussion!",
    replies: [
      {
        name: "Frank",
        text: "Indeed!",
        replies: [],
      },
    ],
  },
];
 
const CommetsList=({comments})=>{
  return comments.map((comment, index)=>(
    <div key={index}>
      <Comment  comment={comment}/>
      <div className='pl-5 border border-l-black ml-5'>
        <CommetsList comments={comment.replies}/>

      </div>
    </div>
  ))
}

const CommentsContainer = () => {
  return (
   <div className='m-5 p-2'>
   <h1 className='text-2xl font-bold'>Comment:
   </h1>
   <CommetsList comments={commentsData}/>
   </div>
  )
};

export default CommentsContainer;


