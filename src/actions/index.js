import axios from 'axios';

const API_KEY='a0364e78f6a779d0185bc2825ee1b7fb';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY_CODE_INDONESIA='id';
const COUNTRY_CODE_AMERICA='us';
const COUNTRY_CODE_CANADA='ca';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // put together correct url
  // q={city name},{country code}
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE_INDONESIA}`; 

  // Could use jQuery to make AJAX requests but that is huge!
  // so we'll install axios instead.

  const request = axios.get(url); // returns a PROMISE

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};