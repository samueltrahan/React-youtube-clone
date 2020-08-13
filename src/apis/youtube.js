import axios from 'axios'
const KEY = 'AIzaSyB6SQk5JhQ-n5iwZ2gJE4tOT5d9O86UDGM'



export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})