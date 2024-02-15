const API_KEY = process.env.REACT_APP_YOUTUBE_API

export const YOUTUBE_QUERY_SEARCH_API=' https://clients1.google.com/complete/search?client=firefox&ds=yt&q='

export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY