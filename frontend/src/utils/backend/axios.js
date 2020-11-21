import axios from 'axios'

const backendAxios = axios.create({
  baseURL: '',
});

export {backendAxios}