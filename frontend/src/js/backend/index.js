import axios from 'axios'

const freeleapsAxios = axios.create({
  baseURL: ''
});

export {freeleapsAxios}