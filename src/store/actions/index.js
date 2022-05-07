import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FILTER_USERS_BY_FIELD = 'FILTER_USERS_BY_FIELD';
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';

export const fetchUsers = () => async dispatch => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  console.log(response.data);
  dispatch({ type: FETCH_USERS, payload: response.data })
}

export const filterUsersByField = (userFieldName1, userFieldName2) => ({
  type: FILTER_USERS_BY_FIELD,
  userFieldName1,
  userFieldName2
})

export const changeUserInfo = (userFieldName, userFieldName2, inputValue) => ({
  type: CHANGE_USER_INFO,
  userFieldName,
  userFieldName2,
  inputValue
})