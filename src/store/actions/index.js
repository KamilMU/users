import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async dispatch => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  console.log(response.data);
  dispatch({ type: FETCH_USERS, payload: response.data })
}