import axios from 'axios'


const api = axios.create({
  baseURL: process.env.REACT_APP_URL_CARTOLA,
});

const get = (route) => {
  return api.get(route);
}

export async function Clubes() {
  try {
     return get('/clubes').then(response => {
       return response.data;
     });
  } catch (e) {
      ErrorHandler(e);
  }
}


export async function Atletas() {
  try {
     return get('/atletas/mercado').then(response => {
       return response.data;
     });
  } catch (e) {
      ErrorHandler(e);
  }
}



