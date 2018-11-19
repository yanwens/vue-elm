
import axios from 'axios';

export default function ajax (url, data={}, method='GET') {

  return new Promise((resolve, reject)=>{
    let queryString = '';
    let promise ;
    if (method === 'GET'){

      if (data){
        for (let key in data) {
          queryString += `${key}=${data[key]}&`
        }
        queryString = `?${queryString}`
        queryString = queryString.substr(0,queryString.length-1)
      }
      promise = axios.get(url+queryString);
    }else {
      promise = axios.post(url,queryString,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }});
    }
    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  })

}
