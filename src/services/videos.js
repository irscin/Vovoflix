import axios from 'axios'
const baseURL = `https://www.googleapis.com/youtube/v3/videos?id=`
const keyURL = `&key=${process.env.REACT_APP_YOUTUBE_KEY}`
const paramURL = `&fields=items(id,snippet)&part=snippet`

const get = (youtubeID) => {
    return axios.get(baseURL+youtubeID+keyURL+paramURL).then(res=>res.data)
}

export default { 
    get: get,
  }