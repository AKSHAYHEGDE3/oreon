import Axios from 'axios'


const BASE_URL="https://oreon-server3.herokuapp.com"

export const publicRequest= Axios.create({
 baseURL: BASE_URL
})
// window.axios.defaults.headers.common['x-auth-token'] = 'Bearer ' + localStorage.getItem('token')

export const userRequest= Axios.create({
    baseURL: BASE_URL,
   })

   userRequest.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.token = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );