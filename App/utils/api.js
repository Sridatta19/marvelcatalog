
import md5 from 'md5'
import {API_KEY, PRIVATE_KEY} from '../config'

export function getCharacterBio(name){
  name = name.toLowerCase().trim();
  let ts = Date.now();
  let hash = md5(ts + PRIVATE_KEY + API_KEY);
  let url = `http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=${name}&ts=${ts}&hash=${hash}&apikey=${API_KEY}&limit=1`
  return fetch(url).then(res => res.json())
}

export function getEventInfo(eventId){
  let ts = Date.now();
  let hash = md5(ts + PRIVATE_KEY + API_KEY);
  let url = `http://gateway.marvel.com:80/v1/public/events/${eventId}?ts=${ts}&hash=${hash}&apikey=${API_KEY}`
  return fetch(url).then(res => res.json())
}

export function getSeriesInfo(seriesId){
  let ts = Date.now();
  let hash = md5(ts + PRIVATE_KEY + API_KEY);
  let url = `http://gateway.marvel.com:80/v1/public/series/${seriesId}?ts=${ts}&hash=${hash}&apikey=${API_KEY}`
  return fetch(url).then(res => res.json())
}

export function getStoryInfo(storyId){
  let ts = Date.now();
  let hash = md5(ts + PRIVATE_KEY + API_KEY);
  let url = `http://gateway.marvel.com:80/v1/public/stories/${storyId}?ts=${ts}&hash=${hash}&apikey=${API_KEY}`
  return fetch(url).then(res => res.json())
}
