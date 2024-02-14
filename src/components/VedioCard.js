import React from 'react'

const VedioCard = ({props}) => {
  const {statistics, snippet}=props;
  const givenTimestamp = new Date(snippet.publishedAt).getTime();
  const currentTimestamp = new Date().getTime();
  const timeDifferenceMs=currentTimestamp-givenTimestamp;
  const hours = Math.floor(timeDifferenceMs / (1000 * 60 * 60)) % 24;
  return (
    <div className='mt-3 w-64 rounded-lg'>
      <div>
      <img  className="w-72 h-64 rounded-sm" src={snippet.thumbnails.high.url} alt="thumbnail" />
      </div>
       
      <div>
        <img src="" alt="" />
        <div><h2>{snippet.title}</h2>
        <p className='font-bold'>{snippet.channelTitle}</p>
        <p className='grey'>{hours}hr ago  <span>{statistics.viewCount} views</span></p>
        </div>

        
      </div>
    </div>
  )
}

export default VedioCard