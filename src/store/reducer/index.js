import { FETCH_USERS, FILTER_USERS_BY_FIELD, CHANGE_USER_INFO } from "../actions";

const initialState = {
  users: [],
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }
    case FILTER_USERS_BY_FIELD:
      return {
        ...state,
        users: [...state.users.sort((a, b) => {
          return a[action.userFieldName1][action.userFieldName2]
            .localeCompare(b[action.userFieldName1][action.userFieldName2])
        })]
      }
    case CHANGE_USER_INFO:
      return {
        ...state,
        users: state.users.map(user => {
          if (action.userFieldName2) {
            return {
              ...user,
              [action.userFieldName]: {
                [action.userFieldName2]: action.inputValue
              }
            }
          }
          return {
            ...user,
            [action.userFieldName]: action.inputValue
          }
        })
      }
    default:
      return state;
  }
}