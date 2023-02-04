import axios from 'axios';

export const api = axios.create({
  baseURL:'https://parseapi.back4app.com/classes/',
  headers: {
    'X-Parse-Application-Id': process.env.APPPLICATION_ID, // This is your app's application id
    'X-Parse-REST-API-Key': process.env.REST_API_KEY, // This is your app's REST API key
  }  
})