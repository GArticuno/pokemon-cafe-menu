import Constants from 'expo-constants';
import axios from 'axios';

export const api = axios.create({
  baseURL:'https://parseapi.back4app.com/classes/',
  headers: {
    'X-Parse-Application-Id': Constants?.expoConfig?.extra?.applicationId ?? '', // This is your app's application id
    'X-Parse-REST-API-Key': Constants?.expoConfig?.extra?.restApiKey ?? '', // This is your app's REST API key
  }
})