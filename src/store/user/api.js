import axios from 'axios';
import { API_URL } from '../../utils/constant';

export const login = credentials => 
  axios({
    method: 'POST',
    url: `https://reqres.in/api/login`,
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(credentials),
  });
